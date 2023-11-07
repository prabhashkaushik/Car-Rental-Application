import { Component } from '@angular/core';
import { CRUDService } from '../crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AllRentalCarDetailsSave, RentalCarDetailsSave } from 'src/Model/model';

@Component({
  selector: 'app-all-agreemen-generate',
  templateUrl: './all-agreemen-generate.component.html',
  styleUrls: ['./all-agreemen-generate.component.css']
})
export class AllAgreemenGenerateComponent {
  constructor(private navigationService: CRUDService, private router: Router, private route: ActivatedRoute) { }

  AllRentalCarDetail: AllRentalCarDetailsSave = {
    rentalAgreementId: 0,
    vehicleId: 0,
    maker: '',
    model: '',
    rentalPrice: '',
    // availabilityStatus: '',
    carImage: '',
    userId: 0,
    name: '',
    email: '',
    // password: '',
    phoneNumber: '',
    address: '',
    startRentalDuration: 0,
    endRentalDuration: 0,
    isReturned: '',
    requestForReturn: '',
  }


  ngOnInit(): void {
    this.getAllAgreement();

  }

  AllRentalCarDetails: AllRentalCarDetailsSave[] = [];
  getAllAgreement() {
    this.navigationService.getAllAgreement().subscribe(
      res => {
        this.AllRentalCarDetails = res;
        console.log(res);
      }
    );
  }
  isButtonClicked = false;
  changeAvailabilityStatus(rentAgreementDetails: any) {
    rentAgreementDetails.availabilityStatus = 'true'
    this.isButtonClicked = true;
    this.navigationService.changeAvailabilityStatus(rentAgreementDetails).subscribe(

      (response) => {
        // Handle the successful response here, if needed
        console.log('Request for return updated successfully:', response);
      },
      (error) => {
        // Handle any errors that occur during the HTTP request
        console.error('Error updating request for return:', error);
      }
    );

    this.navigationService.changeIsReturnStatus(rentAgreementDetails).subscribe(
      (response) => {
        // Handle the successful response here, if needed
        console.log('Request for return updated successfully:', response);
      },
      (error) => {
        // Handle any errors that occur during the HTTP request
        console.error('Error updating request for return:', error);
      }
    );


    // this.navigationService.DeleteRentalAgreeement(carDetail.rentalAgreementId).subscribe(
    //   (response) => {
    //     // Handle the successful response here, if needed
    //     console.log('Request for return updated successfully:', response);
    //   },
    //   (error) => {
    //     // Handle any errors that occur during the HTTP request
    //     console.error('Error updating request for return:', error);
    //   }
    //   );


  }

  editCar(addcar: AllRentalCarDetailsSave) {
    this.router.navigate(['/agreementedit'], { queryParams: { JAcar: JSON.stringify(addcar) } });

  }
  JSON: JSON = JSON;

  DeleteAgreement(rentAgreementDetails: any) {
  this.changeAvailabilityStatus(rentAgreementDetails)

    this.navigationService.DeleteRentalAgreeement(rentAgreementDetails.rentalAgreementId).subscribe(res => {
      this.getAllAgreement();

    })
  }





}

