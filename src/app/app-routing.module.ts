import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './modules/usuario/login/login.component';
import { HomeParentComponent } from './modules/pagina-inicial/home-parent/home-parent.component';
import { AuthGuardService } from './AuthGuards/auth-guard.service'; 
import { LoginGuardService} from './AuthGuards/login-guard-service'; 
import { MensagensComponent } from './modules/mensagem/mensagens/mensagens.component';
import { UsuariosComponent } from './modules/usuario/usuarios/usuarios.component';
import { NovaMensagemComponent } from './modules/mensagem/nova-mensagem/nova-mensagem.component';
import { TabelaOfComponent } from './modules/ordem-fornecimento/tabela-of/tabela-of.component';
import { DetalhaOfComponent } from './modules/ordem-fornecimento/detalha-of/detalha-of.component';
import { DefaultComponent } from './modules/pagina-inicial/default/default.component';
import { DetalhaMensagemComponent } from './modules/mensagem/detalha-mensagem/detalha-mensagem.component';
import { ColaboradorOfComponent } from './modules/ordem-fornecimento/colaborador-of/colaborador-of.component';
import { TarefasUsuarioComponent } from './modules/tarefa/tarefas-usuario/tarefas-usuario.component';
import { HistoricoColaboradorComponent } from './modules/mensagem/historico-colaborador/historico-colaborador.component';
import { ListagemGuiaComponent } from './modules/guia/listagem-guia/listagem-guia.component';
import { NovaTarefaComponent } from './modules/tarefa/nova-tarefa/nova-tarefa.component';
import { NovoUsuarioComponent } from './modules/usuario/novo-usuario/novo-usuario.component';
import { DetalhaUsuarioComponent } from './modules/usuario/detalha-usuario/detalha-usuario.component';
import { OrdemFornecimentoRelatorioComponent } from './modules/relatorios/ordem-fornecimento-relatorio/ordem-fornecimento-relatorio.component';
import { ContainerRelatoriosComponent } from './modules/relatorios/container-relatorios/container-relatorios.component';
import { OrcamentoEntregaComponent } from './modules/relatorios/orcamento-entrega/orcamento-entrega.component';
import { RelatorioSiglaComponent } from './modules/relatorios/relatorio-sigla/relatorio-sigla.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent, canActivate:[LoginGuardService]},
  {path: '', component: HomeParentComponent, canActivate:[AuthGuardService],
    children: [
      {path: 'home', component: DefaultComponent, canActivate:[AuthGuardService]},
      {path: 'mensagens', component: MensagensComponent, canActivate:[AuthGuardService]},
      {path: 'usuarios', component: UsuariosComponent, canActivate:[AuthGuardService]},
      {path: 'nova-mensagem', component: NovaMensagemComponent, canActivate:[AuthGuardService]},
      {path: 'mensagem/:id', component: DetalhaMensagemComponent, canActivate:[AuthGuardService]},
      {path: 'usuarios/:id', component: DetalhaUsuarioComponent, canActivate:[AuthGuardService]},
      {path: 'ordem-fornecimento', component: TabelaOfComponent, canActivate:[AuthGuardService]},       
      {path: 'ordem-fornecimento/:id', component: DetalhaOfComponent, canActivate:[AuthGuardService]},
      {path: 'ordem-fornecimento/usuario/:id', component: ColaboradorOfComponent, canActivate:[AuthGuardService]}, 
      {path: 'usuario/:idUsu/ordem-forn/:idOf', component: TarefasUsuarioComponent, canActivate:[AuthGuardService]},
      {path: 'mensagens/usuario/:id', component: HistoricoColaboradorComponent, canActivate: [AuthGuardService]},
      {path: 'guia', component: ListagemGuiaComponent, canActivate: [AuthGuardService]},
      {path: 'nova-tarefa', component: NovaTarefaComponent, canActivate: [AuthGuardService]},
      {path: 'novo-usuario/:id', component: NovoUsuarioComponent, canActivate: [AuthGuardService]},
      {path: 'novo-usuario', component: NovoUsuarioComponent, canActivate: [AuthGuardService]},
      {path: 'relatorios', component: ContainerRelatoriosComponent, canActivate: [AuthGuardService],
        children: [
          {path: 'ordem-fornecimento', component: OrdemFornecimentoRelatorioComponent, canActivate: [AuthGuardService]},
          {path: 'ordem-fornecimento/:id', component: OrcamentoEntregaComponent, canActivate: [AuthGuardService]},
          {path: 'sigla', component: RelatorioSiglaComponent, canActivate: [AuthGuardService]}
        ]
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
