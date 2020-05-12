import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor(private http: HttpClient) { }

  getUnidadesMedidas() {
    return this.http.get<Array<any>>(environment.api + "unidades-medidas");
  }

  getComplexidades() {
    return this.http.get<Array<any>>(environment.api + "complexidades");
  }

  getDisciplinas() {
    return this.http.get<Array<any>>(environment.api + "disciplinas");
  }

  getItensGuia() {
    return this.http.get<Array<any>>(environment.api + 'itens-guia');
  }

  insereTarefa(param) {
    return this.http.post(environment.api + 'tarefa', param, { headers: httpOptions.headers, observe: 'response' });
  }

  getTarefasUsu(idUsu, idOf) {
    return this.http.get<Array<any>>(environment.api + "/usuario/" + idUsu + "/ordem-forn/" + idOf + "/tarefas");
  }

  deletaTarefa(idTrf) {
    return this.http.delete(environment.api + "tarefa/" + idTrf, { observe: 'response' });
  }

  alteraSitTarefa(param) {
    return this.http.post(environment.api + 'tarefa/situacao', param, { headers: httpOptions.headers, observe: 'response' });
  }

  atualizaTarefaOf(param) {
    return this.http.post(environment.api + "tarefa/atualiza", param, { headers: httpOptions.headers, observe: 'response' });
  }

  getNumOf(id) {
    return this.http.get<string>(environment.api + 'ordem-forn/' + id + '/numero');
  }

}
