import { Component, ElementRef, VERSION, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})



export class LoginComponent {
  isActive: boolean = false;

  IsActive(){
    this.isActive=!this.isActive;
  }


}


