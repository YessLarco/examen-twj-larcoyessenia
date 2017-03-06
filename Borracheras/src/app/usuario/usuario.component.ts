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
  title: string = "Crear Usuario";
  nuevoUsuario: any = {};
  usuarios = [];
  constructor(private _http: Http,
              private _masterUrl: MasterUrlService) { }

  ngOnInit() {
    this._http.get(this._masterUrl.url + "Usuario")
      .subscribe(
        (res: Response) => {
          console.log(res.json());
          this.usuarios = res.json();
            // .map((value)=>{
            //   value.formularioCerrado = true;
            //   return value;
            // });
        },
        (err) => {
          console.log(err);
        }
      );
    console.log("On Init")
  }

  crarUsuario(formulario:NgForm){
    

  }
}
