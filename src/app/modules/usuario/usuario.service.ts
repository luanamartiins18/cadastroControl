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
    return this.http.get(environment.api + 'sigla/' + paramId + '/usuarios', {observe: 'response'});

  }

  getUsuario(re: string){ 
    return this.http.get<Usuario>(environment.api + 'usuario/' + re);
  }

  getPerfilUsuario(id: string){
    return this.http.get<Array<any>>(environment.api + 'usuario/' + id + '/perfil');
  }

  getCargoUsuario(re: String){
    return this.http.get(environment.api + 'usuario/' + re + '/cargo');
  }

}
