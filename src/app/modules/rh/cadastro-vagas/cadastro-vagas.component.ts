import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { Etapa } from 'src/app/models/etapa/etapa.model';
import { Vagas } from 'src/app/models/vagas/vagas.model';
import { Status } from 'src/app/models/status/status.model';
import { EtapaService } from 'src/app/services/etapa/etapa.service';
import { VagasService } from 'src/app/services/vagas/vagas.service';
import { StatusService } from 'src/app/services/status/status.service';
import { Funcao } from 'src/app/models/cargo/funcao.model';
import { FuncaoService } from 'src/app/services/funcao/funcao.service';
import { Especialidade } from 'src/app/models/especialidade/Especialidade.model';
import { EspecialidadeService } from 'src/app/services/especialidade/especialidade.service';
import { BuService } from 'src/app/services/bu/bu.service';
import { Bu } from 'src/app/models/bu/bu.model';
import { OperacaoService } from 'src/app/services/operacao/operacao.service';
import { Operacao } from 'src/app/models/operacao/operacao.model';
import { RecrutadorService } from 'src/app/services/recrutador/recrutador.service';
import { Recrutador } from 'src/app/models/recrutador/recrutador.model';

@Component({
  selector: 'app-cadastro-vagas',
  templateUrl: './cadastro-vagas.component.html',
  styleUrls: ['./cadastro-vagas.component.css']
})
export class CadastroVagasComponent implements OnInit {
  
  mostrarEtapa: boolean;
  mostrarAtualizar: boolean;
  mostrarInserir: boolean;
  listaOperacao: Array<Operacao>;
  listaBu: Array<Bu>;
  listaEtapa: Array<Etapa>;
  listaStatus: Array<Status>;
  listaCargo: Array<Funcao>;
  listaEspecialidade: Array<Especialidade>;
  listaRecrutador: Array<Recrutador>;

  form: FormGroup;
  rh: Vagas = new Vagas();
  id: any;
  constructor(
    private rhService: VagasService,
    private notifier: NotifierService,
    public formBuilder: FormBuilder,
    private statusService: StatusService,
    private etapaService: EtapaService,
    private funcaoService: FuncaoService,
    private router: Router,
    private buService: BuService,
    private route: ActivatedRoute,
    private operacaoService: OperacaoService,
    private especialidadeService: EspecialidadeService,
    private recrutadorService: RecrutadorService,

  ) { }

  ngOnInit() {
    this.montaFormBuilder();
    this.carregaUsuarios();
    this.getStatus();
    this.getRecrutador();
    this.getOperacao();
    this.getEtapa();
    this.getBu();
    this.getEspecialidade();
    this.getCargos();
    setTimeout(()=>{
      this.preencheCampos();
    }, 1300);
  }


  
  private montaFormBuilder() {
    this.mostrarInserir = true;
    this.form = this.formBuilder.group({
      numero_zoro: [this.rh.numero_zoro, [Validators.required]],
      va: [this.rh.vale_alimentacao],
      vr: [this.rh.vale_refeicao],
      bonus: [this.rh.bonus],
      remuneracao: [this.rh.remuneracao, [Validators.required]],
      plano_saude: [this.rh.plano_saude, [Validators.required]],
      cesta: [this.rh.cesta],
      flash: [this.rh.flash],
      etapa:[this.rh.etapa],
      status: [this.rh.status],
      cargo: [this.rh.cargo,[Validators.required]],
      especialidade: [this.rh.especialidade, [Validators.required]],
      recrutador: [this.rh.recrutador, [Validators.required]],
      operacao: [this.rh.operacao,[Validators.required]],
      bu: [this.rh.bu,[Validators.required]],
    });
    let remuneracao = document.getElementById('remuneracao');
    let va = document.getElementById('va');
    let vr = document.getElementById('vr');
    let bonus = document.getElementById('bonus');
    let flash = document.getElementById('flash');
    let cesta = document.getElementById('cesta');

    remuneracao.addEventListener('input', (event) =>{
      (<HTMLInputElement>document.getElementById('remuneracao')).value = formataMoeda((event.target as HTMLInputElement).value);      
    });
    va.addEventListener('input', (event) =>{
      (<HTMLInputElement>document.getElementById('va')).value = formataMoeda((event.target as HTMLInputElement).value); 
    });
    vr.addEventListener('input', (event) =>{
      (<HTMLInputElement>document.getElementById('vr')).value = formataMoeda((event.target as HTMLInputElement).value);   
    });
    bonus.addEventListener('input', (event) =>{
      (<HTMLInputElement>document.getElementById('bonus')).value = formataMoeda((event.target as HTMLInputElement).value);     
    });
    flash.addEventListener('input', (event) =>{
      (<HTMLInputElement>document.getElementById('flash')).value = formataMoeda((event.target as HTMLInputElement).value);    
    });
    cesta.addEventListener('input', (event) =>{
      (<HTMLInputElement>document.getElementById('cesta')).value = formataMoeda((event.target as HTMLInputElement).value);    
    })

    function formataMoeda(value){
      let valor = value;

      valor = valor + '';
      valor = parseInt(valor.replace(/[\D]+/g, ''));
      valor = valor + '';
      valor = valor.replace(/([0-9]{2})$/g, ",$1");


      if(valor.length > 6){
          valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
      }
      if(valor == 'NaN'){
        return '';
      }
      return valor;
    }
  }



