import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeParentComponent } from './modules/pagina-inicial/home-parent/home-parent.component';
import { UsuariosComponent } from './modules/usuario/usuarios/usuarios.component';
import { DefaultComponent } from './modules/pagina-inicial/default/default.component';
import { NovoUsuarioComponent } from './modules/usuario/novo-usuario/novo-usuario.component';
import { DetalhaUsuarioComponent } from './modules/usuario/detalha-usuario/detalha-usuario.component';
import { CargoComponent } from './modules/usuario/cargo/cargo.component';


const routes: Routes = [
  {path: '', component: HomeParentComponent,
    children: [
      {path: 'home', component: DefaultComponent},
      {path: 'usuarios', component: UsuariosComponent},
      {path: 'usuarios/:id', component: DetalhaUsuarioComponent},
      {path: 'novo-usuario/:id', component: NovoUsuarioComponent},
      {path: 'novo-usuario', component: NovoUsuarioComponent},
      {path: 'funcao', component:CargoComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
