import { CargoInterface } from '../interfaces/CargoInterface';
import { ContratoInterface } from '../interfaces/ContratoInterface';
import { SiglaInterface } from './SiglaInterface';
import { PerfilInterface } from './PerfilInterface';

export interface UsuarioInterface{
    id: number;
    nome: string;
    email: string;
    cpf: string;
    codigoRe: string;
    codigoBB: string;
    empresa: string;
    demanda: number;
    nascimento: Date;
    status: string;
    contrato: ContratoInterface;
    cargo: CargoInterface;
    sigla: SiglaInterface;
    listaPerfil: Array<PerfilInterface>;
    celular: string;
}

