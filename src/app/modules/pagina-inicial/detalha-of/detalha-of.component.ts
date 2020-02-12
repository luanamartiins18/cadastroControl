import { Component, OnInit, Input } from '@angular/core';
import { OrdemFornecimento } from 'src/app/models/ordemfornecimento/ordem-fornecimento';
import { Usuario } from 'src/app/models/usuario/usuario.model';
import { UsuarioService } from '../../usuario/usuario.service';
import { Situacao } from 'src/app/models/situacao/situacao.model';
import { SituacaoService } from 'src/app/services/situacao/situacao.service';
import { HomeParentComponent } from '../home-parent/home-parent.component';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { OrdemFornecimentoService } from 'src/app/services/OrdemDeFornecimento/ordem-fornecimento-service';
import { NotifierService } from 'angular-notifier';
import { resolveSanitizationFn } from '@angular/compiler/src/render3/view/template';


@Component({
  selector: 'detalha-of',
  templateUrl: './detalha-of.component.html',
  styleUrls: ['./detalha-of.component.css']
})
export class DetalhaOfComponent implements OnInit {
  @Input() ordemF: OrdemFornecimento;
  @Input() parent: HomeParentComponent;

  formColab: FormGroup;  
  listaUsuarios: Array<Usuario>;
  listaSituacao: Array<Situacao>;
  
  constructor(private usuarioService: UsuarioService,
              private situacaoService: SituacaoService,
              private ofService: OrdemFornecimentoService,
              private notifier: NotifierService) { 
  
  this.formColab = new FormGroup({
    colaborador: new FormArray([]),
    situacao: new FormControl()
  });

  }
  ngOnInit() {
    
    this.situacaoService.getSituacoes().subscribe(
      (listaSit: Array<Situacao>) => {
        this.listaSituacao = listaSit;
      }
    );
    
    this.usuarioService.getUsuarioBySigla(this.ordemF.sigla.id).subscribe(
      (listaUsu: Array<Usuario>) =>{
        this.listaUsuarios = listaUsu;        
        this.criaCheckbox();
      }
    );   
  }

  criaCheckbox(){

    this.listaUsuarios.forEach(
      (el, i) => {
        const control = new FormControl();
        (this.formColab.controls.colaborador as FormArray).push(control);  
      }      
    );
  }

  voltaConsultaOf(){
    this.parent.opContainer = 'tabela';
  }

  valida(value){
   
    if(value.situacao == null) {
      return false;
    }

    for(let i of value.colaborador){     
      if(i){
        return true;
      }
    }

    return false;
  }

  formataDados(value){
    let resLista: Array<Number> = new Array<Number>();    

    for(let i=0; i<this.listaUsuarios.length; i++){
      console.log(value.colaborador[i]);
      if(value.colaborador[i]){
        resLista.push(this.listaUsuarios[i].id);
      }
    }

    return {usu: resLista, sit: Number(value.situacao), of: this.ordemF.id};
  }

  onSubmit(){    

    if(this.valida(this.formColab.value)){
     
      let bodyReq = this.formataDados(this.formColab.value);
      this.ofService.enviaSit(bodyReq).subscribe(
        (res:string) => {
          console.log(res);
        }
      );

    }else{      
      this.notifier.notify("error", "Você deve selecionar ao menos um usuário e uma situação");
    }


    


    

  }


}
