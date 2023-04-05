import { UsuarioInterface } from 'src/app/interfaces/UsuarioInterface';
import { Funcao } from '../cargo/funcao.model';
import { Tipo } from '../tipo/tipo.model';
import { Bu } from '../bu/bu.model';
import { Demanda } from '../demanda/demanda.model';
import { CentroCusto } from '../centroCusto/centroCusto.model';
import { Cliente } from '../cliente/cliente.model';
import { Operacao } from '../operacao/operacao.model';
import { Modelo } from '../modelo/modelo.model';
import { Memoria } from '../memoria/memoria.model';
import { Equipamento } from '../equipamento/equipamento.model';
import { HistoricoMaquinas } from '../historico/historicoMaquinas/historicoMaquinas.model';
import { Perfil } from '../perfil/perfil.model';
import { ListaUsuario } from '../ListaUsuario/lista-usuario.model';

export class Usuario implements UsuarioInterface {

  id?: number;
  nome?: string;
  cep?: string;
  endereco?: string;
  rg?: string;
  org_emissor?: string;
  numero?: string;
  complemento?: string;
  data_nascimento?: Date;
  data_emissao?: Date;
  email?: string;
  cpf?: string;
  codigoRe?: string;
  status?: string;
  cargo?: Funcao;
  cidade?: string;
  uf?: string;
  tipo?: Tipo;
  bu?: Bu;
  celular?: string;
  demanda?: Demanda;
  centro?: CentroCusto;
  cliente?: Cliente;
  operacao?: Operacao;
  modelo?: Modelo;
  memoria?: Memoria;
  equipamento?: Equipamento;
  tag?: string;
  patrimonio?: string;
  historicomaquinas?: HistoricoMaquinas;
  perfil?: Perfil;
  primeiroAcesso: boolean;
  senha?: string;
 


  constructor(
    id?: number,
    nome?: string,
    cep?: string,
    rg?: string,
    org_emissor?: string,
    numero?: string,
    complemento?: string,
    data_nascimento?: Date,
    data_emissao?: Date,
    endereco?: string,
    email?: string,
    cpf: string = "",
    codigoRe?: string,
    status?: string,
    cargo?: Funcao,
    cidade?: string,
    bu?: Bu,
    tipo?: Tipo,
    uf?: string,
    celular: string = "",
    primeiroAcesso?: boolean,
    senha?: string,
    demanda?: Demanda,
    centro?: CentroCusto,
    cliente?: Cliente,
    operacao?: Operacao,
    modelo?: Modelo,
    memoria?: Memoria,
    equipamento?: Equipamento,
    tag?: string,
    patrimonio?: string,
    historicomaquinas?: HistoricoMaquinas,
    perfil?: Perfil,
  ) { }
}
