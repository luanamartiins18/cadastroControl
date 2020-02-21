import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColaboradorOfComponent } from './colaborador-of/colaborador-of.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { TabelaOfComponent } from './tabela-of/tabela-of.component';
import { DetalhaOfComponent } from './detalha-of/detalha-of.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';


export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};
@NgModule({
  declarations: [ColaboradorOfComponent, TabelaOfComponent, DetalhaOfComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(options)
  ],
  exports: [
    ColaboradorOfComponent, TabelaOfComponent, DetalhaOfComponent
  ]
})
export class OrdemFornecimentoModule { }
