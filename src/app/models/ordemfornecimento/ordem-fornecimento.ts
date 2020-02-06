import { OrdemFornecimentoInterface } from 'src/app/interfaces/OrdemFornecimentoInterface';
import { Situacao } from 'src/app/models/situacao/situacao.model';
import { Sigla } from 'src/app/models/sigla/sigla.model';
import { Usuario } from 'src/app/models/usuario/usuario.model';

export class OrdemFornecimento implements OrdemFornecimentoInterface{
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
    situacao: Situacao;
    situacaoAlm: Situacao;
    sigla: Sigla;
    usuario: Usuario;
    responsavelTecnico: string;
    gerenteTecnico: string;
}
