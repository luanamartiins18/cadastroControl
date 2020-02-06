import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TabelaOfComponent } from './tabela-of/tabela-of.component';
import { HomeParentComponent } from './home-parent/home-parent.component';



@NgModule({
  declarations: [HeaderComponent, TabelaOfComponent, HomeParentComponent],
  imports: [
    CommonModule
  ]
})
export class PaginaInicialModule { }