  private carregaUsuarios() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.rhService.getVagasId(this.id).subscribe(
        (rh) => {
          this.rh = rh;
          this.mostrarEtapa = true;
          this.mostrarAtualizar= true;
          this.mostrarInserir = false;
        }
      );
    }
  }
 
  private getStatus() {
    this.statusService.getStatus().subscribe((lista) => {
      this.listaStatus = lista;
    });
  }

  private getBu() {
    this.buService.getBu().subscribe((lista) => {
      this.listaBu = lista;
    });
  }

  private getOperacao() {
    this.operacaoService.getOperacao().subscribe((lista) => {
      this.listaOperacao = lista;
    });
  }

  private getEtapa() {
    this.etapaService.getEtapa().subscribe((lista) => {
      this.listaEtapa = lista;
    });
  }

  private getCargos() {
    this.funcaoService.getCargo().subscribe((lista) => {
      this.listaCargo = lista;
    });
  }

  private getEspecialidade() {
    this.especialidadeService.getEspecialidade().subscribe((lista) => {
      this.listaEspecialidade = lista;
    });
  }

  private getRecrutador() {
    this.recrutadorService.getRecrutador().subscribe((lista) => {
      this.listaRecrutador = lista;
    });
  }

  
  submit() {
    if (this.form.invalid) {
      this.notifier.notify("error", " Todos os campos devem ser preenchidos corretamente!");
    }  else if(this.id){
        this.atualizaUsuario();
      } else {
        this.insereRh();
    }
  }

  private insereRh() {
    this.rhService.insereVagas(this.rh).subscribe((data) => {
      if (data.status == 200) {
        this.notifier.notify("success", "VAGAS CADASTRADO COM SUCESSO!");
        this.router.navigate(['rh']);
      }
      else{
        this.notifier.notify("error", "Ocorreu um erro ao cadastrar, por favor verificar os devidos dados, tente novamente.");
      }
    });
  }

  private atualizaUsuario() {
    this.rhService.atualizaVagas(this.rh).subscribe((data) => {
      if (data.status == 200) {
        this.notifier.notify("success", "DADOS DA VAGA ATUALIZADO COM SUCESSO !");
        this.router.navigate(['rh']);
      }
      else {
        this.notifier.notify("error", "Ocorreu um erro na atualização, por favor tente novamente.");
      }
    }, 
   );
  }

  preencheCampos(){
    this.populaCampo('select-operacao', this.rh.operacao);
    this.populaCampo('select-especialidade', this.rh.especialidade);
    this.populaCampo('select-recrutador', this.rh.recrutador);
    this.populaCampo('select-cargo', this.rh.cargo);
    this.populaCampo('select-etapa', this.rh.etapa);
    this.populaCampo('select-status', this.rh.status);
    this.populaCampo('select-bu', this.rh.bu);

  }

  populaCampo(id, obj){
    if(obj != undefined){
      // for(let x in document.getElementById(id).options){
      //   let item =   document.getElementById(id).options[x];
      //   if(item.id == obj.id){
      //     item.selected = true;
      //     break;
      //   }
      // }
    }
  }

  volta(){
    this.router.navigate(['rh/']);
  }
}
