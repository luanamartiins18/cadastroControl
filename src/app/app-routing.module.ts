import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeParentComponent } from './modules/pagina-inicial/home-parent/home-parent.component';
import { UsuariosComponent } from './modules/usuario/usuarios/usuarios.component';
import { DefaultComponent } from './modules/pagina-inicial/default/default.component';
import { NovoUsuarioComponent } from './modules/usuario/novo-usuario/novo-usuario.component';
import { DetalhaUsuarioComponent } from './modules/usuario/detalha-usuario/detalha-usuario.component';
import { CargoComponent } from './modules/usuario/cargo/cargo.component';
import { ContratoComponent } from './modules/usuario/contrato/contrato.component';
import { RelatorioComponent } from './modules/usuario/relatorio/relatorio.component';
import { MaquinasComponent } from './modules/usuario/maquinas/maquinas.component';
import { DetalhesMaquinasComponent } from './modules/usuario/detalhes-maquinas/detalhes-maquinas.component';
import { AtualizarMaquinasComponent } from './modules/usuario/atualizar-maquinas/atualizar-maquinas.component';
import { PerfilComponent } from './modules/usuario/perfil/perfil.component';
import { CandidatosComponent } from './modules/rh/candidatos/candidatos.component';
import { CadastroCandidatosComponent } from './modules/rh/cadastro-candidatos/cadastro-candidatos.component';
import { DetalhesCandidatosComponent } from './modules/rh/detalhes-candidatos/detalhes-candidatos.component';


const routes: Routes = [
  {path: '', component: HomeParentComponent,
    children: [
      {path: 'home', component: DefaultComponent},
      {path: 'usuarios', component: UsuariosComponent},
      {path: 'usuarios/:id', component: DetalhaUsuarioComponent},
      {path: 'novo-usuario/:id', component: NovoUsuarioComponent},
      {path: 'novo-usuario', component: NovoUsuarioComponent},
      {path: 'funcao', component:CargoComponent},
      {path: 'contrato', component:ContratoComponent},
      {path: 'relatorio', component:RelatorioComponent},
      {path: 'detalhesMaquinas', component: DetalhesMaquinasComponent},
      {path: 'detalhesMaquinas/:id',component: AtualizarMaquinasComponent},
      {path: 'maquinas/:id', component: MaquinasComponent},
      {path: 'maquinas', component:MaquinasComponent},
      {path: 'perfil', component: PerfilComponent},
      {path: 'rh', component: CandidatosComponent},
      {path: 'rh/:id', component: DetalhesCandidatosComponent},
      {path:'cadastro-candidatos', component: CadastroCandidatosComponent},
      {path:'cadastro-candidatos/:id', component: CadastroCandidatosComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
