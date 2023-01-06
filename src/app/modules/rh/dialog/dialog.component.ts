import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Rh } from 'src/app/models/rh/rh.model';
import { RhService } from 'src/app/services/rh/rh.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  rh: Rh[] = [];
  rh1:  Rh= new Rh(); 
  constructor(
    private rhService: RhService,
    private router: Router,
    private notifier: NotifierService,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Rh,
  ) { }

  ngOnInit() {
  }

  cancelar(): void {
    this.dialogRef.close();
    this.router.navigate(['rh']);
  }

  

  CancelarCandidato(Candidato) {
    console.log(Candidato);
    this.rhService.atualizaStatus(this.rh1).subscribe((data) => {
      if (data.status == 200) {
        this.notifier.notify("success", "Candidato Cancelado com sucesso!");
        this.router.navigate(['rh']);
      }
      else {
        this.notifier.notify("error", "Ocorreu um erro ao cancelar, por favor tente novamente.");
      }
    }, 
    );
  }
}
