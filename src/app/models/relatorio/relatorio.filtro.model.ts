import { RelatorioFiltroInterface } from 'src/app/interfaces/RelatorioFiltroInterface';

export class RelatorioFiltro implements RelatorioFiltroInterface {
  sigla?: string;
  numero_of?: string;
  referencia?: string;

  constructor(
    sigla: string = "",
    numero_of: string = "",
    referencia: string = ""
  ) {

  }
}