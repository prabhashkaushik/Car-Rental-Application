import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn(): boolean {
    const accessToken = localStorage.getItem('access_token');
    return !!accessToken; // Returns true if the access token exists, otherwise false
  }

  logout(){
    localStorage.removeItem('access_token');
    localStorage.removeItem('userData');
  }
}
