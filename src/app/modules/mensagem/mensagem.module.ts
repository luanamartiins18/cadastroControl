import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensagensComponent } from './mensagens/mensagens.component';
import { MatTableModule } from '@angular/material/table';
import { NovaMensagemComponent } from './nova-mensagem/nova-mensagem.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { DetalhaMensagemComponent } from './detalha-mensagem/detalha-mensagem.component';
import { MensagensColaboradorComponent } from './mensagens-colaborador/mensagens-colaborador.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HistoricoColaboradorComponent } from './historico-colaborador/historico-colaborador.component';



@NgModule({
  declarations: [MensagensComponent, NovaMensagemComponent, DetalhaMensagemComponent, MensagensColaboradorComponent, HistoricoColaboradorComponent],
  imports: [
    CommonModule,
    MatTableModule,
    RouterModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule   ,
    NgbModule
  ],
  entryComponents: [MensagensColaboradorComponent],
  exports: [MensagensComponent, MensagensColaboradorComponent],
  providers: [

    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},

    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ]
})
export class MensagemModule { }
