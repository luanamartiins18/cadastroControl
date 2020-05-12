import { Component, OnInit, Input } from '@angular/core';
import { OrdemFornecimento } from 'src/app/models/ordemfornecimento/ordem-fornecimento';
import { Usuario } from 'src/app/models/usuario/usuario.model';
import { UsuarioService } from '../../../services/usuario/usuario.service';
import { Situacao } from 'src/app/models/situacao/situacao.model';
import { SituacaoService } from 'src/app/services/situacao/situacao.service';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { OrdemFornecimentoService } from 'src/app/services/OrdemDeFornecimento/ordem-fornecimento-service';
import { NotifierService } from 'angular-notifier';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'detalha-of',
  templateUrl: './detalha-of.component.html',
  styleUrls: ['./detalha-of.component.css']
})
export class DetalhaOfComponent implements OnInit {

  ordemF: OrdemFornecimento;
  formColab: FormGroup;  
  listaUsuarios: Array<Usuario>;
  listaSituacao: Array<Situacao>;
  pagCarregada;
    
  constructor(private usuarioService: UsuarioService,
              private situacaoService: SituacaoService,
              private ofService: OrdemFornecimentoService,
              private notifier: NotifierService,
              private route: ActivatedRoute,
              private router: Router) { 
  
  this.formColab = new FormGroup({
    colaborador: new FormArray([]),
    situacao: new FormControl(),
    referencia: new FormControl()
  });

  }
  ngOnInit() {
    
    this.pagCarregada = false;
    let ofId = this.route.snapshot.paramMap.get('id');
    
    /*
      Ordem de carregamento:
      -> Of
      -> Usuarios da sigla da of
      -> Usuarios relacionados a of
      -> situacao da of
    */
    this.ofService.getOrdemFornecimentoById(ofId).subscribe(
      (of: OrdemFornecimento)=>{
        this.ordemF = of;

        this.usuarioService.getUsuarioBySigla(this.ordemF.sigla.id).subscribe(
          (listaUsu) =>{
            if(listaUsu.status == 200){
              this.listaUsuarios = (listaUsu.body as Usuario[]); 
            }          
    
            this.ofService.getUsuariosOf(this.ordemF.id).subscribe(
              (data)=>{            
    
                this.criaCheckbox(data.body);
                
                this.ofService.getSituacaoOf(this.ordemF.id).subscribe(
                  (res)=>{   
              
                    if(typeof(res.body['fk_situacao_usu']) != 'object'){
                      this.formColab.controls.situacao.setValue(res.body['fk_situacao_usu']);  
                    }
                    
                    if(typeof(res.body['fk_situacao_usu']) != 'object'){
                      this.formColab.controls.referencia.setValue(res.body['referencia']);
                    }
                  
                    this.pagCarregada = true; 
                });
            });  
        });
    });
    
    this.situacaoService.getSituacoes().subscribe(
      (listaSit: Array<Situacao>) => {
        this.listaSituacao = listaSit;
    });
    

  }

  criaCheckbox(data){  
    this.listaUsuarios.forEach(
      (el, i) => {
        let usuOf = false;   
        
        if(data.includes(el.id)){         
          usuOf = true;
        }

        const control = new FormControl(usuOf);
        (this.formColab.controls.colaborador as FormArray).push(control);        
      });
  }

  valida(value){
    if(value.referencia == null || value.referencia.length < 6 || typeof(value.referencia) != "string" || parseInt(value.referencia.substring(0,2))>12 || parseInt(value.referencia.substring(0,2))<=0){
      return false;
    }

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
      if(value.colaborador[i]){
        resLista.push(this.listaUsuarios[i].id);
      }
    }
    
    return {usu: resLista, sit: Number(value.situacao), of: this.ordemF.id, ref: value.referencia};
  }

  onSubmit(){    
    console.log(this.formColab.value);

    if(this.valida(this.formColab.value)){
     
      let bodyReq = this.formataDados(this.formColab.value);
 
      this.ofService.enviaSit(bodyReq).subscribe(
        (data) => {
          if(data.status == 200){
            this.notifier.notify("success", "Dados alterados com sucesso!");
            this.router.navigate(['ordem-fornecimento']);
          }else{
            this.notifier.notify("error", "Um erro aconteceu, contate o administrador do sistema");
          }
        }
      );

    }else{      
      this.notifier.notify("error", "Você deve selecionar ao menos um usuário, uma situação e especificar a data de referência no formato especificado");
    }
  }

}

