import { Component, OnInit } from '@angular/core';
import { OrdemFornecimento } from 'src/app/models/ordemfornecimento/ordem-fornecimento';
import { OrdemFornecimentoService } from 'src/app/services/OrdemDeFornecimento/ordem-fornecimento-service';

@Component({
  selector: 'tabela-of',
  templateUrl: './tabela-of.component.html',
  styleUrls: ['./tabela-of.component.css']
})
export class TabelaOfComponent implements OnInit {

  listaOf: Array<any>;
  colunas = ['numOf', 'sigla', 'referencia', 'responsavelT', 'gerenteT', 'situacaoAlm', 'situacaoGenti', 'dtAbertura', 'dtPrevisao', 'dtEntrega', 'dtAceite', 'valorExecutado', 'valorPlanejado']

  constructor(private ofService: OrdemFornecimentoService) { }

  ngOnInit() {
    this.carregaDadosOf();
  }

  carregaDadosOf() {
    this.ofService.getOrdemFornecimento().subscribe(
      (lstOf: Array<OrdemFornecimento>) => {
        this.listaOf = lstOf;
        for (let i of this.listaOf) {
          if (i.valorPlanejado != 0)
            i.perExecutado = (i.valorExecutado * 100) / i.valorPlanejado;
        }
      }
    );
  }

  primeiroNome(nome: string) {
    let aux = nome.split(" ");
    let res = aux[0] + " " + aux[2];
    return res;
  }

  formataReferencia(ref: string) {
    if (ref != null && typeof (ref) == 'string')
      return ref.substring(0, 2) + '/' + ref.substring(2, 6);
    else return "";
  }

  ehNulo(el) {
    return typeof (el) != "string" ? "" : el;
  }
}
