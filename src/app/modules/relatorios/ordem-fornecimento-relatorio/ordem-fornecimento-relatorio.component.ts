import { Component, OnInit } from '@angular/core';
import { RelatorioService } from 'src/app/services/relatorios/relatorio.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-ordem-fornecimento-relatorio',
  templateUrl: './ordem-fornecimento-relatorio.component.html',
  styleUrls: ['./ordem-fornecimento-relatorio.component.css']
})
export class OrdemFornecimentoRelatorioComponent implements OnInit {

  listaOrdensForn;
  colunas = ['num_of', 'referencia', 'sigla', 'responsavel_t', 'gerente_t', 'usti_bb', 'valor'];
  dataSource = new MatTableDataSource<any>();

  constructor(private rs: RelatorioService) { }

  ngOnInit() {
    this.getOrdensForn();
  }

  getOrdensForn() {
    this.rs.getOrdensFornecimentoConcluidas().subscribe(
      data => {
        this.listaOrdensForn = data;
        this.dataSource = new MatTableDataSource<any>(this.listaOrdensForn);
        console.log(this.listaOrdensForn);
      }
    );
  }
}
