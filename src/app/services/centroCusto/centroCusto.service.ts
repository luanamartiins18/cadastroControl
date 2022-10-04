import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CentroCusto } from 'src/app/models/centroCusto/centroCusto.model';

@Injectable({
  providedIn: 'root'
})
export class CentroService {

  constructor(private http: HttpClient) { }

  getCentro() {
    return this.http.get<Array<CentroCusto>>(environment.api + "centro");
  }
}