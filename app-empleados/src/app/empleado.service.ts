import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService{
  constructor(private servicioVentanaEm:ServicioEmpleadosService){
  }
    
  empleados:Empleado[]=[
    new Empleado("Erika", "Hernandez","CEO",100000),
    new Empleado("Mariana", "Garcia","Administrativo",2000),
    new Empleado("Fátima", "Patrón","Jefa sección",5000),
    new Empleado("René", "Gutierrez","Director",35000),
  ];

  agregarEmpleadoServicio(empleado:Empleado){
    this.servicioVentanaEm.muestraMensaje("Persona que se va a agregar: " + "\n" +
    empleado.nombre + "\n" + "Salario: " + empleado.salario);
    this.empleados.push(empleado);
  }

  encontrarEmpleado(indice:number){

    let empleado:Empleado=this.empleados[indice];

    return empleado;

  }

  actualizarEmpleado(indice:number, empleado:Empleado){

    let empleadoModificado=this.empleados[indice];

    empleadoModificado.nombre=empleado.nombre;
    empleadoModificado.apellido=empleado.apellido;
    empleadoModificado.cargo=empleado.cargo;
    empleadoModificado.salario=empleado.salario;
  }

  eliminarEmpleado(indice:number){

    this.empleados.splice(indice,1);
  }

}