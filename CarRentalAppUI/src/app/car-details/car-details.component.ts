import { Component } from '@angular/core';
import { CarDetails, Login, RentalCarDetailsSave } from 'src/Model/model';
import { CRUDService } from '../crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent {
  showRentalAgreement = false;
  CDetail: CarDetails = {
    vehicleId: 0,
    carImage: "",
    maker: "",
    model: "",
    rentalPrice: '',
    availabilityStatus: "true",
  }
  CDetails: CarDetails[] = [];
  storedUser: Login[] = []; // Initialize as an empty array to hold user data
  rentagreement: CarDetails[] = [];
  rentagreementSave: RentalCarDetailsSave[] = [];

  RentCarDetailwithId(vehicleId: number) {
    //taking the data from local storage
    const storedUserData = localStorage.getItem('userData');

    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      console.log('Retrieved data from local storage:', userData);
      // Assign the userData to the storedUser array
      this.storedUser.push(userData); // Use push to add the object to the array
      console.log('storedUser:', this.storedUser);
    } else {
      console.log('No data found in local storage');
    }


    //filtering the CDetailsarray data
    this.showRentalAgreement = true;
    this.rentagreement = this.CDetails.filter(car => car.vehicleId === vehicleId);


  }

  backToCarList(){
  this.showRentalAgreement = false;
}

  RCarDetailsSave: RentalCarDetailsSave = {
    logindata: this.storedUser,
    startDate: 0,
    endDate: 0,
    carDetailsdata: [this.CDetail]
  }





  searchForm = new FormGroup({
    searchTerm: new FormControl(''),
  });

  currentDate: number;
  constructor(private navigationService: CRUDService, private router: Router, private route: ActivatedRoute) {
    const date = new Date();
    this.currentDate = date.getDate();
  }

  currentUserData: any;
  ngOnInit(): void {
    this.navigationService.currentUser.subscribe(data => {
      this.currentUserData = data; // Store the user data in your component property
      console.log(this.currentUserData)
      if (this.currentUserData != null) {

        localStorage.setItem('userData', JSON.stringify(this.currentUserData));
      }
    });


    this.getAllCars();

    this.searchForm.get('searchTerm')?.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe((searchTerm: string | null) => { // Add type casting here
        this.filterCars(searchTerm as string); // Type cast searchTerm to string
      });




    // Retrieve the data from local storage




  }

  getAllCars() {
    this.navigationService.AvailableCarsshow().subscribe(
      res => {
        this.CDetails = res;
        console.log(res);
      }
    );

  }

 

  filterCars(searchTerm: string) {
    if (!searchTerm) {
      this.getAllCars();
    } else {
      this.CDetails = this.CDetails.filter((car: CarDetails) => {
        return car.maker.toLowerCase().includes(searchTerm.toLowerCase()) ||
          car.model.toLowerCase().includes(searchTerm.toLowerCase());
      });
    }
  }

  SaveRentalAgreement = new FormGroup({
    logindata: new FormControl(this.storedUser),
    startDate: new FormControl(""),
    endDate: new FormControl(['', [Validators.required, Validators.max(31), Validators.min(1)]]),

  });

  onSaveRentalAgreement() {

    const endDateValue = this.SaveRentalAgreement.value.endDate;
    if (endDateValue && +endDateValue <= this.currentDate) {
      alert("You can't enter a previous date");
      this.router.navigate(['/cardetails']);
      return; // Return early if there's an error
    }

    else {
      this.rentagreement[0].availabilityStatus = 'false';


      this.navigationService.UpdateavailabilityStatusAfterGeneratingRentalAgreement(this.rentagreement[0]).subscribe(
        (response) => {
          // Handle the successful response here, if needed
          console.log('Availability status updated successfully:', response);
        },
        (error) => {
          // Handle any errors that occur during the HTTP request
          console.error('Error updating availability status:', error);
        }
      );


      this.navigationService.onSaveRentalAgreement(

        [
          this.SaveRentalAgreement.value.logindata,
          this.currentDate,
          this.SaveRentalAgreement.value.endDate,
          this.rentagreement,
        ]
      ).subscribe(res => {
        console.log(res)
      }
      );

    }
  }


}
