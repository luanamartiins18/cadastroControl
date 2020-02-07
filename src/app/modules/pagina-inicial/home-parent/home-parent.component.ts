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
  listaOf: Array<OrdemFornecimento>;
  acesso: string;
  opContainer: string = 'default';
  ofDetalha: OrdemFornecimento;  

  constructor(private usuarioService: UsuarioService,
              private ofService: OrdemFornecimentoService) {     
    

    this.ofService.getOrdemFornecimento().subscribe(
      (lstOf: Array<OrdemFornecimento>) => {
        this.listaOf = lstOf;
      }      
    );    
 
    let re = sessionStorage.getItem('colaborador');
    this.usuarioService.getUsuario(re).subscribe(

      (usuario: Usuario) => {     
        this.usuario = usuario;           
      }    
    );

  }  

  ngOnInit() {
  }

}
