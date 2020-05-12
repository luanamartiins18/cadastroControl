import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OrdemFornecimento } from 'src/app/models/ordemfornecimento/ordem-fornecimento';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class OrdemFornecimentoService {

  constructor(private http: HttpClient) { }

  getOrdemFornUsu(id) {
    return this.http.get<Array<any>>(environment.api + 'ordens-fornecimento/usuario/' + id);
  }

  getOrdemFornecimentoById(id) {
    return this.http.get<OrdemFornecimento>(environment.api + 'ordem-fornecimento/' + id);
  }

  getOrdemFornecimento() {
    return this.http.get<Array<OrdemFornecimento>>(environment.api + 'ordens-fornecimento');
  }

  enviaSit(value): Observable<any> {
    return this.http.post<any>(environment.api + 'ordem-fornecimento/usuario-situacao', value, { headers: httpOptions.headers, observe: 'response' });
  }

  getUsuariosOf(id: number) {
    return this.http.get<Array<number>>(environment.api + 'ordem-fornecimento/' + id.toString() + "/usuarios", { observe: 'response' });
  }

  getSituacaoOf(id: number) {
    return this.http.get<number>(environment.api + 'ordem-fornecimento/' + id.toString() + "/situacao", { observe: 'response' });
  }

  getValorTarefasOf(idUsu, idOf) {
    return this.http.get<Array<any>>(environment.api + 'usuario/' + idUsu + '/ordem-forn/' + idOf + '/valor-tarefa');
  }

}
