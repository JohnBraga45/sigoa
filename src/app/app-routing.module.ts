import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "piquete", component: PiqueteComponent },
  { path: "autos", component: AutosComponent },
  { path: "delituoso", component: DelituosoComponent },
  { path: "grupos", component: GruposComponent },
  { path: "processos", component: ProcessosComponent },
  { path: "participantes", component: ParticipantesComponent },
  { path: "mandatos", component: MandadosComponent },
  { path: "vitimas", component: VitimasComponent },
  { path: "decisao", component: DecisaoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
