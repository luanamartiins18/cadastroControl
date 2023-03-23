import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario/usuario.model';


@Component({
  selector: 'app-home-parent',
  templateUrl: './home-parent.component.html',
  styleUrls: ['./home-parent.component.css']
})
export class HomeParentComponent implements OnInit {

  usuario: Usuario;
  constructor() {}
  ngOnInit() {}
}
