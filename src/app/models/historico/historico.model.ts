import { HistoricoInterface } from 'src/app/interfaces/HistoricoInterface';
import { Funcao } from '../cargo/funcao.model';
import { Usuario } from '../usuario/usuario.model';

export class Historico implements HistoricoInterface {
  id: number;
  data_inicio: Date;
  data_final: Date;
  cargo?: Funcao;
  usuario?: Usuario

  constructor(
    id?: number,
    data_final?: Date,
    data_inicio?: Date,
    cargo?: Funcao,
    usuario?: Usuario
  ) { }
}

