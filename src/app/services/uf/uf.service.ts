import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Uf } from 'src/app/models/uf/uf.model';

@Injectable({
  providedIn: 'root'
})
export class UfService {

  constructor(private http: HttpClient) { }

  getUf() {
    return this.http.get<Array<Uf>>(environment.api + "uf");
  }
}