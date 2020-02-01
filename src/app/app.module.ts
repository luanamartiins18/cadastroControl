import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UsuarioModule } from './usuario/usuario.module';
import { PaginaInicialModule } from './pagina-inicial/pagina-inicial.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    UsuarioModule,
    PaginaInicialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
