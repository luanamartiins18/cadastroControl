import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { RelatorioService } from 'src/app/services/relatorios/relatorio.service';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RelatorioFiltro } from 'src/app/models/relatorio/relatorio.filtro.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-relatorio-sigla',
  templateUrl: './relatorio-sigla.component.html',
  styleUrls: ['./relatorio-sigla.component.css']
})
export class RelatorioSiglaComponent implements OnInit {
  panelOpenState = false;
  @ViewChild("content", { static: true }) modalContent: TemplateRef<any>;
  relatorioAux = new Array;
  relatorioReduzido = new Array;
  relatorioExpandido = new Array;
  relatorioEnvolvidos = new Array;
  relatorioSigla = new Array;
  colunasReduzido = ['sigla', 'qtd', 'valor_ustibb', 'valor', 'referencia'];
  colunasExpandido = ['numero_of', 'valor_ustibb', 'valor', 'status_of'];
  colunasEnvolvidos = ['colaborador', 'valor_ustibb', 'valor'];
  urlTotalXlsx;
  filtro: RelatorioFiltro = new RelatorioFiltro();
  filtroDetalhado: RelatorioFiltro = new RelatorioFiltro();
  qtd: number = 0;
  valor_ustibb: number = 0;
  valor: number = 0;
  qtdDetalhada: number = 0;
  valor_ustibbDetalhada: number = 0;
  valorDetalhada: number = 0;

  constructor(
    private rs: RelatorioService,
    private modalService: NgbModal,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.buscaRelatorio();
  }

  buscaRelatorio() {
    this.rs.getRelatorioSiglaReferencia(this.filtro, "sigla").subscribe(
      res => {
        this.relatorioReduzido = res;
        this.relatorioAux = res;
        this.totalizadores();
      }, err => { console.error(err) }
    )
  }

  detalha(row) {
    this.filtroDetalhado = JSON.parse(JSON.stringify(this.filtro));
    this.filtroDetalhado.sigla = row.sigla;
    this.filtroDetalhado.referencia = row.referencia;
    this.rs.getRelatorioSiglaReferencia(this.filtroDetalhado, "numero_of").subscribe(
      res => {
        this.relatorioExpandido = res;
        this.totalizadoresDetalhado();
        this.modalService.open(this.modalContent);
      }, err => { console.error(err) }
    )
  }

  expandir(row) {
    if (row.relatorioEnvolvidos) {
      return;
    }
    this.rs.getRelatorioSiglaReferenciaEvolvido(this.filtroDetalhado, row.numero_of).subscribe(
      res => {
        row.relatorioEnvolvidos = res;
      }, err => { console.error(err) }
    )
  }

  totalizadores() {
    this.qtd = 0;
    this.valor_ustibb = 0;
    this.valor = 0;
    this.relatorioReduzido.forEach((obj) => {
      this.qtd += obj.qtd;
      this.valor_ustibb += obj.valor_ustibb
      this.valor += obj.valor;
    })
  }

  totalizadoresDetalhado() {
    this.qtdDetalhada = 0;
    this.valor_ustibbDetalhada = 0;
    this.valorDetalhada = 0;
    this.relatorioExpandido.forEach((obj) => {
      this.qtdDetalhada++;
      this.valor_ustibbDetalhada += obj.valor_ustibb
      this.valorDetalhada += obj.valor;
    })
  }

  filtraRelatorio() {
    this.relatorioReduzido = [];
    for (let i of this.relatorioAux) {
      if (i.referencia == this.filtro.referencia) {
        this.relatorioReduzido.push(i);
      }
    }
    this.totalizadores();
  }

  resetaRelatorio() {
    this.relatorioReduzido = this.relatorioAux;
    this.totalizadores();
    this.filtro.referencia = null;
  }

  getRelatorioSiglaReferenciaXlsx(filtro: RelatorioFiltro) {
    this.rs.getRelatorioSiglaReferenciaXlsx(filtro).subscribe(
      data => {
        console.log(data);
        this.urlTotalXlsx = window.URL.createObjectURL(data);
        console.log(this.urlTotalXlsx);
        const url = window.URL.createObjectURL(data);
        const link = document.createElement('a');
        let nameFile = (this.filtro.referencia ? this.filtro.referencia += "-" : "") + 'Relatorio-Sigla-';
        nameFile += this.filtroDetalhado.sigla || "Total";
        link.href = url;
        link.download = nameFile + '.xlsx';
        link.click();
      }
    );
  }
}