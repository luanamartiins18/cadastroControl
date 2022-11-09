import { BuInterface } from './BuInterface';
import { CargoInterface } from './CargoInterface';
import { CentroInterface } from './CentroInterface';
import { ClienteInterface } from './ClienteInterface';
import { DemandaInterface } from './DemandaInterface';
import { EquipamentoInterface } from './EquipamentoInterfaces';
import { MemoriaInterface } from './MemoriaInterfaces';
import { ModeloInterface } from './ModeloInterfaces';
import { OperacaoInterface } from './OperacaoInterfaces';
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
  modelo?: ModeloInterface;
  memoria?: MemoriaInterface;
  equipamento?: EquipamentoInterface;
  cidade?: string;
  uf?: string;
  tipo?: TipoInterface;
  bu?: BuInterface;
  celular?: string;
  primeiroAcesso: boolean;
  senha?: string;
  demanda?: DemandaInterface;
  centroCusto?: CentroInterface;
  cliente?: ClienteInterface;
  operacao?: OperacaoInterface;
  tag?: string;
  patrimonio?: string;
  
}

