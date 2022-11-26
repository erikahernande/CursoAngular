import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import { loginService } from './login/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private loginService:loginService) {
  }
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyC-lNnAw_Pxrkt2bewD9BJ5_HsAk2LUw3c",
      authDomain: "mis-clientes-43509.firebaseapp.com",
    })
  }

  estaLogueado(){
    return this.loginService.estaLogueado();
  }

  logout(){
    this.loginService.logout();
  }

}
