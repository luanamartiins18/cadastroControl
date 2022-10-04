import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Cliente } from 'src/app/models/cliente/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  getCliente() {
    return this.http.get<Array<Cliente>>(environment.api + "cliente");
  }
}