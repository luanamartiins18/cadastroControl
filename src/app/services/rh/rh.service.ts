import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Rh } from 'src/app/models/rh/rh.model';
import { environment } from 'src/environments/environment';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RhService {

  constructor(private http: HttpClient) { }



  insereCandidato(param: Rh) {
    return this.http.post(environment.api + "candidatos", param, { headers: httpOptions.headers, observe: 'response' });
  }

  atualizaCandidato(param: Rh) {
    return this.http.put(environment.api + "candidatos/" + param.id, param, { headers: httpOptions.headers, observe: 'response' });
  }

  getListaRh() {
    return this.http.get<Rh[]>(environment.api + 'candidatos');
  }

  getCandidatosId(id) {
    return this.http.get<Rh>(environment.api + 'candidatos/' + id);
  }

  deleteCandidatos(id) {
    return this.http.delete(environment.api + "candidatos/" + id, { headers: httpOptions.headers, observe: 'response' });
  }

  atualizaStatus(param: Rh) {
    return this.http.put(environment.api + "candidatosStatus/" + param.id, param, { headers: httpOptions.headers, observe: 'response' });
  }

}