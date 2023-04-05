import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';



@Component({
  selector: 'app-esqueceu-senha',
  templateUrl: './esqueceu-senha.component.html',
  styleUrls: ['./esqueceu-senha.component.css']
})
export class EsqueceuSenhaComponent implements OnInit {

  logoQintess: string = './assets/Logo-qintess-branco.jpg';
  formRecuperar: FormGroup;
  email: string;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
    public dialog: MatDialog,

  ) { }

  ngOnInit() {
    this.form1();
  }

  form1(){
    this.formRecuperar = this.formBuilder.group({
      codigoRe: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(80)]],
    });
  }

  volta(){
    this.router.navigate(['login/']);
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
