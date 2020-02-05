import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment} from 'src/environments/environment';
import { Usuario } from 'src/app/models/usuario/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getUsuario(re: string){

    let params = {re: re};
    
    return this.http.get<Usuario>(environment.api + 'usuario', {params: params});
  }
}
