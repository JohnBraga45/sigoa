import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OcorrenciaService {
  private apiUrl = '../../../assets/ocorrencias.json';
  private occurrences: any[] = [];

  constructor(private http: HttpClient) { }

  getOcorrencias(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  salvarOcorrencia(ocorrencia: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, ocorrencia);
  }

  updateOccurrences(ocorrencias: any[]): void {
    this.occurrences = ocorrencias;
  }

  getOccurrences(): any[] {
    return this.occurrences;
  }
}
