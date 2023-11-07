import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import { AllRentalCarDetailsSave, CarDetails, ProductDetails, RentalCarDetailsSave, addAdminProductTable } from 'src/Model/model';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {
  currentUser: BehaviorSubject<any> = new BehaviorSubject(null);
  baseurl = 'https://localhost:7256/api/';
  jwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient) { }

 



  removeToken() {
    localStorage.removeItem("access_token");
  }

  

  setToken(token: string) {
    localStorage.setItem("access_token", token);
    this.loadCurrentUser();
  }

  isLoggedin(): boolean {
    return localStorage.getItem("access_token") ? true : false;
  }

  
  loadCurrentUser() {
    const token = localStorage.getItem("access_token");
    const userInfo = token != null ? this.jwtHelperService.decodeToken(token) : null;
    
    const data = userInfo ? {
     userId: parseInt(userInfo.userId),
      name: userInfo.name,
      email: userInfo.email,
      phoneNumber: userInfo.phoneNumber,
      address: userInfo.address,

    } : null;
    
    this.currentUser.next(data);

  }











  AddCarDetails(car: Array<any>) {
    return this.http.post(
      this.baseurl + "CarDetails/AddCarDeatails",
      {

        maker: car[0],
        model: car[1],
        rentalPrice: car[2],
        availabilitystatus: car[3],
        carImage: car[4]

      });
  }

  getAllCars(): Observable<CarDetails[]> {

    return this.http.get<CarDetails[]>(this.baseurl + "CarDetails/ShowCarDetails");

  }



  loginUser(users: Array<any>) {
    return this.http.post(
      this.baseurl + "Users/LoginUser",
      {
        name: "abc",
        email: users[0],
        password: users[1],
        phoneNumber: "abc",
        address: "abc"
      },
      {
        responseType: 'text',
      }
    );

    

  }

  AdminloginUser(users: Array<any>) {
    return this.http.post(
      this.baseurl + "AdminLogins/AdminLoginUser",
      {
        name: "abc",
        email: users[0],
        password: users[1],
        phoneNumber: "abc",
        address: "abc"
      },
      {
        responseType: 'text',
      }
    );
  }

  RentCarDetailwithId(vehicleId: number) {
    return this.http.get( // Change to http.get
      this.baseurl + `CarDetails/RentCarDetailwithId/${vehicleId}`, // Use template literal for the URL
      {
        responseType: 'text',
      }
    );
  }



  onSaveRentalAgreement(SaveAgrrementDetails: Array<any>) {
    const rentalPriceValue = SaveAgrrementDetails[3][0].rentalPrice;
    const intrentalPriceValue = parseInt(rentalPriceValue, 10);
    const value2 = SaveAgrrementDetails[2];
    const intValue2: number = parseInt(value2, 10);

    const value1 = SaveAgrrementDetails[1];

    return this.http.post(
      this.baseurl + "RentalAgreemnetDatas/AddRentAgreementDeatails",
      {
        vehicleId:SaveAgrrementDetails[3][0].vehicleId,
        maker: SaveAgrrementDetails[3][0].maker,
        model: SaveAgrrementDetails[3][0].model,
        rentalPrice:(
          intrentalPriceValue* (intValue2 - value1+1)
        ).toString(),
        availabilityStatus: "false",
        carImage: SaveAgrrementDetails[3][0].carImage,
        userId: SaveAgrrementDetails[0][0].userId,
        name: SaveAgrrementDetails[0][0].name,
        email: SaveAgrrementDetails[0][0].email,
        password: "****",
        phoneNumber: SaveAgrrementDetails[0][0].phoneNumber,
        address: SaveAgrrementDetails[0][0].address,
        StartRentalDuration : SaveAgrrementDetails[1],
        EndRentalDuration:SaveAgrrementDetails[2],
        isReturned: 'false',
        requestForReturn: 'false'

      });
  }
  getAllAgreement(): Observable<AllRentalCarDetailsSave[]> {

    return this.http.get<AllRentalCarDetailsSave[]>(this.baseurl + "RentalAgreemnetDatas/getAllAgreement");

  }

  AvailableCarsshow() : Observable<CarDetails[]> {

    return this.http.get<CarDetails[]>(this.baseurl + "CarDetails/AvailableCarsshow");
  
}


  onUpdateRequestForReturn(carDetail:  AllRentalCarDetailsSave): Observable<AllRentalCarDetailsSave> {
    const rentalAgreementId=carDetail.rentalAgreementId;
    carDetail.requestForReturn="true"
    return this.http.put<AllRentalCarDetailsSave>(this.baseurl + `RentalAgreemnetDatas/UpdateRequest/${rentalAgreementId}`, carDetail);
  }
  changeAvailabilityStatus(rentAgreementDetails:  AllRentalCarDetailsSave): Observable<AllRentalCarDetailsSave> {
    const vehicleId=rentAgreementDetails.vehicleId;
    
    return this.http.put<AllRentalCarDetailsSave>(this.baseurl + `CarDetails/UpdateRequest/${vehicleId}`, rentAgreementDetails);
  }

  changeIsReturnStatus(rentAgreementDetails:  AllRentalCarDetailsSave): Observable<AllRentalCarDetailsSave> {

    const vehicleId=rentAgreementDetails.rentalAgreementId
    rentAgreementDetails.isReturned="true";
    ;
    
    return this.http.put<AllRentalCarDetailsSave>(this.baseurl + `RentalAgreemnetDatas/UpdateRequest/${vehicleId}`, rentAgreementDetails);
  }

  DeleteRentalAgreeement(rentalAgreementId: number): Observable<AllRentalCarDetailsSave> {

    return this.http.delete<AllRentalCarDetailsSave>(this.baseurl + 'RentalAgreemnetDatas/DeleteRentalAgreement/' + rentalAgreementId);

  }

  DeleteCarDetails(DeleteCarDetailId: number): Observable<CarDetails> {

    return this.http.delete<CarDetails>(this.baseurl + 'CarDetails/DeleteCarDetails/' + DeleteCarDetailId);

  }

  UpdateavailabilityStatusAfterGeneratingRentalAgreement(carDetail:  any): Observable<AllRentalCarDetailsSave> {
    const vehicleId=carDetail.vehicleId;
    
    return this.http.put<AllRentalCarDetailsSave>(this.baseurl + `CarDetails/UpdateRequest/${vehicleId}`, carDetail);
  }

  updateCar(carDetail: CarDetails): Observable<CarDetails> {
    const vehicleId=carDetail.vehicleId;
    return this.http.put<CarDetails>(this.baseurl + `CarDetails/UpdateRequest/${vehicleId}`, carDetail);
  }
  

  updateCarAgreement(agreement: AllRentalCarDetailsSave): Observable<AllRentalCarDetailsSave> {
    const rentalAgreementId=agreement.rentalAgreementId;
    return this.http.put<AllRentalCarDetailsSave>(this.baseurl + `RentalAgreemnetDatas/UpdateRequest/${rentalAgreementId}`, agreement);
  }
}

