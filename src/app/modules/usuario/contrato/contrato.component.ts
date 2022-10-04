import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { CentroCusto } from 'src/app/models/centroCusto/centroCusto.model';
import { Cliente } from 'src/app/models/cliente/cliente.model';
import { Demanda } from 'src/app/models/demanda/demanda.model';
import { Operacao } from 'src/app/models/operacao/operacao.model';
import { Usuario } from 'src/app/models/usuario/usuario.model';
import { CentroService } from 'src/app/services/centroCusto/centroCusto.service';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { DemandaService } from 'src/app/services/demanda/demanda.service';
import { OperacaoService } from 'src/app/services/operacao/operacao.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.component.html',
  styleUrls: ['./contrato.component.css']
})
export class ContratoComponent implements OnInit {


  listaCliente: Array<Cliente>;
  listaOperacao: Array<Operacao>;
  listaCentro: Array<CentroCusto>;
  listaDemanda: Array<Demanda>;
  form: FormGroup;
  usuario: Usuario = new Usuario();
  id: any;
  listaCargoHistorico: Array<{id: number, descricao: string}>;
  historico: Operacao[] = [];
  
  colunas = [
    'operacao', 'data_inicio', 'data_final'
    ];
  mostrarTabela: boolean;
  constructor(
    public formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private notifier: NotifierService,
    private clienteService: ClienteService,
    private operacaoService: OperacaoService,
    private centroService:  CentroService,
    private demandaService: DemandaService,
  ) { }

  ngOnInit() {
    this.montaFormBuilder();
    this.getCliente();
    this.getOperacao();
    this.getDemanda();
    this.getCentro();
    this.mostrarhistoricoOperacao();
    this.mostrarTabela = false;
  }

  mostrarhistoricoOperacao() {
    this.mostrarTabela = true;
    if(this.usuario.codigoRe == undefined) {
      this.historico = [];
    }else{
      this.usuarioService.getListaHistoricoOperacaoRe(this.usuario.codigoRe).subscribe(
        data => {
        this.historico = data;
      });
    }
  } 



  getNome(event: any) {
    if(event){
      var value = event.target.value;
      var url = this.usuarioService.getUsuario(value);
      url.subscribe(data => {
        if(data) {
          (<HTMLInputElement>document.getElementById("nome")).value = data['nome'];
          this.usuario.nome = data['nome'];
        } else{
          (<HTMLInputElement>document.getElementById('nome')).value=("");
        }
      });
      return url;
    } 
  }

  private montaFormBuilder() {
    this.form = this.formBuilder.group({
      codigoRe: [this.usuario.codigoRe, [Validators.required]],
      demanda: [this.usuario.demanda, [Validators.required]],
      cliente:[this.usuario.cliente,[Validators.required]],
      operacao: [this.usuario.operacao,[Validators.required]],
      centro: [this.usuario.centro,[Validators.required]],
    });
  }

  private getCliente() {
    this.clienteService.getCliente().subscribe((lista) => {
      this.listaCliente = lista;
    });
  }

  private getOperacao() {
    this.operacaoService.getOperacao().subscribe((lista) => {
      this.listaOperacao = lista;
    });
  }

  private getCentro() {
    this.centroService.getCentro().subscribe((lista) => {
      this.listaCentro = lista;
    });
  }

  private getDemanda() {
    this.demandaService.getDemanda().subscribe((lista) => {
      this.listaDemanda = lista;
    });
  }


  submit() {
    if (this.form.invalid) {
      this.notifier.notify("error", " Todos os campos devem ser preenchidos corretamente!");
    } else {
      this.insereContrato();
    }
  }


  private insereContrato() {
    this.usuarioService.insereContrato(this.usuario).subscribe((data) => {
      if (data.status == 200) {
        this.notifier.notify("success", "Contrato criado com sucesso!");
        location.reload()
      }
      else {
        this.notifier.notify("error", "Houve um erro no cadastro a Contrato");
      }
    }, 
    );
  }
}
