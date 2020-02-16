import { Component, OnInit} from '@angular/core';
import { UsuarioService } from 'src/app/modules/usuario/usuario.service';
import { Usuario } from 'src/app/models/usuario/usuario.model';
import { OrdemFornecimento } from 'src/app/models/ordemfornecimento/ordem-fornecimento';
import { OrdemFornecimentoService } from 'src/app/services/OrdemDeFornecimento/ordem-fornecimento-service';

@Component({
  selector: 'app-home-parent',
  templateUrl: './home-parent.component.html',
  styleUrls: ['./home-parent.component.css']
})
export class HomeParentComponent implements OnInit {

  usuario: Usuario;

  constructor(private usuarioService: UsuarioService,
              private ofService: OrdemFornecimentoService) {     
 
    let re = sessionStorage.getItem('colaborador');
    this.usuarioService.getUsuario(re).subscribe(
      (usuario: Usuario) => {     
        this.usuario = usuario; 
      });

  }  


  ngOnInit() {
  }

}
