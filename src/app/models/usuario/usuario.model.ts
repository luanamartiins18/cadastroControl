import { UsuarioInterface } from 'src/app/interfaces/UsuarioInterface';
import { Contrato } from 'src/app/models/contrato/contrato.model';
import { Cargo } from 'src/app/models/cargo/cargo.model';
import { ListaSigla } from '../ListaSigla/lista-sigla.model';
import { ListaPerfil } from '../ListaPerfil/lista-perfil.model';

export class Usuario implements UsuarioInterface{
    
    id?: number;
    nome?: string;
    email?: string;
    cpf?: string;
    codigoRe?: string;
    codigoBB?: string;
    empresa?: string;
    demanda?: number;
    nascimento?: Date;
    status?: string;
    contrato?: Contrato;
    cargo?: Cargo;  
    listaSiglas: ListaSigla[];
    listaPerfil: ListaPerfil[];
    celular?: string;
    primeiroAcesso: boolean;
    senha?: string;
   
    constructor(
      id?: number,
      nome?: string,
      email?: string,
      cpf: string = "",
      codigoRe?: string,
      codigoBB?: string,
      empresa?: string,
      demanda?: number,
      nascimento?: Date,
      status?: string,
      contrato?: Contrato,
      cargo?: Cargo,
      listaSiglas: ListaSigla[] = [],
      listaPerfil: ListaPerfil[] = [],
      celular: string = "",
      primeiroAcesso?: boolean,
      senha?: string,
    ){}
}
