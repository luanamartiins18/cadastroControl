import { SiglaInterface } from './SiglaInterface';
import { ListaUsuario } from './ListaUsuarioInterface';
import { UsuarioInterface } from './UsuarioInterface';
import { SituacaoInterface } from './SituacaoInterface';

export interface OrdemFornecimentoInterface {    
    id: number;
    numeroOF: string;
    numeroOFGenti: string;
    fabrica: string;
    tema: string;
    agil: boolean;
    ustiBB: number;
    uor: string;
    demanda: string;
    acao: string;
    tipo: string;
    cdTI: string;
    dtAbertura: Date;
    dtPrevisao: Date;
    dtEntrega: Date;
    dtDevolvida: Date;
    dtRecusa: Date;
    dtAceite: Date;
    situacaoUsu: SituacaoInterface;
    situacaoGenti: SituacaoInterface;
    sigla: SiglaInterface;
    usuario: UsuarioInterface;  
    listaUsuarios: ListaUsuario[];
    responsavelTecnico: string;
    gerenteTecnico: string;
}