import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})
export class EmpleadoHijoCComponent implements OnInit {

  @Input() empleadoDeLista:Empleado;
  @Input() indice:number;

  constructor() { }

  ngOnInit(): void {
  }

  empleados:Empleado[]=[
    new Empleado("Erika", "Hernandez","CEO",100000),
    new Empleado("Mariana", "Garcia","Administrativo",2000),
    new Empleado("Fátima", "Patrón","Jefa sección",5000),
    new Empleado("René", "Gutierrez","Director",35000),
  ];

  agregarEmpleado(empleado:Empleado){
   
    this.empleados.push(empleado);
  }

  arrayCaracteristicas = [''];

  agregarCaracteristica(nuevaCaracteristica: string) {
    this.arrayCaracteristicas.push(nuevaCaracteristica);
  }

}
