
import { BuInterface } from './BuInterface';
import { CargoInterface } from './CargoInterface';
import { TipoInterface } from './TipoInterface';


export interface UsuarioInterface {
  id?: number;
  nome?: string;
  endereco?: string;
  rg?: string;
  org_emissor?: string;
  numero?: string;
  complemento?: string;
  data_nascimento?: Date;
  data_emissao?: Date;
  cep?: string;
  email?: string;
  cpf?: string;
  codigoRe?: string;
  status?: string;
  cargo?: CargoInterface;
  cidade?: string;
  uf?: string;
  tipo?: TipoInterface;
  bu?: BuInterface;
  celular?: string;
  primeiroAcesso: boolean;
  senha?: string;
}

