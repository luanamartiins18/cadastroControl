import { Component, OnInit } from '@angular/core';
import { OrdemFornecimentoService } from 'src/app/services/OrdemDeFornecimento/ordem-fornecimento-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-colaborador-of',
  templateUrl: './colaborador-of.component.html',
  styleUrls: ['./colaborador-of.component.css']
})
export class ColaboradorOfComponent implements OnInit {

  colunas = ['numOf', 'sigla', 'situacaoAlm', 'tema', 'responsavelT', 'gerenteT', 'dtAbertura', 'dtPrevisao','dtEncaminhamento', 'execucao'];
  listaOf: Array<any>;
  idUsu;

  constructor(private ofs: OrdemFornecimentoService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.idUsu = this.route.snapshot.paramMap.get('id');

    this.ofs.getOrdemFornUsu(this.idUsu).subscribe(
      (data)=>{  
        this.listaOf = data;

        for(let i of this.listaOf){
          this.ofs.getValorTarefasOf(this.idUsu, i.idOf).subscribe(
            (vlr)=>{
             
              i.valorExecutado = vlr['valorExecutado'];
              i.valorPrevisto  = vlr['valorPlanejado'];
              i.perExecutado   = (vlr['valorExecutado'] * 100) / vlr['valorPlanejado'];

              i.valorExecutadoTotal = vlr['valorExecutadoTotal'];
              i.valorPrevistoTotal  = vlr['valorPlanejadoTotal'];
              i.perExecutadoTotal   = (vlr['valorExecutadoTotal'] * 100) / vlr['valorPlanejadoTotal'];
            },
            (error)=>{}
          );
        }

      }

    );



  }

  primeiroNome(nome: string){
    let aux = nome.split(" ");
    let res = aux[0] + " " +  aux[2];    
    return res;
  }

  getValor(idOf){
    console.log(idOf);
  }
  



}
