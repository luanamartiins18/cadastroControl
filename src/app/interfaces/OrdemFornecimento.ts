import { SiglaInterface } from '../interfaces/SiglaInterface';
import { SituacaoInterface } from '../interfaces/SituacaoInterface';
import { UsuarioInterface } from '../interfaces/UsuarioInterface';

export interface OrdemFornecimento {
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
    situacao: SituacaoInterface;
    situacaoAlm: SituacaoInterface;
    sigla: SiglaInterface;
    usuario: UsuarioInterface;
    responsavelTecnico: string;
    gerenteTecnico: string;
}