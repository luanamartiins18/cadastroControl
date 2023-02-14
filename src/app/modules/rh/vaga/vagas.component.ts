import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { Vagas } from 'src/app/models/vagas/vagas.model';
import { VagasService } from 'src/app/services/vagas/vagas.service';
import { MatDialog } from '@angular/material/dialog';
import { Status } from 'src/app/models/status/status.model';
import { StatusService } from 'src/app/services/status/status.service';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.css']
})
export class VagasComponent implements OnInit {

  listaStatus: Array<Status>;
  id: String;
  rh: Vagas[] = [];
  rh1:  Vagas= new Vagas(); 
  colunas = [
    'numero_zoro','cargo','especialidade','remuneracao',  'status' , 'etapa', 'recrutador', 'data_inicio', 'acoes'
  ];
  
  dataSource = new MatTableDataSource<Vagas>();

  constructor(
    private rhService: VagasService,
    private statusService: StatusService,
    private router: Router,
    private notifier: NotifierService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getStatus();
    this.listaRh();
  }

  listaRh(){
    this.rhService.getListaVagas().subscribe(
      data => {
      this.rh = data;
    });
  }

  detalhesCandidato(row: { id: string; }) {
    this.router.navigate(['/../rh/' + row.id]);
  }

  searchAllField(event: any) {
    this.rh = this.rh.filter(obj => {
      return Object.keys(obj).find((key) => {
        return obj[key] ? ((obj[key].descricao ? obj[key].descricao : obj[key]).toString().toUpperCase()).includes(event.target.value.toUpperCase()) : false;
      });
    })
  }

  private getStatus() {
    this.statusService.getStatus().subscribe((lista) => {
      this.listaStatus = lista;
    });
  }

  cancelarStatus(candidato: any) {
    this.rhService.atualizaStatus(candidato).subscribe((data) => {
      if (data.status == 200) {
        this.notifier.notify("success", "STATUS DO CANDIDATO ALTERADO PRA CANCELADO COM SUCESSO !", '5000');
        this.router.navigate(['rh']);
      }
      else {
        this.notifier.notify("error", "Ocorreu um erro ao cancelar o status do candidato, por favor tente novamente.");
      }
    }, 
    );
  }

}
