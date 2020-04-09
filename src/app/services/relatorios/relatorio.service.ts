import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {

  constructor(private http: HttpClient) { }

  getOrdensFornecimentoConcluidas(){
    return this.http.get(environment.api + "ordens-fornecimento-concluida");
  }

  getRelatorioOrcamento(idOf){
    return this.http.get(environment.api + "relatorio-orcamento/" + idOf);
  }

  getRelatorioEntrega(idOf){
    return this.http.get(environment.api + "relatorio-entrega/" + idOf);
  }

  getRelatorioOrcamentoXlsx(idOf){
    return this.http.get(environment.api + "relatorio-orcamento/xlsx/" + idOf, {responseType: 'blob'});
  }

  getRelatorioEntregaXlsx(idOf){
    return this.http.get(environment.api + "relatorio-entrega/xlsx/" + idOf, {responseType: 'blob'});
  }

  getRelatorioOrcamentoTxt(idOf){
    return this.http.get(environment.api + "relatorio-orcamento/txt/" + idOf, {responseType: 'blob'});
  }

  getRelatorioEntregaTxt(idOf){
    return this.http.get(environment.api + "relatorio-entrega/txt/" + idOf, {responseType: 'blob'});
  }

}
