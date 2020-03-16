import { Component, OnInit, ViewChild } from '@angular/core';
import { GuiaService } from 'src/app/services/guia/guia.service';
import { TarefaService } from 'src/app/services/tarefa/tarefa.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-listagem-guia',
  templateUrl: './listagem-guia.component.html',
  styleUrls: ['./listagem-guia.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})



export class ListagemGuiaComponent implements OnInit {

  listaItensGuia;
  listaItensGuiaAux; 
  listaDisciplinasGuia;  
  colunas = ['tarefa']
  colItensTrf = ['valor'];
  dataSource;
  trfSelecionada;
  page = 1;
  pageSize = 1;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private guia: GuiaService,
              private ts: TarefaService,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.carregaItensGuia();        
    this.carregaDisciplinas(); 
    this.paginator._intl.itemsPerPageLabel = 'Tarefas por página';
    this.paginator._intl.getRangeLabel = (page: number, pageSize: number, length: number) => {
      let qtdPaginas = Math.ceil((length) / (pageSize));  
      return "Página - " + (page + 1).toString() + " de " + (qtdPaginas).toString() ;
    
    };
   
  }

  open(content, element) {
    this.trfSelecionada = element; 
    this.modalService.open(content, { size: 'lg' });
  }

  carregaItensGuia(){
    this.guia.getItensGuia().subscribe(
      (data)=>{          
        this.listaItensGuiaAux = data;   
        this.filtraDisciplina(1);     
      }
    );
  }

  carregaDisciplinas(){
    this.ts.getDisciplinas().subscribe(
      (data)=>{
        this.listaDisciplinasGuia = data; 
      }
    );
  }

  filtraDisciplina(id){
    this.listaItensGuia = [];
    for(let i of this.listaItensGuiaAux){

      if(i.disciplina == id){
        this.listaItensGuia.push(i);
      }

    }  
    this.dataSource = new MatTableDataSource(this.listaItensGuia);
    this.dataSource.paginator = this.paginator;
    this.dataSource.paginator.firstPage();
  }

  agrupaComplexidadesTrf(itensTrf){
    let complexidades = new Set();
    let res = [];

    for(let i of itensTrf){
      complexidades.add(i.complexidade);
    }

    for(let i of complexidades){
      res.push(i);
    }

    return res;
  }

  filtraTrfPorComplexidade(itens, complex){

    let res = [];
    for(let i of itens){
      if(i.complexidade == complex){
        res.push(i);
      }
    }

    return res;
  }

  isNull(obj){
    return typeof(obj) == 'object'; 
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
 
  }

  filtraVlrNull(vlr){
    return this.isNull(vlr) ? "N/A" : vlr;
  }

}
