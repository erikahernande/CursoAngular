import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleado.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-actualiza',
  templateUrl: './actualiza.component.html',
  styleUrls: ['./actualiza.component.css']
})
export class ActualizaComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private miServicio: ServicioEmpleadosService, private empleadosService: EmpleadosService) { }


  empleados: Empleado[] = [];

  accion: number;

  ngOnInit(): void {

    this.accion = parseInt(this.route.snapshot.queryParams['accion']);

    this.empleados = this.empleadosService.empleados;

    this.indice = this.route.snapshot.params['id'];

    let empleado: Empleado = this.empleadosService.encontrarEmpleado(this.indice);

    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;
  }

  volverHome() {
    this.router.navigate(['']);
  }

  /*actualizaEmpleado(){
    let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);
    //this.empleados.push(miEmpleado);
    this.empleadosService.actualizarEmpleado(this.indice, miEmpleado);
    this.router.navigate(['']);
  }

  eliminaEmpleado(){
    this.empleadosService.eliminarEmpleado(this.indice);
    this.router.navigate(['']);
  }*/

  actualizaEmpleado() {
    if (this.accion == 1) {
      let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
      this.empleadosService.actualizarEmpleado(this.indice, miEmpleado);
      this.router.navigate(['']);
    } else {
      this.empleadosService.eliminarEmpleado(this.indice);
      this.router.navigate(['']);
    }




  }

  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;

  indice: number;

}
