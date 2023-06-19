import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Proposta } from 'src/app/models/proposta/proposta.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PropostaService {

  constructor(private http: HttpClient) { }

  insereProposta(param: Proposta) {
    return this.http.post(environment.api + "proposta", param, { headers: httpOptions.headers, observe: 'response' });
  }
}






