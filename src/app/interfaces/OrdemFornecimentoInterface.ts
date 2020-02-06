import { SiglaInterface } from './SiglaInterface';
import { SituacaoInterface } from './SituacaoInterface';
import { UsuarioInterface } from './UsuarioInterface';

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
    situacao: SituacaoInterface;
    situacaoAlm: SituacaoInterface;
    sigla: SiglaInterface;
    usuario: UsuarioInterface;
    responsavelTecnico: string;
    gerenteTecnico: string;
}