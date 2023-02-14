import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidatos} from 'src/app/models/candidato/candidatos.model';
import { Vagas } from 'src/app/models/vagas/vagas.model';
import { CandidatosService } from 'src/app/services/candidatos/candidatos.service';
import { VagasService } from 'src/app/services/vagas/vagas.service';

@Component({
  selector: 'app-detalhes-vagas',
  templateUrl: './detalhes-vagas.component.html',
  styleUrls: ['./detalhes-vagas.component.css']
})
export class DetalhesVagasComponent implements OnInit {

  id: String;
  idVaga: String;
  idVaga1: String;
  rh: Vagas = new Vagas();
  candidatos: Candidatos[] = [];
  candidato1:  Candidatos= new Candidatos(); 

  colunas = [
  'candidatos', 'cpf', 'status_candidato'
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private rhService: VagasService,
    private candidatoService: CandidatosService,
    
  ) { }

  ngOnInit() {
    this.carregaUsuarios();
    this.listacandidatosPorVaga();
  }


  listacandidatosPorVaga(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.candidatoService.getListaCandidatosPorVaga(this.id).subscribe(
      data => {
      this.candidatos = data;
    })
  }


  carregaUsuarios() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.rhService.getVagasId(this.id).subscribe(
      (rh) => {
        this.rh = rh;
      }
    );
  }

  volta(){
    this.router.navigate(['rh/']);
  }
  editaVaga() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.router.navigate(['cadastro-vagas/' + this.id]);
  }

  vincularCandidatoNovo(){
    this.idVaga = this.route.snapshot.paramMap.get('idVaga');
    this.router.navigate(['cadastro-candidato/'],{queryParams: {"idVaga": this.idVaga}});
  }


  vincularCandidatoPesquisa(){
    this.idVaga1 = this.route.snapshot.paramMap.get('idVaga1');
    this.router.navigate(['/../candidato/'],{queryParams: {"idVaga1": this.idVaga}});
  }

  detalhesCandidato(row: { id: string; }) {
    this.router.navigate(['/../candidato/' + row.id]);
  }

}