import { Component, OnInit } from '@angular/core';
import { OrdemFornecimento } from 'src/app/models/ordemfornecimento/ordem-fornecimento';
import { OrdemFornecimentoService } from 'src/app/services/OrdemDeFornecimento/ordem-fornecimento-service';

@Component({
  selector: 'tabela-of',
  templateUrl: './tabela-of.component.html',
  styleUrls: ['./tabela-of.component.css']
})
export class TabelaOfComponent implements OnInit {

  listaOf: Array<OrdemFornecimento>;
  colunas = ['numOf', 'sigla', 'referencia', 'responsavelT', 'gerenteT', 'situacaoAlm', 'situacaoGenti', 'dtEncaminhamento', 'dtAbertura', 'dtPrevisao', 'dtEntrega', 'dtAceite']


  constructor(private ofService: OrdemFornecimentoService) { }

  ngOnInit() {
    this.carregaDadosOf();
  }

  carregaDadosOf(){
    this.ofService.getOrdemFornecimento().subscribe(
      (lstOf: Array<OrdemFornecimento>) => {
        this.listaOf = lstOf;       
      }      
    );  
  }

  primeiroNome(nome: string){
    let aux = nome.split(" ");
    let res = aux[0] + " " +  aux[2];    
    return res;
  }

}
