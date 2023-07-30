import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';

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
import { FooterComponent } from './sigoa/layout/footer/footer.component';
import { ModalComponent } from './sigoa/resources/modal/modal.component';




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
    FooterComponent,
    ModalComponent,






  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
