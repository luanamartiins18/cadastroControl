import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TabelaOfComponent } from '../ordem-fornecimento/tabela-of/tabela-of.component';
import { HomeParentComponent } from './home-parent/home-parent.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DefaultComponent } from './default/default.component';
import { DetalhaOfComponent } from '../ordem-fornecimento/detalha-of/detalha-of.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MensagemModule } from '../mensagem/mensagem.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, TabelaOfComponent, HomeParentComponent, NavbarComponent, DefaultComponent, DetalhaOfComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MensagemModule, 
    RouterModule
  ],
  entryComponents: [TabelaOfComponent]
})
export class PaginaInicialModule { }
