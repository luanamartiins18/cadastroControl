import { UsuarioInterface } from 'src/app/interfaces/UsuarioInterface';
import { Funcao } from '../cargo/funcao.model';
import { Cidade } from '../cidade/cidade.model';
import { Uf } from '../uf/uf.model';
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
  cidade?: Cidade;
  uf?: Uf;
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
    cidade?: Cidade,
    bu?: Bu,
    tipo?: Tipo,
    uf?: Uf,
    celular: string = "",
    primeiroAcesso?: boolean,
    senha?: string,
  ) { }
}
