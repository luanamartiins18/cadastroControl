import { ListaPerfilInterface } from 'src/app/interfaces/ListaPerfilInterface';
import { Perfil } from '../perfil/perfil.model';

export class ListaPerfil implements ListaPerfilInterface {
  id: number;
  dtCriacao: Date;
  dtExclusao: Date;
  status: number;
  perfil: Perfil;
}
