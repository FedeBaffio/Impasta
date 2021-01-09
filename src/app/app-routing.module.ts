import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MapsComponent } from './maps/maps.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: 'maps', component: MapsComponent },
  { path: 'menu', component: MenuComponent },
  { path: '', redirectTo:  '/menu', pathMatch: 'full'},
  //{ path: '', redirectTo:  '/recipes', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
