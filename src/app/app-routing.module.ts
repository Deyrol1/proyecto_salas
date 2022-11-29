import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalasComponent } from './listas/salas/salas.component';
import { SalaComponent } from './agregar/sala/sala.component';
import { JugarComponent } from './jugar/jugar.component';
import { UsuarioComponent } from './agregar/usuario/usuario.component';
import { ListusuarioComponent } from './listas/listusuario/listusuario.component';
import { UsuariosgeneralComponent } from './listas/usuariosgeneral/usuariosgeneral.component';
import { RuletaComponent } from './jugar/ruleta/ruleta.component';

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
  },
  {
    path:'registro-usuario/:id',
    component: UsuarioComponent,

  },
  {
    path:'lista-usuario/:id',
    component:ListusuarioComponent,

  },
  {
    path:'usuariosgeneral',
    component: UsuariosgeneralComponent
  },
  {
    path:'ruleta/:id',
    component: RuletaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
