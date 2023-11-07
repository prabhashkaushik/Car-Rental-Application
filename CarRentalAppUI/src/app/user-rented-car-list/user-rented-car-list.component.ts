import { Component } from '@angular/core';
import { AllRentalCarDetailsSave, Login } from 'src/Model/model';
import { CRUDService } from '../crud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-rented-car-list',
  templateUrl: './user-rented-car-list.component.html',
  styleUrls: ['./user-rented-car-list.component.css']
})
export class UserRentedCarListComponent {

  constructor(private navigationService: CRUDService, private router: Router, private route: ActivatedRoute) { }

  AllRentalCarDetail: AllRentalCarDetailsSave = {
    rentalAgreementId
:0,
    vehicleId:0,
    maker:'',
    model:'',
    rentalPrice:'',
   
    carImage:'',
    userId:0,
    name:'',
    email:'',
   
    phoneNumber:'',
    address:'',
    startRentalDuration:0,
    endRentalDuration:0,
    isReturned:'',
    requestForReturn:'',
  }

  ngOnInit(): void {
    this.getAllAgreement();
  }

  storedUser: Login[] = [];
  AllRentalCarDetails: AllRentalCarDetailsSave[] = [];
  
  userDetailsAllRentAgreement: AllRentalCarDetailsSave[] = [];
  

  getAllAgreement() {
    // Retrieve user data from local storage
    const storedUserData = localStorage.getItem('userData');
    
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      console.log('Retrieved data from local storage:', userData);
      const userId: number = userData.userId;
      console.log('userId:', userId);
      
      // Fetch all rental car agreements
      this.navigationService.getAllAgreement().subscribe(
        res => {
          this.AllRentalCarDetails = res;
          console.log('All rental car details:', this.AllRentalCarDetails);
          
          // Filter rental car details by userId
          this.userDetailsAllRentAgreement = this.AllRentalCarDetails.filter(car => car.userId === userId);
          console.log('User details for rental agreements:', this.userDetailsAllRentAgreement);
        },
        error => {
          console.error('Error fetching rental car agreements:', error);
        }
      );
    } else {
      console.log('No data found in local storage');
    }
  }

  updateRequestForReturn(carDetail: any) {
    
    
    this.navigationService.onUpdateRequestForReturn(carDetail).subscribe(
      (response) => {
        // Handle the successful response here, if needed
        console.log('Request for return updated successfully:', response);
        this.getAllAgreement();
      },
      (error) => {
        // Handle any errors that occur during the HTTP request
        console.error('Error updating request for return:', error);
      }
    );
   
  }
  

}
