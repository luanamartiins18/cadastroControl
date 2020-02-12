import { CargoInterface } from '../interfaces/CargoInterface';
import { ContratoInterface } from '../interfaces/ContratoInterface';
import { ListaSiglaInterface } from './ListaSiglaInterface';
import { ListaPerfilInterface } from './ListaPerfilInterface';


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
    listaSiglas: ListaSiglaInterface[];
    listaPerfil: ListaPerfilInterface[];
    celular: string;
}

