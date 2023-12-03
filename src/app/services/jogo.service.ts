import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Pontos } from '../models/jogo/pontos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JogoService {

  API: string = 'http://localhost:8080/api/pontos';
  http = inject(HttpClient);

  constructor() { }

  listAll(): Observable<Pontos[]> {
    return this.http.get<Pontos[]>(this.API);
  }

  save(pontos: Pontos): Observable<Pontos> {
    return this.http.post<Pontos>(this.API, pontos);
  }
}
