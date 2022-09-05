
import { BuInterface } from './BuInterface';
import { CargoInterface } from './CargoInterface';
import { CidadeInterface } from './cidadeInterface';
import { TipoInterface } from './TipoInterface';
import { UfInterface } from './UfInterface';

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
  cidade?: CidadeInterface;
  uf?: UfInterface;
  tipo?: TipoInterface;
  bu?: BuInterface;
  celular?: string;
  primeiroAcesso: boolean;
  senha?: string;
}

