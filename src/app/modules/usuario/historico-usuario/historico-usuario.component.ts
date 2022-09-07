import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { Usuario } from 'src/app/models/usuario/usuario.model';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
@Component({
  selector: 'app-historico-usuario',
  templateUrl: './historico-usuario.component.html',
  styleUrls: ['./historico-usuario.component.css']
})
export class HistoricoUsuarioComponent implements OnInit {
  form: FormGroup;
  usuario: Usuario = new Usuario();
  id: String;
  constructor(
    private us: UsuarioService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.carregaUsuarios();
  }

  carregaUsuarios() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.us.getUsuarioId(this.id).subscribe(
      (usuario) => {
        this.usuario = usuario;
      }
    );
  }
}
