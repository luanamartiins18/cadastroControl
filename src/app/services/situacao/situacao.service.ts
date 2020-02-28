import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Situacao } from 'src/app/models/situacao/situacao.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SituacaoService {

  constructor(private http: HttpClient) { }

  getSituacoes(){
    return this.http.get<Array<Situacao>>(environment.api + '/situacoes');
  }  
  
}
