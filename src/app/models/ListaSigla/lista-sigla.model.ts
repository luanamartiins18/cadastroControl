import { ListaSiglaInterface } from 'src/app/interfaces/ListaSiglaInterface';
import { Sigla } from '../sigla/sigla.model';

export class ListaSigla implements ListaSiglaInterface{
    id: number;
    dtCriacao: Date;
    dtExclusao: Date;
    status: number;
    sigla: Sigla;
}
