import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemGuiaComponent } from './listagem-guia/listagem-guia.component';
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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { FormsModule } from '@angular/forms';


export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};
@NgModule({
  declarations: [ListagemGuiaComponent],
  imports: [
    CommonModule,
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
    NgbModule,
    RouterModule,
    NgxMaskModule.forRoot(options),
    FormsModule
  ]
})
export class GuiaModule { }
