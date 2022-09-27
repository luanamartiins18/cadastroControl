import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuario } from 'src/app/models/usuario/usuario.model';
import { Historico } from 'src/app/models/historico/historico.model';


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

  getCidadeUsuario(re: String) {
    return this.http.get(environment.api + 'usuario/' + re + '/cidade');
  }

  getUfUsuario(re: String) {
    return this.http.get(environment.api + 'usuario/' + re + '/uf');
  }


  getListaUsuarios() {
    return this.http.get<Usuario[]>(environment.api + 'usuarios');
  }

  getListaHistorico() {
    return this.http.get<Historico[]>(environment.api + 'historico');
  }

  getListaHistoricoRe(re: String) {
    return this.http.get<Historico[]>(environment.api + 'historico/' + re);
  }

  deleteHistoricoID(id: number) {
    return this.http.delete(environment.api + "historico/" + id);
  }



  getUsuarioId(id) {
    return this.http.get<Usuario>(environment.api + 'usuarios/' + id);
  }


  deleteUsuario(id) {
    return this.http.delete(environment.api + "usuarios/" + id, { observe: 'response' });
  }

  atualizaUsuario(param: Usuario) {
    return this.http.put(environment.api + "usuarios/" + param.id, param, { headers: httpOptions.headers, observe: 'response' });
  }

  insereUsuario(param: Usuario) {
    return this.http.post(environment.api + "usuarios", param, { headers: httpOptions.headers, observe: 'response' });
  }

  insereFuncao(param: Usuario){
    return this.http.post(environment.api + "funcao", param, { headers: httpOptions.headers, observe: 'response' });
  }
  
  alteraStatus(param) {
    return this.http.post(environment.api + 'usuario-status', param, { headers: httpOptions.headers, observe: 'response' });
  }

}
