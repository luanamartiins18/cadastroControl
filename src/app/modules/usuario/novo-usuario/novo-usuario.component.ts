import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { Usuario } from 'src/app/models/usuario/usuario.model';
import { Funcao } from 'src/app/models/cargo/funcao.model';
import { Bu } from 'src/app/models/bu/bu.model';
import { Tipo } from 'src/app/models/tipo/tipo.model';
import { FuncaoService } from 'src/app/services/funcao/funcao.service';
import { BuService } from 'src/app/services/bu/bu.service';
import { TipoService } from 'src/app/services/tipo/tipo.service';
import { Historico } from 'src/app/models/historico/historico.model';
import { ContratoService } from 'src/app/services/contrato/contrato.service';
import { Contrato } from 'src/app/models/contrato/contrato.model';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  //historico: Historico[] = [];
  listaContrato: Array<Contrato>;
  listaCargo: Array<Funcao>;
  listaBu: Array<Bu>;
  listaTipo: Array<Tipo>;
  form: FormGroup;
  usuario: Usuario = new Usuario();
  id: any;
  mostrarDatafinal: boolean;

  constructor(
    private usuarioService: UsuarioService,
    private notifier: NotifierService,
    private route: ActivatedRoute,
    private router: Router,
    public formBuilder: FormBuilder,
    private funcaoService: FuncaoService,
    private buService: BuService,
    private tipoService: TipoService,
    private contratoService: ContratoService,
  ) { }

  ngOnInit() {
    this.montaFormBuilder();
    this.carregaUsuarios();
    this.getCEP(this.usuario.cep);
    this.getCargos();
    this.getBu();
    this.getTipo();
    this.getContrato();

  }


  private montaFormBuilder() {
    this.form = this.formBuilder.group({
      nome: [this.usuario.nome],
      celular: [this.usuario.celular],
      cpf: [this.usuario.cpf],
      data_nascimento:[this.usuario.data_nascimento],
      rg: [this.usuario.rg],
      data_emissao: [this.usuario.data_emissao],
      org_emissor:[this.usuario.org_emissor],
      cep: [this.usuario.cep],
      endereco: [this.usuario.endereco],
      cidade: [this.usuario.cidade],
      uf: [this.usuario.uf ],
      email: [this.usuario.email, ],
      emailPessoal: [this.usuario.emailPessoal, ],
      codigoRe: [this.usuario.codigoRe],
      numero: [this.usuario.numero],
      complemento: [this.usuario.complemento],
      data_inicio:[this.usuario.data_inicio],
      data_final: [this.usuario.data_inicio],
      cargo:[this.usuario.cargo],
      bu: [this.usuario.bu],
      tipo:[this.usuario.tipo],
      contrato: [this.usuario.contrato],
    });
  }

  limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    (<HTMLInputElement>document.getElementById('endereco')).value=("");
    (<HTMLInputElement>document.getElementById('complemento')).value=("");
    (<HTMLInputElement>document.getElementById('cidade')).value=("");
    (<HTMLInputElement>document.getElementById('uf')).value=("");
}
  
  getCEP(event: any) {
      if(event){
        var value = event.target.value;
        var numberPattern = /\d+/g;
        var validacep = /^[0-9]{8}$/;
        value = value.match( numberPattern, validacep).join([]);
        var url = this.usuarioService.buscaCep(value);
        url.subscribe(data => {
          if(data['erro']) {
            this.limpa_formulário_cep()
            alert("Formato de CEP inválido.");
          } else{
            (<HTMLInputElement>document.getElementById("endereco")).value = data['logradouro'];
             this.usuario.endereco = data['logradouro'];
            (<HTMLInputElement>document.getElementById("complemento")).value = data['bairro'];
            this.usuario.complemento = data['bairro'];
            (<HTMLInputElement>document.getElementById("cidade")).value = data['localidade'];
            this.usuario.cidade = data['localidade'];
            (<HTMLInputElement>document.getElementById("uf")).value = data['uf'];
            this.usuario.uf = data['uf'];
          }
        });
        return url
      } 
  }

  private carregaUsuarios() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.usuarioService.getUsuarioId(this.id).subscribe(
        (usuario) => {
          this.usuario = usuario;
          this.mostrarDatafinal= true
        }
      );
    }
  }


  private getCargos() {
    this.funcaoService.getCargo().subscribe((lista) => {
      this.listaCargo = lista;
    });
  }

  private getBu() {
    this.buService.getBu().subscribe((lista) => {
      this.listaBu = lista;
    });
  }

  private getTipo() {
    this.tipoService.getTipo().subscribe((lista) => {
      this.listaTipo = lista;
    });
  }
 
  submit() {
    if (this.form.invalid) {
      this.notifier.notify("error", " Todos os ampos devem ser preenchidos corretamente!");
    }  else if(this.id){
        this.atualizaUsuario();
      } else {
        this.insereUsuario();
    }
  }

  private insereUsuario() {
    this.usuarioService.insereUsuario(this.usuario).subscribe((data) => {
      if (data.status == 200) {
        this.notifier.notify("success", "Usuario criado com sucesso!");
        this.router.navigate(['usuarios']);
      }
      else {
        this.notifier.notify("error", "Ocorreu um erro ao cadastrar, por favor tente novamente.");
      }
    }, 
    );
  }

  private atualizaUsuario() {
    this.usuarioService.atualizaUsuario(this.usuario).subscribe((data) => {
      if (data.status == 200) {
        this.notifier.notify("success", "Usuario atualizado com sucesso!");
        this.router.navigate(['usuarios']);
      }
      else {
        this.notifier.notify("error", "Ocorreu um erro na atualização, por favor tente novamente.");
      }
    }, 
   );
  }

  private getContrato() {
    this.contratoService.getContrato().subscribe((lista) => {
      this.listaContrato = lista;
     
    });
  }


  //atualizarListaCargos() {
    //let listaCargoHistorico = [];
    //let arrIdsHistorico = [];
  
    //this.historico.forEach((historico) =>{
      //arrIdsHistorico.push(historico.cargo.id);
    //})
     //this.listaCargo.forEach((cargo) => {
      //if(!arrIdsHistorico.includes(cargo.id)){
        //listaCargoHistorico.push(cargo);
      //}
    //})
    //this.listaCargo = listaCargoHistorico;
  //}
 
}