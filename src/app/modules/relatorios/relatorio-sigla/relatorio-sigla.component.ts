import { Component, OnInit } from '@angular/core';
import { RelatorioService } from 'src/app/services/relatorios/relatorio.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-relatorio-sigla',
  templateUrl: './relatorio-sigla.component.html',
  styleUrls: ['./relatorio-sigla.component.css']
})
export class RelatorioSiglaComponent implements OnInit {

  filtroReferencia = '';
  relatorio = [];
  relatorioAux = [];
  colunas = ['numero_of', 'colaborador', 'status_of', 'valor_ustibb', 'valor', 'referencia', 'sigla'];

  constructor(private rs: RelatorioService,              
              private fb: FormBuilder) { }

  ngOnInit() {
    this.buscaRelatorio();
  }

  buscaRelatorio(){
    setTimeout(
      () => {
        this.relatorio = this.rs.getRelatorioSiglaReferencia();
        this.relatorioAux = this.relatorio;
      }, 500
    );
  }

  filtraRelatorio(){    
    this.relatorio = [];
    for(let i of this.relatorioAux){    
      if(i.referencia == this.filtroReferencia){
        this.relatorio.push(i);
      }
    }
  }

  resetaRelatorio(){
    this.relatorio = this.relatorioAux;
  }

  agrupaRelatorioPorSigla(){
    console.log(this.relatorio);
    
    


  }


}

