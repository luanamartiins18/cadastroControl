import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';
import { LoginService } from 'src/app/services/login/login.service';
import { NotifierService } from 'angular-notifier';
import { DialogSucessComponent } from '../dialog/dialog-sucess/dialog-sucess.component';



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
    const codigoRe = (<HTMLInputElement>document.getElementById("codigoRe")).value;
    console.log("console1", codigoRe);
  
    const url = `http://192.168.2.55:4200/redefinirsenha`;
  
    // Enviar o valor diretamente como string
    this.http.post(url, { codigoRe: codigoRe }).subscribe(
      (response) => {
        console.log("Resposta do backend:", response);
        this.addLive1();
      },
      (error) => {
        console.error("Erro durante a requisição:", error);
        if (error.status === 500) {
          console.log("Erro 500 no backend");
          this.addLive();
        }
      },
      () => {
        console.log("Executado mesmo sem resposta do servidor");
      }
    );
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
