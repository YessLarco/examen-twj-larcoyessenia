import { Component, OnInit } from '@angular/core';
import {Http, Response} from "@angular/http";
import {MasterUrlService} from "../services/master-url.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  title: string = " ccc";
  nuevoUsuario: any = {};
  usuarios = [];
  mostrarCrear=false;
  mostrarEditar=false;
  usuarioEditar=0;
  constructor(private _http: Http,
              private _masterUrl: MasterUrlService) { }

  ngOnInit() {
    this._http.get(this._masterUrl.url + "Usuario")
      .subscribe(
        (res: Response) => {
          console.log(res.json());
          this.usuarios = res.json()
            .map((value, key)=>{
              value.contador = (key+1);
              value.formularioCerrado = true;
              return value;
            });
        },
        (err) => {
          console.log(err);
        }
      );
    console.log("On Init")
  }

  crearUsuario(formulario:NgForm){
    console.log("Estoy en la funcion crear");
    console.log(formulario);
    this._http.post(this._masterUrl.url + "Usuario", {
      nombreUsuario: formulario.value.nombreUsuario,
      ciudadResidencia: formulario.value.ciudadResidencia,
      fechaNacimiento: formulario.value.fechaNacimiento
    })
      .subscribe((res) => {
          console.log("No hubo errores");
          console.log(res);
          this.usuarios.push(res.json());
          this.nuevoUsuario = {};
          //this.disabledButtons.NuevaTiendaFormSubmitButton = false;
        },
        (err) => {
          console.log("Ocurrió un error ", err);
        },
        () => {
          console.log("Termino la funcion vamos a la casa");
          this.mostrarCrear = false;
        }
      );

  }

  borrarUsuario(idUsuario: number){
    this._http.delete(this._masterUrl.url+"Usuario/"+idUsuario)
      .subscribe(
        (res)=>{
          let usuarioBorrar = res.json();
          this.usuarios=this.usuarios.filter(value=>usuarioBorrar.idUsuario!=value.idUsuario);
        },
        (err)=>{
          console.log(err);
        }
      )
  }

  editarUsuario(usuario2:any){
    let parametros = {
      nombreUsuario: usuario2.nombreUsuario,
      ciudadResidencia: usuario2.ciudadResidencia,
      fechaNacimiento: usuario2.fechaNacimiento
    };
    this._http.put(this._masterUrl.url+"Usuario/"+usuario2.idUsuario,parametros)
      .subscribe(
        (res:Response)=>{
          //tienda.formularioCerrado = !tienda.formularioCerrado;
          console.log("Respuesta:",res.json());
        },
        (err)=>{
          console.log("Error",err);
        },
        () => {
          this.mostrarEditar = true;
        }

      )
  }
}
