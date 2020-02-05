import { UsuarioInterface } from 'src/app/interfaces/UsuarioInterface';
import { Contrato } from 'src/app/models/contrato/contrato.model';
import { Cargo } from 'src/app/models/cargo/cargo.model';
import { Perfil } from '../perfil/perfil.model';
import { Sigla } from '../sigla/sigla.model';

export class Usuario implements UsuarioInterface{
    
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
    contrato: Contrato;
    cargo: Cargo;
    perfil: Perfil;
    celular: string;
    sigla: Sigla;
    listaPerfil: Array<Perfil>;   

    constructor(){}
}
