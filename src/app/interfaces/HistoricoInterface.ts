import { Funcao } from "../models/cargo/funcao.model";
import { Usuario } from "../models/usuario/usuario.model";

export interface HistoricoInterface {
id: number;
data_inicio: Date;
data_final: Date;
cargo?: Funcao;
usuario?: Usuario
}