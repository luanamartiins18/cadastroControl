import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from 'src/app/models/usuario/usuario.model';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild("content", { static: true }) modalContent: TemplateRef<any>;
  logoQintess: string = './assets/Logo-qintess-branco.jpg';
  senhaErrada: boolean = false;
  loginForm: FormGroup;
  senhaForm: FormGroup;
  usuario: Usuario = new Usuario();
  form: FormGroup;

  constructor(private loginService: LoginService,
    private usuarioService: UsuarioService,
    private formBuilder: FormBuilder,
    private router: Router,
    private modalService: NgbModal,

    private nt: NotifierService) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      codigoRe: ["", [Validators.required]],
      senha: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(80)]],
    });

    this.senhaForm = this.formBuilder.group({
      senha: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(80)]],
      confSenha: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(80)]],
    });

  }

  checaLogin() {

    if (this.loginForm.invalid) {
      return this.nt.notify("error", "Preencha todos os campos");
    }

    this.loginService.autenticaUsuario(this.loginForm.get('codigoRe'), this.loginForm.get('senha'), this).subscribe(
      data => {
        if (data.status == 200) {
          this.usuario = data.body;

          if (this.usuario.primeiroAcesso) {
            this.modalService.open(this.modalContent);
          } else {
            this.loginSucess();
          }
        }
      },
      err => {
        this.senhaErrada = true;
        if (err.error.message) {
          this.nt.notify("error", err.error.message);
        } else {
          this.nt.notify("error", "Usuário ou senha inválida");
        }
      }
    );

  }

  private alteraSenha() {

    if (this.senhaForm.invalid) {
      this.senhaForm.reset();
      return this.nt.notify("error", "Crie  uma senha com pelo menos 6 caracteres.");

    }
    if (this.senhaForm.value.senha != this.senhaForm.value.confSenha) {
      this.senhaForm.reset();
      return this.nt.notify("error", "As senhas não estão iguais.");
    }

    this.usuario.senha = CryptoJS.SHA256(this.usuario.senha).toString();

    this.usuarioService.alteraSenha(this.usuario).subscribe((data) => {
      if (data.status == 200) {
        this.nt.notify("success", "Senha criada com sucesso!");
        this.loginSucess();
      }
      else {
        this.nt.notify("error", "Houve um erro no cadastro da senha, favor contatar o administrador do sistema.");
      }
    }, err => {
      if (err.error.errors) {
        err.error.errors.forEach(element => {
          this.nt.notify("error", element.defaultMessage);
        });
      }
      else {
        this.nt.notify("error", "Ocorreu um erro inesperado, por favor tente novamente.");
      }
    });
  }


  private loginSucess() {
    sessionStorage.setItem('colaborador', this.loginForm.get('codigoRe').value);
    this.router.navigate(['home']);
    this.senhaErrada = false;
  }
}
