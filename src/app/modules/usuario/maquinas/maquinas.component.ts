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
import { HistoricoMaquinas } from 'src/app/models/historico/historicoMaquinas/historicoMaquinas.model';
import { ActivatedRoute, Router } from '@angular/router';
import { StatusMaquina } from 'src/app/models/statusMaquina/statusMaquina.model';
import { StatusMaquinaService } from 'src/app/services/statusMaquina/statusMaquina.service';


@Component({
  selector: 'app-maquinas',
  templateUrl: './maquinas.component.html',
  styleUrls: ['./maquinas.component.css']
})
export class MaquinasComponent implements OnInit {


  
  form: FormGroup;
  historicoMaquinas: HistoricoMaquinas = new HistoricoMaquinas();
  usuario: Usuario = new Usuario();
  listaModelo: Array<Modelo>;
  ListaStatusMaquina: Array<StatusMaquina>;
  listaEquipamento: Array<Equipamento>;
  listaMemoria: Array<Memoria>;
  usuarios: Usuario[] = [];
  id: String;
  historico: HistoricoMaquinas[] = [];

;
  colunas = [
  'equipamento','modelo','patrimonio','tag', 'data_inicio'
  ];
  colunas1 = [
    'equipamento','modelo','patrimonio','tag', 'data_inicio', 'data_final'
  ];
  mostrarTabela: boolean;
  mostrarAtualizar: boolean;
  mostrarInserir: Boolean;
  aparecer:boolean;

  constructor(
    public formBuilder: FormBuilder,
    private modeloService: ModeloService,
    private equipamentoService: EquipamentoService,
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router,
    private memoriaService: MemoriaService,
    private notifier: NotifierService,
    private statusService: StatusMaquinaService,
  ) { }

  ngOnInit() {
    this.carregaUsuarios();
    this.montaFormBuilder();
    this.getMemoria();
    this.getEquipamento();
    this.getModelo();
    this.getStatusMaquina();
    this.mostrarhistoricoMaquinas();
    this.mostrarInserir= true;
    this.aparecer = true;
    setTimeout(()=>{
      this.preencheCampos();
    }, 1300);
  }


  desabilitarDatafinal(){
    if(this.historicoMaquinas.data_inicio == undefined){
      this.mostrarInserir= true;
      this.mostrarAtualizar = false;
    }else{
      this.mostrarAtualizar= true;
      this.aparecer = false;
    }
  }

  
  volta(){
    this.router.navigate(['detalhesMaquinas/']);
  }

    mostrarhistoricoMaquinas() {
      this.mostrarAtualizar= false;
      this.mostrarInserir =  true;
    if(this.usuario.codigoRe == undefined){
      this.historico = [];
      this.mostrarInserir =  true;
      this.mostrarAtualizar = false;
      this.mostrarTabela= false;
    }else{
      this.usuarioService.getListaHistoricoMaquinasRe(this.usuario.codigoRe).subscribe(
        data => {
        this.historico = data;
        this.mostrarAtualizar = false;
        this.mostrarInserir = true;
        this.mostrarTabela= true;
      });
    }
  } 

  preencheCampos(){
    this.populaCampo('select-modelo', this.usuario.modelo);
    this.populaCampo('select-equipamento', this.usuario.equipamento);
    this.populaCampo('select-memoria', this.usuario.memoria);

  }

  populaCampo(id: string, obj: any) {
    if (obj != undefined) {
      const selectElement = document.getElementById(id) as HTMLSelectElement;
      if (selectElement) {
        for (let x = 0; x < selectElement.options.length; x++) {
          let item = selectElement.options[x];
          if (item.id == obj.id) {
            item.selected = true;
            break;
          }
        }
      }
    }
  } 

  getNome(event: any) {
    if(event){
      var value = event.target.value;
      var url = this.usuarioService.getUsuarioRe(value);
      url.subscribe(data => {
        if(data) {
          (<HTMLInputElement>document.getElementById("nome")).value = data.nome;
          this.usuario.nome = data['nome'];
          this.usuario.codigoRe = data.codigoRe;
        } else{
          (<HTMLInputElement>document.getElementById('nome')).value=("");
        }
      });
      return url;
    } 
  }

  private montaFormBuilder() {
    this.form = this.formBuilder.group({
      codigoRe: [this.usuario.codigoRe],
      modelo:[this.historicoMaquinas.modelo],
      equipamento: [this.historicoMaquinas.equipamento],
      memoria:[this.historicoMaquinas.memoria],
      tag: [this.historicoMaquinas.tag],
      patrimonio: [this.historicoMaquinas.patrimonio],
      data_inicio:[this.historicoMaquinas.data_inicio],
      data_final: [this.historicoMaquinas.data_final],
      statusMaquina: [this.historicoMaquinas.statusMaquina],

    });
  }

  private getModelo() {
    this.modeloService.getModelo().subscribe((lista) => {
      this.listaModelo = lista;
    });
  }

  private getStatusMaquina() {
    this.statusService.getStatusMaquinas().subscribe((lista) => {
      this.ListaStatusMaquina = lista;
    });
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

  submitAtualizacao() {
    if (this.form.invalid) {
      this.notifier.notify("error", " Todos os campos devem ser preenchidos corretamente !");
    } else {
      this.atualizaMaquinas();
    }
  }

  private insereMaquinas() {
    this.usuarioService.insereMaquinas(this.historicoMaquinas, this.usuario).subscribe((data) => {
      if (data.status == 200) {
        this.notifier.notify("success", "Dados inseridos com sucesso !");
        this.router.navigate(['detalhesMaquinas/']);
      }
      else {
        this.notifier.notify("error", "Houve um erro no cadastro da Maquina");
      }
    }, 
    );
  }

  private atualizaMaquinas(){
    this.usuarioService.atualizarMaquinas(this.historicoMaquinas, this.usuario).subscribe((data) => {
      if (data.status == 200) {
        // alert( "Data de entrega alterada, gerar um termo de entrega");
        this.notifier.notify("success", "Atualizado com sucesso");
        this.router.navigate(['detalhesMaquinas/'+ this.id]);
      }
      else {
        this.notifier.notify("error", "Houve um erro no atualiza da Maquina");
      }
    }, 
    );
  }
  
private carregaUsuarios() {
  this.id = this.route.snapshot.paramMap.get('id');
  if (this.id) {
    this.usuarioService.getHistoricoMaquinas(this.id).subscribe(
      (usuario) => {
        this.historicoMaquinas = usuario;
        this.usuario = this.historicoMaquinas.usuario;
        this.mostrarInserir= false;
        this.mostrarAtualizar= true;
      }
    );
  }
  }
  
  AtualizarMaquinas(row: { id: string; }) {
    this.router.navigate(['/../detalhesMaquinas/' + row.id]);
  }
}
