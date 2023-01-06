import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rh } from 'src/app/models/rh/rh.model';
import { RhService } from 'src/app/services/rh/rh.service';

@Component({
  selector: 'app-detalhes-candidatos',
  templateUrl: './detalhes-candidatos.component.html',
  styleUrls: ['./detalhes-candidatos.component.css']
})
export class DetalhesCandidatosComponent implements OnInit {

  id: String;
  rh: Rh = new Rh();


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private rhService: RhService,
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
    this.router.navigate(['rh/']);
  }
  editaUsuario() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.router.navigate(['cadastro-candidatos/' + this.id]);
  }
}
