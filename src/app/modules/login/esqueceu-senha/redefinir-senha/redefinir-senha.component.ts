import { Component, OnInit } from '@angular/core';
import { Route, RouterEvent } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redefinir-senha',
  templateUrl: './redefinir-senha.component.html',
  styleUrls: ['./redefinir-senha.component.css']
})
export class RedefinirSenhaComponent implements OnInit {

  logoQintess: string = './assets/Logo-qintess-branco.jpg';

  formRedefinirSenha: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
    ) { }


  ngOnInit() {
    this.form1();
  }

  form1(){
    this.formRedefinirSenha = this.formBuilder.group({
      codigoRe: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(80)]],
    });
  }

  volta(){
    this.router.navigate(['login/']);
  }

}
