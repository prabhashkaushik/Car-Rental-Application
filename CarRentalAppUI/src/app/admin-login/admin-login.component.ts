import { Component } from '@angular/core';
import { CRUDService } from '../crud.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  constructor(private navigationService: CRUDService){}
  ngOnInit():void{
 
  }
  loginForm=new FormGroup({
   email :new FormControl(""),
   pwd : new FormControl("")
  });
 isUserValid : boolean=false
  loginSubmited(){
   this.navigationService.loginUser([this.loginForm.value.email,this.loginForm.value.pwd]).subscribe(res=>{
     if(res=='Failure'){
       this.isUserValid=false;
       console.log("no")
       alert('Login Unuccessful')
     }
     else{
       this.isUserValid=true;
       console.log("yes")
       this.navigationService.setToken(res);
       
     }
 
   });
  }
 
  // setToken(token : string){
  //  localStorage.setItem("access_token",token);
  // }
 
  get Email():FormControl{
   return this.loginForm.get('email') as FormControl
  }
 
  get PWD():FormControl{
   return this.loginForm.get('pwd') as FormControl
  }

}
