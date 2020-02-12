import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OrdemFornecimento } from 'src/app/models/ordemfornecimento/ordem-fornecimento';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})


export class OrdemFornecimentoService {


  constructor(private http: HttpClient) {}

  getOrdemFornecimento(){
    return this.http.get<Array<OrdemFornecimento>>(environment.api + 'ordens-fornecimento');
  }

  enviaSit(value): Observable<string>{
   
    return this.http.post<string>(environment.api + '/ordem-fornecimento/usuario-situacao', value, httpOptions);
  }

}
