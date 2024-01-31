import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { StatusMaquina } from 'src/app/models/statusMaquina/statusMaquina.model';

@Injectable({
  providedIn: 'root'
})
export class StatusMaquinaService {

  constructor(private http: HttpClient) { }

  getStatusMaquinas() {
    return this.http.get<Array<StatusMaquina>>(environment.api + "statusMaquinas");
  }
}