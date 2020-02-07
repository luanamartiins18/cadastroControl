import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UsuarioModule } from './modules/usuario/usuario.module';
import { PaginaInicialModule } from './modules/pagina-inicial/pagina-inicial.module';
import { HttpClientModule } from '@angular/common/http';
import { TabelaOfComponent } from 'src/app/modules/pagina-inicial/tabela-of/tabela-of.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    UsuarioModule,
    PaginaInicialModule,
    HttpClientModule
  ],
  entryComponents: [TabelaOfComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
