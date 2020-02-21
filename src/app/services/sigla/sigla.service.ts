import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sigla } from 'src/app/models/sigla/sigla.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SiglaService {

  constructor(private http: HttpClient) { }

  getSiglas(){
    return this.http.get<Array<Sigla>>(environment.api + "siglas");
  }

}
