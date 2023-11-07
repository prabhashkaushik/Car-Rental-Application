import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CRUDService } from '../crud.service';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from 'src/Model/model';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  
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


