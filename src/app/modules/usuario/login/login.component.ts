import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logoQintess: string = './assets/Logo-qintess-branco.jpg';
  senhaErrada: boolean = false;
  loginForm: FormGroup;

  constructor(private loginService: LoginService,                          
              private formBuilder:  FormBuilder) { }
	
  ngOnInit() {
    
    this.loginForm = this.formBuilder.group({
      colaborador: new FormControl(),
      senha: new FormControl()
    });

  }

  checaLogin(){

   this.loginService.autenticaUsuario(this.loginForm.get('colaborador'), this.loginForm.get('senha'), this);

  }
}
