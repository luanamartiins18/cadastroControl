import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';
import { LoginService } from 'src/app/services/login/login.service';
import { NotifierService } from 'angular-notifier';
import { DialogSucessComponent } from '../dialog/dialog-sucess/dialog-sucess.component';
import { Usuario } from 'src/app/models/usuario/usuario.model';



@Component({
  selector: 'app-esqueceu-senha',
  templateUrl: './esqueceu-senha.component.html',
  styleUrls: ['./esqueceu-senha.component.css']
})
export class EsqueceuSenhaComponent implements OnInit {

  usuario: Usuario = new Usuario();
  logoQintess: string = './assets/Logo-qintess-branco.jpg';
  formRecuperar: FormGroup;
  email: string;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
    public dialog: MatDialog,
    private loginService: LoginService,
    private notifier: NotifierService,


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
    const url = `http://192.168.2.55:4200/redefinirsenha`;
    const body = { codigoRe };
    this.http.post(url, body).subscribe(() => {
     this.addLive1()
    }, (error) => {
      if (error.status === 500) {
      this.addLive()
      }
    });
  }
  
 

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.recuperarSenha();
    }
  }


  addLive(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
  
    });
  }

  addLive1(): void {
    const dialogRef = this.dialog.open(DialogSucessComponent, {
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
  
    });
  }
}
