import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { Usuario } from 'src/app/models/usuario/usuario.model';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-detalha-usuario',
  templateUrl: './detalha-usuario.component.html',
  styleUrls: ['./detalha-usuario.component.css']
})
export class DetalhaUsuarioComponent implements OnInit {

  id: String;
  usuario: Usuario = new Usuario();
  colunas = ['nome','endereco', 'cep','cpf', 'email', 'uf', 'cidade', 'codigoRe', 'status', 'numero','cargo', 'tipo', 'bu'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private us: UsuarioService,
    private nt: NotifierService) { }

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

  editaUsuario() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.router.navigate(['novo-usuario/' + this.id]);
  }


  deleteUsuario() {
    this.us.deleteUsuario(this.usuario).subscribe((data) => {
      if (data.status == 200) {
        this.nt.notify("success", "Usuário deletado com sucesso!");
        this.router.navigate(['usuarios']);
      }
      else {
        this.nt.notify("error", "Houve um erro ao deletar o usuario, favor contatar o administrador do sistema.");
      }
    }, err => {
      if (err.error.errors) {
        err.error.errors.forEach((element: { defaultMessage: string; }) => {
          this.nt.notify("error", element.defaultMessage);
        });
      }
      else if (err.error.message) {
        this.nt.notify("error", err.error.message);
      }
      else {
        this.nt.notify("error", "Ocorreu um erro inesperado, por favor tente novamente.");
      }
    });
  }

  alteraStatus(acao: any) {
    let param = {
      id: this.usuario.id,
      acao: acao
    };
    this.us.alteraStatus(param).subscribe(
      (data) => {
        if (data.status == 200) {
          this.nt.notify("success", "Status do usuário alterado com sucesso");
          this.carregaUsuarios();
          this.router.navigate([this.router.url]);
        } else {
          this.nt.notify("error", "Houve um erro ao gravar as informações, favor contatar o administrador do sistema");
        }
      }
    );
  }

}