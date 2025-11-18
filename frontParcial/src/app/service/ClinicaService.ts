import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clinica } from '../model/Clinica';

@Injectable({
  providedIn: 'root'
})
export class ClinicaService {
  private apiUrl = 'http://localhost:8080/api/clinica';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Clinica[]> {
    return this.http.get<Clinica[]>(this.apiUrl);
  }

  getById(id: number): Observable<Clinica> {
    return this.http.get<Clinica>(`${this.apiUrl}/${id}`);
  }

  create(clinica: Clinica): Observable<Clinica> {
    return this.http.post<Clinica>(this.apiUrl, clinica);
  }

  update(clinica: Clinica): Observable<Clinica> {
    return this.http.put<Clinica>(this.apiUrl, clinica);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}