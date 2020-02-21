import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './modules/usuario/login/login.component';
import { HomeParentComponent } from './modules/pagina-inicial/home-parent/home-parent.component';
import { AuthGuardService } from './AuthGuards/auth-guard.service'; 
import { LoginGuardService} from './AuthGuards/login-guard-service'; 
import { MensagensComponent } from './modules/mensagem/mensagens/mensagens.component';
import { NovaMensagemComponent } from './modules/mensagem/nova-mensagem/nova-mensagem.component';
import { TabelaOfComponent } from './modules/ordem-fornecimento/tabela-of/tabela-of.component';
import { DetalhaOfComponent } from './modules/ordem-fornecimento/detalha-of/detalha-of.component';
import { DefaultComponent } from './modules/pagina-inicial/default/default.component';
import { DetalhaMensagemComponent } from './modules/mensagem/detalha-mensagem/detalha-mensagem.component';
import { ColaboradorOfComponent } from './modules/ordem-fornecimento/colaborador-of/colaborador-of.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent, canActivate:[LoginGuardService]},
  {path: '', component: HomeParentComponent, canActivate:[AuthGuardService],
    children: [
      {path: 'home', component: DefaultComponent, canActivate:[AuthGuardService]},
      {path: 'mensagens', component: MensagensComponent, canActivate:[AuthGuardService]},
      {path: 'nova-mensagem', component: NovaMensagemComponent, canActivate:[AuthGuardService]},
      {path: 'mensagem/:id', component: DetalhaMensagemComponent, canActivate:[AuthGuardService]},
      {path: 'ordem-fornecimento', component: TabelaOfComponent, canActivate:[AuthGuardService]},       
      {path: 'ordem-fornecimento/:id', component: DetalhaOfComponent, canActivate:[AuthGuardService]},
      {path: 'ordem-fornecimento/usuario/:id', component: ColaboradorOfComponent, canActivate:[AuthGuardService]}   
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
