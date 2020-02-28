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

  idUsu: string;
  idOf: string;
  listaDisciplinas: Array<any>;
  listaDisciplinasAux: Array<any>;
  listaItensGuia: Array<any>;
  listaItensGuiaAux: Array<any>;
  listaTarefas: Array<any>;
  perfil: string;
  form: FormGroup;
  valorTarefas: number;
  trfAtual;
  listaSituacoes: Array<any>;
  sitForm: FormArray;
  opFormTrf: String = "Salvar";


  colunas = ['historia', 'artefato', 'quantidade', 'sprint', 'numTarefa', 'situacao', 'complexidade', 'valor', 'acoes'];

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
      historia: new FormControl(),
      sprint: new FormControl(),
      observacao: new FormControl(),
      artefato: new FormControl(),
      perfil: new FormControl(),
      disciplina: new FormControl({disabled: true}),
      item: new FormControl(),
      quantidade: new FormControl(),
      numTarefa: new FormControl()
    });

    this.carregaForm();
    this.buscaTarefas();
    this.carregaSituacoes();

  }

  resetForm(){ 
    this.form.reset();
    this.opFormTrf = "Salvar"
  }

  editaTarefa(tarefa){
    //window.scrollTo(0, 0);
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

    this.setaPerfil();
    this.form.controls.disciplina.setValue(tarefa.disciplina); 
    this.setaItem();
    this.form.controls.item.setValue(tarefa.idTrfGuia);
    

  }


  altSit(idSit, idTrf){

    let param = {idTrf: idTrf, idSit: idSit};
    this.ts.alteraSitTarefa(param).subscribe(
      (data)=>{
        if(data.status == 200){
          this.nt.notify("success", "Situção da tarefa alterado com sucesso");
        }
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

  excluiTarefa(){
    this.ts.deletaTarefa(this.trfAtual).subscribe(
      (data)=>{
        if(data.status == 200){
          this.nt.notify("success", "Tarefa excluída com sucesso");
        }
        this.buscaTarefas();
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
    this.valorTarefas = 0;
    this.listaTarefas = new Array<any>();

    this.ts.getTarefasUsu(this.idUsu, this.idOf).subscribe(
      (data => {
        this.listaTarefas = data;
        
        for(let i of this.listaTarefas){
          this.valorTarefas += i.valor;
        }

      })
    );
  }

  carregaForm(){

    this.form.controls.disciplina.disable();
    this.form.controls.item.disable();

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
              this.setaPerfil();
            }else if(data['descricao'] == 'Baixa'){
              this.form.controls.perfil.disable();
              this.form.controls.perfil.setValue(1);
              this.setaPerfil();
            }    
          }
        );    
      }
    );


  }

  setaItem(){
    this.listaItensGuia = new Array<any>();
    this.form.controls.item.setValue(0);
    this.form.controls.item.enable();

    for(let i of this.listaItensGuiaAux){
      if(i.disciplina == this.form.controls.disciplina.value){
        this.listaItensGuia.push(i);
      }
    }
 
  }

  setaPerfil(){

    this.listaDisciplinas = new Array<any>();
    this.form.controls.disciplina.enable(); 
    this.form.controls.disciplina.setValue(0);

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

  submit(){

    
    if(!this.validaForm(this.form.value)){
      this.nt.notify("error", "Todos os campos devem ser preenchidos");
    }else{     
      let aux = this.form.value;

      if(this.opFormTrf == "Salvar"){

        aux.usu = this.idUsu;
        aux.of = this.idOf;    
        
        this.ts.insereTarefa(aux).subscribe(
          (data)=>{
            if(data.status == 200){
              this.nt.notify("success", "Tarefa salva com sucesso");
              this.buscaTarefas();
              this.form.reset();
            }
          },
          (error)=>{
            this.nt.notify("error", error.error.text);
          }
        );    
      }else{
        let aux = this.form.value;
        aux.idTrfOf = this.trfAtual;
        this.ts.atualizaTarefaOf(aux).subscribe(
          (data)=>{
            if(data.status == 200){
              this.nt.notify("success", "Tarefa Alterada com sucesso");
              this.buscaTarefas();
              this.form.reset();
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
    if(value.item       == null)  return false;
    if(value.observacao == null || value.observacao == "")  return false;
    if(value.perfil     == null)  return false;
    if(value.quantidade == null || value.quantidade == "")  return false;
    if(value.sprint     == null)  return false;
    if(value.numTarefa == null || value.numTarefa == "")  return false;
    
    return true;

  }

}
