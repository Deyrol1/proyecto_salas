import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { SidevarComponent } from './sidevar/sidevar.component';
import { SalasComponent } from './listas/salas/salas.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { SalaComponent } from './agregar/sala/sala.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { JugarComponent } from './jugar/jugar.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { UsuarioComponent } from './agregar/usuario/usuario.component';
import { ListusuarioComponent } from './listas/listusuario/listusuario.component';
import { UsuariosgeneralComponent } from './listas/usuariosgeneral/usuariosgeneral.component';
import { RuletaComponent } from './jugar/ruleta/ruleta.component';
import { EditsalaComponent } from './editar/editsala/editsala.component';
import { EditusuarioComponent } from './editar/editusuario/editusuario.component';
import { GanadoresComponent } from './listas/ganadores/ganadores.component';

@NgModule({
  declarations: [
    AppComponent,
    SidevarComponent,
    SalasComponent,
    SalaComponent,
    JugarComponent,
    UsuarioComponent,
    ListusuarioComponent,
    UsuariosgeneralComponent,
    RuletaComponent,
    EditsalaComponent,
    EditusuarioComponent,
    GanadoresComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
   
    








  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
