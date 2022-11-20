import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Empleados';

  empleados:Empleado[]=[
    new Empleado("Erika", "Hernandez","CEO",100000),
    new Empleado("Mariana", "Garcia","Administrativo",2000),
    new Empleado("Fátima", "Patrón","Jefa sección",5000),
    new Empleado("René", "Gutierrez","Director",35000),
  ];

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  agregarEmpleado(){
    let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

    this.empleados.push(miEmpleado);
  }
}
