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
    return this.http.get<Array<OrdemFornecimento>>(environment.api + 'ordemfornecimento');
  }

  enviaSit(req: string, id: number): Observable<string>{

    let reqFinal = {colabSit: req, id: id};
   
    return this.http.post<string>(environment.api + 'seta-situacao', reqFinal, httpOptions);
  }

}
