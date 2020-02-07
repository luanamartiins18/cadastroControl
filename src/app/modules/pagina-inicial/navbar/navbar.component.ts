import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/models/usuario/usuario.model';
import { HomeParentComponent } from '../home-parent/home-parent.component';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() usuario: Usuario;
  @Input() parent: HomeParentComponent;

  constructor() { }

  ngOnInit() { }

}
