import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UsuarioModule } from './modules/usuario/usuario.module';
import { PaginaInicialModule } from './modules/pagina-inicial/pagina-inicial.module';
import { HttpClientModule } from '@angular/common/http';
import { TabelaOfComponent } from 'src/app/modules/ordem-fornecimento/tabela-of/tabela-of.component';
import { NotifierModule } from "angular-notifier";
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MensagemModule } from './modules/mensagem/mensagem.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { OrdemFornecimentoModule } from './modules/ordem-fornecimento/ordem-fornecimento.module';
import { TarefaModule } from './modules/tarefa/tarefa.module';
import { GuiaModule } from './modules/guia/guia.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [   
    BrowserModule,
    AppRoutingModule ,
    UsuarioModule,
    PaginaInicialModule,
    HttpClientModule,   
    NgSelectModule,
    FormsModule,
    MensagemModule,
    NgbModule,
    OrdemFornecimentoModule,
    TarefaModule,
    GuiaModule,
    NotifierModule.withConfig({
      behaviour:{
        autoHide: 2000
      },
      position: {
        horizontal: {
          position: 'right'
        },
        vertical: {
          position: 'top'
        }
      }
    }),
    BrowserAnimationsModule
  ],
  entryComponents: [TabelaOfComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
