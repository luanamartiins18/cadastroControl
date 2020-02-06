import { Component, OnInit, Input } from '@angular/core';
import { OrdemFornecimento } from 'src/app/models/ordemfornecimento/ordem-fornecimento';

@Component({
  selector: 'tabela-of',
  templateUrl: './tabela-of.component.html',
  styleUrls: ['./tabela-of.component.css']
})
export class TabelaOfComponent implements OnInit {
  @Input() listaOf: Array<OrdemFornecimento>;

  constructor() { }

  ngOnInit() {
    
  }

}
