import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sigoa/layout/navbar/navbar.component';
import { DashboardComponent } from './sigoa/resources/dashboard/dashboard.component';
import { PiqueteComponent } from './sigoa/resources/piquete/piquete.component';
import { AutosComponent } from './sigoa/resources/autos/autos.component';
import { DelituosoComponent } from './sigoa/resources/delituoso/delituoso.component';
import { GruposComponent } from './sigoa/resources/grupos/grupos.component';
import { ProcessosComponent } from './sigoa/resources/processos/processos.component';
import { ParticipantesComponent } from './sigoa/resources/participantes/participantes.component';
import { MandadosComponent } from './sigoa/resources/mandados/mandados.component';
import { VitimasComponent } from './sigoa/resources/vitimas/vitimas.component';
import { DecisaoComponent } from './sigoa/resources/decisao/decisao.component';
 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    PiqueteComponent,
    AutosComponent,
    DelituosoComponent,
    GruposComponent,
    ProcessosComponent,
    ParticipantesComponent,
    MandadosComponent,
    VitimasComponent,
    DecisaoComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
