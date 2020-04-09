import { Component, OnInit } from '@angular/core';
import { Sigla } from 'src/app/models/sigla/sigla.model';
import { SiglaService } from 'src/app/services/sigla/sigla.service';
import { FormControl, FormGroup } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { MensagemService } from 'src/app/services/mensagem/mensagem.service';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-nova-mensagem',
  templateUrl: './nova-mensagem.component.html',
  styleUrls: ['./nova-mensagem.component.css']
})
export class NovaMensagemComponent implements OnInit {

  dataMinima: Date;
  listaSiglas: Array<Sigla>;
  form: FormGroup;
  formValido: boolean = true;

  constructor(private siglaService: SiglaService,
              private notifier: NotifierService,
              private usuarioService: UsuarioService,
              private mensagemService: MensagemService,
              private router: Router) { }

  ngOnInit() {

    this.dataMinima = new Date();
    this.form = new FormGroup({

      tipo: new FormControl(false),
      titulo: new FormControl(''),
      corpo: new FormControl(''),   
      sigla: new FormControl(),
      dataExp: new FormControl()

    });

    this.siglaService.getSiglas().subscribe(
      (lista)=>{
        this.listaSiglas = lista;
    });

  }

  alteraSigla(){
    if(this.form.controls.tipo.value){
      this.form.controls.sigla.reset();
      this.form.controls.sigla.disable();      
    }else{
      this.form.controls.sigla.enable();
    }
  }

  submit(){   
    this.formValido = this.verificaForm();

    if(!this.formValido){
      this.notifier.notify("error", "Todas as opções devem ser selecionadas");
    }else{
      

      let re = sessionStorage.getItem('colaborador'); 
      this.usuarioService.getUsuario(re).subscribe(        
        (usuario)=>{        

          let v = this.form.controls; 
          let dtExp = v.dataExp.value._d.toISOString().split('T');
          dtExp = dtExp[0];

          if(this.form.controls.tipo.value){           
            
            let param = {corpo: v.corpo.value, dtExp: dtExp, idResp: usuario.id, titulo: v.titulo.value};    
            this.mensagemService.enviaMensagemGeral(param).subscribe(
              (data)=>{
                if(data.status == 200){
                  this.notifier.notify("success", "Mensagens enviadas com sucesso");
                  this.router.navigate(['mensagens']);
                }else{
                  this.notifier.notify("error", "Houve um erro no envio das mensagens, favor contatar o administrador do sistema");
                } 
            }); 
          }

          else{                   
            let param = {corpo: v.corpo.value, dtExp: dtExp, idResp: usuario.id, titulo: v.titulo.value, idSigla: v.sigla.value};    
            console.log(param);

            this.mensagemService.enviaMensagemSigla(param).subscribe( 
              (data)=>{
                if(data.status == 200){
                  this.notifier.notify("success", "Mensagens enviadas com sucesso");
                  this.router.navigate(['mensagens']);
                }else{
                  this.notifier.notify("error", "Houve um erro no envio das mensagens, favor contatar o administrador do sistema");
                } 
            }); 

          }
          
      });


    }
  }

  verificaForm(){

    let f = this.form.controls;

    if(f.tipo.value){
      if(f.titulo == null  || f.titulo.value == '')  return false;
      if(f.corpo == null   || f.corpo.value == '')   return false;
      if(f.dataExp == null || f.dataExp.value == '') return false;
      return true;
    }else{      
      if(f.titulo == null  || f.titulo.value == '')  return false;
      if(f.corpo == null   || f.corpo.value == '')   return false;
      if(f.dataExp == null || f.dataExp.value == '') return false;
      if(f.sigla == null   || f.sigla.value == '') return false;
      return true;
    }
  }
}
