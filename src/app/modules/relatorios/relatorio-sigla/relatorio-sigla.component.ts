import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { RelatorioService } from 'src/app/services/relatorios/relatorio.service';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Sigla } from 'src/app/models/sigla/sigla.model';
import { Filtro } from 'src/app/models/relatorio/filtro.model';

@Component({
  selector: 'app-relatorio-sigla',
  templateUrl: './relatorio-sigla.component.html',
  styleUrls: ['./relatorio-sigla.component.css']
})
export class RelatorioSiglaComponent implements OnInit {

  @ViewChild("content", { static: true }) modalContent: TemplateRef<any>;
  relatorioAux = new Array;
  relatorioReduzido = new Array;
  relatorioExpandido = new Array;
  relatorioEnvolvidos = new Array;
  colunasReduzido = ['sigla', 'qtd', 'valor_ustibb', 'valor', 'referencia'];
  colunasExpandido = ['numero_of', 'valor_ustibb', 'valor'];
  colunasEnvolvidos = ['colaborador', 'valor_ustibb', 'valor'];
  urlTotalXlsx;
  filtro: Filtro = new Filtro();

  constructor(
    private rs: RelatorioService,
    private modalService: NgbModal,
    private fb: FormBuilder) { }


  ngOnInit() {
    this.buscaRelatorio();
  }

  buscaRelatorio() {
    this.rs.getRelatorioSiglaReferencia(this.filtro).subscribe(
      res => {
        this.relatorioReduzido = res;
        this.relatorioAux = res;
      }, err => { console.error(err) }
    )
  }

  detalha(row) {
    this.rs.getRelatorioSiglaReferencia(row.sigla).subscribe(
      res => {
        this.relatorioReduzido = res;
        this.modalService.open(this.modalContent);// vai chamar o service depois abre o modal
      }, err => { console.error(err) }
    )
  }

  expandir(row) {
    this.rs.getRelatorioSiglaReferencia(row.sigla).subscribe(
      res => {
        this.relatorioReduzido = res;
        this.modalService.open(this.modalContent);// vai chamar o service depois abre o modal
      }, err => { console.error(err) }
    )
  }


  filtraRelatorio() {
    this.relatorioReduzido = [];
    for (let i of this.relatorioAux) {
      if (i.referencia == this.filtro.referencia) {
        this.relatorioReduzido.push(i);
      }
    }
  }

  resetaRelatorio() {
    this.relatorioReduzido = this.relatorioAux;
  }

  agrupaRelatorioPorSigla() {
    console.log(this.relatorioReduzido);

  }

  getRelatorioSiglaReferenciaXlsx() {
    this.rs.getRelatorioSiglaReferenciaXlsx().subscribe(
      data => {
        console.log(data);
        this.urlTotalXlsx = window.URL.createObjectURL(data);
        console.log(this.urlTotalXlsx);
        const url = window.URL.createObjectURL(data);
        const link = document.createElement('a');
        let nameFile = (this.filtro.referencia ? this.filtro.referencia+="-" : "") +'Relatorio-Sigla-';
        nameFile += this.filtro.sigla || "Total";
        link.href = url;
        link.download = nameFile + '.xlsx';
        link.click();
      }
    );
  }

}