import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotifierService } from 'angular-notifier';
import { Usuario } from 'src/app/models/usuario/usuario.model';
import { LoginService } from 'src/app/services/login/login.service';
import * as CryptoJS from 'crypto-js';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  senhaForm: FormGroup;
  @ViewChild("content", { static: true }) modalContent: TemplateRef<any>;
  @ViewChild("recuperacao", { static: true }) modalRecuperacao: TemplateRef<any>;
  logoQintess: string = './assets/Logo-qintess-branco.jpg';
  senhaErrada: boolean = false;
  formLogin: FormGroup;
  usuario: Usuario = new Usuario();
  form: FormGroup;
  showPassword = false;


  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router,
    private modalService: NgbModal,
    private nt: NotifierService,
  ) { }

  ngOnInit() {
    this.form1();
  }

  form1(){
    this.formLogin = this.formBuilder.group({
      codigoRe: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(80)]],
      senha: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(80)]],
    });
  }

  checaLogin() {
    if (this.formLogin.invalid) {
      return this.nt.notify("error", "Preencha todos os campos");
    }
    this.loginService.autenticaUsuario(this.formLogin.get('codigoRe'), this.formLogin.get('senha')).subscribe(
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

  private loginSucess() {
    sessionStorage.setItem('Analista administrativo JR', this.formLogin.get('codigoRe').value);
    this.router.navigate(['home']);
    this.senhaErrada = false;
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  primeiroAcesso(){
    this.router.navigate(['primeiroAcesso']);
  }

}
