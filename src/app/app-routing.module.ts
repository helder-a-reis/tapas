import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TapasListComponent } from './tapas/tapas/tapas-list/tapas-list.component';
import { TapasMapComponent } from './tapas/tapas/tapas-map/tapas-map.component';
import { TapasComponent } from './tapas/tapas/tapas.component';


const routes: Routes = [
  {path: '', redirectTo: 'tapas', pathMatch: 'full'},
  {path: 'tapas', component: TapasComponent},
/*   {path: 'list', component: TapasListComponent},
  {path: 'map', component: TapasMapComponent} */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
