import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UsuarioModule } from './modules/usuario/usuario.module';
import { PaginaInicialModule } from './modules/pagina-inicial/pagina-inicial.module';
import { HttpClientModule } from '@angular/common/http';
import { NotifierModule } from "angular-notifier";
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [   
    BrowserModule,
    AppRoutingModule ,
    UsuarioModule,
    PaginaInicialModule,
    HttpClientModule,   
    NgSelectModule,
    FormsModule,
    NgbModule,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
