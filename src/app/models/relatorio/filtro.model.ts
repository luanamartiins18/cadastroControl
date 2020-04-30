import { FiltroInterface } from 'src/app/interfaces/FiltroInterface';

export class Filtro implements FiltroInterface {
  sigla?: string;
  numOf?: string;
  referencia?: string;

  constructor(
    sigla: string = "",
    numOf: string = "",
    referencia: string = ""
  ) {

  }
}