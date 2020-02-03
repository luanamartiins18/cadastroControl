import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './modules/usuario/login/login.component';
import { NavBarComponent } from './modules/pagina-inicial/nav-bar/nav-bar.component';
import { AuthGuardService } from './AuthGuards/auth-guard.service'; 
import { LoginGuardService} from './AuthGuards/login-guard-service'; 

const routes: Routes = [
  {path: 'login', component: LoginComponent, canActivate:[LoginGuardService]},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'home', component: NavBarComponent, canActivate:[AuthGuardService]}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
