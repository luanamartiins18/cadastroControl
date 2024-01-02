import {Component,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario/usuario.model';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import * as printJS from 'print-js';
import { Contrato } from 'src/app/models/contrato/contrato.model';
import { ContratoService } from 'src/app/services/contrato/contrato.service';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnInit {
  
  listaContrato: Array<Contrato>;
  usuario: Usuario = new Usuario();
  usuarios: Usuario[] = [];
  form: FormGroup;
  teamJSON: JSON;
  colunas = ['codigoRe', 'nome', 'cargo'];
  mostrarGerarPDF: boolean;

  constructor(
    public formBuilder: FormBuilder,
    private us: UsuarioService,
    private contratoService: ContratoService,
  ) {}

  ngOnInit() {
    this.montaFormBuilder();
    this.getContrato();
    this.mostrarGerarPDF = false;
  }
  
  listaUsuariosPorOperacao() {
    this.mostrarGerarPDF = true;
    const selectedContratoId = this.form.get('contrato').value;
    this.us.getListaUsuariosPorOperacao(selectedContratoId).subscribe(
      data => {
        if (Array.isArray(data) && data.length > 0) {
          this.usuarios = data; // Se houver dados, popula o array 'usuarios'
        } else {
          this.usuarios = []; // Se não houver dados, define 'usuarios' como um array vazio
        }
      },
      error => {
        console.error(error);
        this.usuarios = []; // Em caso de erro ou nenhum dado retornado, define 'usuarios' como um array vazio
        this.mostrarGerarPDF = false;
      }
    );
  }

  
  PrintSimplesPDF(){
    let titulo = document.getElementById('divTitulo');
    let divDemandaOperacao = document.getElementById('divDemandaOperacao');
    let infoDemanda = document.createElement('b');
    let infoOperacao = document.createElement('b');
    let totalUsuario = document.getElementById('totalUsuario');
    divDemandaOperacao.innerHTML = "";
    titulo.style.display = 'block';
    divDemandaOperacao.style.display = "block";
    totalUsuario.style.display = 'block';
    infoDemanda.innerHTML = this.usuarios[0].contrato.demanda + "&ensp; &ensp; &ensp; &ensp; &ensp; &ensp;";
    infoOperacao.innerHTML = this.usuarios[0].contrato.operacao;
    divDemandaOperacao.append(infoDemanda, infoOperacao);
    printJS({printable:'teste', type:'html', style:'.divDemandaOperacao {color: #cc18f0}'});
    titulo.style.display = 'none';
    divDemandaOperacao.style.display = 'none';
    totalUsuario.style.display = 'none';
  }  
  
             
  private montaFormBuilder() {
    this.form = this.formBuilder.group({
      contrato: [this.usuario.contrato, [Validators.required]],
    });
  }

  private getContrato() {
    this.contratoService.getContrato().subscribe((lista) => {
      this.listaContrato = lista;
     
    });
  }

}