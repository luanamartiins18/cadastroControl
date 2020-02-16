import { Component, OnInit } from '@angular/core';
import { MensagemService } from 'src/app/services/mensagem/mensagem.service';

@Component({
  selector: 'mensagens',
  templateUrl: './mensagens.component.html',
  styleUrls: ['./mensagens.component.css']
})
export class MensagensComponent implements OnInit {

  op: string = 'nova';
  people = ['asdf', 'asdfsdf'];
  constructor(private ms: MensagemService) { }
  mensagens;
  colunas = ['dtExp', 'tpMsg', 'dtCriacao', 'resp', 'status'];

  ngOnInit() {
    this.ms.getMensagensEnviadas().subscribe(
     data => {
      this.mensagens = data;
      console.log(this.mensagens);
    });
  }

  

  alteraMenu(value: string){
    this.op = value;
  }
}
