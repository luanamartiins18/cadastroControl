import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './modules/usuario/login/login.component';
import { HomeParentComponent } from './modules/pagina-inicial/home-parent/home-parent.component';
import { AuthGuardService } from './AuthGuards/auth-guard.service'; 
import { LoginGuardService} from './AuthGuards/login-guard-service'; 
import { UsuariosComponent } from './modules/usuario/usuarios/usuarios.component';
import { DefaultComponent } from './modules/pagina-inicial/default/default.component';
import { NovoUsuarioComponent } from './modules/usuario/novo-usuario/novo-usuario.component';
import { DetalhaUsuarioComponent } from './modules/usuario/detalha-usuario/detalha-usuario.component';
import { CargoComponent } from './modules/usuario/cargo/cargo.component';
import { HistoricoUsuarioComponent } from './modules/usuario/historico-usuario/historico-usuario.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent, canActivate:[LoginGuardService]},
  {path: '', component: HomeParentComponent, canActivate:[AuthGuardService],
    children: [
      {path: 'home', component: DefaultComponent, canActivate:[AuthGuardService]},
      {path: 'usuarios', component: UsuariosComponent, canActivate:[AuthGuardService]},
      {path: 'usuarios/:id', component: DetalhaUsuarioComponent, canActivate:[AuthGuardService]},
      {path: 'novo-usuario', component: NovoUsuarioComponent, canActivate: [AuthGuardService]},
      {path: 'cargo', component:CargoComponent, canActivate:[AuthGuardService]},
      {path: 'historico', component:HistoricoUsuarioComponent, canActivate:[AuthGuardService]}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
