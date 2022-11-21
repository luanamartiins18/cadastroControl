import { Operacao } from "../models/operacao/operacao.model";
import { Usuario } from "../models/usuario/usuario.model";

export interface HistoricoOperacaoInterface {
    id?: number;
    data_inicio?: Date;
    data_final?: Date;
    vigente?: string;
    operacao?: Operacao
    usuario?: Usuario
    }