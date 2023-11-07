import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CRUDService } from '../crud.service';

@Component({
  selector: 'app-rental-agreement',
  templateUrl: './rental-agreement.component.html',
  styleUrls: ['./rental-agreement.component.css']
})
export class RentalAgreementComponent implements OnInit {
  storedUser: any[] = []; // Initialize as an empty array to hold user data

  constructor(private navigationService: CRUDService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Retrieve the data from local storage
    const storedUserData = localStorage.getItem('access_token');
  
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      console.log('Retrieved data from local storage:', userData);
      // Assign the userData to the storedUser array
      this.storedUser.push(userData); // Use push to add the object to the array
      console.log('storedUser:', this.storedUser);
    } else {
      console.log('No data found in local storage');
    }

  
   

  }



}
