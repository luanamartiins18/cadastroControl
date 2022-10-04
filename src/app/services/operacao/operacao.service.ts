import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Operacao } from 'src/app/models/operacao/operacao.model';

@Injectable({
  providedIn: 'root'
})
export class OperacaoService {

  constructor(private http: HttpClient) { }

  getOperacao() {
    return this.http.get<Array<Operacao>>(environment.api + "operacao");
  }
}