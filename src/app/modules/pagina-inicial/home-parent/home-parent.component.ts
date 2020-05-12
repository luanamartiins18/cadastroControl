import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Usuario } from 'src/app/models/usuario/usuario.model';
import { OrdemFornecimentoService } from 'src/app/services/OrdemDeFornecimento/ordem-fornecimento-service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MensagensColaboradorComponent } from '../../mensagem/mensagens-colaborador/mensagens-colaborador.component';
import { MensagemService } from 'src/app/services/mensagem/mensagem.service';

@Component({
  selector: 'app-home-parent',
  templateUrl: './home-parent.component.html',
  styleUrls: ['./home-parent.component.css']
})
export class HomeParentComponent implements OnInit {

  usuario: Usuario;
  listaMsgUsu: Array<any>;

  constructor(private usuarioService: UsuarioService,
    private ofService: OrdemFornecimentoService,
    private modalService: NgbModal,
    private ms: MensagemService) {

    let re = sessionStorage.getItem('colaborador');
    this.usuarioService.getUsuario(re).subscribe(
      (usuario: Usuario) => {
        this.usuario = usuario;
        this.ms.getMensagensColaborador(usuario.id).subscribe(
          (data: Array<any>) => {
            this.listaMsgUsu = data;
            if (this.listaMsgUsu.length > 0) {
              const modalUsuMsg = modalService.open(MensagensColaboradorComponent, { keyboard: false, centered: true, size: 'lg', backdrop: 'static' });
              modalUsuMsg.componentInstance.listaMsgUsu = this.listaMsgUsu;
            }
          }
        );
      });
  }

  ngOnInit() {
  }
}
