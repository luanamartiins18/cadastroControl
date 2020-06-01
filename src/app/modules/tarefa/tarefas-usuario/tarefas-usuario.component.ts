import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { TarefaService } from 'src/app/services/tarefa/tarefa.service';
import { NotifierService } from 'angular-notifier';
import { UsuarioService } from '../../../services/usuario/usuario.service';
import { NgbModalConfig, NgbModal, NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { SituacaoService } from 'src/app/services/situacao/situacao.service';

@Component({
  selector: 'app-tarefas-usuario',
  templateUrl: './tarefas-usuario.component.html',
  styleUrls: ['./tarefas-usuario.component.css'],
  providers: [NgbModalConfig, NgbModal, NgbTooltip]
})
export class TarefasUsuarioComponent implements OnInit {

  btnItem = false;
  idUsu: string;
  idOf: string;
  listaDisciplinas: Array<any>;
  listaDisciplinasAux: Array<any>;
  listaItensGuia: Array<any>;
  listaItensGuiaAux: Array<any>;
  listaTarefas: Array<any>;
  perfil: string;
  perfilAux;
  perfilAlta = 1;
  perfilBaixa = 2;
  perfilBaixaAlta = 3;
  form: FormGroup;
  valorPlanejado: number;
  valorExecutado: number;
  trfAtual;
  listaSituacoes: Array<any>;
  sitForm: FormArray;
  opFormTrf: String = "Salvar";
  numOf;
  page = 1;
  pageSize = 15;
  itemSelecionado = "";
  tabAtiva = 'minhas-tarefas';
  listaComponentesTrf = [];
  listaComplexidadesTrf = [];
  tarefaSelecionada;
  trfPossuiQuantidade = false;
  colunas = ['numTarefa', 'historia', 'artefato', 'sprint', 'situacao', 'tarefa', 'quantidade', 'complexidade', 'valor', 'acoes'];

  constructor(private route: ActivatedRoute,
    private ts: TarefaService,
    private nt: NotifierService,
    private us: UsuarioService,
    config: NgbModalConfig,
    private modalService: NgbModal,
    private ss: SituacaoService) { }

  ngOnInit() {

    this.idUsu = this.route.snapshot.paramMap.get("idUsu");
    this.idOf = this.route.snapshot.paramMap.get("idOf");
    this.form = new FormGroup({
      historia: new FormControl(),
      sprint: new FormControl(),
      observacao: new FormControl(),
      artefato: new FormControl(),
      perfil: new FormControl(this.perfilAux),
      disciplina: new FormControl(),
      item: new FormControl(),
      quantidade: new FormControl(),
      numTarefa: new FormControl(),
      componente: new FormControl(),
      complexidade: new FormControl()
    });
    this.form.controls.disciplina.disable();
    this.form.get("perfil").valueChanges.subscribe(
      (valor) => {
        if (valor != null && valor != 0) {
          this.form.controls.disciplina.enable();
          this.form.controls.disciplina.setValue(0);
          console.log("ativa disciplina");
        } else {
          this.form.controls.disciplina.disable();
          this.form.controls.disciplina.setValue(0);
          console.log('desativa disciplina');
        }
        this.filtraDisciplinas();
        this.form.controls.disciplina.enable()
      }
    );

    this.form.get("disciplina").valueChanges.subscribe(
      (valor) => {
        if (this.form.controls.disciplina.value != 0 && this.form.controls.disciplina.value != null) {
          this.btnItem = true;
        } else {
          this.btnItem = false;
        }
        this.itemSelecionado = "";
        this.listaComponentesTrf = [];
        this.listaComplexidadesTrf = [];
        this.tarefaSelecionada = null;
      }
    );
    this.carregaForm();
    this.buscaTarefas();
    this.carregaSituacoes();
    this.ts.getNumOf(this.idOf).subscribe(
      (data) => {
        this.numOf = data;
      }
    );
  }

  resetForm() {
    this.form.reset();
    this.opFormTrf = "Salvar"
    this.form.controls.perfil.setValue(this.perfilAux);
  }

  editaTarefa(tarefa) {
    this.tabAtiva = 'nova-tarefa';
    this.opFormTrf = "Atualizar"
    this.form.controls.historia.setValue(tarefa.historia);
    this.form.controls.observacao.setValue(tarefa.observacao);
    this.form.controls.sprint.setValue(tarefa.sprint);
    this.form.controls.artefato.setValue(tarefa.artefato);
    this.form.controls.numTarefa.setValue(tarefa.numTarefa);
    this.form.controls.quantidade.setValue(tarefa.quantidade);
    if (tarefa.perfil == "Alta") {
      this.perfilAux = this.perfilAlta;
      this.form.controls.perfil.setValue(this.perfilAlta);
    } else if (tarefa.perfil == "Baixa"){
      this.perfilAux = this.perfilBaixa;
      this.form.controls.perfil.setValue(this.perfilBaixa);
    } else if (tarefa.perfil == "Baixa/Alta"){
    this.perfilAux = this.perfilBaixaAlta;
    this.form.controls.perfil.setValue(this.perfilBaixaAlta);
    }
    this.filtraDisciplinas();
    this.form.controls.disciplina.setValue(tarefa.disciplina);
    this.form.controls.item.setValue(tarefa.idTrfGuia);
    this.filtraItensGuia();
    this.selecionaTarefa(this.getItem(this.form.controls.item.value));
    this.form.controls.componente.setValue(tarefa.componente);
    this.form.controls.complexidade.setValue(tarefa.complexidade);
  }

  getItem(id) {
    let res = null;
    for (let i of this.listaItensGuiaAux) {
      if (i.id_tarefa == id) {
        res = i;
        break;
      }
    }
    return res;
  }

  alteraSituacaoTrf(idSit, idTrf) {
    let param = { idTrf: idTrf, idSit: idSit };
    console.log(param);
    this.ts.alteraSitTarefa(param).subscribe(
      (data) => {
        if (data.status == 200) {
          this.nt.notify("success", "Situação da tarefa alterada com sucesso");
          this.buscaTarefas();
        } else {
          this.nt.notify("success", "Houve um erro ao atualizar a situação da tarefa");
        }
      }
    );
  }

  excluiTarefa() {
    this.ts.deletaTarefa(this.trfAtual).subscribe(
      (data) => {
        if (data.status == 200) {
          this.nt.notify("success", "Tarefa excluída com sucesso");
          this.resetForm();
        }
        this.buscaTarefas();
      }
    );
  }

  carregaSituacoes() {
    this.ss.getSituacoes().subscribe(
      (data) => {
        this.listaSituacoes = data;
      }
    );
  }

  tarefaAtual(trf) {
    this.trfAtual = trf;
  }

  open(content) {
    this.modalService.open(content);
  }

  buscaTarefas() {
    this.valorPlanejado = 0;
    this.valorExecutado = 0;
    this.listaTarefas = new Array<any>();
    this.ts.getTarefasUsu(this.idUsu, this.idOf).subscribe(
      (data => {
        this.listaTarefas = data;
        for (let i of this.listaTarefas) {
          if (i.fk_situacao == 8 || i.fk_situacao == 4) {
            this.valorExecutado += i.valor;
          }
          if (i.fk_situacao != 2 && i.fk_situacao != 5) {
            this.valorPlanejado += i.valor;
          }
        }
      })
    );
  }

  carregaForm() {
    this.ts.getItensGuia().subscribe(
      (data) => {
        this.listaItensGuiaAux = data;
      }
    );
    this.ts.getDisciplinas().subscribe(
      (data) => {
        this.listaDisciplinasAux = data;
        this.us.getPerfilUsuario(this.idUsu).subscribe(
          (data) => {
            if (data['descricao'] == 'Alta') {
              this.form.controls.perfil.setValue(this.perfilAlta);
              this.form.controls.perfil.disable();
              this.perfilAux = this.perfilAlta;

            } else if (data['descricao'] == 'Baixa') {
              this.form.controls.perfil.setValue(this.perfilBaixa);
              this.form.controls.perfil.disable();
              this.perfilAux = this.perfilBaixa;
            }
            else if (data['descricao'] == 'Baixa/Alta') {
              this.form.controls.perfil.setValue(this.perfilBaixaAlta);
              this.form.controls.perfil.disable();
              this.perfilAux = this.perfilBaixaAlta;
            }
          }
        );
      }
    );
  }

  setaTab(op) {
    this.tabAtiva = op;
  }
  //Se todos os items possuírem quantidade, então essa tarefa é controlada por quantidade
  possuiQuantidade(trf) {
    for (let i of trf.itens) {
      if (typeof (i.quantidade) == 'object') {
        return false;
      }
    }
    return true;
  }

  possuiComponente(trf) {
    for (let i of trf.itens) {
      if (typeof (i.componente) == 'object') {
        return false;
      }
    }
    return true;
  }

  filtraItensGuia() {
    this.listaItensGuia = new Array<any>();
    for (let i of this.listaItensGuiaAux) {
      if (i.disciplina == this.form.controls.disciplina.value) {
        this.listaItensGuia.push(i);
      }
    }
  }

  filtraDisciplinas() {
    //Disciplina default
    this.listaDisciplinas = new Array<any>({
      id: 0,
      descricao: "Selecione uma Disciplina"
    });
    for (let i of this.listaDisciplinasAux) {
      if (this.form.controls.perfil.value == this.perfilBaixa) {
        if (i.perfil == 'Baixa') {
          this.perfilAux = this.perfilBaixa;
          this.listaDisciplinas.push(i);
        }
      }
      if (this.form.controls.perfil.value == this.perfilAlta) {
        if (i.perfil == 'Alta') {
          this.perfilAux = this.perfilAlta;
          this.listaDisciplinas.push(i);
        }
      }
      if (this.form.controls.perfil.value == this.perfilBaixaAlta) {
        if (i.perfil == 'Baixa/Alta') {
          this.perfilAux = this.perfilBaixaAlta;
          this.listaDisciplinas.push(i);
        }
      }
    }
  }

  selecionaTarefa(trf) {
    console.log(trf);
    this.tarefaSelecionada = trf;
    this.listaComponentesTrf = [];
    this.listaComplexidadesTrf = [];
    this.form.controls.complexidade.setValue("");
    if (this.possuiComponente(trf)) {
      this.carregaComponentesTarefa(trf);
    }
    if (!this.possuiQuantidade(trf)) {
      this.carregaComplexidadesTarefa(trf);
    }
    if (this.possuiQuantidade(trf)) {
      this.trfPossuiQuantidade = true;
    } else {
      this.trfPossuiQuantidade = false;
      this.form.controls.quantidade.setValue(null);
    }
    this.itemSelecionado = trf.tarefa + ' - ' + trf.descricao_tarefa;
    this.form.controls.componente.setValue("");
  }

  carregaComponentesTarefa(trf) {
    let setComponentes = new Set();
    for (let i of trf.itens) {
      setComponentes.add(i.componente);
    }
    for (let i of setComponentes) {
      this.listaComponentesTrf.push(i);
    }
  }

  carregaComplexidadesTarefa(trf) {
    let setComplexidades = new Set();
    for (let i of trf.itens) {
      setComplexidades.add(i.complexidade);
    }
    this.listaComplexidadesTrf.push('Selecione uma Complexidade');
    for (let i of setComplexidades) {
      this.listaComplexidadesTrf.push(i);
    }
  }

  buscaItemGuia() {
    let itens = this.tarefaSelecionada.itens;
    let numTarefaSelecionada: string;
    //busca pela quantidade dentro do componente informado
    if (this.possuiComponente(this.tarefaSelecionada) && this.possuiQuantidade(this.tarefaSelecionada)) {
      for (let i of itens) {
        if (this.form.controls.componente.value == i.componente) {
          numTarefaSelecionada = i.id_item;
          if (this.form.controls.quantidade.value <= i.quantidade) {
            break;
          }
        }
      }
    }
    //busca pelo componente e complexidade
    if (this.possuiComponente(this.tarefaSelecionada) && !this.possuiQuantidade(this.tarefaSelecionada)) {
      for (let i of itens) {
        if (i.componente == this.form.controls.componente.value &&
          i.complexidade == this.form.controls.complexidade.value) {
          numTarefaSelecionada = i.id_item;
        }
      }
    }
    //busca pela quantidade
    if (!this.possuiComponente(this.tarefaSelecionada) && this.possuiQuantidade(this.tarefaSelecionada)) {
      for (let i of itens) {
        numTarefaSelecionada = i.id_item;
        if (this.form.controls.quantidade.value <= i.quantidade) {
          break;
        }
      }
    }
    //busca pela complexidade
    if (!this.possuiComponente(this.tarefaSelecionada) && !this.possuiQuantidade(this.tarefaSelecionada)) {
      for (let i of itens) {
        if (i.complexidade == this.form.controls.complexidade.value) {
          numTarefaSelecionada = i.id_item;
        }
      }
    }
    return numTarefaSelecionada;
  }

  submit() {
    console.log(this.form.getRawValue());
    if (!this.validaForm(this.form.getRawValue())) {
      this.nt.notify("error", "Todos os campos devem ser preenchidos");
    } else {
      this.tabAtiva = 'minhas-tarefas';
      let aux = this.form.getRawValue();
      aux.numItemGuia = this.buscaItemGuia();
      if (aux.numItemGuia == null) {
        this.nt.notify("error", "Houve um erro ao identificar o item do guia, favor contatar ao admistrador do sistema");
      }
      if (this.opFormTrf == "Salvar") {
        aux.usu = this.idUsu;
        aux.of = this.idOf;
        this.ts.insereTarefa(aux).subscribe(
          (data) => {
            if (data.status == 200) {
              this.nt.notify("success", "Tarefa " + this.form.controls.numTarefa.value + " salva com sucesso");
              this.buscaTarefas();
              this.form.reset();
            }
          },
          (error) => {
            this.nt.notify("error", error.error.text);
          }
        );
      } else {
        aux.idTrfOf = this.trfAtual;
        this.ts.atualizaTarefaOf(aux).subscribe(
          (data) => {
            if (data.status == 200) {
              this.nt.notify("success", "Tarefa " + this.form.controls.numTarefa.value + " Alterada com sucesso");
              this.buscaTarefas();
              this.form.reset();
              this.opFormTrf = "Salvar";
            }
          }
        );
      }
    }
  }

  validaForm(value) {
    if (value.artefato == null || value.artefato == "") return false;
    if (value.disciplina == null) return false;
    if (value.historia == null || value.historia == "") return false;
    if (value.sprint == null) return false;
    if (value.numTarefa == null || value.numTarefa == "") return false;
    return true;
  }
}
