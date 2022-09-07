import { UsuarioInterface } from 'src/app/interfaces/UsuarioInterface';
import { Funcao } from '../cargo/funcao.model';
import { Tipo } from '../tipo/tipo.model';
import { Bu } from '../bu/bu.model';

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
  ) { }
}
