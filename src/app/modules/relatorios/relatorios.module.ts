import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdemFornecimentoRelatorioComponent } from './ordem-fornecimento-relatorio/ordem-fornecimento-relatorio.component';
import { ContainerRelatoriosComponent } from './container-relatorios/container-relatorios.component';
import { RouterModule } from '@angular/router';
import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { OrcamentoEntregaComponent } from './orcamento-entrega/orcamento-entrega.component';
import { RelatorioSiglaComponent } from './relatorio-sigla/relatorio-sigla.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule} from '@angular/material/expansion'; 
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

registerLocaleData(localePt, 'pt-BR');
export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [OrdemFornecimentoRelatorioComponent, ContainerRelatoriosComponent, OrcamentoEntregaComponent, RelatorioSiglaComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatCheckboxModule,
    NgxMaskModule.forRoot(options),
    NgMultiSelectDropDownModule.forRoot(), 
    ReactiveFormsModule, 
    MatCardModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatTableModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}]
})
export class RelatoriosModule { }
