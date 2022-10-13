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
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { DetalhaUsuarioComponent } from './detalha-usuario/detalha-usuario.component';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { CpfPipe } from '../pipe/cpf.pipe';
import { CepPipe } from '../pipe/cep.pipe';
import { MatGridListModule } from '@angular/material';
import { CargoComponent } from './cargo/cargo.component';
import { MatDialogModule } from '@angular/material/dialog'; 
import { MatIconModule } from '@angular/material/icon';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { ContratoComponent } from './contrato/contrato.component';
import { NgxPrintModule } from 'ngx-print';
import { HttpClientModule } from '@angular/common/http'



export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};
@NgModule({
  declarations: [
    NovoUsuarioComponent, 
    UsuariosComponent, 
    DetalhaUsuarioComponent, 
    CpfPipe, 
    CepPipe, 
    CargoComponent,
    ContratoComponent, 
    RelatorioComponent, 
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
    MatIconModule,
    NgbModule,
    NgxPrintModule,
    HttpClientModule,
    NgxMaskModule.forRoot(options),
    NgMultiSelectDropDownModule.forRoot()
  ]
})

export class UsuarioModule { }
