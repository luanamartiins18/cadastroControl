import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuario } from 'src/app/models/usuario/usuario.model';
import { Historico } from 'src/app/models/historico/historico.model';
import { Operacao } from 'src/app/models/operacao/operacao.model';
import { Modelo } from 'src/app/models/modelo/modelo.model';
import { HistoricoOperacao } from 'src/app/models/historico/historicoOperacao/historicoOperacao.model';
import { HistoricoMaquinas } from 'src/app/models/historico/historicoMaquinas/historicoMaquinas.model';


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

  getListaUsuarios() {
    return this.http.get<Usuario[]>(environment.api + 'usuarios');
  }

  getListaUsuariosPorOperacao(idOperacao: number) {
    return this.http.get<Usuario[]>(environment.api + 'usuariosoperacao/' + idOperacao);
  }

  getListaHistoricoRe(re: String) {
    return this.http.get<Historico[]>(environment.api + 'historico/' + re);
  }

  getListaHistoricoOperacaoRe(re: String) {
    return this.http.get<HistoricoOperacao[]>(environment.api + 'historicooperacao/' + re);
  }

  getListaHistoricoMaquinasRe(re: String) {
    return this.http.get<HistoricoMaquinas[]>(environment.api + 'historicomaquinas/' + re);
  }

  getUsuarioId(id) {
    return this.http.get<Usuario>(environment.api + 'usuarios/' + id);
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

  insereContrato(param: Usuario){
    return this.http.post(environment.api + "contrato", param, { headers: httpOptions.headers, observe: 'response' });
  }

  insereMaquinas(param: Usuario, historico: HistoricoMaquinas){
    Object.assign(param, {data_inicio: historico.data_inicio, data_final: historico.data_final});
    return this.http.post(environment.api + "maquinas", param, { headers: httpOptions.headers, observe: 'response' });

  }

  atualizarMaquinas(param: Usuario, historico: HistoricoMaquinas){
    Object.assign(param, {data_inicio: historico.data_inicio, data_final: historico.data_final});
    return this.http.post(environment.api + "atualizarmaquinas", param, { headers: httpOptions.headers, observe: 'response' });

  }

  
  alteraStatus(param) {
    return this.http.post(environment.api + 'usuario-status', param, { headers: httpOptions.headers, observe: 'response' });
  }

}