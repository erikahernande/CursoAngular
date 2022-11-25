import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de Usuarios';
  mensaje="";
  registrado=false;
  nombre:string="";
  apellido:string="";
  cargo:string="";
  //entradas: object[];
  //entradas:Array<{titulo:string}>;
  entradas: any;

  constructor(){

    this.entradas=[
      
      {titulo: "Python cada dia mas presente"},
      {titulo: "Java presente desde hace más de 20 años"},
      {titulo: "JS cada vez más funcional"},
      {titulo: "Kotlin potencia para tus apps"},
      {titulo: "¿Dondé quedo pascal?"},
    ]
  }

  registrarUsuario(){
    this.registrado=true;
    this.mensaje= "Usuario registrado con exito"
  }
}
