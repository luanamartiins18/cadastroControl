import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { Rh } from 'src/app/models/rh/rh.model';
import { RhService } from 'src/app/services/rh/rh.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Status } from 'src/app/models/status/status.model';
import { StatusService } from 'src/app/services/status/status.service';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.css']
})
export class CandidatosComponent implements OnInit {

  listaStatus: Array<Status>;
  id: String;
  rh: Rh[] = [];
  rh1:  Rh= new Rh(); 
  colunas = [
    'candidato','cpf', 'rg','cargo','especialidade','remuneracao',  'status' , 'etapa', 'recrutador', 'data_inicio', 'acoes'
  ];
  
  dataSource = new MatTableDataSource<Rh>();

  constructor(
    private rhService: RhService,
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
    this.rhService.getListaRh().subscribe(
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

  Dialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      minWidth: '400px',
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  private getStatus() {
    this.statusService.getStatus().subscribe((lista) => {
      this.listaStatus = lista;
    });
  }

  cancelarStatus(candidato) {
    this.rhService.atualizaStatus(candidato).subscribe((data) => {
      if (data.status == 200) {
        this.notifier.notify("success", "Status do candidato alterado pra cancelado com sucesso!");
        this.router.navigate(['rh']);
      }
      else {
        this.notifier.notify("error", "Ocorreu um erro ao cancelar o status do candidato, por favor tente novamente.");
      }
    }, 
    );
  }

  onChange(getStatus){
    console.log(getStatus);
    this.dataSource.filter = getStatus.trim().toLowerCase();
    console.log(this.dataSource);
  }
}
