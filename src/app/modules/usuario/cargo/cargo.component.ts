import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario/usuario.model';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css']
})


export class CargoComponent implements OnInit {
  usuarios: Usuario[] = [];
  usuariosSearch: Usuario[] = [];
  colunas = [
    'nome', 'cargo', 'codigoRe'
    ];
  constructor(
    private us: UsuarioService,
    private router: Router 
  ) { }

  ngOnInit() {
    this.us.getListaUsuarios().subscribe(
      data => {
      this.usuarios = data;
      this.usuariosSearch = data;
    });
  }

  historicoUsuario(row: {id:string; }) {
    this.router.navigate(['/../historico/' + row.id]);
  } 


  searchAllField(event: any) {
    this.usuariosSearch = this.usuarios.filter(obj => {
      return Object.keys(obj).find((key) => {
        return obj[key] ? ((obj[key].descricao ? obj[key].descricao : obj[key]).toString().toUpperCase()).includes(event.target.value.toUpperCase()) : false;
      });
    })
  }
}

