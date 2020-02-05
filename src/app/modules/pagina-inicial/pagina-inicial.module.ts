import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TabelaOfComponent } from './tabela-of/tabela-of.component';
import { HomeParentComponent } from './home-parent/home-parent.component';



@NgModule({
  declarations: [NavBarComponent, TabelaOfComponent, HomeParentComponent],
  imports: [
    CommonModule
  ]
})
export class PaginaInicialModule { }
