import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../../models/usuario/usuario.model';

@Component({
  selector: 'header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent implements OnInit {

  logoQintess: string = './assets/Qintess-logo-alt.jpg';
  logoQintessRed: string = './assets/qintes-logo-reduzido.jpg';
  logoBB: string = './assets/bb-logo.jpg'
  @Input() usuario: Usuario;
  lisPerfil: String;

  constructor() { }

  ngOnInit() { }


}
