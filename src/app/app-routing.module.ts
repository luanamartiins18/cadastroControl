import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './modules/usuario/usuarios/usuarios.component';
import { DefaultComponent } from './modules/pagina-inicial/default/default.component';
import { NovoUsuarioComponent } from './modules/usuario/novo-usuario/novo-usuario.component';
import { DetalhaUsuarioComponent } from './modules/usuario/detalha-usuario/detalha-usuario.component';
import { RelatorioComponent } from './modules/usuario/relatorio/relatorio.component';
import { MaquinasComponent } from './modules/usuario/maquinas/maquinas.component';
import { DetalhesMaquinasComponent } from './modules/usuario/detalhes-maquinas/detalhes-maquinas.component';
import { AtualizarMaquinasComponent } from './modules/usuario/atualizar-maquinas/atualizar-maquinas.component';
import { PerfilComponent } from './modules/usuario/perfil/perfil.component';
import { LoginComponent } from './modules/login/login.component';
import { EsqueceuSenhaComponent } from './modules/login/esqueceu-senha/esqueceu-senha.component';
import { AuthGuardService } from './services/guards/AuthGuard/auth-guard.service';
import { PrimeiroAcessoComponent } from './modules/login/primeiro-acesso/primeiro-acesso.component';
import { HomeParentComponent } from './modules/pagina-inicial/home-parent/home-parent.component';
import { LoginGuardService } from './services/guards/AuthLogin/login-guard.service';
import { RedefinirSenhaComponent } from './modules/login/esqueceu-senha/redefinir-senha/redefinir-senha.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent, canActivate:[LoginGuardService]},
  {path: 'esqueceuSenha', component: EsqueceuSenhaComponent},
  {path: 'primeiroAcesso', component: PrimeiroAcessoComponent},
  {path: 'redefinirSenha/:token', component:RedefinirSenhaComponent},
  {path: '', component: HomeParentComponent ,canActivate:[AuthGuardService],
    children: [
      {path: 'home', component: DefaultComponent, canActivate:[AuthGuardService] },
      {path: 'usuarios', component: UsuariosComponent,canActivate:[AuthGuardService] },
      {path: 'usuarios/:id', component: DetalhaUsuarioComponent,canActivate:[AuthGuardService]},
      {path: 'novo-usuario/:id', component: NovoUsuarioComponent,canActivate:[AuthGuardService]},
      {path: 'novo-usuario', component: NovoUsuarioComponent,canActivate:[AuthGuardService]},
      {path: 'relatorio', component:RelatorioComponent,canActivate:[AuthGuardService]},
      {path: 'detalhesMaquinas', component: DetalhesMaquinasComponent,canActivate:[AuthGuardService]},
      {path: 'detalhesMaquinas/:id',component: AtualizarMaquinasComponent,canActivate:[AuthGuardService]},
      {path: 'maquinas/:id', component: MaquinasComponent,canActivate:[AuthGuardService] },
      {path: 'maquinas', component:MaquinasComponent ,canActivate:[AuthGuardService]},
      {path: 'perfil', component: PerfilComponent,canActivate:[AuthGuardService]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
