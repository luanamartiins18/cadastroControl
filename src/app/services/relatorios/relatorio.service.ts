import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RelatorioFiltro } from 'src/app/models/relatorio/relatorio.filtro.model';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {

  constructor(private http: HttpClient) { }

  getOrdensFornecimentoConcluidas() {
    return this.http.get(environment.api + "ordens-fornecimento-concluida");
  }

  getRelatorioOrcamento(idOf) {
    return this.http.get(environment.api + "relatorio-orcamento/" + idOf);
  }

  getRelatorioEntrega(idOf) {
    return this.http.get(environment.api + "relatorio-entrega/" + idOf);
  }

  getRelatorioOrcamentoXlsx(idOf) {
    return this.http.get(environment.api + "relatorio-orcamento/xlsx/" + idOf, { responseType: 'blob' });
  }

  getRelatorioEntregaXlsx(idOf) {
    return this.http.get(environment.api + "relatorio-entrega/xlsx/" + idOf, { responseType: 'blob' });
  }

  getRelatorioOrcamentoTxt(idOf) {
    return this.http.get(environment.api + "relatorio-orcamento/txt/" + idOf, { responseType: 'blob' });
  }

  getRelatorioEntregaTxt(idOf) {
    return this.http.get(environment.api + "relatorio-entrega/txt/" + idOf, { responseType: 'blob' });
  }

  getRelatorioTeste() {
    return this.http.get(environment.api + 'relatorio-teste', { responseType: 'blob' });
  }

  getRelatorioSiglaReferencia(filtro: RelatorioFiltro, agrupamento: string = "") {
    return this.http.get<any[]>(`${environment.api}relatorio-sigla-referencia/${agrupamento}`, { params: this.paramsFilter(filtro) });
  }

  getRelatorioSiglaReferenciaEvolvido(filtro: RelatorioFiltro, numero_of) {
    filtro.numero_of = numero_of;
    return this.http.get<any[]>(`${environment.api}relatorio-sigla-referencia/`, { params: this.paramsFilter(filtro) });
  }

  getRelatorioSiglaReferenciaXlsx(filtro: RelatorioFiltro) {
    return this.http.get(environment.api + "relatorio-sigla-referencia/xlsx", { responseType: 'blob',params: this.paramsFilter(filtro) });
  }
  getRelatorioSiglaReferencias() {

    return [
      {
        "numero_of": "17382",
        "colaborador": "ERIKA ALMEIDA DE ESPINDOLA",
        "status_of": "Concluída",
        "valor_ustibb": "40",
        "valor": "2440",
        "referencia": "012020",
        "sigla": "CMN",
        "idOrf": "2"
      },
      {
        "numero_of": "17157",
        "colaborador": "ERIKA ALMEIDA DE ESPINDOLA",
        "status_of": "Em Execução",
        "valor_ustibb": "0.5",
        "valor": "30.5",
        "referencia": "082020",
        "sigla": "ACC",
        "idOrf": "3"
      }
    ]
  }

  private paramsFilter(filtro: RelatorioFiltro) {
    let params: any = {};
    if (filtro.numero_of) {
      params['numero_of'] = filtro.numero_of;
    }
    if (filtro.sigla) {
      params['sigla'] = filtro.sigla;
    }
    if (filtro.referencia) {
      params['referencia'] = filtro.referencia;
    }
    return params;
  }

}
