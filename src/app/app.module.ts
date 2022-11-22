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
import { NgxWheelModule } from 'ngx-wheel';
@NgModule({
  declarations: [
    AppComponent,
    SidevarComponent,
    SalasComponent,
    SalaComponent,
    JugarComponent,

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
    NgxWheelModule





  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
