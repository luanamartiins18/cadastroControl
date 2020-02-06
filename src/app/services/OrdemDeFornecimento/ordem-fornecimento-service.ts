import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrdemFornecimento } from 'src/app/models/ordemfornecimento/ordem-fornecimento';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdemFornecimentoService {

  constructor(private http: HttpClient) { }

  getOrdemFornecimento(){
    return this.http.get<Array<OrdemFornecimento>>(environment.api + 'ordemfornecimento');
  }
}
