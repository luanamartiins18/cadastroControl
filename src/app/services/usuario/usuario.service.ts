import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuario } from 'src/app/models/usuario/usuario.model';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }


  getUsuario(re: string) {
    return this.http.get<Usuario>(environment.api + 'usuario/' + re);
  }

  buscaCep(cep:string) {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`);
  }

  getCargoUsuario(re: String) {
    return this.http.get(environment.api + 'usuario/' + re + '/cargo');
  }

  getCidadeUsuario(re: String) {
    return this.http.get(environment.api + 'usuario/' + re + '/cidade');
  }

  getUfUsuario(re: String) {
    return this.http.get(environment.api + 'usuario/' + re + '/uf');
  }

  getTipoUsuario(re: String) {
    return this.http.get(environment.api + 'usuario/' + re + '/tipo');
  }

  getBuUsuario(re: String) {
    return this.http.get(environment.api + 'usuario/' + re + '/bu');
  }

  insereUsuario(param: Usuario) {
    return this.http.post(environment.api + "usuarios", param, { headers: httpOptions.headers, observe: 'response' });
  }

  getListaUsuarios() {
    return this.http.get<Usuario[]>(environment.api + 'usuarios');
  }

  getUsuarioId(id) {
    return this.http.get<Usuario>(environment.api + 'usuarios/' + id);
  }

  getHistoricoId(id){
    return this.http.get<Usuario>(environment.api + 'historico/' + id);
  }

  deleteUsuario(id: string | Usuario) {
    return this.http.delete(environment.api + "usuarios/" + id, { observe: 'response' });
  }

  atualizaUsuario(param: Usuario) {
    return this.http.put(environment.api + "usuarios/" + param.id, param, { headers: httpOptions.headers, observe: 'response' });
  }

  alteraStatus(param) {
    return this.http.post(environment.api + 'usuario-status', param, { headers: httpOptions.headers, observe: 'response' });
  }

  alteraSenha(param: Usuario) {
    return this.http.put(environment.api + "altera-senha/" + param.id, param, { headers: httpOptions.headers, observe: 'response' });
  }

}
