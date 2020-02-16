import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensagensComponent } from './mensagens/mensagens.component';
import { MatTableModule } from '@angular/material/table';
import { NovaMensagemComponent } from './nova-mensagem/nova-mensagem.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MensagensComponent, NovaMensagemComponent],
  imports: [
    CommonModule,
    MatTableModule,
    RouterModule
  ],
  exports: [MensagensComponent]
})
export class MensagemModule { }
