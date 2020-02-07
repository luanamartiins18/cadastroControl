import { Component, OnInit, Input } from '@angular/core';
import { OrdemFornecimento } from 'src/app/models/ordemfornecimento/ordem-fornecimento';
import { Usuario } from 'src/app/models/usuario/usuario.model';
import { UsuarioService } from '../../usuario/usuario.service';
import { Situacao } from 'src/app/models/situacao/situacao.model';
import { SituacaoService } from 'src/app/services/situacao/situacao.service';
import { HomeParentComponent } from '../home-parent/home-parent.component';

@Component({
  selector: 'detalha-of',
  templateUrl: './detalha-of.component.html',
  styleUrls: ['./detalha-of.component.css']
})
export class DetalhaOfComponent implements OnInit {
  @Input() ordemF: OrdemFornecimento;
  @Input() parent: HomeParentComponent;

  listaUsuarios: Array<Usuario>;
  listaSituacao: Array<Situacao>;
  
  constructor(private usuarioService: UsuarioService,
              private situacaoService: SituacaoService) { }

  ngOnInit() {
    
    this.situacaoService.getSituacoes().subscribe(
      (listaSit: Array<Situacao>) => {
        this.listaSituacao = listaSit;
      }
    );
    
    this.usuarioService.getUsuarioBySigla(this.ordemF.sigla.id).subscribe(
      (listaUsu: Array<Usuario>) =>{
        this.listaUsuarios = listaUsu;
        console.log(this.listaUsuarios);
      }
    );

  }

  voltaConsultaOf(){
    this.parent.opContainer = 'tabela';
  }


}
