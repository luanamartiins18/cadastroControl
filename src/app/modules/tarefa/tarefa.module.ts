import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefasUsuarioComponent } from './tarefas-usuario/tarefas-usuario.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { MatTableModule } from '@angular/material/table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NovaTarefaComponent } from './nova-tarefa/nova-tarefa.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';


export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};
@NgModule({
  declarations: [TarefasUsuarioComponent, NovaTarefaComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(options),
    MatTableModule,
    NgbModule,
    MatCardModule, 
    NgSelectModule,
    FormsModule
  ],
  exports: [
    TarefasUsuarioComponent
  ]
})
export class TarefaModule { }
