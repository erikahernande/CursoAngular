import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { loginService } from "./login/login.service";

@Injectable()
export class DataServices{
    constructor(private httpClient:HttpClient, private loginService:loginService){}

    cargarEmpleados(){
        const token=this.loginService.getIdToken();
        return this.httpClient.get('https://mis-clientes-43509-default-rtdb.firebaseio.com/datos.json?auth=' + token);
    }

    guardarEmpleado(empleados:Empleado[]){
        this.httpClient.put('https://mis-clientes-43509-default-rtdb.firebaseio.com/datos.json', empleados).subscribe(
            response=>console.log("Se han guardado los empleados: " +  response),
            error=>console.log("Error: " + error),
        );
            
    }

    actualizarEmpleado(indice:number,empleado:Empleado){
        let url='https://mis-clientes-43509-default-rtdb.firebaseio.com/datos/' + indice + '.json';

        this.httpClient.put(url, empleado).subscribe(
            response=>console.log("Se han modificados correctamente el empleado: " +  response),
            error=>console.log("Error: " + error),
        );
    }

    eliminarEmpleado(indice:number){
        let url='https://mis-clientes-43509-default-rtdb.firebaseio.com/datos/' + indice + '.json';

        this.httpClient.delete(url).subscribe(
            response=>console.log("Se han eliminado correctamente el empleado: " +  response),
            error=>console.log("Error: " + error),
        );
    }
}