import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { NgxPrintModule } from 'ngx-print';
import { HttpClientModule } from '@angular/common/http';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CandidatosComponent } from './candidatos/candidatos.component';
import { CadastroCandidatosComponent } from './cadastro-candidatos/cadastro-candidatos.component';
import { DetalhesCandidatosComponent } from './detalhes-candidatos/detalhes-candidatos.component';
import { Cpf1Pipe } from 'src/pipe/cpf1.pipe';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';


export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};
@NgModule({
  declarations: [
    CandidatosComponent,
    CadastroCandidatosComponent,
    DetalhesCandidatosComponent,
    DialogComponent,
    Cpf1Pipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    NgbModule,
    NgxPrintModule,
    HttpClientModule,
    MatDialogModule,
    NgxMaskModule.forRoot(options),
    NgMultiSelectDropDownModule.forRoot()
  ],
  entryComponents: [
    DialogComponent
  ]
})

export class RhModule { }