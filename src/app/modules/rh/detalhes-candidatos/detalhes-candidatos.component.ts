import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidatos } from 'src/app/models/candidato/candidatos.model';
import { CandidatosService } from 'src/app/services/candidatos/candidatos.service';
@Component({
  selector: 'app-detalhes-candidatos',
  templateUrl: './detalhes-candidatos.component.html',
  styleUrls: ['./detalhes-candidatos.component.css']
})
export class DetalhesCandidatosComponent implements OnInit {

  id: String;
  rh: Candidatos = new Candidatos();


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private rhService: CandidatosService,
  ) { }

  ngOnInit() {
    this.carregaUsuarios();
  }

  carregaUsuarios() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.rhService.getCandidatosId(this.id).subscribe(
      (rh) => {
        this.rh = rh;
      }
    );
  }

  volta(){
    this.router.navigate(['candidato/']);
  }
  
  editaUsuario() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.router.navigate(['cadastro-candidato/' + this.id]);
  }
}
