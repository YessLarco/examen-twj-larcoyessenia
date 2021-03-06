import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { BorracheraComponent } from './borrachera/borrachera.component';
import {MasterUrlService} from "./services/master-url.service";
import {routing} from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsuarioComponent,
    BorracheraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [MasterUrlService],
  bootstrap: [AppComponent],
})
export class AppModule { }
