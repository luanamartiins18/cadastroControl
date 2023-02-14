import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Candidatos } from 'src/app/models/candidato/candidatos.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CandidatosService {

  constructor(private http: HttpClient) { }

  insereCandidatos(param: Candidatos) {
    console.log(param);
    return this.http.post(environment.api + "candidatos", param, { headers: httpOptions.headers, observe: 'response' });
  }

  atualizaCandidatos(param: Candidatos) {
    return this.http.put(environment.api + "candidatos/" + param.id, param, { headers: httpOptions.headers, observe: 'response' });
  }

  
  getListaCandidatos() {
    return this.http.get<Candidatos[]>(environment.api + 'candidatos');
  }

  getCandidatosId(id) {
    return this.http.get<Candidatos>(environment.api + 'candidatos/' + id);
  }

  deleteVagas(id) {
    return this.http.delete(environment.api + "candidatos/" + id, { headers: httpOptions.headers, observe: 'response' });
  }

  getListaCandidatosPorVaga(id) {
    return this.http.get<Candidatos[]>(environment.api + 'candidatosvaga/' + id);
  }
}
















































// upload( formData = FormData){
  //   return this.http.post(environment.api + "candidatos", formData, { headers: httpOptions.headers, reportProgress: true, observe: 'events'})
  // }
  