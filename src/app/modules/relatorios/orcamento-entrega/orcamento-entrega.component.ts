import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RelatorioService } from 'src/app/services/relatorios/relatorio.service';
import { TarefaService } from 'src/app/services/tarefa/tarefa.service';

@Component({
  selector: 'app-orcamento-entrega',
  templateUrl: './orcamento-entrega.component.html',
  styleUrls: ['./orcamento-entrega.component.css']
})
export class OrcamentoEntregaComponent implements OnInit {

  idOf = this.route.snapshot.paramMap.get("id");
  btnSelecionado = 'orcamento';
  relatorioOrcamento;
  relatorioEntrega;
  numeroOf;
  urlRelOrcamentoXlsx;
  urlRelEntregaXlsx;

  constructor(private route: ActivatedRoute,
    private rs: RelatorioService,
    private ts: TarefaService) { }

  ngOnInit() {
    this.buscaRelatorioOrcamento();
    this.buscaRelatorioEntrega();
    this.buscaNumeroOf();
  }

  setaBotao(op) {
    this.btnSelecionado = op;
  }

  buscaNumeroOf() {
    this.ts.getNumOf(this.idOf).subscribe(
      data => {
        this.numeroOf = data;
      }
    );
  }

  buscaRelatorioEntrega() {
    this.rs.getRelatorioEntrega(this.idOf).subscribe(
      data => {
        this.relatorioEntrega = data;
        this.calculaSomaUstiBB(this.relatorioEntrega);
      }
    );
  }

  buscaRelatorioOrcamento() {
    this.rs.getRelatorioOrcamento(this.idOf).subscribe(
      data => {
        this.relatorioOrcamento = data;
        this.calculaSomaUstiBB(this.relatorioOrcamento);
      }
    );
  }

  calculaSomaUstiBB(listaUsuOf) {
    let soma = 0;
    let somaGeral = 0
    for (let i of listaUsuOf.listaUsuOf) {
      soma = 0;
      for (let j of i.listaTarefas) {
        for (let k of j.listaItens) {
          soma += k.vlrUstiBB;
          somaGeral += k.vlrUstiBB;
        }
      }
      i.somaUstiBB = soma;
    }
    listaUsuOf.listaUsuOf.somaGeral = somaGeral;
  }

  getRelatorioOrcamentoXlsx() {
    this.rs.getRelatorioOrcamentoXlsx(this.idOf).subscribe(
      data => {
        console.log(data);
        this.urlRelOrcamentoXlsx = window.URL.createObjectURL(data);
        console.log(this.urlRelOrcamentoXlsx);
        const url = window.URL.createObjectURL(data);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Relatorio-Orcamento-' + this.numeroOf + '.xlsx';
        link.click();
      }
    );
  }

  getRelatorioEntregaXlsx() {
    this.rs.getRelatorioEntregaXlsx(this.idOf).subscribe(
      data => {
        console.log(data);
        this.urlRelEntregaXlsx = window.URL.createObjectURL(data);
        console.log(this.urlRelEntregaXlsx);
        const url = window.URL.createObjectURL(data);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Relatorio-Entrega-' + this.numeroOf + '.xlsx';
        link.click();
      }
    );
  }

  getRelatorioOrcamentoTxt() {
    this.rs.getRelatorioOrcamentoTxt(this.idOf).subscribe(
      data => {
        const url = window.URL.createObjectURL(data);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Relatorio-Orcamento-' + this.numeroOf + '.txt';
        link.click();
      }
    );
  }

  getRelatorioEntregaTxt() {
    this.rs.getRelatorioEntregaTxt(this.idOf).subscribe(
      data => {
        const url = window.URL.createObjectURL(data);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Relatorio-Entrega-' + this.numeroOf + '.txt';
        link.click();
      }
    );
  }
}
