import { ElementRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { Operacao } from 'src/app/models/operacao/operacao.model';
import { Usuario } from 'src/app/models/usuario/usuario.model';
import { OperacaoService } from 'src/app/services/operacao/operacao.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import {jsPDF} from 'jspdf';


@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnInit {

  listaOperacao: Array<Operacao>;
  usuario: Usuario = new Usuario();
  usuarios: Usuario[] = [];
  form: FormGroup;
  mostrarTabela: boolean;
  colunas = [
    'codigoRe', 'nome', 'cargo'
    ];
  @ViewChild('content', {static:false}) el!: ElementRef;
  constructor(
    public formBuilder: FormBuilder,
    private notifier: NotifierService,
    private operacaoService: OperacaoService,
    private us: UsuarioService
  ) {
    
   }

  ngOnInit() {
    this.montaFormBuilder();
    this.getOperacao();
  }

  private listaUsuariosPorOperacao(event: any){
      this.us.getListaUsuariosPorOperacao(event.target.value).subscribe(
        data => {
        this.usuarios = data;
      });
    }
  

  PrintSimplesPDF(){
    let pdf = new jsPDF('p', 'pt', 'a5');
    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.save("testePDFHTML.pdf");
      }
      })
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
