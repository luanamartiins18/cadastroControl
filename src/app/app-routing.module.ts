import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './usuario/login/login.component';
import { NavBarComponent } from './pagina-inicial/nav-bar/nav-bar.component';
import { AuthGuardService } from './auth-guard.service'; 
import { LoginGuardService} from './login-guard-service'; 

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
