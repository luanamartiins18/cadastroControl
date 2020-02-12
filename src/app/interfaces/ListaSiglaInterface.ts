import { Sigla } from '../models/sigla/sigla.model';

export interface ListaSiglaInterface {
    id: number;
    dtCriacao: Date;
    dtExclusao: Date;
    status: number;
    sigla: Sigla;
}