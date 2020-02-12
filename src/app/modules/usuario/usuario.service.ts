import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment} from 'src/environments/environment';
import { Usuario } from 'src/app/models/usuario/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getUsuarioBySigla(id: number){

    let paramId: string = id.toString();   
    return this.http.get<Array<Usuario>>(environment.api + 'sigla/' + paramId + '/usuarios');

  }

  getUsuario(re: string){ 
    return this.http.get<Usuario>(environment.api + 'usuario/' + re);
  }
}
