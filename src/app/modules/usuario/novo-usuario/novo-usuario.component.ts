import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { Usuario } from 'src/app/models/usuario/usuario.model';
import {FuncaoService} from 'src/app/services/funcao/funcao.service'
import { Funcao } from 'src/app/models/cargo/funcao.model';
import { Bu } from 'src/app/models/bu/bu.model';
import { Tipo } from 'src/app/models/tipo/tipo.model';
import { BuService } from 'src/app/services/bu/bu.service';
import { TipoService } from 'src/app/services/tipo/tipo.service';


@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  listaCargo: Array<Funcao>;
  listaBu: Array<Bu>;
  listaTipo: Array<Tipo>;
  form: FormGroup;
  usuario: Usuario = new Usuario();
  id: any;

  constructor(
    private funcaoService: FuncaoService,
    private buService: BuService,
    private tipoService: TipoService,
    private usuarioService: UsuarioService,
    private notifier: NotifierService,
    private route: ActivatedRoute,
    private router: Router,
    public formBuilder: FormBuilder,
    
  
  ) { }

  ngOnInit() {
    this.montaFormBuilder();
    this.carregaUsuarios();
    this.getCargos();
    this.getBu();
    this.getTipo();
    this.getCEP(this.usuario.cep);
  }


  private montaFormBuilder() {
    this.form = this.formBuilder.group({
      nome: [this.usuario.nome, [Validators.required]],
      celular: [this.usuario.celular, [Validators.required]],
      cpf: [this.usuario.cpf, [Validators.required]],
      data_nascimento:[this.usuario.data_nascimento, [Validators.required]],
      rg: [this.usuario.rg, [Validators.required]],
      data_emissao: [this.usuario.data_emissao, [Validators.required]],
      org_emissor:[this.usuario.org_emissor, [Validators.required]],
      cep: [this.usuario.cep, [Validators.required, ]],
      endereco: [this.usuario.endereco, [Validators.required]],
      cidade: [this.usuario.cidade, [Validators.required]],
      uf: [this.usuario.uf, [Validators.required]],
      email: [this.usuario.email, [Validators.required]],
      codigoRe: [this.usuario.codigoRe, [Validators.required]],
      numero: [this.usuario.numero, [Validators.required]],
      complemento: [this.usuario.complemento, [Validators.required]],
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


  getCEP(event: any) {
      if(event){
        var value = event.target.value;
        var numberPattern = /\d+/g;
        value = value.match( numberPattern ).join([]);
        var url = this.usuarioService.buscaCep(value);
        url.subscribe(data => {
          (<HTMLInputElement>document.getElementById("endereco")).value = data['logradouro'];
          (<HTMLInputElement>document.getElementById("complemento")).value = data['bairro'];
          (<HTMLInputElement>document.getElementById("cidade")).value = data['localidade'];
          (<HTMLInputElement>document.getElementById("uf")).value = data['uf'];
        });
        return url
      } 
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