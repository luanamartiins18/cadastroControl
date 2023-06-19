import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { Candidatos } from 'src/app/models/candidato/candidatos.model';
import { Proposta } from 'src/app/models/proposta/proposta.model';
import { StatusCandidato } from 'src/app/models/statusCandidato/statusCandidato.model';
import { Vagas } from 'src/app/models/vagas/vagas.model';
import { CandidatosService } from 'src/app/services/candidatos/candidatos.service';
import { PropostaService } from 'src/app/services/proposta/proposta.service';
import { StatusCandidatoService } from 'src/app/services/statusCandidato/statusCandidato.service';
import { VagasService } from 'src/app/services/vagas/vagas.service';

@Component({
  selector: 'app-proposta',
  templateUrl: './proposta.component.html',
  styleUrls: ['./proposta.component.css']
})

export class PropostaComponent implements OnInit {

proposta: Proposta = new Proposta();
id_candidatos: string;
form: FormGroup;
vagas: Vagas[] = [];
candidato: Candidatos
listaCandidatos: Array<Candidatos>;
listaStatusCandidato: Array<StatusCandidato>;
vagas1:  Vagas= new Vagas(); 
candidatos: Candidatos = new Candidatos();
colunas = [
  'qualitor','cargo','especialidade',  'status' 
]
selectAllOption1: boolean = false;



  constructor(
    private vagasService: VagasService,
    public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private candidatosService: CandidatosService,
    private statusCandidatoService: StatusCandidatoService,
    private propostaService: PropostaService,
    private notifier: NotifierService,
  ) { }

  ngOnInit() {
    this.montaFormBuilder();
    this.listaRh();
    this.getStatusCandidato();
    this.carregaUsuarios();
    this.route.queryParamMap.subscribe(params => {
      const id_candidato = params.get('id_candidatos');
      this.candidato = this.recuperarCandidatoPorId(id_candidato, this.listaCandidatos);
    });
    console.log(this.candidato);
  }

  
  carregaUsuarios() {
    this.id_candidatos = this.route.snapshot.queryParamMap.get('id_candidatos'); // Obter o ID do candidato dos parâmetros de consulta
    this.candidatosService.getCandidatosId(this.id_candidatos).subscribe(
      (candidato) => {
        this.candidato = candidato;
      }
    );
  }

  private recuperarCandidatoPorId(id_candidato, listaCandidatos) {
    for (let x in listaCandidatos) {
      let candidato = listaCandidatos[x];
      if (parseInt(id_candidato) === candidato.id) {
        return candidato;
      }
    }
  }


  listaRh(){
    this.vagasService.getListaVagas().subscribe(
      data => {
      this.vagas = data;
    });
  }

  selectAllOptions1() {
    if (this.proposta.vale_refeicao) {
      this.proposta.vale_alimentacao = false; // Desabilita o campo "Vale Alimentação"
    }
    this.proposta.vale_refeicao = this.selectAllOption1;
    this.proposta.seguro_vida = this.selectAllOption1;
    this.proposta.plano_odonto = this.selectAllOption1;
    this.proposta.plano_saude = this.selectAllOption1;
  }
  

  private montaFormBuilder() {
    this.form = this.formBuilder.group({
      remuneracao: [this.proposta.remuneracao, [Validators.required]],
      status_candidato:[this.proposta.status_candidatos, [Validators.required]],
      vale_alimentacao: [this.proposta.vale_alimentacao],
      vale_refeicao:[this.proposta.vale_refeicao],
      plano_saude: [this.proposta.plano_saude],
      plano_odonto:[this.proposta.plano_odonto],
      seguro_vida: [this.proposta.seguro_vida],
      flash:[this.proposta.flash],
      candidato: [this.proposta.candidato],
    });
    let remuneracao = document.getElementById('remuneracao');
    let flash = document.getElementById('flash');

    remuneracao.addEventListener('input', (event) =>{
      (<HTMLInputElement>document.getElementById('remuneracao')).value = formataMoeda((event.target as HTMLInputElement).value);     
    });

    flash.addEventListener('input', (event) =>{
      (<HTMLInputElement>document.getElementById('flash')).value = formataMoeda((event.target as HTMLInputElement).value);      
    });

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

  
  getDados(event: any) {
    if(event){
      var value = event.target.value;
      var url = this.vagasService.getVagasQualitor(value);
      url.subscribe(data => {
        if(data) {
          (<HTMLInputElement>document.getElementById("cargo")).value = data['cargo'].toString();;
          this.vagas1.cargo = data['cargo'];
          (<HTMLInputElement>document.getElementById("etapa")).value = data['etapa'].toString();;
          this.vagas1.etapa = data['etapa'];
          (<HTMLInputElement>document.getElementById("data_inicio")).value = data['data_inicio'].toString();;
          this.vagas1.data_inicio = data['data_inicio'];
        } else{
          (<HTMLInputElement>document.getElementById('cargo')).value=("");
          (<HTMLInputElement>document.getElementById('etapa')).value=("");
          (<HTMLInputElement>document.getElementById('data_inicio')).value=("");
        }
      });
      return url;
    } 
  }

  volta(){
    this.router.navigate(['candidato/']);
  }

  private getStatusCandidato() {
    this.statusCandidatoService.getStatusCandidato().subscribe((lista) => {
      this.listaStatusCandidato = lista;
    });
  }


  vincularProposta() {
    this.proposta.candidato = this.candidato;
    this.propostaService.insereProposta(this.proposta).subscribe((data) => {
      if (data.status == 200) {
        console.log(this.proposta.candidato);
        this.notifier.notify("success", "PROPOSTA VINCULADO COM SUCESSO!");
        this.router.navigate(['candidato']);
      }
      else{
        this.notifier.notify("error", "Ocorreu um erro ao cadastrar, por favor verificar os devidos dados, tente novamente.");
      }
    });
  }
}

