import { HistoricoOperacaoInterface } from "src/app/interfaces/HistoricoOperacaoInterface";
import { Operacao } from "../../operacao/operacao.model";
import { Usuario } from "../../usuario/usuario.model";

export class HistoricoOperacao implements HistoricoOperacaoInterface {
    id?: number;
    data_inicio?: Date;
    data_final?: Date;
    vigente?: string;
    operacao?: Operacao;
    usuario?: Usuario
  
    constructor(
      id?: number,
      data_final?: Date,
      data_inicio?: Date,
      vigente?: string,
      operacao?: Operacao,
      usuario?: Usuario
    ) { }
  }