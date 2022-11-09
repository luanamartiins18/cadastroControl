import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EquipamentoService } from 'src/app/services/equipamento/equipamento.service';
import { MemoriaService } from 'src/app/services/memoria/memoria.service';
import { ModeloService } from 'src/app/services/modelo/modelo.service';
import { Usuario } from 'src/app/models/usuario/usuario.model';
import { Modelo } from 'src/app/models/modelo/modelo.model';
import { Equipamento } from 'src/app/models/equipamento/equipamento.model';
import { Memoria } from 'src/app/models/memoria/memoria.model';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import * as printJS from 'print-js';

@Component({
  selector: 'app-maquinas',
  templateUrl: './maquinas.component.html',
  styleUrls: ['./maquinas.component.css']
})
export class MaquinasComponent implements OnInit {

  form: FormGroup;
  usuario: Usuario = new Usuario();
  listaModelo: Array<Modelo>;
  listaEquipamento: Array<Equipamento>;
  listaMemoria: Array<Memoria>;
  usuarios: Usuario[] = [];
  id: any;
  historico: Modelo[] = [];
  colunas = [
    'modelo', 'data_inicio', 'data_final'
    ];
  mostrarTabela: boolean;
  mostrarGerarPDF: boolean;
  constructor(
    public formBuilder: FormBuilder,
    private modeloService: ModeloService,
    private equipamentoService: EquipamentoService,
    private usuarioService: UsuarioService,
    private memoriaService: MemoriaService,
    private notifier: NotifierService,
  ) { }

  ngOnInit() {
    this.montaFormBuilder();
    this.getMemoria();
    this.getEquipamento();
    this.getModelo();
    this.mostrarTabela = false;
    this.mostrarGerarPDF = false;
  }

  mostrarhistoricoMaquinas() {
    this.mostrarGerarPDF = true;
    this.mostrarTabela = true;
    if(this.usuario.codigoRe == undefined) {
      this.historico = [];
    }else{
      this.usuarioService.getListaHistoricoMaquinasRe(this.usuario.codigoRe).subscribe(
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
      modelo:[this.usuario.modelo,[Validators.required]],
      equipamento: [this.usuario.equipamento,[Validators.required]],
      memoria:[this.usuario.memoria,[Validators.required]],
      tag: [this.usuario.tag,[Validators.required]],
      patrimonio: [this.usuario.patrimonio,[Validators.required]]
    });
  }

  private getModelo() {
    this.modeloService.getModelo().subscribe((lista) => {
      this.listaModelo = lista;
    });
  }

  PrintSimplesPDF(){
    let titulo = document.getElementById('divTitulo');
    let divDemandaOperacao = document.getElementById('divDemandaOperacao');
    let infoDemanda = document.createElement('b');
    let infoOperacao = document.createElement('b');
    divDemandaOperacao.innerHTML = "";
    titulo.style.display = 'block';
    divDemandaOperacao.style.display = "block";
    divDemandaOperacao.append(infoDemanda, infoOperacao);
    printJS({printable:'teste', type:'html', style:'.divDemandaOperacao {color: #cc18f0}'});
    titulo.style.display = 'none';
    divDemandaOperacao.style.display = 'none';
  }
  
             

  private getEquipamento() {
    this.equipamentoService.getEquipamento().subscribe((lista) => {
      this.listaEquipamento = lista;
    });
  }

  private getMemoria() {
    this.memoriaService.getMemoria().subscribe((lista) => {
      this.listaMemoria = lista;
    });
  }

  submit() {
    if (this.form.invalid) {
      this.notifier.notify("error", " Todos os campos devem ser preenchidos corretamente!");
    } else {
      this.insereMaquinas();
    }
  }


  private insereMaquinas() {
    this.usuarioService.insereMaquinas(this.usuario).subscribe((data) => {
      if (data.status == 200) {
        this.notifier.notify("success", "Contrato criado com sucesso!");
        location.reload()
      }
      else {
        this.notifier.notify("error", "Houve um erro no cadastro a Maquinas");
      }
    }, 
    );
  }
}
