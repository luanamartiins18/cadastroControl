import { Component, OnInit, Input } from '@angular/core';
import { OrdemFornecimento } from 'src/app/models/ordemfornecimento/ordem-fornecimento';
import { HomeParentComponent } from '../home-parent/home-parent.component';

@Component({
  selector: 'tabela-of',
  templateUrl: './tabela-of.component.html',
  styleUrls: ['./tabela-of.component.css']
})
export class TabelaOfComponent implements OnInit {
  @Input() listaOf: Array<OrdemFornecimento>;
  @Input() parent: HomeParentComponent;
  constructor() { }

  ngOnInit() {
    
  }

  retornaPrimeiroNome(nome: string){
    let aux = nome.split(" ");
    let res = aux[0] + " " +  aux[2];    
    return res;
  }

  detalhaOf(row: OrdemFornecimento){
    this.parent.opContainer = 'detalha';
    this.parent.ofDetalha = row; 
  }

}
