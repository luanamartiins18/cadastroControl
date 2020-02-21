import { Component, OnInit, Input } from '@angular/core';
import { MensagemService } from '../../../services/mensagem/mensagem.service';
import { NotifierService } from 'angular-notifier';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mensagens-colaborador',
  templateUrl: './mensagens-colaborador.component.html',
  styleUrls: ['./mensagens-colaborador.component.css']
})
export class MensagensColaboradorComponent implements OnInit {

  @Input() listaMsgUsu;
  page = 1;
  pageSize = 1;

  constructor(private ms: MensagemService,
              private nt: NotifierService,
              private modal: NgbActiveModal) { }

  ngOnInit() {
  }

  marcaLida(row){

   
    let req = {idMsgUsu: row.idUsuMsg};    
    this.listaMsgUsu.splice(this.page-1, 1);

    
       
    this.ms.marcaMsgLida(req).subscribe(
      (data)=>{
        if(data.status != 200){
          this.nt.notify("error", "Houve um erro ao gravar as informações, favor contatar o administrador do sistema");
        }
        if(this.listaMsgUsu.length == 0){
          this.modal.close();
        }
      }
    );
  }

}
