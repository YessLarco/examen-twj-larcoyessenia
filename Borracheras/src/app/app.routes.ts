import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {BorracheraComponent} from "./borrachera/borrachera.component";
import {ModuleWithProviders} from "@angular/core";
import {UsuarioComponent} from "./usuario/usuario.component";
/**
 * Created by Yess on 3/5/2017.
 */
export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'usuario', component: UsuarioComponent},
  {path: 'usuario/:idUsuario/borrachera', component: BorracheraComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
