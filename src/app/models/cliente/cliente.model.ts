import { ClienteInterface } from 'src/app/interfaces/ClienteInterface';

export class Cliente implements ClienteInterface {
  id: number;
  descricao: string;
}