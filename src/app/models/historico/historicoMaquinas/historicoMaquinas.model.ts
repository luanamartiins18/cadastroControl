import { HistoricoMaquinasInterface } from "src/app/interfaces/HistoricoMaquinasInterface";
import { Equipamento } from "../../equipamento/equipamento.model";
import { Modelo } from "../../modelo/modelo.model";
import { Usuario } from "../../usuario/usuario.model";

export class HistoricoMaquinas implements HistoricoMaquinasInterface {
    id?: number;
    data_inicio?: Date;
    data_final?: Date;
    vigente?: string;
    modelo?: Modelo;
    equipamento?: Equipamento;
    usuario?: Usuario
  
    constructor(
      id?: number,
      data_final?: Date,
      data_inicio?: Date,
      vigente?: string,
      modelo?: Modelo,
      equipamento?: Equipamento,
      usuario?: Usuario
    ) { }
  }