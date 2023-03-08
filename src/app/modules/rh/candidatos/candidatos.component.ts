import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { CandidatosInterface } from 'src/app/interfaces/CandidatosInterface';
import { Candidatos } from 'src/app/models/candidato/candidatos.model';
import { StatusCandidato } from 'src/app/models/statusCandidato/statusCandidato.model';
import { Vagas } from 'src/app/models/vagas/vagas.model';
import { CandidatosService } from 'src/app/services/candidatos/candidatos.service';
import { StatusCandidatoService } from 'src/app/services/statusCandidato/statusCandidato.service';
import { VagasService } from 'src/app/services/vagas/vagas.service';


@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.css']
})
export class CandidatosComponent implements OnInit {


  listaVagas: Array<Vagas>;
  listaStatusCandidato: Array<StatusCandidato>;
  form: FormGroup;
  mostrarInserir: boolean;
  mostrarVincular:boolean;
  dataSource = new MatTableDataSource<Candidatos>();
  selection = new SelectionModel<Candidatos>(true, []);
  candidatos:  Candidatos[] = [];
  candidatos1:  Candidatos = new Candidatos(); 

  candidatoTeste: Candidatos[] = [];

  vagas: Vagas;
  colunas = [
   'acoes','candidatos','cpf','rg',  'email' , 'telefone','status', 'vaga'
  ];
  constructor(
    private rhService: CandidatosService,
    private router: Router,
    private statusCandidatoService: StatusCandidatoService,
    private notifier: NotifierService,
    private route: ActivatedRoute,
    public formBuilder: FormBuilder,
    private vagasService: VagasService,
  ) { }

  ngOnInit() {
    this.montaFormBuilder();
    this.getStatusCandidato();
    this.listaRh();
    this.mostrarVincular =  false;
    this.getVagas();
    setTimeout(()=>{
      this.vagas = this.recuperarVagaPorId(this.route.snapshot.queryParamMap.get('id_vaga'), this.listaVagas);
    }, 1300);
  }
  listaRh(){
    this.rhService.getListaCandidatos().subscribe(
      data => {
      this.candidatos = data;
    });
  }

  detalhesCandidato(row: { id: string; }) {
    this.router.navigate(['/../candidato/' + row.id]);
  }

  searchAllField(event: any) {
    this.candidatos = this.candidatos.filter(obj => {
      return Object.keys(obj).find((key) => {
        return obj[key] ? ((obj[key].descricao ? obj[key].descricao : obj[key]).toString().toUpperCase()).includes(event.target.value.toUpperCase()) : false;
      });
    })
  }

  vincularCandidato(){
    this.candidatoTeste.map((cadidato) => {
      cadidato.vagas = this.vagas;
    })

    this.candidatos1.vagas = this.vagas;
    if(this.vagas == undefined){
      alert("VINCULAR CANDIDATO SOMENTE NA ABA DE VAGA");
    }else{
      
      this.candidatoTeste.map((c) => {
        this.rhService.atualizaCandidatos(c).subscribe((data) => {
          if (data.status == 200) {
            this.notifier.notify("success", "CANDIDATO VINCULADO COM SUCESSO !");
            this.router.navigate(['rh']);
          }
          else{
              alert("Erro em cadastrar atualizar o candidato")
          }
          console.log(this.candidatos1);
        });
      })

      // this.rhService.atualizaCandidatos(this.candidatos1).subscribe((data) => {
      //   if (data.status == 200) {
      //     this.notifier.notify("success", "CANDIDATO VINCULADO COM SUCESSO !");
      //     this.router.navigate(['rh']);
      //   }
      //   else{
      //       alert("Erro em cadastrar atualizar o candidato")
      //   }
      //   console.log(this.candidatos1);
      // });
    }
  }


  private getVagas() {
    this.vagasService.getVagas().subscribe((lista) => {
      this.listaVagas = lista;
    });
  }

  private recuperarVagaPorId(id_vaga, listaVagas){
    for(let x in listaVagas ){
      let vaga = listaVagas[x];
      if(parseInt(id_vaga) == vaga.id){
        return vaga;
      }
    }
  }

  private getStatusCandidato() {
    this.statusCandidatoService.getStatusCandidato().subscribe((lista) => {
      this.listaStatusCandidato = lista;
    });
  }
  
  listaUsuariosPorStatus(event: any){
    this.rhService.getListaCandidatosPorStatus(event.target.value).subscribe(
      data => {
      this.candidatos = data;
    })
  }


  isAllSelected() {
    this.mostrarVincular = true;
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;  
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
        console.log(this.searchAllField);
  }

  private montaFormBuilder() {
    this.form = this.formBuilder.group({
      status: [this.candidatos1.status_candidato,[Validators.required]],
    });
  }

 MensagemdeAlerta(row: { id: string;}){
  if(this.candidatos1.vagas == null){
    this.rhService.getCandidatosId(row.id).subscribe(
    (rh) => {
      this.candidatos1 = rh;
      this.candidatoTeste.push(this.candidatos1)
      console.log(this.candidatoTeste);
    });
  }else{
    alert("Por favor, desmarcar o candidato que já esta vinculado a uma vaga ");
  }
 }
}



