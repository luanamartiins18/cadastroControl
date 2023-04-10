import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario/usuario.model';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-primeiro-acesso',
  templateUrl: './primeiro-acesso.component.html',
  styleUrls: ['./primeiro-acesso.component.css']
})
export class PrimeiroAcessoComponent implements OnInit {

  usuario: Usuario = new Usuario;
  logoQintess: string = './assets/Logo-qintess-branco.jpg';
  formPrimeiroAcesso: FormGroup;
  email: string;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private usuarioService: UsuarioService,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.form1();
  }

  form1(){
    this.formPrimeiroAcesso = this.formBuilder.group({
      codigoRe: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(80)]],
    });
  }

  volta(){
    this.router.navigate(['login/']);
  }


  buscaDados(codigoRe: string) {
   var url = this.usuarioService.getUsuarioRe(codigoRe);
   url.subscribe(data => {
    if(data) {
      (<HTMLInputElement>document.getElementById("nome")).value = data['nome'];
      this.usuario.nome = data['nome'];
      (<HTMLInputElement>document.getElementById("cpf")).value = data['cpf'];
      this.usuario.cpf = data['cpf'];
      (<HTMLInputElement>document.getElementById("email")).value = data['email'];
      this.usuario.email = data['email']
    } else{
      (<HTMLInputElement>document.getElementById('nome')).value=("");
    }
  });
  return url;
  }


  recuperarSenha() {
    const codigoRe = (<HTMLInputElement>document.getElementById("codigoRe")).value ; // código de recuperação da senha, obtido a partir de um formulário na página
    const url = `http://127.0.0.1:8080/redefinirsenha`;
    const body = { codigoRe };
    this.http.post(url, body).subscribe(() => {
      alert('Um e-mail foi enviado com as instruções para recuperar a senha.');
    }, (error) => {
      alert('Não foi possível recuperar a senha. Por favor, tente novamente mais tarde.');
      console.error(error);
    });
  }

}
