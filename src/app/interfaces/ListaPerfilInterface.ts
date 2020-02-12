import { Perfil } from '../models/perfil/perfil.model';

export interface ListaPerfilInterface {
    id: number;
    dtCriacao: Date;
    dtExclusao: Date;
    status: number;
    perfil: Perfil;
}