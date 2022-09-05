import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Cidade } from 'src/app/models/cidade/cidade.model';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  constructor(private http: HttpClient) { }

  getCidade() {
    return this.http.get<Array<Cidade>>(environment.api + "cidade");
  }
}