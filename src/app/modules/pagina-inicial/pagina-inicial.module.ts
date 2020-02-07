import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TabelaOfComponent } from './tabela-of/tabela-of.component';
import { HomeParentComponent } from './home-parent/home-parent.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GerenciarUsuariosComponent } from './gerenciar-usuarios/gerenciar-usuarios.component';
import { DefaultComponent } from './default/default.component';
import { DetalhaOfComponent } from './detalha-of/detalha-of.component';
import {  ReactiveFormsModule } from '@angular/forms'


@NgModule({
  declarations: [HeaderComponent, TabelaOfComponent, HomeParentComponent, NavbarComponent, GerenciarUsuariosComponent, DefaultComponent, DetalhaOfComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  entryComponents: [TabelaOfComponent]
})
export class PaginaInicialModule { }
