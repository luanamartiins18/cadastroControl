import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { OrdemFornecimentoRelatorioComponent } from './ordem-fornecimento-relatorio/ordem-fornecimento-relatorio.component';
import { ContainerRelatoriosComponent } from './container-relatorios/container-relatorios.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { OrcamentoEntregaComponent } from './orcamento-entrega/orcamento-entrega.component';

registerLocaleData(localePt, 'pt-BR');
export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [OrdemFornecimentoRelatorioComponent, ContainerRelatoriosComponent, OrcamentoEntregaComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    RouterModule,
    MatCardModule,
    MatTableModule,
    MatCheckboxModule,
    NgxMaskModule.forRoot(options),
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}]
})
export class RelatoriosModule { }
