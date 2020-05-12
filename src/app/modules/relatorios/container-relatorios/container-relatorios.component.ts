import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-relatorios',
  templateUrl: './container-relatorios.component.html',
  styleUrls: ['./container-relatorios.component.css']
})
export class ContainerRelatoriosComponent implements OnInit {

  selectedOp = 0;

  constructor() { }

  ngOnInit() {
  }

  selecionaOp(value) {
    this.selectedOp = value;
  }
}
