import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-primeiro-acesso',
  templateUrl: './primeiro-acesso.component.html',
  styleUrls: ['./primeiro-acesso.component.css']
})
export class PrimeiroAcessoComponent implements OnInit {


  logoQintess: string = './assets/Logo-qintess-branco.jpg';
  formPrimeiroAcesso: FormGroup;
  email: string;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.form1();
  }

  form1(){
    this.formPrimeiroAcesso = this.formBuilder.group({
      cpf: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(80)]],
      codigoRe: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(80)]],
      email: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(80)]],
    });
  }

  volta(){
    this.router.navigate(['login/']);
  }
}
