import { Component, OnInit } from '@angular/core';
import {Http, Response} from "@angular/http";
import {ActivatedRoute} from "@angular/router";
import {MasterUrlService} from "../services/master-url.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-borrachera',
  templateUrl: './borrachera.component.html',
  styleUrls: ['./borrachera.component.css']
})
export class BorracheraComponent implements OnInit {
  private _parametros:any;
  title:string;
  borracheras=[];
  nuevaBorrachera={};
  mostrarCrear=false;
  mostrarEditar=false;
  editar=0;
  constructor(private _ActivatedRoute: ActivatedRoute,
              private _http: Http,
              private _masterUrl: MasterUrlService) { }

  ngOnInit() {
      this._ActivatedRoute
    .params
    .subscribe(parametros => {
      this._parametros = parametros;
      this._http.get(this._masterUrl.url+'Borrachera?usuBorrachera='+this._parametros.idUsuario).subscribe(
        (res:Response)=>{
          this.borracheras=res.json()
            .map((value, key)=>{
              value.contador = (key+1);
              value.formularioCerrado = true;
              return value;
            });
        },
        (err)=>{
          console.log(err);
        }
      )
    })
  }

  crearBorrachera(formulario:NgForm){
    let borrachera={
      motivo:formulario.value.motivo,
      latitudDondeEmpezo:formulario.value.latitudDondeEmpezo,
      longitudDondeEmpezo:formulario.value.longitudDondeEmpezo,
      usuBorrachera:this._parametros.idUsuario
    };
    this._http.post(this._masterUrl.url+'Borrachera',borrachera)
      .subscribe(
        (res:Response)=>{
          this.borracheras.push(res.json());
          this.nuevaBorrachera={};
        },
        (err)=> {
          console.log(err)
        },
        () => {
          console.log("Termino la funcion vamos a dormir");
          this.mostrarCrear = false;
        }
        )
  }

  borrarBorrachera(idBorrachera: number){
    this._http.delete(this._masterUrl.url+"Borrachera/"+idBorrachera)
      .subscribe(
        (res)=>{
          let borrarBorrachera = res.json();
          this.borracheras=this.borracheras.filter(value=>borrarBorrachera.idBorrachera!=value.idBorrachera);
        },
        (err)=>{
          console.log(err);
        }
      )
  }

  editarBorrachera(borra2:any){
    let parametros = {
      motivo: borra2.motivo,
      latitudDondeEmpezo: borra2.latitudDondeEmpezo,
      longitudDondeEmpezo: borra2.longitudDondeEmpezo
    };
    this._http.put(this._masterUrl.url+"Borrachera/"+borra2.idBorrachera,parametros)
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
