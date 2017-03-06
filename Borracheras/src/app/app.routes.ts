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
  {path: 'borrachera', component: BorracheraComponent},
 // {path: 'tienda/:idTienda/producto', component: ProductoComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
