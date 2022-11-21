import { Empleado } from "./empleado.model";

export class EmpleadosService{
    
  empleados:Empleado[]=[
    new Empleado("Erika", "Hernandez","CEO",100000),
    new Empleado("Mariana", "Garcia","Administrativo",2000),
    new Empleado("Fátima", "Patrón","Jefa sección",5000),
    new Empleado("René", "Gutierrez","Director",35000),
  ];

  agregarEmpleadoServicio(empleado:Empleado){
    this.empleados.push(empleado);
  }

}