import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { Candidatos } from 'src/app/models/candidato/candidatos.model';
import { StatusCandidato } from 'src/app/models/statusCandidato/statusCandidato.model';
import { Vagas } from 'src/app/models/vagas/vagas.model';
import { CandidatosService } from 'src/app/services/candidatos/candidatos.service';
import { StatusCandidatoService } from 'src/app/services/statusCandidato/statusCandidato.service';
import { VagasService } from 'src/app/services/vagas/vagas.service';


@Component({
  selector: 'app-cadastro-candidato',
  templateUrl: './cadastro-candidato.component.html',
  styleUrls: ['./cadastro-candidato.component.css']
})
export class CadastroCandidatoComponent implements OnInit {

  mostrarStatus: boolean;
  listaStatusCandidato: Array<StatusCandidato>;
  listaVagas: Array<Vagas>;
  mostrarAtualizar: boolean;
  mostrarInserir: boolean
  mensagem: string = '';
  nomeArquivo: string = '';
  formData = new FormData();
  id: any;
  form: FormGroup;
  candidato: Candidatos = new Candidatos();
  candidatos: Candidatos [] = [];
  idVaga: string;

  constructor(
    public formBuilder: FormBuilder,
    private notifier: NotifierService,
    private candidatoService: CandidatosService,
    private router: Router,
    private route: ActivatedRoute,
    private statusCandidatoService: StatusCandidatoService,
    private vagasService: VagasService,
  ) { }

  ngOnInit() {
    this.montaFormBuilder();
    this.carregaUsuarios();
    this.getStatusCandidato();
    this.getVagas();
    this.mostrarStatus = false;
    this.mostrarInserir = true;
    this.idVaga =  this.route.snapshot.queryParamMap.get('idVaga');
    console.log(this.idVaga);
  }



