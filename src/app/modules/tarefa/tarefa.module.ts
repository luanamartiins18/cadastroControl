import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefasUsuarioComponent } from './tarefas-usuario/tarefas-usuario.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { MatTableModule } from '@angular/material/table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};
@NgModule({
  declarations: [TarefasUsuarioComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(options),
    MatTableModule,
    NgbModule
  ],
  exports: [
    TarefasUsuarioComponent
  ]
})
export class TarefaModule { }
