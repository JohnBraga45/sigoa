import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PiqueteService {

  private ocorrencias = [
    {
      id: 1,
      data: '2023-07-01',
      id_ano: 'low',
      treatment: 'pending',
      severity: 'low',
      description: 'First occurrence'
    },
    {
      id: 2,
      date: '2023-07-02',
      typicity: 'medium',
      treatment: 'in_progress',
      severity: 'medium',
      description: 'Second occurrence'
    },
    {
      id: 3,
      date: '2023-07-03',
      typicity: 'high',
      treatment: 'completed',
      severity: 'high',
      description: 'Third occurrence'
    },

  ];
  constructor() { }

  getOcorrencias(): Observable<any> {
    return of(this.ocorrencias);
  }

}
