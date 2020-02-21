import { Component, OnInit } from '@angular/core';
import { MensagemService } from 'src/app/services/mensagem/mensagem.service';
import { Router } from '@angular/router';

@Component({
  selector: 'mensagens',
  templateUrl: './mensagens.component.html',
  styleUrls: ['./mensagens.component.css']
})
export class MensagensComponent implements OnInit {

  op: string = 'nova';
  people = ['asdf', 'asdfsdf'];
  mensagens;
  colunas = ['dtExp', 'tpMsg', 'titMsg', 'dtCriacao', 'resp', 'status'];

  constructor(private ms: MensagemService, 
              private router: Router) { }

  ngOnInit() {
    this.ms.getMensagensEnviadas().subscribe(
     data => {
      this.mensagens = data;
    });
  }  

  trataTipoMsg(tipo, sigla){
    if(tipo == "SIGLA"){
      return "Sigla" + ' / ' + sigla
    }else{
      return "Geral";
    }
  }
  detalhaMsg(row){
    this.router.navigate(['/../mensagem/' + row.idMsg]);
  }

  converteStatus(op){
    return (op == 0 ) ? "Inativo" : "Ativo";
  }
  alteraMenu(value: string){
    this.op = value;
  }
}
