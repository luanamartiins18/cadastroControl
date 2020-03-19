import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import  autocomplete  from '../../../../node_modules/autocompleter';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })

};

@Injectable({
  providedIn: 'root'
})
export class GuiaService {

  
  constructor(private http: HttpClient) {}
  
  getItensGuia(){
    return this.http.get(environment.api + "itens-guia");
  }

  atualizaTarefaGuia(body){
    return this.http.put(environment.api + "tarefa-guia", body, {headers: httpOptions.headers, observe: 'response'});
  }

  insereTarefaGuia(body){
    return this.http.post(environment.api + "tarefa-guia", body, {headers: httpOptions.headers, observe: 'response'});
  }


}
