import { Component } from '@angular/core';
import { CarDetails } from 'src/Model/model';
import { CRUDService } from '../crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-car-details-input',
  templateUrl: './car-details-input.component.html',
  styleUrls: ['./car-details-input.component.css']
})
export class CarDetailsInputComponent {

  CDetail: CarDetails = {
    vehicleId: 0,
    maker: "",
    model: "",
    rentalPrice: "",
    availabilityStatus: "true",
    carImage: "",
  }

  ngOnInit(): void {
    
    this.route.queryParams.subscribe(params => {
      if (params['Jcar']) {
        this.CDetail = JSON.parse(params['Jcar']);
      }
    });
  }

  CDetails: CarDetails[] = [];
  constructor(private navigationService: CRUDService, private router: Router, private route: ActivatedRoute) { }

  AddCar = new FormGroup({
    vehicleId: new FormControl(""),
    maker: new FormControl("", [Validators.required, Validators.maxLength(255)]), // Required and max length of 255 characters
    model: new FormControl("", [Validators.required, Validators.maxLength(255)]), // Required and max length of 255 characters
    rentalPrice: new FormControl("", [Validators.required]), 
    availabilitystatus: new FormControl(""), // Required
    carImage: new FormControl("", [Validators.required]), 

  });

  onSubmit() {
    const newCar: CarDetails = {
      vehicleId: this.CDetail.vehicleId,
      maker: this.AddCar.value.maker ?? "", // Use an empty string as a fallback
      model: this.AddCar.value.model ?? "", // Use an empty string as a fallback
      rentalPrice: this.AddCar.value.rentalPrice ?? "", // Use an empty string as a fallback
      availabilityStatus: "true", // Use an empty string as a fallback
      carImage: this.AddCar.value.carImage ?? "", // Use an empty string as a fallback
    };
    
    
    if (this.CDetail.vehicleId == 0) {
      this.navigationService.AddCarDetails(
        [
          this.AddCar.value.maker,
          
          this.AddCar.value.model,
          this.AddCar.value.rentalPrice,
          this.AddCar.value.availabilitystatus='true',
          this.AddCar.value.carImage,

        ]
      ).subscribe(res => {
        console.log(res)
      }
      );
    }
    else {
      this.updateCar(newCar);
      this.router.navigate(['/cardetails']);
    }


  }

  updateCar(car: CarDetails) {
    this.navigationService.updateCar(car).subscribe(res => {
      this.navigationService.getAllCars();
    });
  }

}
