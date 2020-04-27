import { Component, OnInit, ViewChild } from '@angular/core';
import { GuiaService } from 'src/app/services/guia/guia.service';
import { TarefaService } from 'src/app/services/tarefa/tarefa.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotifierService } from 'angular-notifier';
import { UsuarioService } from '../../../services/usuario/usuario.service';

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

  valorVersao = "";
  listaItensGuia;
  listaItensGuiaAux; 
  listaDisciplinasGuia;  
  colunas = ['tarefa']
  colItensTrf = ['valor'];
  dataSource;
  trfSelecionada;
  page = 1;
  pageSize = 1;
  cargoUsuario;
  versaoAtualGuia = "";
  itemSelecionadoApagar;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private guia: GuiaService,
              private ts: TarefaService,
              private modalService: NgbModal,
              private nt: NotifierService, 
              private us: UsuarioService) { }

  ngOnInit() {
    this.inicializaPagina();
    this.getCargoUsuario();
    this.getVersaoAtualGuia();
    this.paginator._intl.itemsPerPageLabel = 'Tarefas por página';
    this.paginator._intl.getRangeLabel = (page: number, pageSize: number, length: number) => {
      let qtdPaginas = Math.ceil((length) / (pageSize));  
      return "Página - " + (page + 1).toString() + " de " + (qtdPaginas).toString() ;
    
    };
   
  }

  getCargoUsuario(){
    let re: string = sessionStorage.getItem("colaborador");
    console.log(re);
    this.us.getCargoUsuario(re).subscribe(
      data => {
        this.cargoUsuario = data;
      }
    );    
  }

  getVersaoAtualGuia(){
    this.guia.getVersaoAtualGuia().subscribe(
      data => {
        this.versaoAtualGuia = data['descricao'];
      }
    );
  }

  inicializaPagina(){
    this.carregaItensGuia();        
    this.carregaDisciplinas(); 
  }

  open(content, element) {
    this.trfSelecionada = element; 
    this.modalService.open(content, { size: 'lg' });
    console.log(this.trfSelecionada)
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

  submit(){
    console.log(this.trfSelecionada);
    this.guia.atualizaTarefaGuia(this.trfSelecionada).subscribe(
      (data)=>{
        if(data.status == 200){
          console.log(data);
          this.inicializaPagina();
          this.nt.notify("success", "Dados da Tarefa alterados com sucesso");
        }else{
          this.nt.notify("error", "Houve um erro ao gravar as informações, favor contatar o administrador do sistema");
        }
     
      }
    );
  }

  atualizaTrfSelecionada(complexidade, componente, item, valor){
    if(item == 'descricao_trf') this.trfSelecionada.descricao_tarefa = valor;
    else if(item == 'plataforma') this.trfSelecionada.plataforma = valor;
    else{

      for(let i of this.trfSelecionada.itens){
        //Se a complexidade for igual ou o item não tem componente ou esse é o componente certo
        if(i.complexidade == complexidade && (i.componente == componente || this.isNull(componente))){          
          if(item == 'valor') i.valor                         = +valor;
          if(item == 'componente') i.componente               = valor;
          if(item == 'quantidade') i.quantidade               = +valor;
          if(item == 'descricao_complex') i.descricao_complex = valor;  
          break;
        }
      }
    }

  }
  openModalVersao(content) {
    this.modalService.open(content);
    document.getElementById("inputVersaoGuia").focus();
  }
  
  submitVersaoGuia(){

    let versaoGuiaObj = {"versao": this.valorVersao};

    this.guia.atualizaVersaoGuia(versaoGuiaObj).subscribe(
      data => {
        if(data.status == 200){
          this.nt.notify("success", "Versão do guia atualizada com sucesso");
          this.getVersaoAtualGuia();
        }else{
          this.nt.notify("error", "Houve um erro ao gravar as informações");
        }
      }
    );
  }

  onEnter(evt){
    if(evt.key == 'Enter'){
      console.log(document.getElementById("btnCancelar").click());
      this.submitVersaoGuia();
    }
  }

  openModalApagarItem(content, item){
    this.modalService.open(content);
    this.itemSelecionadoApagar = item;
    console.log(document.getElementById("modalApagarItem"));
  }

  excluiItem(){
    this.guia.deletaItemGuia(this.itemSelecionadoApagar).subscribe(
      data => {
        if(data.status == 200){
          this.nt.notify("success", "Item excluído com sucesso");
          this.inicializaPagina();          
        }else{
          this.nt.notify("error", "Falha ao excluir o item");
        }
        document.getElementById("btnFecharModalEditar").click();
      }
    );
  }

}

