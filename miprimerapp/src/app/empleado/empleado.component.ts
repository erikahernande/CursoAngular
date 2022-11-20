import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template:"<p>Aquí iría un empleado</p>",
  styleUrls: ['./empleado.component.css']
  //styles:["p{background-color:red;}"]
})
export class EmpleadoComponent implements OnInit {

  nombre = "Juan";
  apellido = "Díaz";
  edad = 18;
  empresa = "Cbtis 72";
  

  /*getEdad(){
    return this.edad; 
  }*/

  habilitacionCuadro=false;

  usuRegistrado=false;

  textoRegistro="No hay nadie registrado";

  getRegistroUsuario(){
    this.usuRegistrado=false;
  }

  setusuarioRegistrado(event:Event){
    //alert("El usuario se acaba de registrar");
    //this.textoRegistro="El usuario se acaba de registrar"
    //alert(event.target)
    if ((<HTMLInputElement>event.target).value=="si") {
      
    this.textoRegistro="El usuario se acaba de registrar"
    }else{
      this.textoRegistro="No hay nadie registrado"
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
