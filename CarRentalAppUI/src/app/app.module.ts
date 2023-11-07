import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CRUDService } from './crud.service';

import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';

import { LoginComponent } from './login/login.component';
import { AuthzGuard } from './authzguard.guard';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarDetailsInputComponent } from './car-details-input/car-details-input.component';
import { RentalAgreementComponent } from './rental-agreement/rental-agreement.component';

import { UserRentedCarListComponent } from './user-rented-car-list/user-rented-car-list.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminCRUDOprationComponent } from './admin-crudopration/admin-crudopration.component';
import { AgreementEditComponent } from './agreement-edit/agreement-edit.component';
import { AllAgreemenGenerateComponent } from './all-agreemen-generate/all-agreemen-generate.component';

const routes: Routes = [

  { path: 'header', component: HeaderComponent  },
  { path: '', component:  LoginComponent  },
  { path: 'adminlogin', component:  AdminLoginComponent  },
  { path: 'cardetailsinput', component:  CarDetailsInputComponent ,canActivate:[AuthzGuard] },
  { path: 'cardetails', component:  CarDetailsComponent, canActivate:[AuthzGuard]  },
  { path: 'rentalagreement', component:  RentalAgreementComponent ,canActivate:[AuthzGuard] },
  { path: 'userrentedcarlist', component:  UserRentedCarListComponent ,canActivate:[AuthzGuard]},
  { path: '123/admindashboard', component:  AdminDashboardComponent },
  { path: 'adminheader', component:   AdminHeaderComponent },
  { path: 'agreementedit', component:   AgreementEditComponent,canActivate:[AuthzGuard] },
  { path: 'allagreemengenerate', component:  AllAgreemenGenerateComponent ,canActivate:[AuthzGuard]},
  { path: 'admincrudopration', component:  AdminCRUDOprationComponent ,canActivate:[AuthzGuard]},
 
  

];


@NgModule({
  declarations: [
    AppComponent,
    
    HeaderComponent,
  
    LoginComponent,
    CarDetailsComponent,
    CarDetailsInputComponent,
    RentalAgreementComponent,
    UserRentedCarListComponent,
    AdminLoginComponent,
    AdminComponent,
    AdminDashboardComponent,
    AdminHeaderComponent,
    AdminCRUDOprationComponent,
    AgreementEditComponent,
    AllAgreemenGenerateComponent
    

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    [RouterModule.forRoot(routes)],
    [RouterModule],
    
  ],
  providers: [CRUDService],
  bootstrap: [AppComponent]
})
export class AppModule { }
