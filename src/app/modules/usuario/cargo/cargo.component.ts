import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { Bu } from 'src/app/models/bu/bu.model';
import { Funcao } from 'src/app/models/cargo/funcao.model';
import { Tipo } from 'src/app/models/tipo/tipo.model';
import { Usuario } from 'src/app/models/usuario/usuario.model';
import { BuService } from 'src/app/services/bu/bu.service';
import { FuncaoService } from 'src/app/services/funcao/funcao.service';
import { TipoService } from 'src/app/services/tipo/tipo.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';


@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css']
})


 
export class CargoComponent implements OnInit {

  form: FormGroup;
  usuario: Usuario = new Usuario();
  listaCargo: Array<Funcao>;
  listaBu: Array<Bu>;
  listaTipo: Array<Tipo>;
  usuarios: Usuario[] = [];
  usuariosSearch: Usuario[] = [];
  id: any;
  colunas = [
    'data_inicio', 'data_final', 'cargo'
    ];
  constructor(
    public formBuilder: FormBuilder,
    private funcaoService: FuncaoService,
    private buService: BuService,
    private usuarioService: UsuarioService,
    private tipoService: TipoService,
    private router: Router,
    private notifier: NotifierService,
  ) { }

  ngOnInit() {
    this.montaFormBuilder();
    this.getCargos();
    this.getBu();
    this.getTipo();
  }

  private montaFormBuilder() {
    this.form = this.formBuilder.group({
      nome: [this.usuario.nome, [Validators.required]],
      codigoRe: [this.usuario.codigoRe, [Validators.required]],
      cargo:[this.usuario.cargo,[Validators.required]],
      bu: [this.usuario.bu,[Validators.required]],
      tipo:[this.usuario.tipo,[Validators.required]]
    });
  }

  private getCargos() {
    this.funcaoService.getCargo().subscribe((lista) => {
      this.listaCargo = lista;
    });
  }
  private getBu() {
    this.buService.getBu().subscribe((lista) => {
      this.listaBu = lista;
    });
  }

  private getTipo() {
    this.tipoService.getTipo().subscribe((lista) => {
      this.listaTipo = lista;
    });
  }

  submit() {
    if (this.id) {
      this.insereUsuario();
    }  
      else {
        this.notifier.notify("error", "erro ");
    }
  }


  private insereUsuario() {
    this.usuarioService.insereFuncao(this.usuario).subscribe((data) => {
      if (data.status == 200) {
        this.notifier.notify("success", "Usuario criado com sucesso!");
        this.router.navigate(['usuarios']);
      }
      else {
        this.notifier.notify("error", "Houve um erro no cadastro do usuario, favor contatar o administrador do sistema.");
      }
    }, err => {
      if (err.error.errors) {
        err.error.errors.forEach((element: { defaultMessage: string; }) => {
          this.notifier.notify("error", element.defaultMessage);
        });
      }
      else if (err.error.message) {
        this.notifier.notify("error", err.error.message);
      }
      else {
        this.notifier.notify("error", "Ocorreu um erro inesperado, por favor tente novamente.");
      }
    });
  }
}

