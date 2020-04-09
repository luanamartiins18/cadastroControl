import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Usuario } from 'src/app/models/usuario/usuario.model';


@Component({
  selector: 'usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];
  usuariosSearch: Usuario[] = [];
  colunas = [
    'nome', 'cpf', 'cargo', 'codigoRe', 'codigoBB', 'empresa', 'demanda', 'status'
  ];

  constructor(
    private us: UsuarioService,
    private router: Router) { }

  ngOnInit() {
    this.us.getListaUsuarios().subscribe(
      data => {
        this.usuarios = data;
        this.usuariosSearch = data;
      });
  }

  detalhaUsuarios(row) {
    this.router.navigate(['/../usuarios/' + row.id]);
  }

  searchAllField(event: any) {
    this.usuariosSearch = this.usuarios.filter(obj => {
      return Object.keys(obj).find((key) => {
        return obj[key] ? ((obj[key].descricao ? obj[key].descricao : obj[key]).toString().toUpperCase()).includes(event.target.value.toUpperCase()) : false;
      });
    })
  }
}
