import { HttpClient } from '@angular/common/http';
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
    private http: HttpClient,
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

  downloadFile = (id: number, fileName: string) => {
    const url = `http://localhost:8080/download/${id}`;
  
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        // Verifica se a resposta foi bem sucedida
        if (!response.ok) {
          throw new Error('Erro ao fazer download do arquivo');
        }
  
        // Converte a resposta em um blob
        return response.blob();
      })
      .then((blob) => {
        // Cria um link para fazer o download do arquivo
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.error(error);
        // Trata o erro
      });
  };
}
