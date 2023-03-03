import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { CandidatosInterface } from 'src/app/interfaces/CandidatosInterface';
import { Candidatos } from 'src/app/models/candidato/candidatos.model';
import { StatusCandidato } from 'src/app/models/statusCandidato/statusCandidato.model';
import { CandidatosService } from 'src/app/services/candidatos/candidatos.service';
import { StatusCandidatoService } from 'src/app/services/statusCandidato/statusCandidato.service';


@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.css']
})
export class CandidatosComponent implements OnInit {


  
  id: String;
  listaStatusCandidato: Array<StatusCandidato>;
  form: FormGroup;
  mostrarInserir: boolean;
  mostrarVincular:boolean;
  dataSource = new MatTableDataSource<CandidatosInterface>();
  selection = new SelectionModel<CandidatosInterface>(true, []);
  candidatos: Candidatos[] = [];
  candidatos1:  Candidatos= new Candidatos(); 
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
  ) { }

  ngOnInit() {
    this.montaFormBuilder();
    this.getStatusCandidato();
    this.listaRh();
    const idString = this.route.snapshot.queryParams['id'];
    this.id = JSON.parse(idString);
    this.mostrarVincular =  false;
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

    // this.rhService.atualizaCandidatos(this.id).subscribe((data) => {
    //   if (data.status == 200) {
    //      this.notifier.notify("success", "CANDIDATO VINCULADO COM SUCESSO !");
    //     this.router.navigate(['rh']);
    //   }
    //   else{
    //       alert("VINCULAR CANDIDATO SOMENTE NA ABA DE VAGA")
    //   }
    // });
  }

  private getStatusCandidato() {
    this.statusCandidatoService.getStatusCandidato().subscribe((lista) => {
      this.listaStatusCandidato = lista;
    });
  }

  isAllSelected() {
    this.mostrarVincular = true;
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;  
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  private montaFormBuilder() {
    this.form = this.formBuilder.group({
      status: [this.candidatos1.status_candidato,[Validators.required]],
    });
  }

  listaUsuariosPorStatus(event: any){
    this.rhService.getListaCandidatosPorStatus(event.target.value).subscribe(
      data => {
      this.candidatos = data;
    })
  }


 MensagemdeAlerta(row: { id: string;}){
  if(this.candidatos1.vagas == null){
    this.rhService.getCandidatosId(row.id).subscribe(
    (rh) => {
      this.candidatos1 = rh;
      console.log(this.candidatos1);
    });
  }else{
    alert("Por favor, desmarcar o candidato que já esta vinculado a uma vaga ");
  }
 }
}



