import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeParentComponent } from './home-parent/home-parent.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DefaultComponent } from './default/default.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MensagemModule } from '../mensagem/mensagem.module';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [HeaderComponent, HomeParentComponent, NavbarComponent, DefaultComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MensagemModule, 
    RouterModule,
    NgbModule
  ],
  entryComponents: []
})
export class PaginaInicialModule { }
