import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './modules/usuario/login/login.component';
import { HomeParentComponent } from './modules/pagina-inicial/home-parent/home-parent.component';
import { AuthGuardService } from './AuthGuards/auth-guard.service'; 
import { LoginGuardService} from './AuthGuards/login-guard-service'; 

const routes: Routes = [
  {path: 'login', component: LoginComponent, canActivate:[LoginGuardService]},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'home', component: HomeParentComponent, canActivate:[AuthGuardService]}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
