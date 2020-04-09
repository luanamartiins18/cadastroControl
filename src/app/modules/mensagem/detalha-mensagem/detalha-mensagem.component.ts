import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagemService } from 'src/app/services/mensagem/mensagem.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-detalha-mensagem',
  templateUrl: './detalha-mensagem.component.html',
  styleUrls: ['./detalha-mensagem.component.css']
})
export class DetalhaMensagemComponent implements OnInit {

  
  idMsg: String;
  listaUsuMsg;

  colunas = ['nomeUsu', 'visualizado'];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private ms: MensagemService,
              private nt: NotifierService) { }

  ngOnInit() {
    this.carregaMensagens();
  }

  carregaMensagens(){
    this.idMsg = this.route.snapshot.paramMap.get('id');
    
    this.ms.detalhaMensagem(this.idMsg).subscribe(
      (listaUsuMsg)=>{
        this.listaUsuMsg = listaUsuMsg;
      }
    );
  }

  visualizado(linha){
    return typeof(linha) == 'string';
  }

  alteraStatusMsg(acao){
   
    let param = {
      idMsg: this.listaUsuMsg[0].idMsg,
      acao: acao
    };


    this.ms.alteraStatusMsg(param).subscribe(
      (data)=>{
        if(data.status == 200){
          this.nt.notify("success", "Situação da mensagem alterada com sucesso");
          this.carregaMensagens();
          this.router.navigate([this.router.url]);
        }else{
          this.nt.notify("error", "Houve um erro ao gravar as informações, favor contatar o administrador do sistema");
        }
      }
    );



  }


}
