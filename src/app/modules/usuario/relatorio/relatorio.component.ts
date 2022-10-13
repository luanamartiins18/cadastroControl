import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Operacao } from 'src/app/models/operacao/operacao.model';
import { Usuario } from 'src/app/models/usuario/usuario.model';
import { OperacaoService } from 'src/app/services/operacao/operacao.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import * as printJS from 'print-js';


@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnInit {

  @ViewChild('content', {static: false}) el!: ElementRef;
  
  listaOperacao: Array<Operacao>;
  usuario: Usuario = new Usuario();
  usuarios: Usuario[] = [];
  form: FormGroup;
  teamJSON: JSON;
  colunas = [
    'codigoRe', 'nome', 'cargo'
    ];
    mostrarGerarPDF: boolean;

  constructor(
    public formBuilder: FormBuilder,
    private operacaoService: OperacaoService,
    private us: UsuarioService
  ) {
    
   }

  ngOnInit() {
    this.montaFormBuilder();
    this.getOperacao();
    this.mostrarGerarPDF = false;
  }

  listaUsuariosPorOperacao(event: any){
    this.mostrarGerarPDF = true;
    this.us.getListaUsuariosPorOperacao(event.target.value).subscribe(
      data => {
      this.usuarios = data;
      })
  }

  PrintSimplesPDF(){
    let titulo = document.getElementById('divTitulo');
    titulo.style.display = 'block';
    let divDemandaOperacao = document.getElementById('divDemandaOperacao');
    divDemandaOperacao.innerHTML = "";
    divDemandaOperacao.style.display = "block";
    let infoDemanda = document.createElement('b');
    let infoOperacao = document.createElement('b');
    let totalUsuario = document.getElementById('totalUsuario');
    totalUsuario.style.display = 'block';
    infoDemanda.innerHTML = this.usuarios[0].demanda.descricao + "&ensp; &ensp; &ensp; &ensp; &ensp; &ensp;";
    infoOperacao.innerHTML = this.usuarios[0].operacao.descricao;
    divDemandaOperacao.append(infoDemanda, infoOperacao);
    printJS({printable:'teste', type:'html', style:'.divDemandaOperacao {color: #cc18f0}'});
    titulo.style.display = 'none';
    divDemandaOperacao.style.display = 'none';
    totalUsuario.style.display = 'none';
    
  }  

  private montaFormBuilder() {
    this.form = this.formBuilder.group({
      operacao: [this.usuario.operacao,[Validators.required]],
    });
  }

  private getOperacao() {
    this.operacaoService.getOperacao().subscribe((lista) => {
      this.listaOperacao = lista;
    });
  }
}