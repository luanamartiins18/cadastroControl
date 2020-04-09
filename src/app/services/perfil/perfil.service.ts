import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Perfil } from 'src/app/models/perfil/perfil.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private http: HttpClient) { }

  getPerfil(){
    return this.http.get<Array<Perfil>>(environment.api + "perfil");
  }
}
