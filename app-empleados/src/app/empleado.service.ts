import { Injectable } from "@angular/core";
import { DataServices } from "./data.services";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService {
  constructor(private servicioVentanaEm: ServicioEmpleadosService, private dataService: DataServices) {
  }

  setEmpleados(misEmpleados: Empleado[]) {
    this.empleados = misEmpleados;
  }

  obtenerEmpleados() {
    return this.dataService.cargarEmpleados();
  }

  empleados: Empleado[] = [];


  /* empleados:Empleado[]=[
     new Empleado("Erika", "Hernandez","CEO",100000),
     new Empleado("Mariana", "Garcia","Administrativo",2000),
     new Empleado("Fátima", "Patrón","Jefa sección",5000),
     new Empleado("René", "Gutierrez","Director",35000),
   ];*/

  agregarEmpleadoServicio(empleado: Empleado) {
    this.servicioVentanaEm.muestraMensaje("Persona que se va a agregar: " + "\n" +
      empleado.nombre + "\n" + "Salario: " + empleado.salario);
    this.empleados.push(empleado);

    this.dataService.guardarEmpleado(this.empleados);

  }

  encontrarEmpleado(indice: number) {

    let empleado: Empleado = this.empleados[indice];

    return empleado;

  }

  actualizarEmpleado(indice: number, empleado: Empleado) {

    let empleadoModificado = this.empleados[indice];

    empleadoModificado.nombre = empleado.nombre;
    empleadoModificado.apellido = empleado.apellido;
    empleadoModificado.cargo = empleado.cargo;
    empleadoModificado.salario = empleado.salario;

    this.dataService.actualizarEmpleado(indice, empleado);
  }

  eliminarEmpleado(indice: number) {

    this.empleados.splice(indice, 1);

    this.dataService.eliminarEmpleado(indice);

    if (this, this.empleados != null) this.dataService.guardarEmpleado(this.empleados);
    
  }

}