import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MensagemService } from 'src/app/services/mensagem/mensagem.service';

@Component({
  selector: 'app-historico-colaborador',
  templateUrl: './historico-colaborador.component.html',
  styleUrls: ['./historico-colaborador.component.css']
})
export class HistoricoColaboradorComponent implements OnInit {

  idUsu: string;
  listaMsg: Array<any>;
  page = 1;
  pageSize = 3;

  constructor(private route: ActivatedRoute,
    private ms: MensagemService) { }

  ngOnInit() {
    this.idUsu = this.route.snapshot.paramMap.get("id");
    this.buscaMensagens();
  }

  buscaMensagens() {
    this.ms.getHistoricoMsgColaborador(this.idUsu).subscribe(
      (data => {
        this.listaMsg = data;
      })
    );
  }
}