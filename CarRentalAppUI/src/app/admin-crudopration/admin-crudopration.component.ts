import { Component } from '@angular/core';
import { CarDetails } from 'src/Model/model';
import { CRUDService } from '../crud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-crudopration',
  templateUrl: './admin-crudopration.component.html',
  styleUrls: ['./admin-crudopration.component.css']
})
export class AdminCRUDOprationComponent {

  constructor(private navigationService: CRUDService, private router: Router, private route: ActivatedRoute){}


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

  editCar(addcar: CarDetails) {
    this.router.navigate(['/cardetailsinput'], { queryParams: { Jcar: JSON.stringify(addcar) } });
    
  }
  JSON: JSON = JSON;

  getAllCars() {
    this.navigationService.getAllCars().subscribe(
      res => {
        this.CDetails = res;
        console.log(res);
      }
    );
  }

  ngOnInit(): void {
    this.getAllCars();
  }

  DeleteCarDetails(DeleteCaeDetailId: number){
    this.navigationService.DeleteCarDetails(DeleteCaeDetailId).subscribe(res=>{
      this. getAllCars()
  
    })
  }

}
