import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Usuario } from 'src/app/models/usuario/usuario.model';

@Component({
  selector: 'app-home-parent',
  templateUrl: './home-parent.component.html',
  styleUrls: ['./home-parent.component.css']
})
export class HomeParentComponent implements OnInit {

  usuario: Usuario;
  listaMsgUsu: Array<any>;

  constructor(private usuarioService: UsuarioService) {

    let re = sessionStorage.getItem('colaborador');
    this.usuarioService.getUsuario(re).subscribe(
      (usuario: Usuario) => {
        this.usuario = usuario;
      });
  }
  ngOnInit() {
  }
}
