import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalasComponent } from './listas/salas/salas.component';
import { SalaComponent } from './agregar/sala/sala.component';
import { JugarComponent } from './jugar/jugar.component';

const routes: Routes =
[
  {
    path: 'salas',
    component: SalasComponent,
  },
  {
    path: 'registrosala',
    component: SalaComponent,
  },
  {
    path: 'jugar',
    component: JugarComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
