import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { Candidatos } from 'src/app/models/candidato/candidatos.model';
import { CandidatosService } from 'src/app/services/candidatos/candidatos.service';


@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.css']
})
export class CandidatosComponent implements OnInit {

  mostrarInserir: boolean;
  dataSource = new MatTableDataSource<Candidatos>();
  selection = new SelectionModel<Candidatos>(true, []);
  idVaga1: any;
  candidatos: Candidatos[] = [];

  candidatos1:  Candidatos= new Candidatos(); 
  colunas = [
   'acoes','candidatos','cpf','rg',  'email' , 'telefone','status', 'vaga'
  ];
  constructor(
    private rhService: CandidatosService,
    private router: Router,
    private notifier: NotifierService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.listaRh();
    this.idVaga1 =  this.route.snapshot.queryParamMap.get('idVaga');
    console.log(this.idVaga1);
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

  vincularCandidato() {
    this.idVaga1 = this.route.snapshot.paramMap.get('id');
    this.rhService.atualizaCandidatos(this.candidatos1).subscribe((data) => {
      if (data.status == 200) {
        this.notifier.notify("success", "CANDIDATO VINCULADO COM SUCESSO!");
        this.router.navigate(['candidato']);
      }
      else {
        this.notifier.notify("error", "Ocorreu um erro na atualização, por favor tente novamente.");
      }
    }, 
   );
  }

  Idvaga(){
    if(this.idVaga1){
      return Number(this.idVaga1);
    }else{
      return Number(this.candidatos1.vagas);
    }
  }



  isAllSelected() {
    this.mostrarInserir = true;
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()  ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row))
  }

}



