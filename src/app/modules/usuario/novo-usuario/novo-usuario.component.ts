import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Cargo } from 'src/app/models/cargo/cargo.model';
import { Perfil } from 'src/app/models/perfil/perfil.model';
import { Sigla } from 'src/app/models/sigla/sigla.model';
import { CargoService } from 'src/app/services/cargo/cargo.service';
import { PerfilService } from 'src/app/services/perfil/perfil.service';
import { SiglaService } from 'src/app/services/sigla/sigla.service';
import { UsuarioService } from '../../../services/usuario/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { Usuario } from 'src/app/models/usuario/usuario.model';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  listaSiglas: Array<Sigla>;
  listaPerfil: Array<Perfil>;
  listaCargo: Array<Cargo>;
  form: FormGroup;
  formValido: boolean = true;
  dropdownSettings = {};
  perfisItems = [];
  siglasItems = [];
  usuario: Usuario = new Usuario();
  id: any;

  constructor(
    private siglaService: SiglaService,
    private perfilService: PerfilService,
    private cargoService: CargoService,
    private usuarioService: UsuarioService,
    private notifier: NotifierService,
    private route: ActivatedRoute,
    private router: Router,
    public formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.configDropdown();
    this.montaFormBuilder();
    this.getSiglas();
    this.getPerfis();
    this.getCargos();
    this.carregaUsuarios();
  }

  private configDropdown() {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'descricao',
      selectAllText: 'Selecione Todos',
      unSelectAllText: 'Desmarcar Todos',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  private montaFormBuilder() {
    this.form = this.formBuilder.group({
      nome: [this.usuario.nome,[Validators.required]],
      cpf: [this.usuario.cpf,[Validators.required]],
      email: [this.usuario.email,[Validators.required]],
      celular: [this.usuario.celular,[Validators.required]],
      nascimento: [this.usuario.nascimento,[Validators.required]],
      listaPerfil: [this.usuario.listaPerfil,[Validators.required]],
      cargo: [this.usuario.cargo,[Validators.required]],
      listaSiglas: [this.usuario.listaSiglas,[Validators.required]],
      codigoRe: [this.usuario.codigoRe,[Validators.required]],
      codigoBB: [this.usuario.codigoBB,[Validators.required]],
      empresa: [this.usuario.empresa,[Validators.required]],
      demanda: [this.usuario.demanda],
    });
  }

  private getSiglas() {
    this.siglaService.getSiglas().subscribe((lista) => {
      this.listaSiglas = lista;
    });
  }

  private getPerfis() {
    this.perfilService.getPerfil().subscribe((lista) => {
      this.listaPerfil = lista;
    });
  }

  private getCargos() {
    this.cargoService.getCargo().subscribe((lista) => {
      this.listaCargo = lista;
    });
  }

  private carregaUsuarios() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.usuarioService.getUsuarioId(this.id).subscribe(
        (usuario) => {
          this.usuario = usuario;
        }
      );
    }
  }

  submit() {
    if (this.form.invalid) {
      this.notifier.notify("error", "Todos os campos devem ser preenchidos!");
    } else {
            
      if (this.id) {
        this.atualizaUsuario();      
      } else {
        this.insereUsuario();
      }
    }

  }

  private insereUsuario() {
    this.usuarioService.insereUsuario(this.usuario).subscribe((data) => {
      if (data.status == 200) {
        this.notifier.notify("success", "Usuario criado com sucesso!");
        this.router.navigate(['usuarios']);
      }
      else {
        this.notifier.notify("error", "Houve um erro no cadastro do usuario, favor contatar o administrador do sistema.");
      }
    }, err => {
      if (err.error.errors) {
        err.error.errors.forEach(element => {
          this.notifier.notify("error", element.defaultMessage);
        });
      }
      else if(err.error.message){
        this.notifier.notify("error", err.error.message);
      }
      else {
        this.notifier.notify("error", "Ocorreu um erro inesperado, por favor tente novamente.");
      }
    });
  }

  private atualizaUsuario() {
    this.usuarioService.atualizaUsuario(this.usuario).subscribe((data) => {
      if (data.status == 200) {
        this.notifier.notify("success", "Usuario atualizado com sucesso!");
        this.router.navigate(['usuarios']);
      }
      else {
        this.notifier.notify("error", "Houve um erro na atualização do usuario, favor contatar o administrador do sistema.");
      }
    }, err => {
      if (err.error.errors) {
        err.error.errors.forEach(element => {
          this.notifier.notify("error", element.defaultMessage);
        });
      }
      else if(err.error.message){
        this.notifier.notify("error", err.error.message);
      }
      else {
        this.notifier.notify("error", "Ocorreu um erro inesperado, por favor tente novamente.");
      }
    });
  }
}