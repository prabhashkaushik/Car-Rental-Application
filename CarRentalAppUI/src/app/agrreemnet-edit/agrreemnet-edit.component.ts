import { Component } from '@angular/core';
import { CRUDService } from '../crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AllRentalCarDetailsSave } from 'src/Model/model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-agrreemnet-edit',
  templateUrl: './agrreemnet-edit.component.html',
  styleUrls: ['./agrreemnet-edit.component.css']
})
export class AgrreemnetEditComponent {

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



  rentalAgreementId = new FormControl(0);
  vehicleId = new FormControl(0);
  maker = new FormControl('');
  model = new FormControl('');
  rental = new FormControl('');
  carImage = new FormControl('');
  userId = new FormControl(0);
  name = new FormControl('');
  email = new FormControl('');
  phoneNumber = new FormControl('');
  address = new FormControl('');
  startRentalDuration = new FormControl(0);
  endRentalDuration = new FormControl(0);
  isReturned = new FormControl('');
  requestForReturn = new FormControl('');



  AgreemeentDetails: AllRentalCarDetailsSave[] = [];

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      if (params['JAcar']) {
        this.AgreemeentDetails = JSON.parse(params['JAcar']);
      }
    });
  }

  onSubmit() {
    if (this.AllRentalCarDetail.vehicleId>0) {


      this.updateCarAgreement(this.AllRentalCarDetail);
      this.router.navigate(['/allagreemengenerate']);
    }


  }

  updateCarAgreement(agreement: AllRentalCarDetailsSave) {
    this.navigationService.updateCarAgreement(agreement).subscribe(res => {
      this.navigationService.getAllCars();
    });
  }

}
