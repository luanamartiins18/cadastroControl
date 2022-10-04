import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Demanda } from 'src/app/models/demanda/demanda.model';

@Injectable({
  providedIn: 'root'
})
export class DemandaService {

  constructor(private http: HttpClient) { }

  getDemanda() {
    return this.http.get<Array<Demanda>>(environment.api + "demanda");
  }
}