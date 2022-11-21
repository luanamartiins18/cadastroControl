import { Equipamento } from "../models/equipamento/equipamento.model";
import { Modelo } from "../models/modelo/modelo.model";
import { Usuario } from "../models/usuario/usuario.model";

export interface HistoricoMaquinasInterface {
    id?: number;
    data_inicio?: Date;
    data_final?: Date;
    vigente?: string;
    modelo?: Modelo;
    equipamento?: Equipamento;
    usuario?: Usuario
    
}