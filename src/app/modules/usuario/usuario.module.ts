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
import { LoginComponent } from './login/login.component';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { DetalhaUsuarioComponent } from './detalha-usuario/detalha-usuario.component';


export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};
@NgModule({
  declarations: [LoginComponent, NovoUsuarioComponent, UsuariosComponent, DetalhaUsuarioComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatTableModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    NgbModule,
    NgxMaskModule.forRoot(options),
    NgMultiSelectDropDownModule.forRoot()
  ]
})

export class UsuarioModule { }
