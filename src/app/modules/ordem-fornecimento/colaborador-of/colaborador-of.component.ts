import { Component, OnInit } from '@angular/core';
import { OrdemFornecimentoService } from 'src/app/services/OrdemDeFornecimento/ordem-fornecimento-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-colaborador-of',
  templateUrl: './colaborador-of.component.html',
  styleUrls: ['./colaborador-of.component.css']
})
export class ColaboradorOfComponent implements OnInit {

  colunas = ['numOf', 'sigla', 'situacaoAlm', 'tema', 'responsavelT', 'gerenteT', 'dtEncaminhamento', 'dtAbertura', 'dtPrevisao'];
  listaOf: Array<any>;
  idUsu;
  constructor(private ofs: OrdemFornecimentoService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.idUsu = this.route.snapshot.paramMap.get('id');

    this.ofs.getOrdemFornUsu(this.idUsu).subscribe(
      (data)=>{  
        this.listaOf = data;
      }

    );



  }

  primeiroNome(nome: string){
    let aux = nome.split(" ");
    let res = aux[0] + " " +  aux[2];    
    return res;
  }

}
