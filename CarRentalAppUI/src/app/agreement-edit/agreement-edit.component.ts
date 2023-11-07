import { Component } from '@angular/core';
import { CRUDService } from '../crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AllRentalCarDetailsSave } from 'src/Model/model';

@Component({
  selector: 'app-agreement-edit',
  templateUrl: './agreement-edit.component.html',
  styleUrls: ['./agreement-edit.component.css']
})
export class AgreementEditComponent {


  constructor(private navigationService: CRUDService, private router: Router, private route: ActivatedRoute) { }

  AllRentalCarDetail: AllRentalCarDetailsSave = {
    rentalAgreementId: 0,
    vehicleId: 0,
    maker: '',
    model: '',
    rentalPrice: '',
    carImage: '',
    userId: 0,
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    startRentalDuration: 0,
    endRentalDuration: 0,
    isReturned: '',
    requestForReturn: '',
  }


  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      if (params['JAcar']) {
        this.AllRentalCarDetail = JSON.parse(params['JAcar']);
      }
    });
  }

  AddCar = new FormGroup({
    vehicleId: new FormControl(),
    maker: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    model: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    rentalPrice: new FormControl('', [Validators.required]),
    carImage: new FormControl('', [Validators.required]),
    userId: new FormControl(),
    name: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required, Validators.maxLength(255)]),
  startRentalDuration : new FormControl(),
  endRentalDuration : new FormControl(),
  // isReturned :new FormControl(this.AllRentalCarDetail.isReturned),
  // requestForReturn : new FormControl(this.AllRentalCarDetail.re),
});


  AgreemeentDetails: AllRentalCarDetailsSave[] = [];

  

  onSubmit() {

    const updatedCarAgreement: AllRentalCarDetailsSave = {
       // Provide a default value for rentalAgreementId
       rentalAgreementId: this.AllRentalCarDetail.rentalAgreementId,
      vehicleId: this.AllRentalCarDetail.vehicleId,
      maker: this.AddCar.value.maker ?? "",
      model: this.AddCar.value.model ?? "",
      rentalPrice: this.AddCar.value.rentalPrice ?? "",
      userId: this.AllRentalCarDetail.userId ,
      name: this.AddCar.value.name ?? "",
      email: this.AddCar.value.email ?? "",
      phoneNumber: this.AddCar.value.phoneNumber ?? "",
      address: this.AddCar.value.address ?? "",
      startRentalDuration: this.AddCar.value.startRentalDuration || 0,
      endRentalDuration: this.AddCar.value.endRentalDuration || 0,
      isReturned: this.AllRentalCarDetail.isReturned ?? "",
      requestForReturn:this.AllRentalCarDetail.requestForReturn,
      carImage: this.AddCar.value.carImage ?? ""
    };
    
    if (this.AllRentalCarDetail.rentalAgreementId>0) {


      this.updateCarAgreement(updatedCarAgreement);
      this.router.navigate(['/allagreementgenerate']);
    }


  }

  updateCarAgreement(updatedCarAgreement: AllRentalCarDetailsSave) {
    this.navigationService.updateCarAgreement(updatedCarAgreement).subscribe(res => {
      this.navigationService.getAllCars();
    });
  }
  
}
