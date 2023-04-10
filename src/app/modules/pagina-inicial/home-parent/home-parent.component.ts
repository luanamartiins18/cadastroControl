import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario/usuario.model';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';


@Component({
  selector: 'app-home-parent',
  templateUrl: './home-parent.component.html',
  styleUrls: ['./home-parent.component.css']
})
export class HomeParentComponent implements OnInit {

  usuario: Usuario;

  constructor(
    private usuarioService: UsuarioService
  ) {}

  ngOnInit() {
    let re = sessionStorage.getItem('colaborador');
    this.usuarioService.getUsuarioRe(re).subscribe(
      (usuario) => {
        this.usuario = usuario;
      });
  }
}