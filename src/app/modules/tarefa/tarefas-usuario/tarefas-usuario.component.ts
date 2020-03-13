import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { TarefaService } from 'src/app/services/tarefa/tarefa.service';
import { NotifierService } from 'angular-notifier';
import { UsuarioService } from '../../usuario/usuario.service';
import { NgbModalConfig, NgbModal, NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { SituacaoService } from 'src/app/services/situacao/situacao.service';

@Component({
  selector: 'app-tarefas-usuario',
  templateUrl: './tarefas-usuario.component.html',
  styleUrls: ['./tarefas-usuario.component.css'],
  providers: [NgbModalConfig, NgbModal, NgbTooltip]
})
export class TarefasUsuarioComponent implements OnInit {

  btnItem = false;
  idUsu: string;
  idOf: string;
  listaDisciplinas: Array<any>;
  listaDisciplinasAux: Array<any>;
  listaItensGuia: Array<any>;
  listaItensGuiaAux: Array<any>;
  listaTarefas: Array<any>;
  perfil: string;
  form: FormGroup;
  valorPlanejado: number;
  valorExecutado: number;
  trfAtual;
  listaSituacoes: Array<any>;
  sitForm: FormArray;
  opFormTrf: String = "Salvar";
  numOf;
  page = 1;
  pageSize = 15;
  itemSelecionado = "";
  tabAtiva = 'minhas-tarefas';
  listaComponentesTrf = [];
  listaComplexidadesTrf = [];
  tarefaSelecionada;


  colunas = ['numTarefa', 'historia', 'artefato', 'sprint', 'situacao', 'quantidade', 'complexidade', 'valor', 'acoes'];

  constructor(private route: ActivatedRoute,
              private ts: TarefaService,
              private nt: NotifierService,
              private us: UsuarioService,
              config: NgbModalConfig, 
              private modalService: NgbModal,
              private ss: SituacaoService) {}

  ngOnInit() {

    this.idUsu = this.route.snapshot.paramMap.get("idUsu");
    this.idOf = this.route.snapshot.paramMap.get("idOf");

    this.form = new FormGroup({
      historia:     new FormControl(),
      sprint:       new FormControl(),
      observacao:   new FormControl(),
      artefato:     new FormControl(),
      perfil:       new FormControl(),
      disciplina:   new FormControl(),
      item:         new FormControl(),
      quantidade:   new FormControl(),
      numTarefa:    new FormControl(),
      componente:   new FormControl(),
      complexidade: new FormControl()
      
    });
    this.form.controls.disciplina.disable();

    this.form.get("perfil").valueChanges.subscribe(
      (valor) => {       
        if(valor != null && valor != 0){
          this.form.controls.disciplina.enable();
          this.form.controls.disciplina.setValue(0);
        }else{
          this.form.controls.disciplina.disable();
          this.form.controls.disciplina.setValue(0);          
        }
        
      }
    );

    this.form.get("disciplina").valueChanges.subscribe(
      (valor) => {
      
        if(this.form.controls.disciplina.value != 0 && this.form.controls.disciplina.value != null){
          this.btnItem = true;
        }else{
          this.btnItem = false;
        }

        this.itemSelecionado = "";
        this.listaComponentesTrf = [];   
        this.listaComplexidadesTrf = [];
        this.tarefaSelecionada = null;  

      }
    );

    this.carregaForm();
    this.buscaTarefas();
    this.carregaSituacoes();

    this.ts.getNumOf(this.idOf).subscribe(
      (data)=>{
        this.numOf = data;
      }
    );

  }

  resetForm(){ 
    this.form.reset();
    this.opFormTrf = "Salvar"
    this.form.controls.perfil.setValue(0);

  }

  editaTarefa(tarefa){  
    
    this.tabAtiva = 'nova-tarefa';
    this.opFormTrf = "Atualizar"
    this.form.controls.historia.setValue(tarefa.historia);
    this.form.controls.observacao.setValue(tarefa.observacao);
    this.form.controls.sprint.setValue(tarefa.sprint);
    this.form.controls.artefato.setValue(tarefa.artefato);
    this.form.controls.numTarefa.setValue(tarefa.numTarefa);
    this.form.controls.quantidade.setValue(tarefa.quantidade);
    
  
    if(tarefa.perfil == "Alta"){
      this.form.controls.perfil.setValue(2);
    }else{
      this.form.controls.perfil.setValue(1);
    }

    this.form.controls.disciplina.setValue(tarefa.disciplina); 
    this.filtraItensGuia();
    this.form.controls.item.setValue(tarefa.idTrfGuia);
    
    this.itemSelecionado = this.getItemName(this.form.controls.item.value);
  }


  alteraSituacaoTrf(idSit, idTrf){

    let param = {idTrf: idTrf, idSit: idSit};
    this.ts.alteraSitTarefa(param).subscribe(
      (data)=>{
        if(data.status == 200){
          this.nt.notify("success", "Situação da tarefa alterada com sucesso");
          this.buscaTarefas();
        }
      }
    );
  }

  
  excluiTarefa(){
    this.ts.deletaTarefa(this.trfAtual).subscribe(
      (data)=>{
        if(data.status == 200){
          this.nt.notify("success", "Tarefa excluída com sucesso");
          this.resetForm();
        }
        this.buscaTarefas();
      }
    );
  }

  carregaSituacoes(){
    this.ss.getSituacoes().subscribe(
      (data) =>{
        this.listaSituacoes = data;
      }
    );
  }


  tarefaAtual(trf){
    this.trfAtual = trf;
  }

  open(content) {
    this.modalService.open(content);
  }

  buscaTarefas(){
    this.valorPlanejado = 0;
    this.valorExecutado = 0;
    this.listaTarefas = new Array<any>();

    this.ts.getTarefasUsu(this.idUsu, this.idOf).subscribe(
      (data => {
        this.listaTarefas = data;
        
        for(let i of this.listaTarefas){
          if(i.fk_situacao == 8 || i.fk_situacao == 4){
            this.valorExecutado += i.valor;
          }

          if(i.fk_situacao != 2 && i.fk_situacao != 5){
            this.valorPlanejado += i.valor;
          }
        }
      })
    );
  }

  carregaForm(){    

    this.ts.getItensGuia().subscribe(
      (data)=>{
        this.listaItensGuiaAux = data;
      }
    );

    this.ts.getDisciplinas().subscribe(
      (data)=>{        
        this.listaDisciplinasAux = data;

        this.us.getPerfilUsuario(this.idUsu).subscribe(
         
          (data)=>{
            if(data['descricao'] == 'Alta'){
              this.form.controls.perfil.disable();
              this.form.controls.perfil.setValue(2);        
            }else if(data['descricao'] == 'Baixa'){
              this.form.controls.perfil.disable();
              this.form.controls.perfil.setValue(1);           
            } 

          }
        );    
      }
    );
  }

  setaTab(op){
    this.tabAtiva = op;
  }

  //Se todos os items possuírem quantidade, então essa tarefa é controlada por quantidade
  possuiQuantidade(trf){
  
    for(let i of trf.itens){

      if(typeof (i.quantidade) == 'object'){
        return false;
      } 

    }

    return true;
  }

  possuiComponente(trf){
    
    for(let i of trf.itens){

      if(typeof (i.componente) == 'object'){
        return false;
      } 

    }

    return true;        
  }


  filtraItensGuia(){

    this.listaItensGuia = new Array<any>();

    for(let i of this.listaItensGuiaAux){
      if(i.disciplina == this.form.controls.disciplina.value){
        this.listaItensGuia.push(i);
      }
    }
 
  }

  filtraDisciplinas(){
    //Disciplina default
    this.listaDisciplinas = new Array<any>({
      id: 0,
      descricao: "Selecione uma Disciplina"
    });

    for(let i of this.listaDisciplinasAux){
 
      if(this.form.controls.perfil.value == 1){

        if(i.perfil == 'Baixa'){
          this.listaDisciplinas.push(i);
        }

      }
 
      if(this.form.controls.perfil.value == 2){     
         
        if(i.perfil == 'Alta'){
          this.listaDisciplinas.push(i);
        }

      }
      
      if(i.perfil == 'Baixa/Alta'){
        this.listaDisciplinas.push(i);
      }
    }
  }

  selecionaTarefa(trf){

    this.tarefaSelecionada = trf; 

    this.listaComponentesTrf = [];
    this.form.controls.componente.setValue("");

    this.listaComplexidadesTrf = [];
    this.form.controls.complexidade.setValue("");

    if(this.possuiComponente(trf)){
      this.carregaComponentesTarefa(trf);
    }    

    if(!this.possuiQuantidade(trf)){
      this.carregaComplexidadesTarefa(trf);
    }

  
    this.itemSelecionado = trf.tarefa + ' - ' + trf.descricao_tarefa;
    this.form.controls.componente.setValue("");
  }

  carregaComponentesTarefa(trf){
    let setComponentes = new Set();    

    for(let i of trf.itens){
      setComponentes.add(i.componente);
    }
    
    for(let i of setComponentes){
      this.listaComponentesTrf.push(i);
    }
  }

  carregaComplexidadesTarefa(trf){
    let setComplexidades = new Set();    

    for(let i of trf.itens){
      setComplexidades.add(i.complexidade);
    }
    
    this.listaComplexidadesTrf.push('Selecione uma Complexidade');
    for(let i of setComplexidades){
      this.listaComplexidadesTrf.push(i);
    }
  }

  buscaItemGuia(){
    let itens = this.tarefaSelecionada.itens;
    let numTarefaSelecionada: string;

    //busca pela quantidade dentro do componente informado
    if(this.possuiComponente(this.tarefaSelecionada) && this.possuiQuantidade(this.tarefaSelecionada)){
        
      for(let i of itens){

        if(this.form.controls.componente.value == i.componente){
          numTarefaSelecionada = i.id_item;  

          if(this.form.controls.quantidade.value <= i.quantidade){
            break;
          }  
        }
      }      
    }

    //busca pelo componente e complexidade
    if(this.possuiComponente(this.tarefaSelecionada) && !this.possuiQuantidade(this.tarefaSelecionada)){
      
      for(let i of itens){
        if(i.componente   == this.form.controls.componente.value &&
           i.complexidade == this.form.controls.complexidade.value){

              numTarefaSelecionada = i.id_item;
           }
      }
    }

    //busca pela quantidade
    if(!this.possuiComponente(this.tarefaSelecionada) && this.possuiQuantidade(this.tarefaSelecionada)){
      
      for(let i of itens){        
        numTarefaSelecionada = i.id_item;  
        if(this.form.controls.quantidade.value <= i.quantidade){
          break;
        }   
      }
    }

    //busca pela complexidade
    if(!this.possuiComponente(this.tarefaSelecionada) && !this.possuiQuantidade(this.tarefaSelecionada)){
     
      for(let i of itens){  
        if(i.complexidade == this.form.controls.complexidade.value){
          numTarefaSelecionada = i.id_item;
        }
      }   

    } 

    return numTarefaSelecionada;
  }

  submit(){  

    if(!this.validaForm(this.form.value)){
      this.nt.notify("error", "Todos os campos devem ser preenchidos");
    }else{     

      this.tabAtiva = 'minhas-tarefas';

      let aux = this.form.value;
      aux.numItemGuia = this.buscaItemGuia();   
          
      if(aux.numItemGuia == null){
        this.nt.notify("error", "Houve um erro ao identificar o item do guia, favor contatar ao admistrador do sistema");
      }

      if(this.opFormTrf == "Salvar"){

        aux.usu = this.idUsu;
        aux.of = this.idOf; 

        this.ts.insereTarefa(aux).subscribe(
          (data)=>{
            if(data.status == 200){             
              this.nt.notify("success", "Tarefa " + this.form.controls.numTarefa.value + " salva com sucesso");
              this.buscaTarefas();
              this.form.reset();
            }
          },
          (error)=>{
            this.nt.notify("error", error.error.text);
          }
        );  
          
      }else{ 
        aux.idTrfOf = this.trfAtual;
        this.ts.atualizaTarefaOf(aux).subscribe(
          (data)=>{
            if(data.status == 200){
              this.nt.notify("success", "Tarefa " + this.form.controls.numTarefa.value + " Alterada com sucesso");
              this.buscaTarefas();
              this.form.reset();
              this.opFormTrf = "Salvar";
            }
          }
        );
        
      }  
    }

  }

  validaForm(value){

    if(value.artefato   == null || value.artefato == "")  return false;
    if(value.disciplina == null)  return false;
    if(value.historia   == null || value.historia == "")  return false;
    if(value.perfil     == null)  return false;    
    if(value.sprint     == null)  return false;
    if(value.numTarefa  == null || value.numTarefa == "")  return false;
  
    return true;
  }

  getItemName(id){
    let res = "";
  
    for(let i of this.listaItensGuiaAux){
      if(i.id == id){
        res = i.item;        
        break;
      }
    }
    return res;
  }




}
