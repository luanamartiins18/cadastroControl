import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { FormArray, FormGroup, FormControl, FormControlName, Validators } from '@angular/forms';
import { TarefaService } from '../../../services/tarefa/tarefa.service';
import { NotifierService } from 'angular-notifier';
import { GuiaService } from 'src/app/services/guia/guia.service';
import { UsuarioService } from '../../../services/usuario/usuario.service';

@Component({
  selector: 'app-nova-tarefa',
  templateUrl: './nova-tarefa.component.html',
  styleUrls: ['./nova-tarefa.component.css']
})
export class NovaTarefaComponent implements OnInit {

  form: FormGroup;
  formItens: FormGroup;

  vlrTeste = "";
  testeItens = "";

  disciplinas;
  complexidades;
  uniMedidas;

  atividades;
  atividadesRepository;

  novaAtividade = false;

  constructor(private ts: TarefaService,
              private nt: NotifierService, 
              private gs: GuiaService) {
    this.buscaDados();    
  }

  ngOnInit() {

    this.criaFormulario();    
    this.onChanges();
    this.getAtividades();

  }

  verificaAtividade(event){    

    let flag = true;

    for(let i of this.atividades){
      if(i.atividade == event.atividade){
        flag = false;
        break;
      }
    }

    if(flag){
      this.novaAtividade = true;
    }else{
      this.novaAtividade = false;
    }

  }

  getAtividades(){
    this.gs.getAtividades().subscribe(
      data => {
        this.atividadesRepository = data;
        this.atividades = data;
      }
    );
  } 

  filtraAtividadePorDisciplina(event){

    this.atividades = this.atividadesRepository.filter(
      dsclp => {        
        return dsclp.disciplina == event.target.value;
      }
    );    
    
    this.form.controls.atividade.setValue(null);
    
  }

  criaFormulario(){

    this.form = new FormGroup({
      disciplina: new FormControl('', Validators.required),
      atividade:  new FormControl('', Validators.required),
      plataforma: new FormControl(''),
      descTarefa: new FormControl('', Validators.required),
      itens:      new FormArray([], Validators.required)
    });

    this.formItens = new FormGroup({
      complexidade: new FormControl('', Validators.required),
      componente:   new FormControl(''),
      valor:        new FormControl('', Validators.required),
      uni_medida:   new FormControl('', Validators.required),
      desc_complex: new FormControl('', Validators.required),
      quantidade:   new FormControl('')
    });
  }

  validaFormItens(){
    if(this.formItens.status == 'INVALID'){
      console.log(this.formItens);
      this.nt.notify("error", "Há campos à preencher cadastro do item");
      return false;
    }

    for(let i of this.form.value.itens){
      if(i.complexidade == this.formItens.value.complexidade){
        this.nt.notify("error", "Já existe um item com essa complexidade cadastrado");
        return false;
      }
    }

    this.nt.notify("success", "Tarefa incluída com sucesso");
    return true;
  }


  adicionaItens(){

    if(!this.validaFormItens()){
      return false;
    }

    let formItensAux = new FormGroup({
        complexidade: new FormControl(),
        componente:   new FormControl(),
        valor:        new FormControl(),
        uni_medida:   new FormControl(),
        desc_complex: new FormControl(),
        quantidade:   new FormControl()
    });
    

    formItensAux.patchValue(this.formItens.value);

    //Preenchendo os campos não obrigatórios com null
    if(formItensAux.value.quantidade !=  ""){
      formItensAux.controls.quantidade.setValue(+formItensAux.value.quantidade);
    }else{
      formItensAux.controls.quantidade.setValue(-1);
    }
    
    this.formItens = new FormGroup({
      complexidade: new FormControl('', Validators.required),
      componente:   new FormControl(''),
      valor:        new FormControl('', Validators.required),
      uni_medida:   new FormControl('', Validators.required),
      desc_complex: new FormControl('', Validators.required),
      quantidade:   new FormControl('')
    });

    (this.form.controls.itens as FormArray).push(formItensAux);       
  }


  buscaDados(){
    this.ts.getDisciplinas().subscribe(
      (data) => {    
        this.disciplinas = data;       
      }
    );

    this.ts.getComplexidades().subscribe(
      (data)=>{
        this.complexidades = data;
      }
    );
    
    this.ts.getUnidadesMedidas().subscribe(
      (data)=>{
        this.uniMedidas = data;
      }
    );


  }

  onChanges(): void{
    this.form.valueChanges.subscribe(
      val => {
        this.vlrTeste = JSON.stringify(this.form.value, null, 4);
      }
    );
    
    this.formItens.valueChanges.subscribe(
      val => {
        this.testeItens = JSON.stringify(this.formItens.value, null, 4);
      }
    );
  }

  converteIdLabel(arr, id){

    for(let i of arr){

      if(i.id == id){
        return i.descricao;
      }

    }
    return "";
  }

  submit(){
    if(this.form.status == 'INVALID'){
      this.nt.notify("error", "Há campos à preencher no cadastro da tarefa");
      
    }else{
 
      this.gs.insereTarefaGuia(this.form.value).subscribe(
        (data) => {
          if(data.status == 200){
            this.nt.notify("success", "Tarefa inserida com sucesso");
            this.criaFormulario();
          }else{
            this.nt.notify("error", "Houve um erro ao gravar as tarefas, favor contatar o administrador do sistema")
          }
        }        
      );    
    }
  }

}