  private montaFormBuilder() {
    this.form = this.formBuilder.group({
      candidatos: [this.candidato.candidatos, [Validators.required]],
      telefone: [this.candidato.telefone, [Validators.required]],
      cpf: [this.candidato.cpf, [Validators.required]],
      rg: [this.candidato.rg, [Validators.required]],
      email: [this.candidato.email, [Validators.required]],
      va_atual: [this.candidato.vale_alimentacao_atual],
      vr_atual: [this.candidato.vale_refeicao_atual],
      bonus_atual: [this.candidato.bonus_atual],
      remuneracao_atual: [this.candidato.remuneracao_atual, [Validators.required]],
      plano_saude_atual: [this.candidato.plano_saude_atual, [Validators.required]],
      cesta_atual: [this.candidato.cesta_atual],
      flash_atual: [this.candidato.flash_atual],
      arquivos: [ this.candidato.arquivos],
      status_candidato:[this.candidato.status_candidato],
// -------------------------------------------------------------
      va_pretensao: [this.candidato.vale_alimentacao_pretensao],
      vr_pretensao: [this.candidato.vale_refeicao_pretensao],
      bonus_pretensao: [this.candidato.bonus_pretensao],
      remuneracao_pretensao: [this.candidato.remuneracao_pretensao, [Validators.required]],
      plano_saude_pretensao: [this.candidato.plano_saude_pretensao, [Validators.required]],
      cesta_pretensao: [this.candidato.cesta_pretensao],
      flash_pretensao: [this.candidato.flash_pretensao],
      vagas: [this.candidato.vagas]
    });
    let remuneracao_atual = document.getElementById('remuneracao_atual');
    let va_atual = document.getElementById('va_atual');
    let vr_atual = document.getElementById('vr_atual');
    let bonus_atual = document.getElementById('bonus_atual');
    let flash_atual = document.getElementById('flash_atual');
    let cesta_atual = document.getElementById('cesta_atual');
    let remuneracao_pretensao = document.getElementById('remuneracao_pretensao');
    let va_pretensao = document.getElementById('va_pretensao');
    let vr_pretensao = document.getElementById('vr_pretensao');
    let bonus_pretensao = document.getElementById('bonus_pretensao');
    let flash_pretensao = document.getElementById('flash_pretensao');
    let cesta_pretensao = document.getElementById('cesta_pretensao');

    remuneracao_atual.addEventListener('input', (event) =>{
      (<HTMLInputElement>document.getElementById('remuneracao_atual')).value = formataMoeda((event.target as HTMLInputElement).value);     
    });
    va_atual.addEventListener('input', (event) =>{
      (<HTMLInputElement>document.getElementById('va_atual')).value = formataMoeda((event.target as HTMLInputElement).value);      
    });
    vr_atual.addEventListener('input', (event) =>{
      (<HTMLInputElement>document.getElementById('vr_atual')).value = formataMoeda((event.target as HTMLInputElement).value);    
    });
    bonus_atual.addEventListener('input', (event) =>{
      (<HTMLInputElement>document.getElementById('bonus_atual')).value = formataMoeda((event.target as HTMLInputElement).value); 
    });
    flash_atual.addEventListener('input', (event) =>{
      (<HTMLInputElement>document.getElementById('flash_atual')).value = formataMoeda((event.target as HTMLInputElement).value);      
    });
    cesta_atual.addEventListener('input', (event) =>{
      (<HTMLInputElement>document.getElementById('cesta_atual')).value = formataMoeda((event.target as HTMLInputElement).value);   
    });
    remuneracao_pretensao.addEventListener('input', (event) =>{
      (<HTMLInputElement>document.getElementById('remuneracao_pretensao')).value = formataMoeda((event.target as HTMLInputElement).value);   
    });
    va_pretensao.addEventListener('input', (event) =>{
      (<HTMLInputElement>document.getElementById('va_pretensao')).value = formataMoeda((event.target as HTMLInputElement).value);     
    });
    vr_pretensao.addEventListener('input', (event) =>{
      (<HTMLInputElement>document.getElementById('vr_pretensao')).value = formataMoeda((event.target as HTMLInputElement).value);     
    });
    bonus_pretensao.addEventListener('input', (event) =>{
      (<HTMLInputElement>document.getElementById('bonus_pretensao')).value = formataMoeda((event.target as HTMLInputElement).value);   
    });
    flash_pretensao.addEventListener('input', (event) =>{
      (<HTMLInputElement>document.getElementById('flash_pretensao')).value = formataMoeda((event.target as HTMLInputElement).value);    
    });
    cesta_pretensao.addEventListener('input', (event) =>{
      (<HTMLInputElement>document.getElementById('cesta_pretensao')).value = formataMoeda((event.target as HTMLInputElement).value);  
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
      this. candidatoService.getCandidatosId(this.id).subscribe(
        (rh) => {
          this.candidato = rh;
          this.mostrarAtualizar= true;
          this.mostrarInserir = false;
          this.mostrarStatus = true;
        }
      );
    }
  }

  submit() {
    if (this.form.invalid) {
      this.notifier.notify("error", " Todos os campos devem ser preenchidos corretamente!");
    }  else if(this.id){
        this.atualizaCandidatos();
      } else {
        this.insereCandidatos();
    }
  }

  private getStatusCandidato() {
    this.statusCandidatoService.getStatusCandidato().subscribe((lista) => {
      this.listaStatusCandidato = lista;
    });
  }

  private getVagas() {
    this.vagasService.getVagas().subscribe((lista) => {
      this.listaVagas = lista;
    });
  }

  private insereCandidatos() {
    this.candidatoService.insereCandidatos(this.candidato).subscribe((data) => {
      if (data.status == 200) {
        this.notifier.notify("success", "CANDIDATO CADASTRADO COM SUCESSO!");
        this.router.navigate(['candidato']);
      }
      if (data.status == 500){
        this.notifier.notify("error", "ERRO AO CADASTRAR, CONFIRAR OS DADOS ");
      }
    });
  }

  private atualizaCandidatos() {
    this.candidatoService.atualizaCandidatos(this.candidato).subscribe((data) => {
      if (data.status == 200) {
        this.notifier.notify("success", "DADOS DO CANDIDATO ATUALIZADO COM SUCESSO !");
        this.router.navigate(['candidato']);
      }
      else {
        this.notifier.notify("error", "Ocorreu um erro na atualização, por favor tente novamente.");
      }
    }, 
   );
  }

  onFileSelected(event) {
    const arquivoSelecionado: File = <File>event.target.files[0];
    if (arquivoSelecionado) {
      this.uploadArquivo(arquivoSelecionado);
    }
  }

  private uploadArquivo(arquivoSelecionado: File) {
    this.formData.append("file", arquivoSelecionado);
  }

  volta(){
    this.router.navigate(['rh/']);
  }


  Idvaga(){
    if(this.idVaga){
      return Number(this.idVaga);
    }else{
      return Number(this.candidato.vagas);
    }
  }
 
}

