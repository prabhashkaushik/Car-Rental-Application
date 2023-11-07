import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent {
  isLoggedIn(): boolean {
    const accessToken = localStorage.getItem('access_token');
    return !!accessToken; // Returns true if the access token exists, otherwise false
  }

  logout(){
    localStorage.removeItem('access_token');
}
}
