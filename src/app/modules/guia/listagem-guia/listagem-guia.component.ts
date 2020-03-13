import { Component, OnInit, ViewChild } from '@angular/core';
import { GuiaService } from 'src/app/services/guia/guia.service';
import { TarefaService } from 'src/app/services/tarefa/tarefa.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listagem-guia',
  templateUrl: './listagem-guia.component.html',
  styleUrls: ['./listagem-guia.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})



export class ListagemGuiaComponent implements OnInit {

  listaItensGuia;
  listaItensGuiaAux; 
  listaDisciplinasGuia;  
  colunas = ['tarefa']
  colItensTrf = ['valor'];
  dataSource;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private guia: GuiaService,
              private ts: TarefaService) { }

  ngOnInit() {



   // this.carregaItensGuia();        
   // this.carregaDisciplinas(); 

   this.listaItensGuiaAux = [
    {
        "atividade": "1.1    Atividade: Usabilidade",
        "itens": [
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 3382,
                "valor": 1.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "1.1.1",
        "descricao_tarefa": "Elaborar esboço de telas",
        "plataforma": {},
        "disciplina": 1,
        "id_tarefa": 1917,
        "uni_medida": "Por Tela"
    },
    {
        "atividade": "1.1    Atividade: Usabilidade",
        "itens": [
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 3383,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "1.1.2",
        "descricao_tarefa": "Elaborar wireframe\ndas telas de uma aplicação",
        "plataforma": {},
        "disciplina": 1,
        "id_tarefa": 1918,
        "uni_medida": "Por Tela"
    },
    {
        "atividade": "1.1    Atividade: Usabilidade",
        "itens": [
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 3384,
                "valor": 0.5,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "1.1.3",
        "descricao_tarefa": "Elaborar Design de Interação",
        "plataforma": {},
        "disciplina": 1,
        "id_tarefa": 1919,
        "uni_medida": "Por Tela"
    },
    {
        "atividade": "1.1    Atividade: Usabilidade",
        "itens": [
            {
                "descricao_complex": "Criação de layout de interface web ou mobile, que envolva a aplicação de Guia de Estilos pré-existente.",
                "complexidade": "Baixa",
                "id_item": 3385,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Criação de layout de interface web ou mobile com elementos visuais não previstos no Guia de estilos.",
                "complexidade": "Média",
                "id_item": 3386,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Criação de layout de tela que contemple a definição de novos\ncomponentes, comportamentos ou estilo visual a ser utilizado.",
                "complexidade": "Alta",
                "id_item": 3387,
                "valor": 6.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "1.1.4",
        "descricao_tarefa": "Elaborar Design Aplicado de interfaces Web/Mobile em alta definição",
        "plataforma": {},
        "disciplina": 1,
        "id_tarefa": 1920,
        "uni_medida": "Por Tela"
    },
    {
        "atividade": "1.1    Atividade: Usabilidade",
        "itens": [
            {
                "descricao_complex": "Protótipo elaborado em ferramenta de linkagem de imagens (Invision, Marvel, POP, etc.).",
                "complexidade": "Baixa",
                "id_item": 3388,
                "valor": 0.2,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Protótipo em alta fidelidade (usando Principle, Flinto ou aplicativo similar), que contemple o design final e com todas as interações e animações previstas.",
                "complexidade": "Alta",
                "id_item": 3389,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "1.1.5",
        "descricao_tarefa": "Produzir protótipo de software",
        "plataforma": {},
        "disciplina": 1,
        "id_tarefa": 1921,
        "uni_medida": "Por Tela"
    },
    {
        "atividade": "1.1    Atividade: Usabilidade",
        "itens": [
            {
                "descricao_complex": "Serviço de “arte”/criação.",
                "complexidade": "N/A",
                "id_item": 3390,
                "valor": 3.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "1.1.6",
        "descricao_tarefa": "Design de ícone",
        "plataforma": {},
        "disciplina": 1,
        "id_tarefa": 1922,
        "uni_medida": "Por ícone"
    },
    {
        "atividade": "1.1    Atividade: Usabilidade",
        "itens": [
            {
                "descricao_complex": "Apresentação de resultados estatísticos em relatório e apresentação de slides.",
                "complexidade": "Baixa",
                "id_item": 3391,
                "valor": 40.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Apresentação de resultados estatísticos em relatório, apresentação de slides e vídeo compilado dos testes.",
                "complexidade": "Alta",
                "id_item": 3392,
                "valor": 72.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "1.1.7",
        "descricao_tarefa": "Realizar Teste de Usabilidade",
        "plataforma": {},
        "disciplina": 1,
        "id_tarefa": 1923,
        "uni_medida": "Por persona"
    },
    {
        "atividade": "1.1    Atividade: Usabilidade",
        "itens": [
            {
                "descricao_complex": "Até 6 telas",
                "complexidade": "Baixa",
                "id_item": 3393,
                "valor": 4.0,
                "componente": {},
                "quantidade": 6,
                "id_complex": 2
            },
            {
                "descricao_complex": "De 7 a 20 telas",
                "complexidade": "Média",
                "id_item": 3394,
                "valor": 8.0,
                "componente": {},
                "quantidade": 20,
                "id_complex": 3
            },
            {
                "descricao_complex": "De 21 a 30 telas",
                "complexidade": "Alta",
                "id_item": 3395,
                "valor": 16.0,
                "componente": {},
                "quantidade": 30,
                "id_complex": 4
            }
        ],
        "tarefa": "1.1.8",
        "descricao_tarefa": "Realizar Análise Heurística",
        "plataforma": {},
        "disciplina": 1,
        "id_tarefa": 1924,
        "uni_medida": "Por teste"
    },
    {
        "atividade": "1.1    Atividade: Usabilidade",
        "itens": [
            {
                "descricao_complex": "Recrutamento de participantes realizado pelo Banco",
                "complexidade": "Baixa",
                "id_item": 3396,
                "valor": 16.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Recrutamento de participantes realizado pela Contratada",
                "complexidade": "Alta",
                "id_item": 3397,
                "valor": 24.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "1.1.9",
        "descricao_tarefa": "Aplicar técnica Card Sorting Online",
        "plataforma": {},
        "disciplina": 1,
        "id_tarefa": 1925,
        "uni_medida": "Por Sessão"
    },
    {
        "atividade": "1.1    Atividade: Usabilidade",
        "itens": [
            {
                "descricao_complex": "Recrutamento de participantes realizado pelo Banco",
                "complexidade": "Baixa",
                "id_item": 3398,
                "valor": 24.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Recrutamento de participantes realizado pela Contratada",
                "complexidade": "Alta",
                "id_item": 3399,
                "valor": 32.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "1.1.10",
        "descricao_tarefa": "Aplicar técnica Card Sorting Presencial",
        "plataforma": {},
        "disciplina": 1,
        "id_tarefa": 1926,
        "uni_medida": "Por Sessão"
    },
    {
        "atividade": "1.2    Atividade: Design Sprint",
        "itens": [
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 3400,
                "valor": 80.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "1.2.1",
        "descricao_tarefa": "Facilitar, Planejar,conduzir e consolidar\nsessão de Design Sprint",
        "plataforma": {},
        "disciplina": 1,
        "id_tarefa": 1927,
        "uni_medida": "Por Sessão"
    },
    {
        "atividade": "1.2    Atividade: Design Sprint",
        "itens": [
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 3401,
                "valor": 40.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "1.2.2",
        "descricao_tarefa": "Idear, Desenvolver Design de Interação e protótipo em sessão de Design Sprint",
        "plataforma": {},
        "disciplina": 1,
        "id_tarefa": 1928,
        "uni_medida": "Por Sessão"
    },
    {
        "atividade": "1.2    Atividade: Design Sprint",
        "itens": [
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 3402,
                "valor": 40.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "1.2.3",
        "descricao_tarefa": "Planejar, conduzir e consolidar Testes em sessão de Design Sprint",
        "plataforma": {},
        "disciplina": 1,
        "id_tarefa": 1929,
        "uni_medida": "Por Sessão"
    },
    {
        "atividade": "1.3    Atividade: Comunicação",
        "itens": [
            {
                "descricao_complex": "Criação de marca e manual de identidade visual com as versões em cores e monocromática, assinatura vertical e/ou horizontal*, padrão cromático, família tipográfica, malha construtiva, redução máxima, área de não interferência e proibições de uso da marca, além das artes das peças gráficas a seguir:\na) papelaria básica: bloco de notas, cartão de visitas, envelope saco ou ofício, papel timbrado e pasta para documentos;\nb) aplicação de marca em modelo de brinde e camiseta (um de cada).",
                "complexidade": "Baixa",
                "id_item": 3403,
                "valor": 8.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Criação de apresentação que envolva todas as atividades de complexidade Simples e contemple ainda:\n- criação de até 4 peças.",
                "complexidade": "Média",
                "id_item": 3404,
                "valor": 16.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Criação de apresentação que envolva todas as atividades de complexidades Simples, Média e contemple ainda:\n- criação de mais de 4 peças.",
                "complexidade": "Alta",
                "id_item": 3405,
                "valor": 24.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "1.3.1",
        "descricao_tarefa": "Desenvolvimento de design aplicado a Interface Visual para os canais de atendimento e de comunicação do BB (web, mobile, TAA, Intranet, redes sociais e etc.)",
        "plataforma": {},
        "disciplina": 1,
        "id_tarefa": 1930,
        "uni_medida": "Por produto"
    },
    {
        "atividade": "1.3    Atividade: Comunicação",
        "itens": [
            {
                "descricao_complex": "Criação de apresentação envolvendo todas as atividades abaixo:\n- Sistemas e métodos de organização visual;\n- Refinamento de conteúdo;\n- Adaptação de linguagem do conteúdo;\n- Seleção das partes textuais (highlights);\n- Tendências visuais;\n- Criação/Adaptação de Imagens, ilustrações e/ou iconografia.",
                "complexidade": "Baixa",
                "id_item": 3406,
                "valor": 24.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Criação de apresentação que envolva todas as atividades de complexidade Simples e contemple ainda:\n- Avaliação do público-alvo;\n- Criação do conceito visual;\n- Identidade visual a partir do conceito;\n- Animações e transições de slides (estilo motion graphic);",
                "complexidade": "Média",
                "id_item": 3407,
                "valor": 35.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Criação de apresentação que envolva todas as atividades de complexidades Simples, Média e contemple ainda:\n- Criação e animação de personagem;\n- Criação de vídeo",
                "complexidade": "Alta",
                "id_item": 3408,
                "valor": 70.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "1.3.2",
        "descricao_tarefa": "Desenvolvimento de tutoriais gráficos para  disponibilização via canais de comunicação do BB (web, mobile, TAA, Intranet, redes sociais e etc.) e para apoiar a ações de transformação digital do BB",
        "plataforma": {},
        "disciplina": 1,
        "id_tarefa": 1931,
        "uni_medida": "-Por produto"
    },
    {
        "atividade": "1.3    Atividade: Comunicação",
        "itens": [
            {
                "descricao_complex": "Criação de animação 3D que envolva todas as atividades:\n- Roteiro;\n- Story Board;\n- Conceito da Arte;\n- Modelagem inorgânica, texturização, rigging e animação de insumos/acessórios/cenário;\n- Iluminação;\n- Renderização 3D.",
                "complexidade": "Baixa",
                "id_item": 3409,
                "valor": 160.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Criação de animação 3D que envolva todas as atividades de complexidade Simples e contemple ainda:\n- Modelagem orgânica, texturização, rigging e animação de 01 personagem.",
                "complexidade": "Média",
                "id_item": 3410,
                "valor": 480.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Criação de animação 3D que envolva todas as atividades de complexidade Simples e contemple ainda:\n- Modelagem orgânica, texturização, rigging e animação de 02 ou mais personagens.",
                "complexidade": "Alta",
                "id_item": 3411,
                "valor": 960.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "1.3.3",
        "descricao_tarefa": "Desenvolvimento de Componentes 3D para os canais de atendimento e de comunicação do BB (web, mobile, TAA, Intranet, redes sociais e etc.) e para apoiar as ações de transformação digital do BB",
        "plataforma": {},
        "disciplina": 1,
        "id_tarefa": 1932,
        "uni_medida": "Por produto"
    },
    {
        "atividade": "1.3    Atividade: Comunicação",
        "itens": [
            {
                "descricao_complex": "Criação de filme que envolva as seguintes atividades:\n- Narração;\n- Escolha da Trilha Sonora;\n- Lettering;\n- Motion;\n- Pós-Produção;\n- Edição Final de Vídeo e Áudio.",
                "complexidade": "Baixa",
                "id_item": 3412,
                "valor": 40.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Criação de filme que envolva as atividades de complexidade Simples e ainda:\n- Roteiro;\n- Story Board;\n- Conceito da Arte;\n- Captação de áudio;\n- Filmagem com câmera estática;\n- Iluminação.",
                "complexidade": "Média",
                "id_item": 3413,
                "valor": 120.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Criação de filme que envolva as atividades de complexidades Simples, Média e contemple ainda:\n- Filmagem com mais de uma câmera;\n- Filmagem com estabilizadores de imagens;\n- Filmagem com câmera em movimento.",
                "complexidade": "Alta",
                "id_item": 3414,
                "valor": 240.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "1.3.4",
        "descricao_tarefa": "Desenvolvimento de Componentes 2D para os canais de atendimento e de comunicação do BB (web, mobile, TAA, Intranet, redes sociais e etc.) e para apoiar as ações de transformação digital do BB",
        "plataforma": {},
        "disciplina": 1,
        "id_tarefa": 1933,
        "uni_medida": "Por produto"
    },
    {
        "atividade": "1.3    Atividade: Comunicação",
        "itens": [
            {
                "descricao_complex": "Criação de filme que envolva as seguintes atividades:\n- Narração;\n- Escolha da Trilha Sonora;\n- Lettering;\n- Motion;\n- Pós-Produção;\n- Edição Final de Vídeo e Áudio.",
                "complexidade": "Baixa",
                "id_item": 3415,
                "valor": 24.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Criação de filme que envolva as atividades de complexidade Simples e ainda:\n- Roteiro;\n- Story Board;\n- Conceito da Arte;\n- Captação de áudio;\n- Filmagem com câmera estática;\n- Iluminação.",
                "complexidade": "Média",
                "id_item": 3416,
                "valor": 80.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Criação de filme que envolva as atividades de complexidades Simples, Média e contemple ainda:\n- Filmagem com mais de uma câmera;\n- Filmagem com estabilizadores de imagens;\n- Filmagem com câmera em movimento.",
                "complexidade": "Alta",
                "id_item": 3417,
                "valor": 120.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "1.3.5",
        "descricao_tarefa": "Desenvolvimento de componentes audiovisuais para os canais de atendimento e de comunicação do BB (web, mobile, TAA, Intranet, redes sociais e etc.) e para apoiar as ações de transformação digital do BB",
        "plataforma": {},
        "disciplina": 1,
        "id_tarefa": 1934,
        "uni_medida": "Por produto"
    },
    {
        "atividade": "1.4    Atividade: Descoberta",
        "itens": [
            {
                "descricao_complex": "Preencher canvas com proposta de valor. Entrega: Canvas",
                "complexidade": "N/A",
                "id_item": 3418,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "1.4.1",
        "descricao_tarefa": "Elaborar Canvas\nProposta de valor",
        "plataforma": {},
        "disciplina": 1,
        "id_tarefa": 1935,
        "uni_medida": "Por projeto"
    },
    {
        "atividade": "1.4    Atividade: Descoberta",
        "itens": [
            {
                "descricao_complex": "Observar ou entrevistar e preencher a jornada com até 2 intervenientes\nEntrega: Documento Jornada do Usuário",
                "complexidade": "Baixa",
                "id_item": 3419,
                "valor": 8.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Observar  ou  entrevistar  e  preencher  a  jornada  de  3  a  4 intervenientes\nEntrega: Documento Jornada do Usuário",
                "complexidade": "Média",
                "id_item": 3420,
                "valor": 12.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Observar ou entrevistar e preencher a jornada a partir de 5 intervenientes\nEntrega: Documento Jornada do Usuário",
                "complexidade": "Alta",
                "id_item": 3421,
                "valor": 16.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "1.4.2",
        "descricao_tarefa": "Elaborar Jornada do usuário",
        "plataforma": {},
        "disciplina": 1,
        "id_tarefa": 1936,
        "uni_medida": "Por Jornada"
    },
    {
        "atividade": "1.4    Atividade: Descoberta",
        "itens": [
            {
                "descricao_complex": "Observar ou entrevistar e preencher o blueprint com até 2 intervenientes\nEntrega: Blueprint",
                "complexidade": "Baixa",
                "id_item": 3422,
                "valor": 12.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Observar ou entrevistar e preencher o blueprint de 3 a 4 intervenientes\nEntrega: Blueprint",
                "complexidade": "Média",
                "id_item": 3423,
                "valor": 16.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Observar ou entrevistar e preencher o blueprint a partir de 5 intervenientes\nEntrega: Blueprint",
                "complexidade": "Alta",
                "id_item": 3424,
                "valor": 20.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "1.4.3",
        "descricao_tarefa": "Elaborar Blueprint",
        "plataforma": {},
        "disciplina": 1,
        "id_tarefa": 1937,
        "uni_medida": "Por Blueprint"
    },
    {
        "atividade": "1.4    Atividade: Descoberta",
        "itens": [
            {
                "descricao_complex": "Definir  os perfis, recrutar  os usuários, criação  do roteiro, preparação  da  atividade  e  preenchimento  do  documento de  planejamento  (objetivo/hipótese/perguntas),  pré-teste para validação do roteiro e execução.\nEntrega(s): Documento de Planejamento",
                "complexidade": "N/A",
                "id_item": 3425,
                "valor": 28.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "1.4.4",
        "descricao_tarefa": "Realizar Grupo focal (Planejar/Aplicar/Exe cutar)",
        "plataforma": {},
        "disciplina": 1,
        "id_tarefa": 1938,
        "uni_medida": "Por Sessão"
    },
    {
        "atividade": "1.4    Atividade: Descoberta",
        "itens": [
            {
                "descricao_complex": "Criar relatório consolidando as informações. Entrega: Relatório de Grupo Focal",
                "complexidade": "N/A",
                "id_item": 3426,
                "valor": 16.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "1.4.5",
        "descricao_tarefa": "Elaborar relatório de Grupo focal",
        "plataforma": {},
        "disciplina": 1,
        "id_tarefa": 1939,
        "uni_medida": "Por Sessão"
    },
    {
        "atividade": "1.4    Atividade: Descoberta",
        "itens": [
            {
                "descricao_complex": "Criar persona/proto-persona para um perfil de usuário. Personas são modelos que descrevem usuários criados a partir de dados de pesquisas.\nProto-persona é criado a partir de dados que a empresa possui ou do conhecimento do analista e não é embasado em pesquisas.\nEntrega: Documento Persona ou Proto-persona",
                "complexidade": "N/A",
                "id_item": 3427,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "1.4.6",
        "descricao_tarefa": "Elaborar Persona/Proto- persona",
        "plataforma": {},
        "disciplina": 1,
        "id_tarefa": 1940,
        "uni_medida": "Por usuário"
    },
    {
        "atividade": "1.4    Atividade: Descoberta",
        "itens": [
            {
                "descricao_complex": "8 a 10 usuários",
                "complexidade": "Muito Baixa",
                "id_item": 3428,
                "valor": 54.0,
                "componente": {},
                "quantidade": 10,
                "id_complex": 1
            },
            {
                "descricao_complex": "11 a 15 usuários",
                "complexidade": "Baixa",
                "id_item": 3429,
                "valor": 69.0,
                "componente": {},
                "quantidade": 15,
                "id_complex": 2
            },
            {
                "descricao_complex": "16 a 20 usuários",
                "complexidade": "Média",
                "id_item": 3430,
                "valor": 84.0,
                "componente": {},
                "quantidade": 20,
                "id_complex": 3
            },
            {
                "descricao_complex": "21 a 25 usuários",
                "complexidade": "Alta",
                "id_item": 3431,
                "valor": 99.0,
                "componente": {},
                "quantidade": 25,
                "id_complex": 4
            },
            {
                "descricao_complex": "a partir de 26 usuários",
                "complexidade": "Muito Alta",
                "id_item": 3432,
                "valor": 114.0,
                "componente": {},
                "quantidade": 26,
                "id_complex": 5
            }
        ],
        "tarefa": "1.4.7",
        "descricao_tarefa": "Realizar Entrevista – (Planejar/Aplicar e Relatório\nEntrega: Documento de Planejamento e Relatório de Entrevista",
        "plataforma": {},
        "disciplina": 1,
        "id_tarefa": 1941,
        "uni_medida": "Por projeto"
    },
    {
        "atividade": "1.4    Atividade: Descoberta",
        "itens": [
            {
                "descricao_complex": "Definir  os  perfis,  recrutar  os  participantes,  criação  do roteiro,   preparação   da   atividade   e   preenchimento   do documento                         de                         planejamento (objetivo/hipótese/perguntas), pré-teste da entrevista para\nvalidação.",
                "complexidade": "N/A",
                "id_item": 3433,
                "valor": 24.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "1.4.8",
        "descricao_tarefa": "Entrevista - Planejar",
        "plataforma": {},
        "disciplina": 1,
        "id_tarefa": 1942,
        "uni_medida": "Por projeto"
    },
    {
        "atividade": "1.4    Atividade: Descoberta",
        "itens": [
            {
                "descricao_complex": "Vídeo, telefone ou presencial",
                "complexidade": "N/A",
                "id_item": 3434,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "1.4.9",
        "descricao_tarefa": "Entrevista - Aplicar/Executar",
        "plataforma": {},
        "disciplina": 1,
        "id_tarefa": 1943,
        "uni_medida": "Por usuário"
    },
    {
        "atividade": "1.4    Atividade: Descoberta",
        "itens": [
            {
                "descricao_complex": "Criar relatório com 8 a 10 usuários",
                "complexidade": "Muito Baixa",
                "id_item": 3435,
                "valor": 10.0,
                "componente": {},
                "quantidade": 10,
                "id_complex": 1
            },
            {
                "descricao_complex": "Criar relatório de 11 a 15 usuários",
                "complexidade": "Baixa",
                "id_item": 3436,
                "valor": 15.0,
                "componente": {},
                "quantidade": 15,
                "id_complex": 2
            },
            {
                "descricao_complex": "Criar relatório de 16 a 20 usuários",
                "complexidade": "Média",
                "id_item": 3437,
                "valor": 20.0,
                "componente": {},
                "quantidade": 20,
                "id_complex": 3
            },
            {
                "descricao_complex": "Criar relatório de 21 a 25 usuários",
                "complexidade": "Alta",
                "id_item": 3438,
                "valor": 25.0,
                "componente": {},
                "quantidade": 25,
                "id_complex": 4
            },
            {
                "descricao_complex": "Criar relatório a partir de 26 usuários",
                "complexidade": "Muito Alta",
                "id_item": 3439,
                "valor": 30.0,
                "componente": {},
                "quantidade": 26,
                "id_complex": 5
            }
        ],
        "tarefa": "1.4.10",
        "descricao_tarefa": "Entrevista – Relatório",
        "plataforma": {},
        "disciplina": 1,
        "id_tarefa": 1944,
        "uni_medida": "Por projeto"
    },
    {
        "atividade": "1.4    Atividade: Descoberta",
        "itens": [
            {
                "descricao_complex": "Definir os perfis, preparação da atividade e preenchimento do               documento               de               planejamento (objetivo/hipótese/perguntas),   elaborar   o   questionário, realizar   o   pré-teste  do  questionário  para   validação  e aplicação (envio da pesquisa para os usuários).\nRelevância estatística deve ser: Margem de erro – entre 5% à 10% Nível de confiança – entre 90% à 99%",
                "complexidade": "N/A",
                "id_item": 3440,
                "valor": 48.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "1.4.11",
        "descricao_tarefa": "Questionário  – Planejar/ Aplicar/Executar",
        "plataforma": {},
        "disciplina": 1,
        "id_tarefa": 1945,
        "uni_medida": "Por questionário"
    },
    {
        "atividade": "1.4    Atividade: Descoberta",
        "itens": [
            {
                "descricao_complex": "Criar relatório consolidando as informações.",
                "complexidade": "N/A",
                "id_item": 3441,
                "valor": 24.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "1.4.12",
        "descricao_tarefa": "Questionário  - Relatório",
        "plataforma": {},
        "disciplina": 1,
        "id_tarefa": 1946,
        "uni_medida": "Por projeto"
    },
    {
        "atividade": "1.4    Atividade: Descoberta",
        "itens": [
            {
                "descricao_complex": "Definir  os perfis, recrutar  os usuários, criação  do roteiro, preparação da atividade.",
                "complexidade": "N/A",
                "id_item": 3442,
                "valor": 24.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "1.4.13",
        "descricao_tarefa": "Workshop - Planejar",
        "plataforma": {},
        "disciplina": 1,
        "id_tarefa": 1947,
        "uni_medida": "Por Sessão"
    },
    {
        "atividade": "1.4    Atividade: Descoberta",
        "itens": [
            {
                "descricao_complex": "Facilitar workshop de 1 dia com 1 facilitador",
                "complexidade": "Muito Baixa",
                "id_item": 3443,
                "valor": 8.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 1
            },
            {
                "descricao_complex": "Facilitar  workshop  de  1  dia  com  2  facilitadores  ou  de  2 dias com 1 facilitador",
                "complexidade": "Baixa",
                "id_item": 3444,
                "valor": 16.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Facilitar workshop de 3 dias com 1 facilitador",
                "complexidade": "Média",
                "id_item": 3445,
                "valor": 24.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Facilitar workshop de 2 dias com 2 facilitadores",
                "complexidade": "Alta",
                "id_item": 3446,
                "valor": 32.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            },
            {
                "descricao_complex": "Facilitar workshop de 3 dias com 2 facilitadores",
                "complexidade": "Muito Alta",
                "id_item": 3447,
                "valor": 48.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 5
            }
        ],
        "tarefa": "1.4.14",
        "descricao_tarefa": "Workshop – Aplicar/Executar",
        "plataforma": {},
        "disciplina": 1,
        "id_tarefa": 1948,
        "uni_medida": "Por Sessão"
    },
    {
        "atividade": "1.4    Atividade: Descoberta",
        "itens": [
            {
                "descricao_complex": "Criar relatório consolidando as informações.",
                "complexidade": "N/A",
                "id_item": 3448,
                "valor": 16.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "1.4.15",
        "descricao_tarefa": "Workshop – Relatório",
        "plataforma": {},
        "disciplina": 1,
        "id_tarefa": 1949,
        "uni_medida": "Por Sessão"
    },
    {
        "atividade": "1.4    Atividade: Descoberta",
        "itens": [
            {
                "descricao_complex": "Entendimento,   análise   e   elaboração   da   proposta   de atuação de UX.",
                "complexidade": "N/A",
                "id_item": 3449,
                "valor": 16.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "1.4.16",
        "descricao_tarefa": "Proposta para atuação de UX",
        "plataforma": {},
        "disciplina": 1,
        "id_tarefa": 1950,
        "uni_medida": "Por projeto"
    },
    {
        "atividade": "1.4    Atividade: Descoberta",
        "itens": [
            {
                "descricao_complex": "Elaborar  apresentação  (PowerPoint  ou  similar)  visando explanar os resultados",
                "complexidade": "N/A",
                "id_item": 3450,
                "valor": 8.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "1.4.17",
        "descricao_tarefa": "Apresentação de resultados de UX",
        "plataforma": {},
        "disciplina": 1,
        "id_tarefa": 1951,
        "uni_medida": "por sessão de apresentação"
    },
    {
        "atividade": "1.5    Atividade: Curadoria UX Writing",
        "itens": [
            {
                "descricao_complex": "Pesquisar em ferramentas internas ou externas a fim de responder:\nPesquisa interna\n- O que já está implementado\n- O que o cliente fala sobre o assunto\n- Como são resolvidas  atualmente as demandas para esse assunto\nPesquisa externa\n- A que informações os usuários tem acesso\n- O que estão falando sobre o assunto\nEntrega: Relatório consolidado contendo resultados da pesquisa interna ou externa de determinado assunto.",
                "complexidade": "N/A",
                "id_item": 3451,
                "valor": 30.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "1.5.1",
        "descricao_tarefa": "Elaborar pesquisa interna ou externa",
        "plataforma": {},
        "disciplina": 1,
        "id_tarefa": 1952,
        "uni_medida": "por pesquisa"
    },
    {
        "atividade": "1.5    Atividade: Curadoria UX Writing",
        "itens": [
            {
                "descricao_complex": "Planejamento da solução de bot contendo objetivo, escopo e principais intenções.",
                "complexidade": "N/A",
                "id_item": 3452,
                "valor": 22.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "1.5.2",
        "descricao_tarefa": "Planejar solução de bot",
        "plataforma": {},
        "disciplina": 1,
        "id_tarefa": 1953,
        "uni_medida": "por planejamento"
    },
    {
        "atividade": "1.5    Atividade: Curadoria UX Writing",
        "itens": [
            {
                "descricao_complex": "Análise semântica a partir do log de entradas dos usuários para uma intenção ou duas entidades, contendo também prévia da intenção (com seus exemplos) ou da entidade (com seus valores e sinônimos).\nEntrega: Relatório com a análise semântica e prévia da(s) intenção(ões) ou entidade(s).",
                "complexidade": "Baixa",
                "id_item": 3453,
                "valor": 10.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Análise semântica a partir do log de entradas dos usuários para cinco intenções ou dez entidades, contendo também prévia da intenção (com seus exemplos) ou da entidade (com seus valores e sinônimos).\nEntrega: Relatório com a análise semântica e prévia da(s) intenção(ões) ou entidade(s).",
                "complexidade": "Média",
                "id_item": 3454,
                "valor": 50.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Análise semântica a partir do log de entradas dos usuários para dez intenções ou vinte entidades, contendo também prévia da intenção (com seus exemplos) ou da entidade (com seus valores e sinônimos).\nEntrega: Relatório com a análise semântica e prévia da(s) intenção(ões) ou entidade(s).",
                "complexidade": "Alta",
                "id_item": 3455,
                "valor": 100.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "1.5.3",
        "descricao_tarefa": "Realizar análise semântica da entrada dos usuários",
        "plataforma": {},
        "disciplina": 1,
        "id_tarefa": 1954,
        "uni_medida": "Por Relatório"
    },
    {
        "atividade": "1.5    Atividade: Curadoria UX Writing",
        "itens": [
            {
                "descricao_complex": "Representação gráfica (mapa mental) da jornada do usuário contendo as possíveis perguntas, condições, desambiguações e respostas aplicando UX Writing.\nEntrega: arquivo com o mapa da jornada do usuário.",
                "complexidade": "N/A",
                "id_item": 3456,
                "valor": 20.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "1.5.4",
        "descricao_tarefa": "Criar mapa da jornada do usuário (fluxos lógico, conversacional, ontológico etc.)",
        "plataforma": {},
        "disciplina": 1,
        "id_tarefa": 1955,
        "uni_medida": "por mapa/fluxo"
    },
    {
        "atividade": "1.5    Atividade: Curadoria UX Writing",
        "itens": [
            {
                "descricao_complex": "Atualizar textos do mapa da jornada do usuário.\nObs: no caso de atualização de mais de 50% do conteúdo, considerar criar um novo mapa, detalhando as alterações efetuadas.\nEntrega:\nEvidência da alteração:\n- justificativa da alteração\n- mapa anterior\n- mapa alterado\n- detalhamento do que foi alterado e data",
                "complexidade": "N/A",
                "id_item": 3457,
                "valor": 5.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "1.5.5",
        "descricao_tarefa": "Atualizar mapa da jornada do usuário (fluxos lógico, conversacional, ontológico etc.)",
        "plataforma": {},
        "disciplina": 1,
        "id_tarefa": 1956,
        "uni_medida": "por mapa/fluxo"
    },
    {
        "atividade": "1.5    Atividade: Curadoria UX Writing",
        "itens": [
            {
                "descricao_complex": "Criar documento de texto com ilustrações (guia, manual, tutorial).\nEntrega: arquivo com documento elaborado (guia, manual ou tutorial).",
                "complexidade": "N/A",
                "id_item": 3458,
                "valor": 40.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "1.5.6",
        "descricao_tarefa": "Elaborar guia, manual ou tutorial",
        "plataforma": {},
        "disciplina": 1,
        "id_tarefa": 1957,
        "uni_medida": "Por documento"
    },
    {
        "atividade": "1.5    Atividade: Curadoria UX Writing",
        "itens": [
            {
                "descricao_complex": "Revisar/alterar documento de texto com ilustrações (guia, manual, tutorial). Obs: No caso de revisão de mais de 50% do documento original, considerar a criação de um novo, detalhando as alterações efetuadas.\nEntrega: documento evidenciando as alterações realizadas no guia, manual, tutorial e nova versão final.",
                "complexidade": "N/A",
                "id_item": 3459,
                "valor": 15.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "1.5.7",
        "descricao_tarefa": "Revisar e alterar guia, manual ou tutorial",
        "plataforma": {},
        "disciplina": 1,
        "id_tarefa": 1958,
        "uni_medida": "por revisão"
    },
    {
        "atividade": "1.5    Atividade: Curadoria UX Writing",
        "itens": [
            {
                "descricao_complex": "Elaborar relatório analítico voltado à melhoria da conversação que descreva o comportamento dos usuários, estatísticas e métricas, que não sejam gerados automaticamente pelos sistemas e necessitem análise intelectual humana.\nEntrega: relatório contendo conjunto de análises de comportamento dos usuários, estatísticas e métricas\n(Relatório Analítico de Curadoria).",
                "complexidade": "N/A",
                "id_item": 3460,
                "valor": 25.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "1.5.8",
        "descricao_tarefa": "Realizar análise de curadoria",
        "plataforma": {},
        "disciplina": 1,
        "id_tarefa": 1959,
        "uni_medida": "Por Relatório"
    },
    {
        "atividade": "1.5    Atividade: Curadoria UX Writing",
        "itens": [
            {
                "descricao_complex": "Criar ou atualizar texto de resposta para diálogo ou\nutter.\nEntrega: documento contendo o texto ou a evidência da atualização:\n- justificativa da alteração\n- mapa anterior\n- mapa alterado\n- detalhamento do que foi alterado e data",
                "complexidade": "N/A",
                "id_item": 3461,
                "valor": 3.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "1.5.9",
        "descricao_tarefa": "Criar ou atualizar texto de resposta para diálogo, utter ou artefato similar",
        "plataforma": {},
        "disciplina": 1,
        "id_tarefa": 1960,
        "uni_medida": "por texto"
    },
    {
        "atividade": "2.1    Atividade: Identificar, consolidar e refinar os requisitos.",
        "itens": [
            {
                "descricao_complex": "Quando a soma entre a Quantidade de Intervenientes somada a Quantidade de Transações for menor ou igual a 3.\nAtor Interveniente é uma pessoa, sistema ou agente externo, situado fora da fronteira do sistema objeto, que com ele interage recebendo ou fornecendo informação.\nTransação é uma série de processos que são executados entre a requisição do Ator\nInterveniente",
                "complexidade": "Baixa",
                "id_item": 3462,
                "valor": 0.5,
                "componente": "Inclusão",
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Quando a soma entre a Quantidade de Intervenientes somada a Quantidade de Transações for menor ou igual a 3.\nAtor Interveniente é uma pessoa, sistema ou agente externo, situado fora da fronteira do sistema objeto, que com ele interage recebendo ou fornecendo informação.\nTransação é uma série de processos que são executados entre a requisição do Ator\nInterveniente",
                "complexidade": "Baixa",
                "id_item": 3463,
                "valor": 0.5,
                "componente": "Alteração",
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Quando a soma entre a Quantidade de Intervenientes somada a Quantidade de Transações for menor ou igual a 3.\nAtor Interveniente é uma pessoa, sistema ou agente externo, situado fora da fronteira do sistema objeto, que com ele interage recebendo ou fornecendo informação.\nTransação é uma série de processos que são executados entre a requisição do Ator\nInterveniente",
                "complexidade": "Baixa",
                "id_item": 3464,
                "valor": 0.5,
                "componente": "Exclusão",
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Quando a soma entre a Quantidade de Intervenientes somada a Quantidade de Transações for menor ou igual a 3.\nAtor Interveniente é uma pessoa, sistema ou agente externo, situado fora da fronteira do sistema objeto, que com ele interage recebendo ou fornecendo informação.\nTransação é uma série de processos que são executados entre a requisição do Ator\nInterveniente",
                "complexidade": "Baixa",
                "id_item": 3465,
                "valor": 0.5,
                "componente": "Consulta",
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Quando a soma entre a Quantidade de Intervenientes somada a Quantidade de Transações for menor ou igual a 3.\nAtor Interveniente é uma pessoa, sistema ou agente externo, situado fora da fronteira do sistema objeto, que com ele interage recebendo ou fornecendo informação.\nTransação é uma série de processos que são executados entre a requisição do Ator\nInterveniente",
                "complexidade": "Baixa",
                "id_item": 3466,
                "valor": 0.5,
                "componente": "Processamento",
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Quando a soma entre a Quantidade de Intervenientes somada a Quantidade de Transações for menor ou igual a 3.\nAtor Interveniente é uma pessoa, sistema ou agente externo, situado fora da fronteira do sistema objeto, que com ele interage recebendo ou fornecendo informação.\nTransação é uma série de processos que são executados entre a requisição do Ator\nInterveniente",
                "complexidade": "Baixa",
                "id_item": 3467,
                "valor": 2.0,
                "componente": "CRUD",
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Quando a soma entre a Quantidade de Intervenientes somada a Quantidade de Transações for menor ou igual a 3.\nAtor Interveniente é uma pessoa, sistema ou agente externo, situado fora da fronteira do sistema objeto, que com ele interage recebendo ou fornecendo informação.\nTransação é uma série de processos que são executados entre a requisição do Ator\nInterveniente",
                "complexidade": "Baixa",
                "id_item": 3468,
                "valor": 0.5,
                "componente": "Canal adicional em MI",
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Quando a soma entre a Quantidade de Intervenientes e Quantidade de Transações for de 4 até 7.Ator Interveniente é uma pessoa, sistema ou agente externo, situado fora da fronteira do sistema objeto, que com ele interage recebendo ou fornecendo informação.\nTransação é uma série de processos que são executados\nentre a requisição do Ator Interveniente",
                "complexidade": "Média",
                "id_item": 3469,
                "valor": 2.0,
                "componente": "Inclusão",
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Quando a soma entre a Quantidade de Intervenientes e Quantidade de Transações for de 4 até 7.Ator Interveniente é uma pessoa, sistema ou agente externo, situado fora da fronteira do sistema objeto, que com ele interage recebendo ou fornecendo informação.\nTransação é uma série de processos que são executados\nentre a requisição do Ator Interveniente",
                "complexidade": "Média",
                "id_item": 3470,
                "valor": 2.0,
                "componente": "Alteração",
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Quando a soma entre a Quantidade de Intervenientes e Quantidade de Transações for de 4 até 7.Ator Interveniente é uma pessoa, sistema ou agente externo, situado fora da fronteira do sistema objeto, que com ele interage recebendo ou fornecendo informação.\nTransação é uma série de processos que são executados\nentre a requisição do Ator Interveniente",
                "complexidade": "Média",
                "id_item": 3471,
                "valor": 1.0,
                "componente": "Exclusão",
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Quando a soma entre a Quantidade de Intervenientes e Quantidade de Transações for de 4 até 7.Ator Interveniente é uma pessoa, sistema ou agente externo, situado fora da fronteira do sistema objeto, que com ele interage recebendo ou fornecendo informação.\nTransação é uma série de processos que são executados\nentre a requisição do Ator Interveniente",
                "complexidade": "Média",
                "id_item": 3472,
                "valor": 1.0,
                "componente": "Consulta",
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Quando a soma entre a Quantidade de Intervenientes e Quantidade de Transações for de 4 até 7.Ator Interveniente é uma pessoa, sistema ou agente externo, situado fora da fronteira do sistema objeto, que com ele interage recebendo ou fornecendo informação.\nTransação é uma série de processos que são executados\nentre a requisição do Ator Interveniente",
                "complexidade": "Média",
                "id_item": 3473,
                "valor": 2.0,
                "componente": "Processamento",
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Quando a soma entre a Quantidade de Intervenientes e Quantidade de Transações for de 4 até 7.Ator Interveniente é uma pessoa, sistema ou agente externo, situado fora da fronteira do sistema objeto, que com ele interage recebendo ou fornecendo informação.\nTransação é uma série de processos que são executados\nentre a requisição do Ator Interveniente",
                "complexidade": "Média",
                "id_item": 3474,
                "valor": 4.0,
                "componente": "CRUD",
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Quando a soma entre a Quantidade de Intervenientes e Quantidade de Transações for de 4 até 7.Ator Interveniente é uma pessoa, sistema ou agente externo, situado fora da fronteira do sistema objeto, que com ele interage recebendo ou fornecendo informação.\nTransação é uma série de processos que são executados\nentre a requisição do Ator Interveniente",
                "complexidade": "Média",
                "id_item": 3475,
                "valor": 0.5,
                "componente": "Canal adicional em MI",
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Quando a soma entre a Quantidade de Intervenientes e Quantidade de Transações for maior que 7.\nAtor Interveniente é uma pessoa, sistema ou agente externo, situado fora da fronteira do sistema objeto, que com ele interage recebendo ou fornecendo informação.\nTransação é uma série de processos que são executados\nentre a requisição do Ator Interveniente",
                "complexidade": "Alta",
                "id_item": 3476,
                "valor": 4.0,
                "componente": "Inclusão",
                "quantidade": {},
                "id_complex": 4
            },
            {
                "descricao_complex": "Quando a soma entre a Quantidade de Intervenientes e Quantidade de Transações for maior que 7.\nAtor Interveniente é uma pessoa, sistema ou agente externo, situado fora da fronteira do sistema objeto, que com ele interage recebendo ou fornecendo informação.\nTransação é uma série de processos que são executados\nentre a requisição do Ator Interveniente",
                "complexidade": "Alta",
                "id_item": 3477,
                "valor": 4.0,
                "componente": "Alteração",
                "quantidade": {},
                "id_complex": 4
            },
            {
                "descricao_complex": "Quando a soma entre a Quantidade de Intervenientes e Quantidade de Transações for maior que 7.\nAtor Interveniente é uma pessoa, sistema ou agente externo, situado fora da fronteira do sistema objeto, que com ele interage recebendo ou fornecendo informação.\nTransação é uma série de processos que são executados\nentre a requisição do Ator Interveniente",
                "complexidade": "Alta",
                "id_item": 3478,
                "valor": 2.0,
                "componente": "Exclusão",
                "quantidade": {},
                "id_complex": 4
            },
            {
                "descricao_complex": "Quando a soma entre a Quantidade de Intervenientes e Quantidade de Transações for maior que 7.\nAtor Interveniente é uma pessoa, sistema ou agente externo, situado fora da fronteira do sistema objeto, que com ele interage recebendo ou fornecendo informação.\nTransação é uma série de processos que são executados\nentre a requisição do Ator Interveniente",
                "complexidade": "Alta",
                "id_item": 3479,
                "valor": 2.0,
                "componente": "Consulta",
                "quantidade": {},
                "id_complex": 4
            },
            {
                "descricao_complex": "Quando a soma entre a Quantidade de Intervenientes e Quantidade de Transações for maior que 7.\nAtor Interveniente é uma pessoa, sistema ou agente externo, situado fora da fronteira do sistema objeto, que com ele interage recebendo ou fornecendo informação.\nTransação é uma série de processos que são executados\nentre a requisição do Ator Interveniente",
                "complexidade": "Alta",
                "id_item": 3480,
                "valor": 4.0,
                "componente": "Processamento",
                "quantidade": {},
                "id_complex": 4
            },
            {
                "descricao_complex": "Quando a soma entre a Quantidade de Intervenientes e Quantidade de Transações for maior que 7.\nAtor Interveniente é uma pessoa, sistema ou agente externo, situado fora da fronteira do sistema objeto, que com ele interage recebendo ou fornecendo informação.\nTransação é uma série de processos que são executados\nentre a requisição do Ator Interveniente",
                "complexidade": "Alta",
                "id_item": 3481,
                "valor": 8.0,
                "componente": "CRUD",
                "quantidade": {},
                "id_complex": 4
            },
            {
                "descricao_complex": "Quando a soma entre a Quantidade de Intervenientes e Quantidade de Transações for maior que 7.\nAtor Interveniente é uma pessoa, sistema ou agente externo, situado fora da fronteira do sistema objeto, que com ele interage recebendo ou fornecendo informação.\nTransação é uma série de processos que são executados\nentre a requisição do Ator Interveniente",
                "complexidade": "Alta",
                "id_item": 3482,
                "valor": 0.5,
                "componente": "Canal adicional em MI",
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "2.1.1",
        "descricao_tarefa": "Criar funcionalidade  Atividade de compreender a necessidade, elicitar requisitos e criar os artefatos que compõem uma funcionalidade com uma descrição do Fluxo de Comportamento ou um canal no MI-Modelo de Implementação, excetuando-se Esboço e Protótipo de Telas",
        "plataforma": {},
        "disciplina": 2,
        "id_tarefa": 1961,
        "uni_medida": "Por funcionalidade"
    },
    {
        "atividade": "2.1    Atividade: Identificar, consolidar e refinar os requisitos.",
        "itens": [
            {
                "descricao_complex": "Quando a soma entre a Quantidade de Intervenientes somada a Quantidade de Transações for menor ou igual a 3.\nAtor Interveniente é uma pessoa, sistema ou agente externo, situado fora da fronteira do sistema objeto, que com ele interage recebendo ou fornecendo informação.\nTransação é uma série de processos que são executados\nentre a requisição do Ator Interveniente",
                "complexidade": "Baixa",
                "id_item": 3483,
                "valor": 0.5,
                "componente": "Inclusão",
                "quantidade": 3,
                "id_complex": 2
            },
            {
                "descricao_complex": "Quando a soma entre a Quantidade de Intervenientes somada a Quantidade de Transações for menor ou igual a 3.\nAtor Interveniente é uma pessoa, sistema ou agente externo, situado fora da fronteira do sistema objeto, que com ele interage recebendo ou fornecendo informação.\nTransação é uma série de processos que são executados\nentre a requisição do Ator Interveniente",
                "complexidade": "Baixa",
                "id_item": 3484,
                "valor": 0.5,
                "componente": "Alteração",
                "quantidade": 3,
                "id_complex": 2
            },
            {
                "descricao_complex": "Quando a soma entre a Quantidade de Intervenientes somada a Quantidade de Transações for menor ou igual a 3.\nAtor Interveniente é uma pessoa, sistema ou agente externo, situado fora da fronteira do sistema objeto, que com ele interage recebendo ou fornecendo informação.\nTransação é uma série de processos que são executados\nentre a requisição do Ator Interveniente",
                "complexidade": "Baixa",
                "id_item": 3485,
                "valor": 0.5,
                "componente": "Exclusão",
                "quantidade": 3,
                "id_complex": 2
            },
            {
                "descricao_complex": "Quando a soma entre a Quantidade de Intervenientes somada a Quantidade de Transações for menor ou igual a 3.\nAtor Interveniente é uma pessoa, sistema ou agente externo, situado fora da fronteira do sistema objeto, que com ele interage recebendo ou fornecendo informação.\nTransação é uma série de processos que são executados\nentre a requisição do Ator Interveniente",
                "complexidade": "Baixa",
                "id_item": 3486,
                "valor": 0.5,
                "componente": "Consulta",
                "quantidade": 3,
                "id_complex": 2
            },
            {
                "descricao_complex": "Quando a soma entre a Quantidade de Intervenientes somada a Quantidade de Transações for menor ou igual a 3.\nAtor Interveniente é uma pessoa, sistema ou agente externo, situado fora da fronteira do sistema objeto, que com ele interage recebendo ou fornecendo informação.\nTransação é uma série de processos que são executados\nentre a requisição do Ator Interveniente",
                "complexidade": "Baixa",
                "id_item": 3487,
                "valor": 0.5,
                "componente": "Processamento",
                "quantidade": 3,
                "id_complex": 2
            },
            {
                "descricao_complex": "Quando a soma entre a Quantidade de Intervenientes somada a Quantidade de Transações for menor ou igual a 3.\nAtor Interveniente é uma pessoa, sistema ou agente externo, situado fora da fronteira do sistema objeto, que com ele interage recebendo ou fornecendo informação.\nTransação é uma série de processos que são executados\nentre a requisição do Ator Interveniente",
                "complexidade": "Baixa",
                "id_item": 3488,
                "valor": 0.5,
                "componente": "CRUD",
                "quantidade": 3,
                "id_complex": 2
            },
            {
                "descricao_complex": "Quando a soma entre a Quantidade de Intervenientes somada a Quantidade de Transações for menor ou igual a 3.\nAtor Interveniente é uma pessoa, sistema ou agente externo, situado fora da fronteira do sistema objeto, que com ele interage recebendo ou fornecendo informação.\nTransação é uma série de processos que são executados\nentre a requisição do Ator Interveniente",
                "complexidade": "Baixa",
                "id_item": 3489,
                "valor": 0.5,
                "componente": "Canal adicional em\nMI",
                "quantidade": 3,
                "id_complex": 2
            },
            {
                "descricao_complex": "Quando a soma entre a Quantidade de Intervenientes e Quantidade de Transações for de 4 até 7.\nAtor Interveniente é uma pessoa, sistema ou agente externo, situado fora da fronteira do sistema objeto, que com ele interage recebendo ou",
                "complexidade": "Média",
                "id_item": 3490,
                "valor": 0.5,
                "componente": "Inclusão",
                "quantidade": 7,
                "id_complex": 3
            },
            {
                "descricao_complex": "Quando a soma entre a Quantidade de Intervenientes e Quantidade de Transações for de 4 até 7.\nAtor Interveniente é uma pessoa, sistema ou agente externo, situado fora da fronteira do sistema objeto, que com ele interage recebendo ou",
                "complexidade": "Média",
                "id_item": 3491,
                "valor": 0.5,
                "componente": "Alteração",
                "quantidade": 7,
                "id_complex": 3
            },
            {
                "descricao_complex": "Quando a soma entre a Quantidade de Intervenientes e Quantidade de Transações for de 4 até 7.\nAtor Interveniente é uma pessoa, sistema ou agente externo, situado fora da fronteira do sistema objeto, que com ele interage recebendo ou",
                "complexidade": "Média",
                "id_item": 3492,
                "valor": 0.5,
                "componente": "Exclusão",
                "quantidade": 7,
                "id_complex": 3
            },
            {
                "descricao_complex": "Quando a soma entre a Quantidade de Intervenientes e Quantidade de Transações for de 4 até 7.\nAtor Interveniente é uma pessoa, sistema ou agente externo, situado fora da fronteira do sistema objeto, que com ele interage recebendo ou",
                "complexidade": "Média",
                "id_item": 3493,
                "valor": 0.5,
                "componente": "Consulta",
                "quantidade": 7,
                "id_complex": 3
            },
            {
                "descricao_complex": "Quando a soma entre a Quantidade de Intervenientes e Quantidade de Transações for de 4 até 7.\nAtor Interveniente é uma pessoa, sistema ou agente externo, situado fora da fronteira do sistema objeto, que com ele interage recebendo ou",
                "complexidade": "Média",
                "id_item": 3494,
                "valor": 0.5,
                "componente": "Processamento",
                "quantidade": 7,
                "id_complex": 3
            },
            {
                "descricao_complex": "Quando a soma entre a Quantidade de Intervenientes e Quantidade de Transações for de 4 até 7.\nAtor Interveniente é uma pessoa, sistema ou agente externo, situado fora da fronteira do sistema objeto, que com ele interage recebendo ou",
                "complexidade": "Média",
                "id_item": 3495,
                "valor": 0.5,
                "componente": "CRUD",
                "quantidade": 7,
                "id_complex": 3
            },
            {
                "descricao_complex": "fornecendo informação.\nTransação é uma série de processos que são executados\nentre a requisição do Ator Interveniente",
                "complexidade": "Média",
                "id_item": 3496,
                "valor": 0.5,
                "componente": "Canal adicional em MI",
                "quantidade": 7,
                "id_complex": 3
            },
            {
                "descricao_complex": "Quando a soma entre a Quantidade de Intervenientes e Quantidade de Transações for maior que 7.\nAtor Interveniente é uma pessoa, sistema ou agente externo, situado fora da fronteira do sistema objeto, que com ele interage recebendo ou fornecendo informação.\nTransação é uma série de processos que são executados\nentre a requisição do Ator Interveniente",
                "complexidade": "Alta",
                "id_item": 3497,
                "valor": 0.5,
                "componente": "Inclusão",
                "quantidade": 10,
                "id_complex": 4
            },
            {
                "descricao_complex": "Quando a soma entre a Quantidade de Intervenientes e Quantidade de Transações for maior que 7.\nAtor Interveniente é uma pessoa, sistema ou agente externo, situado fora da fronteira do sistema objeto, que com ele interage recebendo ou fornecendo informação.\nTransação é uma série de processos que são executados\nentre a requisição do Ator Interveniente",
                "complexidade": "Alta",
                "id_item": 3498,
                "valor": 0.5,
                "componente": "Alteração",
                "quantidade": 10,
                "id_complex": 4
            },
            {
                "descricao_complex": "Quando a soma entre a Quantidade de Intervenientes e Quantidade de Transações for maior que 7.\nAtor Interveniente é uma pessoa, sistema ou agente externo, situado fora da fronteira do sistema objeto, que com ele interage recebendo ou fornecendo informação.\nTransação é uma série de processos que são executados\nentre a requisição do Ator Interveniente",
                "complexidade": "Alta",
                "id_item": 3499,
                "valor": 0.5,
                "componente": "Exclusão",
                "quantidade": 10,
                "id_complex": 4
            },
            {
                "descricao_complex": "Quando a soma entre a Quantidade de Intervenientes e Quantidade de Transações for maior que 7.\nAtor Interveniente é uma pessoa, sistema ou agente externo, situado fora da fronteira do sistema objeto, que com ele interage recebendo ou fornecendo informação.\nTransação é uma série de processos que são executados\nentre a requisição do Ator Interveniente",
                "complexidade": "Alta",
                "id_item": 3500,
                "valor": 0.5,
                "componente": "Consulta",
                "quantidade": 10,
                "id_complex": 4
            },
            {
                "descricao_complex": "Quando a soma entre a Quantidade de Intervenientes e Quantidade de Transações for maior que 7.\nAtor Interveniente é uma pessoa, sistema ou agente externo, situado fora da fronteira do sistema objeto, que com ele interage recebendo ou fornecendo informação.\nTransação é uma série de processos que são executados\nentre a requisição do Ator Interveniente",
                "complexidade": "Alta",
                "id_item": 3501,
                "valor": 0.5,
                "componente": "Processamento",
                "quantidade": 10,
                "id_complex": 4
            },
            {
                "descricao_complex": "Quando a soma entre a Quantidade de Intervenientes e Quantidade de Transações for maior que 7.\nAtor Interveniente é uma pessoa, sistema ou agente externo, situado fora da fronteira do sistema objeto, que com ele interage recebendo ou fornecendo informação.\nTransação é uma série de processos que são executados\nentre a requisição do Ator Interveniente",
                "complexidade": "Alta",
                "id_item": 3502,
                "valor": 2.0,
                "componente": "CRUD",
                "quantidade": 10,
                "id_complex": 4
            },
            {
                "descricao_complex": "Quando a soma entre a Quantidade de Intervenientes e Quantidade de Transações for maior que 7.\nAtor Interveniente é uma pessoa, sistema ou agente externo, situado fora da fronteira do sistema objeto, que com ele interage recebendo ou fornecendo informação.\nTransação é uma série de processos que são executados\nentre a requisição do Ator Interveniente",
                "complexidade": "Alta",
                "id_item": 3503,
                "valor": 0.5,
                "componente": "Canal adicional em MI",
                "quantidade": 10,
                "id_complex": 4
            }
        ],
        "tarefa": "2.1.2",
        "descricao_tarefa": "Alterar funcionalidade\nAtividade de compreender\na necessidade, elicitar e\n\"alterar os requisitos para\natualizar/criar os artefatos\"\nque compõem uma\nfuncionalidade,\nexcetuando-se o Esboço\ne o Protótipo de Telas.",
        "plataforma": {},
        "disciplina": 2,
        "id_tarefa": 1962,
        "uni_medida": "Por funcionalidade"
    },
    {
        "atividade": "2.1    Atividade: Identificar, consolidar e refinar os requisitos.",
        "itens": [
            {
                "descricao_complex": "Criar ou alterar os artefatos que compõem uma funcionalidade, excetuando-se o Esboço e o Protótipo de Telas. Nesta categoria está incluída\napenas a transcrição da documentação para ferramenta utilizada pelo Banco.",
                "complexidade": "N/A",
                "id_item": 3504,
                "valor": 0.5,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "2.1.3",
        "descricao_tarefa": "Documentar funcionalidade",
        "plataforma": {},
        "disciplina": 2,
        "id_tarefa": 1963,
        "uni_medida": "Por funcionalidade"
    },
    {
        "atividade": "2.1    Atividade: Identificar, consolidar e refinar os requisitos.",
        "itens": [
            {
                "descricao_complex": "É uma representação gráfica, estática, não navegável da camada de apresentação de uma funcionalidade. Representa a interação, mas não interage com o usuário.",
                "complexidade": "N/A",
                "id_item": 3505,
                "valor": 0.5,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "2.1.4",
        "descricao_tarefa": "Esboço de tela\nElaborar, diagramar e criar o artefato “Esboço de Tela” para uma funcionalidade.",
        "plataforma": {},
        "disciplina": 2,
        "id_tarefa": 1964,
        "uni_medida": "Por Tela"
    },
    {
        "atividade": "2.1    Atividade: Identificar, consolidar e refinar os requisitos.",
        "itens": [
            {
                "descricao_complex": "É uma representação gráfica, estática, não navegável da camada de apresentação de um conjunto de funcionalidades encadeadas em uma única tela. Representa a interação, mas não interage com o usuário.\nPara composição e sequenciamento de funcionalidades participantes do fluxo de comportamento que já tenham esboço de tela,",
                "complexidade": "N/A",
                "id_item": 3506,
                "valor": 1.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "2.1.5",
        "descricao_tarefa": "Esboço de Fluxo de Comportamento de Funcionalidades\nElaborar, diagramar e criar o artefato “Esboço de Fluxo de Comportamento de Telas” para um conjunto\nde funcionalidades.",
        "plataforma": {},
        "disciplina": 2,
        "id_tarefa": 1965,
        "uni_medida": "Por Fluxo de Comportamento de Funcionalidades"
    },
    {
        "atividade": "2.1    Atividade: Identificar, consolidar e refinar os requisitos.",
        "itens": [
            {
                "descricao_complex": "Elaborar e descrever os dados básicos e o planejamento da fase de requisitos da intervenção. Tem como produto os seguintes artefatos:\n- Relação de Funcionalidades identificadas;\n- Objetivo de cada Funcionalidade identificada;\n- Planejamento das entregas;\n- Cronograma da fase de requisitos;",
                "complexidade": "N/A",
                "id_item": 3507,
                "valor": 6.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "2.1.6",
        "descricao_tarefa": "Consolidar requisitos",
        "plataforma": {},
        "disciplina": 2,
        "id_tarefa": 1966,
        "uni_medida": "Por Consolidação de requisitos"
    },
    {
        "atividade": "2.1    Atividade: Identificar, consolidar e refinar os requisitos.",
        "itens": [
            {
                "descricao_complex": "Elaborar os artefatos da etapa de finalização dos requisitos. Tem como produto os seguintes\nartefatos:                                                                                          - Informações da Intervenção;\n- COR-Coleção de Requisitos da Intervenção;\n- Aprovação;",
                "complexidade": "N/A",
                "id_item": 3508,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "2.1.7",
        "descricao_tarefa": "Criar Aprovação dos Requisitos da\nIntervenção",
        "plataforma": {},
        "disciplina": 2,
        "id_tarefa": 1967,
        "uni_medida": "Por Aprovação dos Requisitos"
    },
    {
        "atividade": "2.1    Atividade: Identificar, consolidar e refinar os requisitos.",
        "itens": [
            {
                "descricao_complex": "Refinamento do DRI (Doc. de Req. de Intervenção) e criação do ERR (Especificação de Requisitos Relacional)",
                "complexidade": "N/A",
                "id_item": 3509,
                "valor": 1.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "2.1.8",
        "descricao_tarefa": "Especificação de requisitos relacional (ERR)",
        "plataforma": "DW e Analytics",
        "disciplina": 2,
        "id_tarefa": 1968,
        "uni_medida": "Por grupo de até 4 atributos"
    },
    {
        "atividade": "2.1    Atividade: Identificar, consolidar e refinar os requisitos.",
        "itens": [
            {
                "descricao_complex": "Refinamento do DRI (Doc. de Req. de Intervenção) e criação do ERM (Especificação de Requisitos Multidimensional)",
                "complexidade": "N/A",
                "id_item": 3510,
                "valor": 1.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "2.1.9",
        "descricao_tarefa": "Especificação de requisitos multidimensional (ERM)",
        "plataforma": "DW e Analytics",
        "disciplina": 2,
        "id_tarefa": 1969,
        "uni_medida": "Por grupo de até 4 atributos"
    },
    {
        "atividade": "2.1    Atividade: Identificar, consolidar e refinar os requisitos.",
        "itens": [
            {
                "descricao_complex": "Identificar as funcionalidades de uma aplicação por engenharia reversa, à partir do modelo de dado e código fonte.",
                "complexidade": "N/A",
                "id_item": 3511,
                "valor": 0.2,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "2.1.10",
        "descricao_tarefa": "Elicitar os Requisitos – Documento de Requisitos da Descoberta de Conhecimento",
        "plataforma": "DW e Analytics",
        "disciplina": 2,
        "id_tarefa": 1970,
        "uni_medida": "Por atributo de banco de dados de sistemas"
    },
    {
        "atividade": "2.1    Atividade: Identificar, consolidar e refinar os requisitos.",
        "itens": [
            {
                "descricao_complex": "Para casos de modelagem completa, conforme orientação da Matriz de Direcionamento.\nTelas com somente saída(s) de dados (output).",
                "complexidade": "Baixa",
                "id_item": 3512,
                "valor": 3.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Para casos de modelagem completa, conforme orientação da Matriz de Direcionamento.\nTelas que contenham entrada(s) de dados (input).",
                "complexidade": "Alta",
                "id_item": 3513,
                "valor": 5.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "2.1.11",
        "descricao_tarefa": "Elaborar Protótipo de Tela",
        "plataforma": "Plataforma Distribuída",
        "disciplina": 2,
        "id_tarefa": 1971,
        "uni_medida": "Por Tela"
    },
    {
        "atividade": "2.1    Atividade: Identificar, consolidar e refinar os requisitos.",
        "itens": [
            {
                "descricao_complex": "Para casos de modelagem completa, conforme orientação da Matriz de Direcionamento.\nTelas com somente saída(s) de dados (output).",
                "complexidade": "Baixa",
                "id_item": 3514,
                "valor": 1.5,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Para casos de modelagem completa, conforme orientação da Matriz de Direcionamento.\nTelas que contenham entrada(s) de dados (input).",
                "complexidade": "Alta",
                "id_item": 3515,
                "valor": 2.5,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "2.1.12",
        "descricao_tarefa": "Alterar Protótipo de Tela",
        "plataforma": {},
        "disciplina": 2,
        "id_tarefa": 1972,
        "uni_medida": "Por Tela"
    },
    {
        "atividade": "3.1    Atividade: Modelar Processos",
        "itens": [
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 3516,
                "valor": 2.0,
                "componente": "Processo Referenciado",
                "quantidade": {},
                "id_complex": 6
            },
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 3517,
                "valor": 1.0,
                "componente": "Esboço de Tela",
                "quantidade": {},
                "id_complex": 6
            },
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 3518,
                "valor": 0.25,
                "componente": "Descrição da tarefa – controle, risco, sistema e executante",
                "quantidade": {},
                "id_complex": 6
            },
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 3519,
                "valor": 0.2,
                "componente": "Agrupamento",
                "quantidade": {},
                "id_complex": 6
            },
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 3520,
                "valor": 2.0,
                "componente": "Regra de Negócio",
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "3.1.1",
        "descricao_tarefa": "Modelo de Processo de Negócio – Descritiva",
        "plataforma": {},
        "disciplina": 3,
        "id_tarefa": 1973,
        "uni_medida": "Por Processo de Negócio"
    },
    {
        "atividade": "3.1    Atividade: Modelar Processos",
        "itens": [
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 3521,
                "valor": 2.0,
                "componente": "Processo Referenciado",
                "quantidade": {},
                "id_complex": 6
            },
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 3522,
                "valor": 2.0,
                "componente": "Evento Inicial, Intermediário e Final",
                "quantidade": {},
                "id_complex": 6
            },
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 3523,
                "valor": 2.0,
                "componente": "Descrição da tarefa – controle, risco, sistema e executante",
                "quantidade": {},
                "id_complex": 6
            },
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 3524,
                "valor": 1.0,
                "componente": "Agrupamento – atributos",
                "quantidade": {},
                "id_complex": 6
            },
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 3525,
                "valor": 3.0,
                "componente": "Regra de Negócio",
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "3.1.2",
        "descricao_tarefa": "Modelo de Processo de Negócio – Analítica",
        "plataforma": {},
        "disciplina": 3,
        "id_tarefa": 1974,
        "uni_medida": "Por Processo de Negócio"
    },
    {
        "atividade": "4.1    Atividade: Projetar o Banco de Dados",
        "itens": [
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 3526,
                "valor": 1.0,
                "componente": "Entidade/tabela com até 6 campos sem FK",
                "quantidade": {},
                "id_complex": 6
            },
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 3527,
                "valor": 3.0,
                "componente": "Entidade/tabela com 7 a 12 campos ou até 5 FK",
                "quantidade": {},
                "id_complex": 6
            },
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 3528,
                "valor": 5.0,
                "componente": "Demais casos",
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "4.1.1",
        "descricao_tarefa": "Elaborar/alterar o Modelo de Entidade Relacionamento (MER) – Visão lógica e física",
        "plataforma": {},
        "disciplina": 4,
        "id_tarefa": 1975,
        "uni_medida": "Por entidade/tabela"
    },
    {
        "atividade": "4.1    Atividade: Projetar o Banco de Dados",
        "itens": [
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 3529,
                "valor": 1.0,
                "componente": "Dimensão com até 10 campos",
                "quantidade": {},
                "id_complex": 6
            },
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 3530,
                "valor": 4.0,
                "componente": "Fato com até 15 campos e demais dimensões",
                "quantidade": {},
                "id_complex": 6
            },
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 3531,
                "valor": 6.0,
                "componente": "Demais casos",
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "4.1.2",
        "descricao_tarefa": "Elaborar/alterar o Modelo Dimensional de Dados (MDM) – Visão lógica e física",
        "plataforma": "DW",
        "disciplina": 4,
        "id_tarefa": 1976,
        "uni_medida": "Por entidade/tabela"
    },
    {
        "atividade": "4.1    Atividade: Projetar o Banco de Dados",
        "itens": [
            {
                "descricao_complex": "Tarefa de responsabilidade da Administração de Dados",
                "complexidade": "N/A",
                "id_item": 3532,
                "valor": 1.0,
                "componente": "Entidade/tabela com até 6 campos sem FK",
                "quantidade": {},
                "id_complex": 6
            },
            {
                "descricao_complex": "Tarefa de responsabilidade da Administração de Dados",
                "complexidade": "N/A",
                "id_item": 3533,
                "valor": 3.0,
                "componente": "Entidade/tabela com 7 a 12 campos ou até 5 FK",
                "quantidade": {},
                "id_complex": 6
            },
            {
                "descricao_complex": "Tarefa de responsabilidade da Administração de Dados",
                "complexidade": "N/A",
                "id_item": 3534,
                "valor": 5.0,
                "componente": "Demais casos",
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "4.1.3",
        "descricao_tarefa": "Verificar Conformidade de Modelo de Entidade Relacionamento (MER) – Visão lógica e física",
        "plataforma": {},
        "disciplina": 4,
        "id_tarefa": 1977,
        "uni_medida": "Por entidade/tabela"
    },
    {
        "atividade": "4.1    Atividade: Projetar o Banco de Dados",
        "itens": [
            {
                "descricao_complex": "Tarefa de responsabilidade da Administração de Dados",
                "complexidade": "N/A",
                "id_item": 3535,
                "valor": 1.0,
                "componente": "Dimensão com até 10 campos",
                "quantidade": {},
                "id_complex": 6
            },
            {
                "descricao_complex": "Tarefa de responsabilidade da Administração de Dados",
                "complexidade": "N/A",
                "id_item": 3536,
                "valor": 4.0,
                "componente": "Fato com até 15 campos e demais dimensões",
                "quantidade": {},
                "id_complex": 6
            },
            {
                "descricao_complex": "Tarefa de responsabilidade da Administração de Dados",
                "complexidade": "N/A",
                "id_item": 3537,
                "valor": 6.0,
                "componente": "Demais casos",
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "4.1.4",
        "descricao_tarefa": "Verificar Conformidade de Modelo Dimensional de Dados (MDM) – Visão lógica e física",
        "plataforma": "DW",
        "disciplina": 4,
        "id_tarefa": 1978,
        "uni_medida": "Por entidade/tabela"
    },
    {
        "atividade": "4.2    Atividade: Projetar a Visão Estruturada",
        "itens": [
            {
                "descricao_complex": "Artefatos utilizados apenas quando se trata de extração para geração de arquivo",
                "complexidade": "N/A",
                "id_item": 3538,
                "valor": 1.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "4.2.1",
        "descricao_tarefa": "Especificação funcional do job de ETL: Resultado da Extração e REX, Mapa de Extração: MEX",
        "plataforma": "DW e Analytics",
        "disciplina": 4,
        "id_tarefa": 1979,
        "uni_medida": "Por artefato"
    },
    {
        "atividade": "4.2    Atividade: Projetar a Visão Estruturada",
        "itens": [
            {
                "descricao_complex": "Define a origem, destino e transformação do dado",
                "complexidade": "N/A",
                "id_item": 3539,
                "valor": 7.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "4.2.2",
        "descricao_tarefa": "Especificação funcional do job de ETL: Mapa de Transformação e Carga: MTC",
        "plataforma": "DW e Analytics",
        "disciplina": 4,
        "id_tarefa": 1980,
        "uni_medida": "Por artefato"
    },
    {
        "atividade": "4.2    Atividade: Projetar a Visão Estruturada",
        "itens": [
            {
                "descricao_complex": "Em caso de engenharia reversa (extração de informações a partir de\nartefatos/fontes já existentes).",
                "complexidade": "Baixa",
                "id_item": 3540,
                "valor": 0.25,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Quando houver documentação disponível. Dentre aqueles\nartefatos previstos no PDSTI BB.",
                "complexidade": "Alta",
                "id_item": 3541,
                "valor": 1.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "4.2.8",
        "descricao_tarefa": "Elaborar o Diagrama de Transação\n(DGT)",
        "plataforma": {},
        "disciplina": 4,
        "id_tarefa": 1981,
        "uni_medida": "Por Processo de Informação"
    },
    {
        "atividade": "4.2    Atividade: Projetar a Visão Estruturada",
        "itens": [
            {
                "descricao_complex": "Em caso de engenharia reversa (extração de informações a partir de artefatos/fontes já existentes).",
                "complexidade": "Baixa",
                "id_item": 3542,
                "valor": 0.15,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Quando houver documentação disponível. Dentre aqueles\nartefatos previstos no PDSTI BB.",
                "complexidade": "Alta",
                "id_item": 3543,
                "valor": 0.5,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "4.2.9",
        "descricao_tarefa": "Alterar o Diagrama de Transação\n(DGT)",
        "plataforma": {},
        "disciplina": 4,
        "id_tarefa": 1982,
        "uni_medida": "Por Processo de Informação"
    },
    {
        "atividade": "4.2    Atividade: Projetar a Visão Estruturada",
        "itens": [
            {
                "descricao_complex": "Em caso de engenharia reversa (extração de\ninformações a partir de artefatos/fontes já existentes).",
                "complexidade": "Baixa",
                "id_item": 3544,
                "valor": 0.25,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Quando houver documentação disponível. Dentre aqueles artefatos previstos no PDSTI BB.",
                "complexidade": "Alta",
                "id_item": 3545,
                "valor": 1.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "4.2.10",
        "descricao_tarefa": "Elaborar\nDiagrama Geral de Procedures (DGP)",
        "plataforma": {},
        "disciplina": 4,
        "id_tarefa": 1983,
        "uni_medida": "Por procedure"
    },
    {
        "atividade": "4.2    Atividade: Projetar a Visão Estruturada",
        "itens": [
            {
                "descricao_complex": "Em caso de engenharia reversa (extração de informações a partir de\nartefatos/fontes já existentes).",
                "complexidade": "Baixa",
                "id_item": 3546,
                "valor": 0.15,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Quando houver documentação disponível. Dentre aqueles artefatos previstos no PDSTI BB.",
                "complexidade": "Alta",
                "id_item": 3547,
                "valor": 0.5,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "4.2.11",
        "descricao_tarefa": "Alterar\nDiagrama Geral de Procedures (DGP)",
        "plataforma": {},
        "disciplina": 4,
        "id_tarefa": 1984,
        "uni_medida": "Por procedure"
    },
    {
        "atividade": "4.2    Atividade: Projetar a Visão Estruturada",
        "itens": [
            {
                "descricao_complex": "Em caso de engenharia reversa (extração de informações a partir de\nartefatos/fontes já existentes).",
                "complexidade": "Baixa",
                "id_item": 3548,
                "valor": 0.25,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Quando houver documentação disponível. Dentre aqueles\nartefatos previstos no PDSTI BB.",
                "complexidade": "Alta",
                "id_item": 3549,
                "valor": 1.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "4.2.12",
        "descricao_tarefa": "Elaborar o Diagrama de Processamento Batch (DPB)",
        "plataforma": {},
        "disciplina": 4,
        "id_tarefa": 1985,
        "uni_medida": "Por módulo de processamento"
    },
    {
        "atividade": "4.2    Atividade: Projetar a Visão Estruturada",
        "itens": [
            {
                "descricao_complex": "Em caso de engenharia reversa (extração de\ninformações a partir de artefatos/fontes já existentes).",
                "complexidade": "Baixa",
                "id_item": 3550,
                "valor": 0.15,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Quando houver documentação disponível. Dentre aqueles artefatos previstos no PDSTI BB.",
                "complexidade": "Alta",
                "id_item": 3551,
                "valor": 0.5,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "4.2.13",
        "descricao_tarefa": "Alterar o Diagrama\nde Processamento Batch (DPB)",
        "plataforma": {},
        "disciplina": 4,
        "id_tarefa": 1986,
        "uni_medida": "Por módulo de processamento"
    },
    {
        "atividade": "4.2    Atividade: Projetar a Visão Estruturada",
        "itens": [
            {
                "descricao_complex": "Campos relacionados na “Declaração de parâmetros de entrada e saída” ou “Declaração de métodos da\nInterface (Projetos Orientadosa Objetos)”.",
                "complexidade": "N/A",
                "id_item": 3552,
                "valor": 1.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "4.2.14",
        "descricao_tarefa": "Especificar a Interface (ESI)",
        "plataforma": {},
        "disciplina": 4,
        "id_tarefa": 1987,
        "uni_medida": "Por grupo de até 20 campos/método s"
    },
    {
        "atividade": "4.2    Atividade: Projetar a Visão Estruturada",
        "itens": [
            {
                "descricao_complex": "Campos relacionados na “Declaração de parâmetros de entrada e saída” ou “Declaração de métodos da Interface (Projetos Orientados\na Objetos)”.",
                "complexidade": "N/A",
                "id_item": 3553,
                "valor": 0.5,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "4.2.15",
        "descricao_tarefa": "Alterar a Especificação da Interface (ESI)",
        "plataforma": {},
        "disciplina": 4,
        "id_tarefa": 1988,
        "uni_medida": "Por grupo de até 20 campos/método s"
    },
    {
        "atividade": "4.2    Atividade: Projetar a Visão Estruturada",
        "itens": [
            {
                "descricao_complex": ".\nTela com a quantidade de até 10 (dez) dos itens de complexidade abaixo:\n- Regras de apresentação*;\n- Regras de tratamento de exceção*;\n- Itens de controle*.\n*Conforme artefato relacionado no PDSTI",
                "complexidade": "Baixa",
                "id_item": 3554,
                "valor": 1.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Tela com a quantidade de 11 (onze) a 20 (vinte) dos itens de complexidade listados abaixo:\n- Regras de apresentação*;\n- Regras de tratamento de exceção*;\n- Itens de controle*.\n*Conforme artefato relacionado no PDSTI",
                "complexidade": "Média",
                "id_item": 3555,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Tela com a quantidade mais de 20 (vinte) dos itens de complexidade listados abaixo:\n- Regras de apresentação*;\n- Regras de tratamento de exceção*;                           - Itens de controle*.\n*Conforme artefato relacionado no PDSTI",
                "complexidade": "Alta",
                "id_item": 3556,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "4.2.16",
        "descricao_tarefa": "Especificar a Tela (EST)\nTotal/Parcial\n(A solicitação de especificação do componente poderá ser global ou das partes solicitadas pelo demandante)",
        "plataforma": {},
        "disciplina": 4,
        "id_tarefa": 1989,
        "uni_medida": "Por Tela"
    },
    {
        "atividade": "4.2    Atividade: Projetar a Visão Estruturada",
        "itens": [
            {
                "descricao_complex": "Tela com a quantidade de até 10 (dez) dos itens de complexidade abaixo:\n- Regras de apresentação*;\n- Regras de tratamento de exceção*;\n- Itens de controle*.\n*Conforme artefato relacionado no PDSTI",
                "complexidade": "Baixa",
                "id_item": 3557,
                "valor": 0.5,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Tela com a quantidade de 11 (onze) a 20 (vinte) dos itens de complexidade listados abaixo:\n- Regras de apresentação*;\n- Regras de tratamento de exceção*;\n- Itens de controle*.\n*Conforme artefato relacionado no PDSTI",
                "complexidade": "Média",
                "id_item": 3558,
                "valor": 1.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Tela com a quantidade mais de 20 (vinte) dos itens de complexidade listados abaixo:\n- Regras de apresentação*;\n- Regras de tratamento de exceção*;\n- Itens de controle*.\n*Conforme artefato relacionado no PDSTI",
                "complexidade": "Alta",
                "id_item": 3559,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "4.2.17",
        "descricao_tarefa": "Alterar a Especificação de Tela (EST)\nTotal/Parcial\n(A solicitação de especificação do componente poderá ser global ou das partes solicitadas pelo demandante)",
        "plataforma": {},
        "disciplina": 4,
        "id_tarefa": 1990,
        "uni_medida": "Por Tela"
    },
    {
        "atividade": "4.2    Atividade: Projetar a Visão Estruturada",
        "itens": [
            {
                "descricao_complex": "Componente com a quantidade de até 10 (dez) dos itens de complexidade abaixo:                                     - Chamadas a componentes*;\n- Parâmetros de entrada do componente*;\n- Tabelas utilizadas pelo componente*;\n- Arquivos utilizados pelo componente*;\n*Conforme artefato relacionado no PDSTI BB",
                "complexidade": "Baixa",
                "id_item": 3560,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Componente com a quantidade de 11 (onze) a 20 (vinte) dos itens de complexidade listados abaixo:\n- Chamadas a componentes*;\n- Parâmetros de entrada do componente*;\n- Tabelas utilizadas pelo componente*;\n- Arquivos utilizados pelo componente*;\n*Conforme artefato relacionado no PDSTI BB",
                "complexidade": "Média",
                "id_item": 3561,
                "valor": 8.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Componente com a quantidade mais de 20 (vinte) dos itens de complexidade listados abaixo:\n- Chamadas a componentes*;\n- Parâmetros de entrada do componente*;\n- Tabelas utilizadas pelo componente*;\n- Arquivos utilizados pelo componente*;\n*Conforme artefato relacionado no PDSTI BB",
                "complexidade": "Alta",
                "id_item": 3562,
                "valor": 16.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "4.2.18",
        "descricao_tarefa": "Especificar um componente (ESC) Total/Parcial (a solicitação de especificação poderá ser de todo o componente ou das alterações das partes solicitadas pelo demandante)",
        "plataforma": {},
        "disciplina": 4,
        "id_tarefa": 1991,
        "uni_medida": "Por artefato"
    },
    {
        "atividade": "4.2    Atividade: Projetar a Visão Estruturada",
        "itens": [
            {
                "descricao_complex": "Componente com a quantidade de até 10 (dez) dos itens de complexidade abaixo:\n- Chamadas a componentes*;\n- Parâmetros de entrada do componente*;\n- Tabelas utilizadas pelo componente*;\n- Arquivos utilizados pelo componente*;\n*Conforme artefato relacionado no PDSTI BB",
                "complexidade": "Baixa",
                "id_item": 3563,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            }
        ],
        "tarefa": "4.2.19",
        "descricao_tarefa": "Alt. especificação de componente (ESC)\nTotal/Parcial (a solicitação de especificação poderá ser todo componente ou das alterações das partes solicitadas pelo demandante)",
        "plataforma": {},
        "disciplina": 4,
        "id_tarefa": 1992,
        "uni_medida": "Por artefato"
    },
    {
        "atividade": "4.2    Atividade: Projetar a Visão Estruturada",
        "itens": [
            {
                "descricao_complex": "Componente com a quantidade de 11 (onze) a 20 (vinte) dos itens de complexidade listados abaixo:\n- Chamadas a componentes*;\n- Parâmetros de entrada do componente*;\n- Tabelas utilizadas pelo componente*;\n- Arquivos utilizados pelo componente*;\n*Conforme artefato relacionado no PDSTI BB",
                "complexidade": "Média",
                "id_item": 3564,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            }
        ],
        "tarefa": "4.3.19",
        "descricao_tarefa": "Alt. especificação de componente (ESC)\nTotal/Parcial (a solicitação de especificação poderá ser todo componente ou das alterações das partes solicitadas pelo demandante)",
        "plataforma": {},
        "disciplina": 4,
        "id_tarefa": 1993,
        "uni_medida": "Por artefato"
    },
    {
        "atividade": "4.2    Atividade: Projetar a Visão Estruturada",
        "itens": [
            {
                "descricao_complex": "Componente com a quantidade mais de 20 (vinte) dos itens de complexidade listados abaixo:\n- Chamadas a componentes*;\n- Parâmetros de entrada do componente*;\n- Tabelas utilizadas pelo componente*;\n- Arquivos utilizados pelo componente*;\n*Conforme artefato relacionado no PDSTI BB",
                "complexidade": "Alta",
                "id_item": 3565,
                "valor": 8.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "4.4.19",
        "descricao_tarefa": "Alt. especificação de componente (ESC)\nTotal/Parcial (a solicitação de especificação poderá ser todo componente ou das alterações das partes solicitadas pelo demandante)",
        "plataforma": {},
        "disciplina": 4,
        "id_tarefa": 1994,
        "uni_medida": "Por artefato"
    },
    {
        "atividade": "4.2    Atividade: Projetar a Visão Estruturada",
        "itens": [
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 3566,
                "valor": 0.25,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "4.2.20",
        "descricao_tarefa": "Elaborar o Diagrama de Transição de Estados (DTE)",
        "plataforma": {},
        "disciplina": 4,
        "id_tarefa": 1995,
        "uni_medida": "Por transição"
    },
    {
        "atividade": "4.2    Atividade: Projetar a Visão Estruturada",
        "itens": [
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 3567,
                "valor": 0.15,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "4.2.21",
        "descricao_tarefa": "Alterar o Diagrama de Transição de Estados (DTE)",
        "plataforma": {},
        "disciplina": 4,
        "id_tarefa": 1996,
        "uni_medida": "Por transição"
    },
    {
        "atividade": "4.3    Atividade: Projetar a Visão Orientada a Objeto",
        "itens": [
            {
                "descricao_complex": "Em caso de engenharia reversa (extração de informações a partir de artefatos/fontes já existentes).",
                "complexidade": "Baixa",
                "id_item": 3568,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Quando houver documentação disponível. Dentre aqueles artefatos previstos no PDSTI BB.",
                "complexidade": "Alta",
                "id_item": 3569,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "4.3.1",
        "descricao_tarefa": "Elaborar o Diagrama de Classes de Projeto (DCP)",
        "plataforma": {},
        "disciplina": 4,
        "id_tarefa": 1997,
        "uni_medida": "Por grupo de até 20 classes"
    },
    {
        "atividade": "4.3    Atividade: Projetar a Visão Orientada a Objeto",
        "itens": [
            {
                "descricao_complex": "Em caso de engenharia reversa (extração de informações a partir de artefatos/fontes já existentes).",
                "complexidade": "Baixa",
                "id_item": 3570,
                "valor": 1.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Quando houver documentação disponível. Dentre aqueles artefatos previstos no PDSTI BB.",
                "complexidade": "Alta",
                "id_item": 3571,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            },
            {
                "descricao_complex": "Em caso de engenharia reversa (extração de informações a partir de artefatos/fontes já existentes).",
                "complexidade": "Baixa",
                "id_item": 3572,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Quando houver documentação disponível. Dentre aqueles artefatos previstos no PDSTI BB.",
                "complexidade": "Alta",
                "id_item": 3573,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "4.3.2",
        "descricao_tarefa": "Alterar o Diagrama de Classes de Projeto (DCP)",
        "plataforma": {},
        "disciplina": 4,
        "id_tarefa": 1998,
        "uni_medida": "Por grupo de até 20 classes"
    },
    {
        "atividade": "4.3    Atividade: Projetar a Visão Orientada a Objeto",
        "itens": [
            {
                "descricao_complex": "Em caso de engenharia reversa (extração de informações a partir de artefatos/fontes já existentes).",
                "complexidade": "Baixa",
                "id_item": 3574,
                "valor": 1.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Quando houver documentação disponível. Dentre aqueles artefatos previstos no PDSTI BB.",
                "complexidade": "Alta",
                "id_item": 3575,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "4.3.4",
        "descricao_tarefa": "Alterar o Diagrama de Componentes de Projeto (DGC)",
        "plataforma": {},
        "disciplina": 4,
        "id_tarefa": 1999,
        "uni_medida": "Por grupo de até 10 componentes"
    },
    {
        "atividade": "4.3    Atividade: Projetar a Visão Orientada a Objeto",
        "itens": [
            {
                "descricao_complex": "Em caso de engenharia reversa (extração de informações a partir de artefatos/fontes já existentes).",
                "complexidade": "Baixa",
                "id_item": 3576,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Quando houver documentação disponível. Dentre aqueles artefatos previstos no PDSTI BB.",
                "complexidade": "Alta",
                "id_item": 3577,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "4.3.5",
        "descricao_tarefa": "Elaborar o Diagrama de Sequência (DGS)",
        "plataforma": {},
        "disciplina": 4,
        "id_tarefa": 2000,
        "uni_medida": "Por grupo de até 10 sequencias de interações"
    },
    {
        "atividade": "4.3    Atividade: Projetar a Visão Orientada a Objeto",
        "itens": [
            {
                "descricao_complex": "Em caso de engenharia reversa (extração de informações a partir de artefatos/fontes já existentes).",
                "complexidade": "Baixa",
                "id_item": 3578,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Quando houver documentação disponível. Dentre aqueles artefatos previstos no PDSTI BB.",
                "complexidade": "Alta",
                "id_item": 3579,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "4.3.6",
        "descricao_tarefa": "Alterar o Diagrama de Sequência (DGS)",
        "plataforma": {},
        "disciplina": 4,
        "id_tarefa": 2001,
        "uni_medida": "Por grupo de até 10 sequencias de interações"
    },
    {
        "atividade": "4.4    Atividade: VisionPLUS - Projetar a Visão Estruturada",
        "itens": [
            {
                "descricao_complex": "Em caso de engenharia reversa (extração de informações a partir de artefatos/fontes já existentes).",
                "complexidade": "Baixa",
                "id_item": 3580,
                "valor": 0.3,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Quando houver documentação disponível. Dentre aqueles artefatos previstos no PDSTI BB.",
                "complexidade": "Alta",
                "id_item": 3581,
                "valor": 1.3,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "4.4.1",
        "descricao_tarefa": "Elaborar o Diagrama de Transação\n(DGT)",
        "plataforma": "VisionPlus",
        "disciplina": 4,
        "id_tarefa": 2002,
        "uni_medida": "Por Processo de Informação"
    },
    {
        "atividade": "4.4    Atividade: VisionPLUS - Projetar a Visão Estruturada",
        "itens": [
            {
                "descricao_complex": "Em caso de engenharia reversa\n(extração de informações a partir de artefatos/fontes já existentes).",
                "complexidade": "Baixa",
                "id_item": 3582,
                "valor": 0.15,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Quando houver documentação disponível. Dentre aqueles artefatos previstos no PDSTI BB.",
                "complexidade": "Alta",
                "id_item": 3583,
                "valor": 0.6,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "4.4.2",
        "descricao_tarefa": "Alterar o Diagrama de Transação\n(DGT)",
        "plataforma": "VisionPlus",
        "disciplina": 4,
        "id_tarefa": 2003,
        "uni_medida": "Por Processo de Informação"
    },
    {
        "atividade": "4.4    Atividade: VisionPLUS - Projetar a Visão Estruturada",
        "itens": [
            {
                "descricao_complex": "Em caso de engenharia reversa (extração de informações a partir de artefatos/fontes já existentes).",
                "complexidade": "Baixa",
                "id_item": 3584,
                "valor": 0.3,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Quando houver documentação disponível. Dentre aqueles artefatos previstos no PDSTI BB.",
                "complexidade": "Alta",
                "id_item": 3585,
                "valor": 1.3,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "4.4.3",
        "descricao_tarefa": "Elaborar\nDiagrama Geral de Procedures (DGP)",
        "plataforma": "VisionPlus",
        "disciplina": 4,
        "id_tarefa": 2004,
        "uni_medida": "Por procedure"
    },
    {
        "atividade": "4.4    Atividade: VisionPLUS - Projetar a Visão Estruturada",
        "itens": [
            {
                "descricao_complex": "Em caso de engenharia reversa (extração de informações a partir de\nartefatos/fontes já existentes).",
                "complexidade": "Baixa",
                "id_item": 3586,
                "valor": 0.15,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Quando houver documentação disponível. Dentre aqueles artefatos previstos no PDSTI BB.",
                "complexidade": "Alta",
                "id_item": 3587,
                "valor": 0.6,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "4.4.4",
        "descricao_tarefa": "Alterar\nDiagrama Geral de Procedures (DGP)",
        "plataforma": "VisionPlus",
        "disciplina": 4,
        "id_tarefa": 2005,
        "uni_medida": "Por procedure"
    },
    {
        "atividade": "4.4    Atividade: VisionPLUS - Projetar a Visão Estruturada",
        "itens": [
            {
                "descricao_complex": "Em caso de engenharia reversa (extração de informações a partir de artefatos/fontes já existentes).",
                "complexidade": "Baixa",
                "id_item": 3588,
                "valor": 0.3,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Quando houver documentação\ndisponível. Dentre aqueles artefatos previstos no PDSTI BB.",
                "complexidade": "Alta",
                "id_item": 3589,
                "valor": 1.3,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "4.4.5",
        "descricao_tarefa": "Elaborar o Diagrama de Processamento Batch (DPB)",
        "plataforma": "VisionPlus",
        "disciplina": 4,
        "id_tarefa": 2006,
        "uni_medida": "Por módulo de processament o"
    },
    {
        "atividade": "4.4    Atividade: VisionPLUS - Projetar a Visão Estruturada",
        "itens": [
            {
                "descricao_complex": "Em caso de engenharia reversa (extração de informações a partir de\nartefatos/fontes já existentes).",
                "complexidade": "Baixa",
                "id_item": 3590,
                "valor": 0.15,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Quando houver documentação disponível. Dentre aqueles artefatos previstos no PDSTI BB.",
                "complexidade": "Alta",
                "id_item": 3591,
                "valor": 0.6,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "4.4.6",
        "descricao_tarefa": "Alterar o Diagrama\nde Processamento Batch (DPB)",
        "plataforma": "VisionPlus",
        "disciplina": 4,
        "id_tarefa": 2007,
        "uni_medida": "Por módulo de processament o"
    },
    {
        "atividade": "4.4    Atividade: VisionPLUS - Projetar a Visão Estruturada",
        "itens": [
            {
                "descricao_complex": "Campos relacionados na “Declaração de parâmetros de entrada e saída” ou “Declaração de métodos da Interface (Projetos\nOrientados a Objetos)”.",
                "complexidade": "N/A",
                "id_item": 3592,
                "valor": 1.3,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "4.4.7",
        "descricao_tarefa": "Especificar a Interface (ESI)",
        "plataforma": "VisionPlus",
        "disciplina": 4,
        "id_tarefa": 2008,
        "uni_medida": "Por grupo de até 20 campos/métod os"
    },
    {
        "atividade": "4.4    Atividade: VisionPLUS - Projetar a Visão Estruturada",
        "itens": [
            {
                "descricao_complex": "Campos relacionados na “Declaração de parâmetros de entrada e saída” ou “Declaração de\nmétodos da Interface (Projetos Orientados a Objetos)”.",
                "complexidade": "N/A",
                "id_item": 3593,
                "valor": 0.6,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "4.4.8",
        "descricao_tarefa": "Alterar a Especificação da Interface (ESI)",
        "plataforma": "VisionPlus",
        "disciplina": 4,
        "id_tarefa": 2009,
        "uni_medida": "Por grupo de até 20 campos/métod os"
    },
    {
        "atividade": "4.4    Atividade: VisionPLUS - Projetar a Visão Estruturada",
        "itens": [
            {
                "descricao_complex": "Tela com a quantidade de até 10 (dez) dos itens de complexidade abaixo:\n- Regras de apresentação*;\n- Regras de tratamento de exceção*;\n- Itens de controle*.\n*Conforme artefato relacionado no PDSTI",
                "complexidade": "Baixa",
                "id_item": 3594,
                "valor": 1.3,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Tela com a quantidade de 11 (onze) a 20 (vinte) dos itens de complexidade listados abaixo:\n- Regras de apresentação*;                                         - Regras de tratamento de exceção*;\n- Itens de controle*.\n*Conforme artefato relacionado no PDSTI",
                "complexidade": "Média",
                "id_item": 3595,
                "valor": 2.5,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Tela com a quantidade mais de 20 (vinte) dos itens de complexidade listados abaixo:\n- Regras de apresentação*;\n- Regras de tratamento de exceção*;\n- Itens de controle*.\n*Conforme artefato relacionado no PDSTI",
                "complexidade": "Alta",
                "id_item": 3596,
                "valor": 5.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "4.4.9",
        "descricao_tarefa": "Especificar a Tela (EST)\nTotal/Parcial\n(A solicitação de especificação do componente poderá ser global ou das partes solicitadas pelo demandante)",
        "plataforma": "VisionPlus",
        "disciplina": 4,
        "id_tarefa": 2010,
        "uni_medida": "Por Tela"
    },
    {
        "atividade": "4.4    Atividade: VisionPLUS - Projetar a Visão Estruturada",
        "itens": [
            {
                "descricao_complex": "Tela com a quantidade de até 10 (dez) dos itens de complexidade abaixo:\n- Regras de apresentação*;\n- Regras de tratamento de exceção*;\n- Itens de controle*.\n*Conforme artefato relacionado no PDSTI",
                "complexidade": "Baixa",
                "id_item": 3597,
                "valor": 0.6,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Tela com a quantidade de 11 (onze) a 20 (vinte) dos itens de complexidade listados abaixo:\n- Regras de apresentação*;\n- Regras de tratamento de exceção*;\n- Itens de controle*.\n*Conforme artefato relacionado no PDSTI",
                "complexidade": "Média",
                "id_item": 3598,
                "valor": 1.3,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Tela com a quantidade mais de 20 (vinte) dos itens de complexidade listados abaixo:                                    - Regras de apresentação*;\n- Regras de tratamento de exceção*;\n- Itens de controle*.\n*Conforme artefato relacionado no PDSTI",
                "complexidade": "Alta",
                "id_item": 3599,
                "valor": 2.5,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "4.4.10",
        "descricao_tarefa": "Alterar a Especificação de Tela (EST)\nTotal/Parcial\n(A solicitação de especificação do componente poderá ser global ou das partes solicitadas pelo demandante)",
        "plataforma": "VisionPlus",
        "disciplina": 4,
        "id_tarefa": 2011,
        "uni_medida": "Por Tela"
    },
    {
        "atividade": "4.4    Atividade: VisionPLUS - Projetar a Visão Estruturada",
        "itens": [
            {
                "descricao_complex": "Componente com a quantidade de até 10 (dez) dos itens de complexidade abaixo:\n- Chamadas a componentes*;\n- Parâmetros de entrada do componente*;\n- Tabelas utilizadas pelo componente*;\n- Arquivos utilizados pelo componente*;\n*Conforme artefato relacionado no PDSTI BB",
                "complexidade": "Baixa",
                "id_item": 3600,
                "valor": 5.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Componente com a quantidade de 11 (onze) a 20 (vinte) dos itens de complexidade listados abaixo:\n- Chamadas a componentes*;\n- Parâmetros de entrada do componente*;\n- Tabelas utilizadas pelo componente*;\n- Arquivos utilizados pelo componente*;\n*Conforme artefato relacionado no PDSTI BB",
                "complexidade": "Média",
                "id_item": 3601,
                "valor": 10.5,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Componente com a quantidade mais de 20 (vinte) dos itens de complexidade listados abaixo:\n- Chamadas a componentes*;\n- Parâmetros de entrada do componente*;\n- Tabelas utilizadas pelo componente*;\n- Arquivos utilizados pelo componente*;\n*Conforme artefato relacionado no PDSTI BB",
                "complexidade": "Alta",
                "id_item": 3602,
                "valor": 21.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "4.4.11",
        "descricao_tarefa": "Especificar um componente (ESC)\nTotal/Parcial (a solicitação de especificação poderá ser de todo o componente ou das alterações das partes solicitadas)",
        "plataforma": "VisionPlus",
        "disciplina": 4,
        "id_tarefa": 2012,
        "uni_medida": "Por artefato"
    },
    {
        "atividade": "4.4    Atividade: VisionPLUS - Projetar a Visão Estruturada",
        "itens": [
            {
                "descricao_complex": "Componente com a quantidade de até 10 (dez) dos itens de complexidade abaixo:\n- Chamadas a componentes*;\n- Parâmetros de entrada do componente*;\n- Tabelas utilizadas pelo componente*;\n- Arquivos utilizados pelo componente*;\n*Conforme artefato relacionado no PDSTI BB",
                "complexidade": "Baixa",
                "id_item": 3603,
                "valor": 2.5,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Componente com a quantidade de 11 (onze) a 20 (vinte) dos itens de complexidade listados abaixo:\n- Chamadas a componentes*;\n- Parâmetros de entrada do componente*;\n- Tabelas utilizadas pelo componente*;\n- Arquivos utilizados pelo componente*;\n*Conforme artefato relacionado no PDSTI BB",
                "complexidade": "Média",
                "id_item": 3604,
                "valor": 5.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Componente com a quantidade mais de 20 (vinte) dos itens de complexidade listados abaixo:\n- Chamadas a componentes*;                                     - Parâmetros de entrada do componente*;\n- Tabelas utilizadas pelo componente*;\n- Arquivos utilizados pelo componente*;\n*Conforme artefato relacionado no PDSTI BB",
                "complexidade": "Alta",
                "id_item": 3605,
                "valor": 10.5,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "4.4.12",
        "descricao_tarefa": "Alt. especificação de componente (ESC)\nTotal/Parcial (a solicitação de especificação poderá ser todo componente ou das alterações das partes solicitadas)",
        "plataforma": "VisionPlus",
        "disciplina": 4,
        "id_tarefa": 2013,
        "uni_medida": "Por artefato"
    },
    {
        "atividade": "4.4    Atividade: VisionPLUS - Projetar a Visão Estruturada",
        "itens": [
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 3606,
                "valor": 0.3,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "4.4.13",
        "descricao_tarefa": "Elaborar o Diagrama de Transição de Estados (DTE)",
        "plataforma": "VisionPlus",
        "disciplina": 4,
        "id_tarefa": 2014,
        "uni_medida": "Por transição"
    },
    {
        "atividade": "4.4    Atividade: VisionPLUS - Projetar a Visão Estruturada",
        "itens": [
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 3607,
                "valor": 0.15,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "4.4.14",
        "descricao_tarefa": "Alterar o Diagrama de Transição de Estados (DTE)",
        "plataforma": "VisionPlus",
        "disciplina": 4,
        "id_tarefa": 2015,
        "uni_medida": "Por transição"
    },
    {
        "atividade": "4.5    Atividade: Validação de Caminho de Acesso",
        "itens": [
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 3608,
                "valor": 1.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "4.5.1",
        "descricao_tarefa": "Criação de índice primário",
        "plataforma": {},
        "disciplina": 4,
        "id_tarefa": 2016,
        "uni_medida": "Por índice"
    },
    {
        "atividade": "4.5    Atividade: Validação de Caminho de Acesso",
        "itens": [
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 3609,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "4.5.2",
        "descricao_tarefa": "Criação de índice secundário",
        "plataforma": {},
        "disciplina": 4,
        "id_tarefa": 2017,
        "uni_medida": "Por índice"
    },
    {
        "atividade": "4.6    Atividade: Criação de Termos no Glossário Corporativos de Termos",
        "itens": [
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 3610,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "4.6.1",
        "descricao_tarefa": "Criação de Termo em\nportuguês",
        "plataforma": {},
        "disciplina": 4,
        "id_tarefa": 2018,
        "uni_medida": "Por termo"
    },
    {
        "atividade": "4.6    Atividade: Criação de Termos no Glossário Corporativos de Termos",
        "itens": [
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 3611,
                "valor": 1.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "4.6.2",
        "descricao_tarefa": "Alteração ou atualização de\ntermo em português",
        "plataforma": {},
        "disciplina": 4,
        "id_tarefa": 2019,
        "uni_medida": "Por termo"
    },
    {
        "atividade": "4.6    Atividade: Criação de Termos no Glossário Corporativos de Termos",
        "itens": [
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 3612,
                "valor": 3.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "4.6.3",
        "descricao_tarefa": "Criação de termo em língua\nestrangeira",
        "plataforma": {},
        "disciplina": 4,
        "id_tarefa": 2020,
        "uni_medida": "Por termo"
    },
    {
        "atividade": "4.6    Atividade: Criação de Termos no Glossário Corporativos de Termos",
        "itens": [
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 3613,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "4.6.4",
        "descricao_tarefa": "Alteração ou atualização de\ntermo em língua estrangeira",
        "plataforma": {},
        "disciplina": 4,
        "id_tarefa": 2021,
        "uni_medida": "Por termo"
    },
    {
        "atividade": "4.7    Atividade: Modelagem estatística",
        "itens": [
            {
                "descricao_complex": "Extração de dados corporativos para preparação. Ingerir  dados  de  bases  de  dados  da  arquitetura de Big Data\nEntrega/Repositório:             tabela             destino disponibilizada   no   ambiente   de   Big   Data   e identificada na OF (schema e nome da tabela).",
                "complexidade": "N/A",
                "id_item": 3614,
                "valor": 8.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "4.7.1",
        "descricao_tarefa": "Realizar extração e ingestão de dados internos",
        "plataforma": {},
        "disciplina": 4,
        "id_tarefa": 2022,
        "uni_medida": "Por tabela destino"
    },
    {
        "atividade": "4.7    Atividade: Modelagem estatística",
        "itens": [
            {
                "descricao_complex": "Extração de dados de bases externas e ingestão dos mesmos nas bases de dados da arquitetura de Big Data.\nEntrega/Repositório:             tabela             destino disponibilizada   no   ambiente   de   Big   Data   e identificada na OF (schema e nome da tabela).",
                "complexidade": "N/A",
                "id_item": 3615,
                "valor": 16.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "4.7.2",
        "descricao_tarefa": "Realizar extração e ingestão de dados externos (Webscraping)",
        "plataforma": {},
        "disciplina": 4,
        "id_tarefa": 2023,
        "uni_medida": "Por tabela destino"
    },
    {
        "atividade": "4.7    Atividade: Modelagem estatística",
        "itens": [
            {
                "descricao_complex": "Identificação   do   tipo   de   distribuição,   dados faltantes (missing values) e pontos fora da curva (outliers),   domínios,   correlação   e   matriz   de correlação,   univariada,   bivariada   e   gráficos. Identificar quais as variáveis com maior poder de predição.\nEntrega/Repositório: relatório contendo os dados acima, anexado na OF.",
                "complexidade": "N/A",
                "id_item": 3616,
                "valor": 24.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "4.7.3",
        "descricao_tarefa": "Realizar análise descritiva",
        "plataforma": {},
        "disciplina": 4,
        "id_tarefa": 2024,
        "uni_medida": "Por Relatório"
    },
    {
        "atividade": "4.7    Atividade: Modelagem estatística",
        "itens": [
            {
                "descricao_complex": "Realizar   tratamento   de   variáveis   com   dados faltantes para inserção de dados.\nPadronização   e   Normalização    de   dados    – descrever   a   regra   para   padronização   e/ou normalização de dados. Entrega/Repositório:   relatório   com   as   regras descritas, anexado na OF.",
                "complexidade": "N/A",
                "id_item": 3617,
                "valor": 16.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "4.7.4",
        "descricao_tarefa": "Realizar análise para inserção de dados",
        "plataforma": {},
        "disciplina": 4,
        "id_tarefa": 2025,
        "uni_medida": "Por Relatório"
    },
    {
        "atividade": "4.7    Atividade: Modelagem estatística",
        "itens": [
            {
                "descricao_complex": "Preparação de dados para modelagem.\nEntrega/Repositório:   tabela   disponibilizada   em banco  de  dados  e  identificada  na  OF  (URL  de conexão ao banco, schema e nome da tabela).",
                "complexidade": "N/A",
                "id_item": 3618,
                "valor": 16.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "4.7.5",
        "descricao_tarefa": "Construir base para treinamento",
        "plataforma": {},
        "disciplina": 4,
        "id_tarefa": 2026,
        "uni_medida": "Por tabela"
    },
    {
        "atividade": "4.7    Atividade: Modelagem estatística",
        "itens": [
            {
                "descricao_complex": "Selecionar  e  aplicar  técnicas  de  mineração  de dados  apropriadas,  dependendo  dos  objetivos identificados.      Avaliação      da      modelagem. Construção   de   métricas   para   avaliação   dos modelos criados. Out of Time.\nEntrega/Repositório:   código   fonte   do   modelo preditivo  armazenado  nos  repositórios  do banco e  referenciados  na  OF  (URL  para  acesso  ao\nrepositório,   local   e   nome   do   arquivo   com   o código fonte do modelo).",
                "complexidade": "N/A",
                "id_item": 3619,
                "valor": 16.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "4.7.6",
        "descricao_tarefa": "Realizar modelagem",
        "plataforma": {},
        "disciplina": 4,
        "id_tarefa": 2027,
        "uni_medida": "Por código fonte"
    },
    {
        "atividade": "5.1    Atividade: Mapas",
        "itens": [
            {
                "descricao_complex": "Mapas que não contenham itens de complexidade listado no próximo nível de complexidade.\nUm objeto implementando as opções de um menu é um exemplo de um mapa de\ncomplexidade baixa.",
                "complexidade": "Baixa",
                "id_item": 3620,
                "valor": 1.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Mapas que contenham um ou mais itens de complexidade abaixo:\n- Mais de 20 (vinte) variáveis com o tipo e o tamanho definidos. Exceto, os itens de grupo;\n- Tabelas e/ou arrays tridimensionais ou acima;\n- Dimensões acima das convencionais (23x79);\n- Código interno (dentro do mapa); (Orientação: evitar esta pratica de codificação. Item de complexidade mantido em função do legado);\n- Modo “Report”;",
                "complexidade": "Média",
                "id_item": 3621,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "- Mapa BMS/CICS;\n- Apresentação de gráficos (barras, círculos, etc.);",
                "complexidade": "Alta",
                "id_item": 3622,
                "valor": 12.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.1.1",
        "descricao_tarefa": "Criação de Mapa",
        "plataforma": "Mainframe",
        "disciplina": 5,
        "id_tarefa": 2028,
        "uni_medida": "Por objeto"
    },
    {
        "atividade": "5.1    Atividade: Mapas",
        "itens": [
            {
                "descricao_complex": "Mapas que não contenham itens de complexidade listados no próximo nível de complexidade.\nUm objeto implementando as opções de um menu é um exemplo de um mapa de complexidade baixa.",
                "complexidade": "Baixa",
                "id_item": 3623,
                "valor": 0.5,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Mapas que contenham um ou mais itens de complexidade abaixo:\n- Mais de 20 (vinte) variáveis com o tipo e o tamanho definidos. Exceto, os itens de grupo;\n- Tabelas e/ou arrays tridimensionais ou acima;\n- Dimensões acima das convencionais (23x79);\n- Código interno (dentro do mapa); (Orentação: evitar esta pratica de codificação. Item de complexidade mantido em função do legado);\n- Modo “Report”;",
                "complexidade": "Média",
                "id_item": 3624,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "- Mapas BMS/CICS;\n- Apresentação de gráficos (barras, círculos, etc.);",
                "complexidade": "Alta",
                "id_item": 3625,
                "valor": 6.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.1.2",
        "descricao_tarefa": "Alteração de Mapa",
        "plataforma": "Mainframe",
        "disciplina": 5,
        "id_tarefa": 2029,
        "uni_medida": "Por objeto"
    },
    {
        "atividade": "5.1    Atividade: Mapas",
        "itens": [
            {
                "descricao_complex": "Em caso de alterações repetitivas Ficará a critério, do demandante, decidir\nqual a forma de orçamento, por pacote ou unitário, em caso de alterações repetitivas em objetos.",
                "complexidade": "N/A",
                "id_item": 3626,
                "valor": 8.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.1.3",
        "descricao_tarefa": "Alteração (pacote de Mapas)",
        "plataforma": "Mainframe",
        "disciplina": 5,
        "id_tarefa": 2030,
        "uni_medida": "Por pacote de 5 mapas"
    },
    {
        "atividade": "5.2    Atividade: Áreas de dados (externas)",
        "itens": [
            {
                "descricao_complex": "Áreas que contenham até 20 (vinte) variáveis com o tipo e o tamanho definidos.\nExceto, os itens de grupo;",
                "complexidade": "Baixa",
                "id_item": 3627,
                "valor": 1.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Áreas que contenham mais de 20 (vinte) variáveis com o\ntipo e o tamanho definidos. Exceto, os itens de grupo;",
                "complexidade": "Alta",
                "id_item": 3628,
                "valor": 3.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.2.1",
        "descricao_tarefa": "Criação de área de dados (externas)\n(Book, Local, Global, Parameter)",
        "plataforma": "Mainframe",
        "disciplina": 5,
        "id_tarefa": 2031,
        "uni_medida": "Por objeto"
    },
    {
        "atividade": "5.2    Atividade: Áreas de dados (externas)",
        "itens": [
            {
                "descricao_complex": "Áreas que contenham até 20 (vinte) variáveis com o tipo e o tamanho definidos.\nExceto, os itens de grupo;",
                "complexidade": "Baixa",
                "id_item": 3629,
                "valor": 0.5,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Áreas que contenham mais de 20 (vinte) variáveis com o tipo e o tamanho definidos. Exceto, os itens de grupo;",
                "complexidade": "Alta",
                "id_item": 3630,
                "valor": 1.5,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.2.2",
        "descricao_tarefa": "Alteração de área de dados (externas)\n(Book, Local, Global, Parameter)",
        "plataforma": "Mainframe",
        "disciplina": 5,
        "id_tarefa": 2032,
        "uni_medida": "Por objeto"
    },
    {
        "atividade": "5.2    Atividade: Áreas de dados (externas)",
        "itens": [
            {
                "descricao_complex": "Ficará a critério, do demandante, decidir qual a forma de orçamento, por pacote ou unitário, em caso de alterações repetitivas em\nobjetos.",
                "complexidade": "N/A",
                "id_item": 3631,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.2.3",
        "descricao_tarefa": "Alteração\n(pacote de áreas de dados externas)",
        "plataforma": "Mainframe",
        "disciplina": 5,
        "id_tarefa": 2033,
        "uni_medida": "Por pacote de até 5 objetos"
    },
    {
        "atividade": "5.3    Atividade: Cobol e Natural",
        "itens": [
            {
                "descricao_complex": "Objetos com a quantidade de até 30 (trinta) dos itens de complexidade abaixo:\n- Arquivos utilizados pelo objeto (por arquivo);\n- Testes condicionais (por teste - IF e WHEN);\n- Chamadas a objetos (por chamada);\n- Instruções SQL/Adabas (por instrução);\n- Array (por array);\n- Comandos CICS – EXEC CICS (por comando).",
                "complexidade": "Baixa",
                "id_item": 3632,
                "valor": 10.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Objetos com a quantidade de 31 (trinta e um) a 80 (oitenta) dos itens de complexidade listados abaixo:\n- Arquivos utilizados pelo objeto (por arquivo);\n- Testes condicionais (por teste - IF e WHEN);\n- Chamadas a objetos (por chamada);\n- Instruções SQL/Adabas (por instrução);\n- Array (por array);\n- Comandos CICS – EXEC CICS (por comando).",
                "complexidade": "Média",
                "id_item": 3633,
                "valor": 20.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Objetos com a quantidade superior a 80 (oitenta) dos itens de complexidade abaixo:\n- Arquivos utilizados pelo objeto (por arquivo);\n- Testes condicionais (por teste - IF e WHEN);\n- Chamadas a objetos (por chamada);\n- Instruções SQL/Adabas (por instrução);\n- Array (por array);\n- Comandos CICS – EXEC CICS (por comando).",
                "complexidade": "Alta",
                "id_item": 3634,
                "valor": 30.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.3.1",
        "descricao_tarefa": "Criação de Objetos Cobol (Programa, Sub- rotina e Copy)",
        "plataforma": "Mainframe",
        "disciplina": 5,
        "id_tarefa": 2034,
        "uni_medida": "Por objeto"
    },
    {
        "atividade": "5.3    Atividade: Cobol e Natural",
        "itens": [
            {
                "descricao_complex": "Objetos com a quantidade de até 30 (trinta) dos itens de complexidade abaixo:\n- Arquivos utilizados pelo objeto (por arquivo);\n- Testes condicionais (por teste  - IF e WHEN);\n- Chamadas a objetos (por chamada);\n- Instruções SQL/Adabas (por instrução);\n- Array (por array);\n- Comandos CICS – EXEC CICS (por comando).",
                "complexidade": "Baixa",
                "id_item": 3635,
                "valor": 5.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Objetos com a quantidade de 31 (trinta e um) a 80 (oitenta) dos itens de complexidade listados abaixo:\n- Arquivos utilizados pelo objeto (por arquivo);\n- Testes condicionais (por teste - IF e WHEN);\n- Chamadas a objetos (por chamada);\n- Instruções SQL/Adabas (por instrução);\n- Array (por array);\n- Comandos CICS – EXEC CICS (por comando).",
                "complexidade": "Média",
                "id_item": 3636,
                "valor": 10.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Objetos com a quantidade superior a 80 (oitenta) dos itens de complexidade abaixo:\n- Arquivos utilizados pelo objeto (por arquivo);\n- Testes condicionais (por teste - IF e WHEN);\n- Chamadas a objetos (por chamada);\n- Instruções SQL/Adabas (por instrução);\n- Array (por array);\n- Comandos CICS – EXEC CICS (por comando).",
                "complexidade": "Alta",
                "id_item": 3637,
                "valor": 15.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.3.2",
        "descricao_tarefa": "Alteração de Objetos Cobol\n(Programa, Sub-rotina e Copy)",
        "plataforma": "Mainframe",
        "disciplina": 5,
        "id_tarefa": 2035,
        "uni_medida": "Por objeto"
    },
    {
        "atividade": "5.3    Atividade: Cobol e Natural",
        "itens": [
            {
                "descricao_complex": "Ficará a critério, do demandante, decidir qual a forma\nde orçamento, por pacote ou unitário, em caso de alterações repetitivas em objetos.",
                "complexidade": "N/A",
                "id_item": 3638,
                "valor": 35.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.3.3",
        "descricao_tarefa": "Alteração\n(pacote de Objetos Cobol)",
        "plataforma": "Mainframe",
        "disciplina": 5,
        "id_tarefa": 2036,
        "uni_medida": "Por pacote\nde até 5 objetos"
    },
    {
        "atividade": "5.3    Atividade: Cobol e Natural",
        "itens": [
            {
                "descricao_complex": "Objetos com a quantidade de até 30 (trinta) dos itens de complexidade abaixo:\n- Arquivos utilizados pelo objeto (por arquivo);\n- Testes condicionais (por teste – IF, WHEN e VALUE);\n- Chamadas a objetos (por chamada – CALL, CALLNAT E FETCH);\n- Instruções SQL/Adabas (por instrução);\n- Array (por array);\n- JCL dentro de programas ( por chamada - Exec).",
                "complexidade": "Baixa",
                "id_item": 3639,
                "valor": 10.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Objetos com a quantidade de 31 (trinta e um) a 80 (oitenta) dos itens de complexidade listados abaixo:\n- Arquivos utilizados pelo objeto (por arquivo);\n- Testes condicionais (por teste – IF, WHEN e VALUE);\n- Chamadas a objetos (por chamada – CALL, CALLNAT E FETCH);\n- Instruções SQL/Adabas (por instrução);\n- Array (por array);\n- JCL dentro de programas ( por chamada - Exec).",
                "complexidade": "Média",
                "id_item": 3640,
                "valor": 20.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Objetos com a quantidade superior a 80 (oitenta) dos itens de complexidade abaixo:\n- Arquivos utilizados pelo objeto (por arquivo);\n- Testes condicionais (por teste – IF, WHEN e VALUE);\n- Chamadas a objetos (por chamada – CALL, CALLNAT E FETCH);\n- Instruções SQL/Adabas (por instrução);\n- Array (por array);\n- JCL dentro de programas ( por chamada - Exec).",
                "complexidade": "Alta",
                "id_item": 3641,
                "valor": 30.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.3.4",
        "descricao_tarefa": "Criação de Objetos Natural (Programa,\nSubprograma, Sub- rotina, Helprotina, Copycode)",
        "plataforma": "Mainframe",
        "disciplina": 5,
        "id_tarefa": 2037,
        "uni_medida": "Por objeto"
    },
    {
        "atividade": "5.3    Atividade: Cobol e Natural",
        "itens": [
            {
                "descricao_complex": "Objetos com a quantidade de até 30 (trinta) dos itens de complexidade abaixo:\n- Arquivos utilizados pelo objeto (por arquivo);\n- Testes condicionais (por teste – IF, WHEN e VALUE);\n- Chamadas a objetos (por chamada – CALL, CALLNAT E FETCH);\n- Instruções SQL/Adabas (por instrução);\n- Array (por array);\n- JCL dentro de programas ( por chamada - Exec).",
                "complexidade": "Baixa",
                "id_item": 3642,
                "valor": 5.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Objetos com a quantidade de 31 (trinta e um) a 80 (oitenta) dos itens de complexidade listados abaixo:\n- Arquivos utilizados pelo objeto (por arquivo);\n- Testes condicionais (por teste – IF, WHEN e VALUE);\n- Chamadas a objetos (por chamada – CALL, CALLNAT E FETCH);\n- Instruções SQL/Adabas (por instrução);\n- Array (por array);\n- JCL dentro de programas ( por chamada - Exec).",
                "complexidade": "Média",
                "id_item": 3643,
                "valor": 10.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Objetos com a quantidade superior a 80 (oitenta) dos itens de complexidade abaixo:\n- Arquivos utilizados pelo objeto (por arquivo);\n- Testes condicionais (por teste – IF, WHEN e VALUE);\n- Chamadas a objetos (por chamada – CALL, CALLNAT E FETCH);\n- Instruções SQL/Adabas (por instrução);\n- Array (por array);\n- JCL dentro de programas ( por chamada - Exec).",
                "complexidade": "Alta",
                "id_item": 3644,
                "valor": 15.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.3.5",
        "descricao_tarefa": "Alteração de Objetos Natural (Programa, Subprograma, Sub- rotina, Helprotina, Copycode)",
        "plataforma": "Mainframe",
        "disciplina": 5,
        "id_tarefa": 2038,
        "uni_medida": "Por objeto"
    },
    {
        "atividade": "5.3    Atividade: Cobol e Natural",
        "itens": [
            {
                "descricao_complex": "Ficará a critério, do demandante, decidir qual a forma de\norçamento, por pacote ou unitário, em caso de alterações repetitivas em objetos.",
                "complexidade": "N/A",
                "id_item": 3645,
                "valor": 35.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.3.6",
        "descricao_tarefa": "Alteração (pacote de Objetos\nNatural)",
        "plataforma": "Mainframe",
        "disciplina": 5,
        "id_tarefa": 2039,
        "uni_medida": "Por pacote\nde até 5 objetos"
    },
    {
        "atividade": "5.3    Atividade: Cobol e Natural",
        "itens": [
            {
                "descricao_complex": "Entregável: nome do módulo/Nome do script de teste Ex.: STTS0001/TSTT0001",
                "complexidade": "N/A",
                "id_item": 3646,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.3.7",
        "descricao_tarefa": "Criação de Scripts T-REXX",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2040,
        "uni_medida": "Por script"
    },
    {
        "atividade": "5.4    Atividade: Job Control Language (JCL)",
        "itens": [
            {
                "descricao_complex": "Até 3 steps",
                "complexidade": "Muito Baixa",
                "id_item": 3647,
                "valor": 0.25,
                "componente": {},
                "quantidade": {},
                "id_complex": 1
            },
            {
                "descricao_complex": "Entre 4 e 5 steps",
                "complexidade": "Baixa",
                "id_item": 3648,
                "valor": 0.6,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Entre 6 e 99 steps",
                "complexidade": "Média",
                "id_item": 3649,
                "valor": 1.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Mais de 99 steps",
                "complexidade": "Alta",
                "id_item": 3650,
                "valor": 1.25,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.4.1",
        "descricao_tarefa": "Criação de Procedures",
        "plataforma": "Mainframe",
        "disciplina": 5,
        "id_tarefa": 2041,
        "uni_medida": "Por step"
    },
    {
        "atividade": "5.4    Atividade: Job Control Language (JCL)",
        "itens": [
            {
                "descricao_complex": "Até 3 steps",
                "complexidade": "Muito Baixa",
                "id_item": 3651,
                "valor": 0.15,
                "componente": {},
                "quantidade": {},
                "id_complex": 1
            },
            {
                "descricao_complex": "Entre 4 e 5 steps",
                "complexidade": "Baixa",
                "id_item": 3652,
                "valor": 0.3,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Entre 6 e 99 steps",
                "complexidade": "Média",
                "id_item": 3653,
                "valor": 0.5,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Mais de 99 steps",
                "complexidade": "Alta",
                "id_item": 3654,
                "valor": 0.65,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.4.2",
        "descricao_tarefa": "Alteração de Procedures",
        "plataforma": "Mainframe",
        "disciplina": 5,
        "id_tarefa": 2042,
        "uni_medida": "Por step"
    },
    {
        "atividade": "5.4    Atividade: Job Control Language (JCL)",
        "itens": [
            {
                "descricao_complex": "Ficará a critério, do demandante, decidir qual a forma de orçamento, por pacote ou unitário, em caso de alterações repetitivas em objetos.",
                "complexidade": "N/A",
                "id_item": 3655,
                "valor": 0.5,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.4.3",
        "descricao_tarefa": "Alteração (Pacote de Procedures)",
        "plataforma": "Mainframe",
        "disciplina": 5,
        "id_tarefa": 2043,
        "uni_medida": "Por pacote de até 5 steps"
    },
    {
        "atividade": "5.4    Atividade: Job Control Language (JCL)",
        "itens": [
            {
                "descricao_complex": "O objeto não possui “Providências Complementares – JOB”.",
                "complexidade": "Baixa",
                "id_item": 3656,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "O objeto possui “Providências Complementares\n– JOB “ até 10 steps.",
                "complexidade": "Média",
                "id_item": 3657,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "O objeto possui “Providências Complementares\n– JOB” com mais de 10 steps.",
                "complexidade": "Alta",
                "id_item": 3658,
                "valor": 8.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.4.4",
        "descricao_tarefa": "Criação de\nDoc. de procedure (DPC)",
        "plataforma": "Mainframe",
        "disciplina": 5,
        "id_tarefa": 2044,
        "uni_medida": "Por objeto"
    },
    {
        "atividade": "5.4    Atividade: Job Control Language (JCL)",
        "itens": [
            {
                "descricao_complex": "O objeto não possui “Providências Complementares – JOB”.",
                "complexidade": "Baixa",
                "id_item": 3659,
                "valor": 1.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "O objeto possui “Providências Complementares\n– JOB “ até 10 steps.",
                "complexidade": "Média",
                "id_item": 3660,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "O objeto possui “Providências Complementares\n– JOB” com mais de 10 steps.",
                "complexidade": "Alta",
                "id_item": 3661,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.4.5",
        "descricao_tarefa": "Alteração de\nDoc. de procedure (DPC)",
        "plataforma": "Mainframe",
        "disciplina": 5,
        "id_tarefa": 2045,
        "uni_medida": "Por objeto"
    },
    {
        "atividade": "5.4    Atividade: Job Control Language (JCL)",
        "itens": [
            {
                "descricao_complex": "Ficará a critério, do demandante, decidir qual a forma de orçamento, por pacote ou unitário, em caso de alterações repetitivas em objetos.",
                "complexidade": "N/A",
                "id_item": 3662,
                "valor": 10.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.4.6",
        "descricao_tarefa": "Alteração (Pacote de Doc. De procedure – DPC)",
        "plataforma": "Mainframe",
        "disciplina": 5,
        "id_tarefa": 2046,
        "uni_medida": "Por pacote de até 5 objetos"
    },
    {
        "atividade": "5.4    Atividade: Job Control Language (JCL)",
        "itens": [
            {
                "descricao_complex": "Não contém Balance Line, nem mais de 5 instruções internas.",
                "complexidade": "Baixa",
                "id_item": 3663,
                "valor": 0.5,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Balance Line OU mais de 5 instruções internas.",
                "complexidade": "Alta",
                "id_item": 3664,
                "valor": 1.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.4.7",
        "descricao_tarefa": "Criação de Cardlib/Sysin",
        "plataforma": "Mainframe",
        "disciplina": 5,
        "id_tarefa": 2047,
        "uni_medida": "Por objeto"
    },
    {
        "atividade": "5.4    Atividade: Job Control Language (JCL)",
        "itens": [
            {
                "descricao_complex": "Não contém Balance Line, nem mais de 5 instruções internas.",
                "complexidade": "Baixa",
                "id_item": 3665,
                "valor": 0.25,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Balance Line OU mais de 5 instruções internas.",
                "complexidade": "Alta",
                "id_item": 3666,
                "valor": 0.5,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.4.8",
        "descricao_tarefa": "Alteração de Cardlib/Sysin",
        "plataforma": "Mainframe",
        "disciplina": 5,
        "id_tarefa": 2048,
        "uni_medida": "Por objeto"
    },
    {
        "atividade": "5.4    Atividade: Job Control Language (JCL)",
        "itens": [
            {
                "descricao_complex": "Em caso de alterações repetitivas. Ficará a critério, do demandante, decidir qual a forma de\norçamento, por pacote ou unitário, em caso de alterações repetitivas em objetos.",
                "complexidade": "N/A",
                "id_item": 3667,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.4.9",
        "descricao_tarefa": "Alteração (Pacote de Cardlib/Sysin)",
        "plataforma": "Mainframe",
        "disciplina": 5,
        "id_tarefa": 2049,
        "uni_medida": "Por pacote de até 5 objetos"
    },
    {
        "atividade": "5.4    Atividade: Job Control Language (JCL)",
        "itens": [
            {
                "descricao_complex": "Até 3 steps",
                "complexidade": "Muito Baixa",
                "id_item": 3668,
                "valor": 0.25,
                "componente": {},
                "quantidade": {},
                "id_complex": 1
            },
            {
                "descricao_complex": "Entre 4 e 5 steps",
                "complexidade": "Baixa",
                "id_item": 3669,
                "valor": 0.6,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Entre 6 e 99 steps",
                "complexidade": "Média",
                "id_item": 3670,
                "valor": 1.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Mais de 99 steps",
                "complexidade": "Alta",
                "id_item": 3671,
                "valor": 1.25,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.4.10",
        "descricao_tarefa": "Criação de Job ou Job@",
        "plataforma": "Mainframe",
        "disciplina": 5,
        "id_tarefa": 2050,
        "uni_medida": "Por step"
    },
    {
        "atividade": "5.4    Atividade: Job Control Language (JCL)",
        "itens": [
            {
                "descricao_complex": "Até 3 steps",
                "complexidade": "Muito Baixa",
                "id_item": 3672,
                "valor": 0.15,
                "componente": {},
                "quantidade": {},
                "id_complex": 1
            },
            {
                "descricao_complex": "Entre 4 e 5 steps",
                "complexidade": "Baixa",
                "id_item": 3673,
                "valor": 0.3,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Entre 6 e 99 steps",
                "complexidade": "Média",
                "id_item": 3674,
                "valor": 0.5,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Mais de 99 steps",
                "complexidade": "Alta",
                "id_item": 3675,
                "valor": 0.65,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.4.11",
        "descricao_tarefa": "Alteração de Job ou Job@",
        "plataforma": "Mainframe",
        "disciplina": 5,
        "id_tarefa": 2051,
        "uni_medida": "Por step"
    },
    {
        "atividade": "5.4    Atividade: Job Control Language (JCL)",
        "itens": [
            {
                "descricao_complex": "Ficará a critério, do demandante, decidir qual a forma de orçamento, por pacote ou unitário, em caso de alterações repetitivas em objetos.",
                "complexidade": "N/A",
                "id_item": 3676,
                "valor": 0.5,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.4.12",
        "descricao_tarefa": "Alteração (Pacote de Job ou Job@)",
        "plataforma": "Mainframe",
        "disciplina": 5,
        "id_tarefa": 2052,
        "uni_medida": "Por pacote de até 5 steps"
    },
    {
        "atividade": "5.5    Atividade: Segurança",
        "itens": [
            {
                "descricao_complex": "Criação de programas Cobol ou Procedures para geração do LDIF para manter cadastro do usuário no AD ou LDAP",
                "complexidade": "N/A",
                "id_item": 3677,
                "valor": 10.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.5.1",
        "descricao_tarefa": "Active Directory/LDAP Criação de programas para manter cadastro do usuário",
        "plataforma": "Mainframe",
        "disciplina": 5,
        "id_tarefa": 2053,
        "uni_medida": "Por Programa ou\nProcedure"
    },
    {
        "atividade": "5.5    Atividade: Segurança",
        "itens": [
            {
                "descricao_complex": "Alteração de programas Cobol ou Procedures para geração do LDIF para manter cadastro do usuário no AD ou LDAP",
                "complexidade": "N/A",
                "id_item": 3678,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.5.2",
        "descricao_tarefa": "Active Directory/LDAP Alteração de programas\npara manter cadastro do usuário",
        "plataforma": "Mainframe",
        "disciplina": 5,
        "id_tarefa": 2054,
        "uni_medida": "Por Programa ou\nProcedure"
    },
    {
        "atividade": "5.5    Atividade: Segurança",
        "itens": [
            {
                "descricao_complex": "Criação de programas Cobol ou Procedures para geração do LDIF para manter as autorizações do usuário no AD ou LDAP",
                "complexidade": "N/A",
                "id_item": 3679,
                "valor": 10.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.5.3",
        "descricao_tarefa": "Active Directory/LDAP Criação de programas para manter as autorizações do usuário",
        "plataforma": "Mainframe",
        "disciplina": 5,
        "id_tarefa": 2055,
        "uni_medida": "Por Programa ou Procedure"
    },
    {
        "atividade": "5.5    Atividade: Segurança",
        "itens": [
            {
                "descricao_complex": "Alteração de programas Cobol ou Procedures para geração do LDIF para manter as autorizações do usuário no AD ou LDAP",
                "complexidade": "N/A",
                "id_item": 3680,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.5.4",
        "descricao_tarefa": "Active Directory/LDAP Alteração de programas\npara manter as autorizações do usuário",
        "plataforma": "Mainframe",
        "disciplina": 5,
        "id_tarefa": 2056,
        "uni_medida": "Por Programa ou Procedure"
    },
    {
        "atividade": "5.5    Atividade: Segurança",
        "itens": [
            {
                "descricao_complex": "Codificação em linguagem CARLA (linguagem de programação do zSecure) para extrair e validar dados do RACF e Z/OS na base do sistema corporativo de gerenciamento de acesso",
                "complexidade": "N/A",
                "id_item": 3681,
                "valor": 80.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.5.5",
        "descricao_tarefa": "Extrair e validar dados do RACF e Z/OS com o sistema corporativo de gerenciamento de acessos",
        "plataforma": "Mainframe",
        "disciplina": 5,
        "id_tarefa": 2057,
        "uni_medida": "Por Programa ou Procedure"
    },
    {
        "atividade": "5.5    Atividade: Segurança",
        "itens": [
            {
                "descricao_complex": "Criação de Programa ou Procedures para manter cadastro do usuário no RACF",
                "complexidade": "N/A",
                "id_item": 3682,
                "valor": 14.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.5.6",
        "descricao_tarefa": "Criação de Programa ou Procedures para manter cadastro do usuário no\nRACF",
        "plataforma": "Mainframe",
        "disciplina": 5,
        "id_tarefa": 2058,
        "uni_medida": "Por Programa ou Procedure"
    },
    {
        "atividade": "5.5    Atividade: Segurança",
        "itens": [
            {
                "descricao_complex": "Alteração de Programa ou Procedures para manter cadastro do usuário no RACF",
                "complexidade": "N/A",
                "id_item": 3683,
                "valor": 7.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.5.7",
        "descricao_tarefa": "Manter cadastro\ndo usuário no RACF",
        "plataforma": "Mainframe",
        "disciplina": 5,
        "id_tarefa": 2059,
        "uni_medida": "Por Programa ou Procedure"
    },
    {
        "atividade": "5.5    Atividade: Segurança",
        "itens": [
            {
                "descricao_complex": "Criação de Programa ou Procedures para manter as autorizações do usuário no RACF",
                "complexidade": "N/A",
                "id_item": 3684,
                "valor": 10.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.5.8",
        "descricao_tarefa": "Criar as autorizações do usuário no RACF",
        "plataforma": "Mainframe",
        "disciplina": 5,
        "id_tarefa": 2060,
        "uni_medida": "Por Programa ou Procedure"
    },
    {
        "atividade": "5.5    Atividade: Segurança",
        "itens": [
            {
                "descricao_complex": "Alteração de Programa ou Procedures para manter as autorizações do usuário no RACF",
                "complexidade": "N/A",
                "id_item": 3685,
                "valor": 5.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.5.9",
        "descricao_tarefa": "Alterar as autorizações do usuário no RACF",
        "plataforma": "Mainframe",
        "disciplina": 5,
        "id_tarefa": 2061,
        "uni_medida": "Por Programa ou Procedure"
    },
    {
        "atividade": "5.5    Atividade: Segurança",
        "itens": [
            {
                "descricao_complex": "Criação de Procedures com comandos RACF para extrair e validar dados dos usuários RACF na base do sistema corporativo de gerenciamento de acesso",
                "complexidade": "N/A",
                "id_item": 3686,
                "valor": 120.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.5.10",
        "descricao_tarefa": "Extrair dados dos usuários (e suas autorizações) no RACF e validá-los na base do\nsistema corporativo de gerenciamento de acesso",
        "plataforma": "Mainframe",
        "disciplina": 5,
        "id_tarefa": 2062,
        "uni_medida": "Por Programa ou Procedure"
    },
    {
        "atividade": "5.5    Atividade: Segurança",
        "itens": [
            {
                "descricao_complex": "Criação de Procedure com comandos ROSCOE para manter dados dos usuários",
                "complexidade": "N/A",
                "id_item": 3687,
                "valor": 42.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.5.11",
        "descricao_tarefa": "ROSCOE\nManter cadastro do usuário",
        "plataforma": "Mainframe",
        "disciplina": 5,
        "id_tarefa": 2063,
        "uni_medida": "Por Programa ou Procedure"
    },
    {
        "atividade": "5.6    Atividade: VisionPlus",
        "itens": [
            {
                "descricao_complex": "Objetos pertencentes ao pacote VisionPLUS, ou módulos Cobol relacionados a componentes do pacote VisionPlus.\nEm tais objetos, toda e qualquer alteração implica em testes que contemplem todos os componentes relacionados ao sistema “Cartão”, tendo em vista\nos riscos e a criticidade associados ao negócio.",
                "complexidade": "N/A",
                "id_item": 3688,
                "valor": 50.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.6.1",
        "descricao_tarefa": "Criação de Objeto (Programa, Sub-rotina, Copy)",
        "plataforma": "Mainframe",
        "disciplina": 5,
        "id_tarefa": 2064,
        "uni_medida": "Por objeto"
    },
    {
        "atividade": "5.6    Atividade: VisionPlus",
        "itens": [
            {
                "descricao_complex": "Objetos pertencentes ao pacote VisionPLUS, ou módulos Cobol relacionados a componentes do pacote VisionPlus.\nEm tais objetos, toda e qualquer alteração implica em testes que contemplem todos os componentes relacionados ao sistema “Cartão”, tendo em vista\nos riscos e a criticidade associados ao negócio.",
                "complexidade": "N/A",
                "id_item": 3689,
                "valor": 36.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.6.2",
        "descricao_tarefa": "Alteração de Objeto (Programa, Sub-rotina, Copy)",
        "plataforma": "Mainframe",
        "disciplina": 5,
        "id_tarefa": 2065,
        "uni_medida": "Por objeto"
    },
    {
        "atividade": "5.7    Atividade: DW e Analytics",
        "itens": [
            {
                "descricao_complex": "Sem versionamento e até 5 validações",
                "complexidade": "Baixa",
                "id_item": 3690,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Sem versionamento e mais de 5 validações",
                "complexidade": "Média",
                "id_item": 3691,
                "valor": 8.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Com versionamento",
                "complexidade": "Alta",
                "id_item": 3692,
                "valor": 16.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.7.1",
        "descricao_tarefa": "Construção do job ETL",
        "plataforma": "DW e Analytics",
        "disciplina": 5,
        "id_tarefa": 2066,
        "uni_medida": "Por job"
    },
    {
        "atividade": "5.7    Atividade: DW e Analytics",
        "itens": [
            {
                "descricao_complex": "Imputação de dados faltantes (missing values), por meio de consulta a outras bases",
                "complexidade": "N/A",
                "id_item": 3693,
                "valor": 1.0,
                "componente": "Fonte (tabela ou arquivo)",
                "quantidade": {},
                "id_complex": 6
            },
            {
                "descricao_complex": "Imputação de dados faltantes (missing values), por meio de consulta a outras bases",
                "complexidade": "N/A",
                "id_item": 3694,
                "valor": 1.0,
                "componente": "Variável normalizada\nnormalizada",
                "quantidade": {},
                "id_complex": 6
            },
            {
                "descricao_complex": "Imputação de dados faltantes (missing values), por meio de consulta a outras bases",
                "complexidade": "N/A",
                "id_item": 3695,
                "valor": 1.0,
                "componente": "Variável padronizada\npadronizada",
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.7.6",
        "descricao_tarefa": "Construção de job para geração de bases de dados para treinamento, validação e testes",
        "plataforma": "DW e Analytics",
        "disciplina": 5,
        "id_tarefa": 2067,
        "uni_medida": "Por job"
    },
    {
        "atividade": "5.7    Atividade: DW e Analytics",
        "itens": [
            {
                "descricao_complex": "Suporte técnico em tecnologias de\nBig Data (Spark, HDFS, SolR, HBase, Hive ou similiar).\nEntrega/Repositório: Requisição de Suporte Técnico (tarefa ALM ou similar) validada pelo solicitante descrevendo o contexto ou problema objeto da requisição, informado na OF.",
                "complexidade": "N/A",
                "id_item": 3696,
                "valor": 8.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.7.7",
        "descricao_tarefa": "Realizar suporte técnico em Analytics",
        "plataforma": "Big Data",
        "disciplina": 5,
        "id_tarefa": 2068,
        "uni_medida": "Por atendimento"
    },
    {
        "atividade": "5.7    Atividade: DW e Analytics",
        "itens": [
            {
                "descricao_complex": "Efetuar instalação e configuração inicial de serviços do ecossistema Big Data.\nEcossistema Big Data é o conjunto de recursos para tratar dados digitais em alto volume, alta variedade e alta velocidade.\nSão exemplos de tecnologias Big Data: armazenamento e processamento distribuídos (HDFS, YARN, Spark etc.), ferramentas de streaming (Kafka), bases de dados (Hive, HBase, MongoDB etc.) e linguagens Python, R, Scala, Java etc.), entre outras.\nEntrega/Repositório: Print de tela exibindo a interface do componente e log da instalação do componente anexados a OF (identificar servidor, nome do host ou IP e diretório da\ninstalação)",
                "complexidade": "N/A",
                "id_item": 3697,
                "valor": 16.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.7.8",
        "descricao_tarefa": "Instalar serviços/componentes",
        "plataforma": "Big Data",
        "disciplina": 5,
        "id_tarefa": 2069,
        "uni_medida": "Por serviço ou componente"
    },
    {
        "atividade": "5.7    Atividade: DW e Analytics",
        "itens": [
            {
                "descricao_complex": "Efetuar configuração adicional em serviços ativos do ecossistema Big Data.\nEntrega/Repositório: Print de tela exibindo as configurações alteradas na interface gráfica ou diff do arquivo de configuração (xml, sh, properties ou similiar) anexado na OF. Identificar\nservidor, nome do host ou IP, e diretório do arquivo de configuração alterado.",
                "complexidade": "N/A",
                "id_item": 3698,
                "valor": 8.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.7.9",
        "descricao_tarefa": "Configurar serviços/componentes",
        "plataforma": "Big Data",
        "disciplina": 5,
        "id_tarefa": 2070,
        "uni_medida": "Por serviço ou componente"
    },
    {
        "atividade": "5.7    Atividade: DW e Analytics",
        "itens": [
            {
                "descricao_complex": "Entrega/Repositório: Relatório contendo uma introdução / objetivo da pesquisa, o detalhamento dos\ntrabalhos e a conclusão dos estudos, anexado a OF.",
                "complexidade": "N/A",
                "id_item": 3699,
                "valor": 24.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.7.10",
        "descricao_tarefa": "Realizar pesquisa técnica de componentes",
        "plataforma": "Big Data",
        "disciplina": 5,
        "id_tarefa": 2071,
        "uni_medida": "Por Relatório"
    },
    {
        "atividade": "5.7    Atividade: DW e Analytics",
        "itens": [
            {
                "descricao_complex": "Elaborar plano de testes, gerar massa de dados, executar testes para até 2 cenários de testes.\nEntrega/Repositório: Plano de Teste e relatório com a análise dos testes executados, anexados\na OF.",
                "complexidade": "Baixa",
                "id_item": 3700,
                "valor": 24.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Elaborar plano de testes, gerar massa de dados, executar testes entre 3 e 5 cenários de testes.\nEntrega/ Repositório: Plano de Teste e relatório com a análise dos testes executados, anexados\na OF.",
                "complexidade": "Média",
                "id_item": 3701,
                "valor": 32.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Elaborar plano de testes, gerar massa de dados, executar testes para mais de 5 cenários de testes.\nEntrega/Repositório: Plano de Teste e relatório com a análise dos testes executados, anexados\na OF.",
                "complexidade": "Alta",
                "id_item": 3702,
                "valor": 40.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.7.11",
        "descricao_tarefa": "Executar testes",
        "plataforma": "Big Data",
        "disciplina": 5,
        "id_tarefa": 2072,
        "uni_medida": "Por Plano e Relatório de Teste"
    },
    {
        "atividade": "5.7    Atividade: DW e Analytics",
        "itens": [
            {
                "descricao_complex": "Entrega/Repositório: manual de instruções em forma de apresentação Power Point ou similar anexado a OF.",
                "complexidade": "N/A",
                "id_item": 3703,
                "valor": 16.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.7.12",
        "descricao_tarefa": "Elaborar manual de instruções",
        "plataforma": "Big Data",
        "disciplina": 5,
        "id_tarefa": 2073,
        "uni_medida": "Por assunto"
    },
    {
        "atividade": "5.7    Atividade: DW e Analytics",
        "itens": [
            {
                "descricao_complex": "Elaboração de roteiro contendo a descrição de comandos e imagens de telas correspondentes que devem guiar procedimentos de instalação e/ou configuração.\nEntrega/Repositório:    roteiro    armazenado    no repositório de controle de versão (Git ou similar) e  referenciado  na  OF  (endereço  do  repositório,\nlocal e nome do arquivo do roteiro).",
                "complexidade": "N/A",
                "id_item": 3704,
                "valor": 24.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.7.13",
        "descricao_tarefa": "Elaborar roteiro de instalação/configuração",
        "plataforma": "Big Data",
        "disciplina": 5,
        "id_tarefa": 2074,
        "uni_medida": "Por serviço ou componente"
    },
    {
        "atividade": "5.7    Atividade: DW e Analytics",
        "itens": [
            {
                "descricao_complex": "Desenvolver scriptsde automação.\nEntrega/Repositório:     script     armazenado     no repositório de controle de versão (Git ou similar) e  referenciado  na  OF  (endereço  do  repositório,\nlocal e nome do arquivo do script).",
                "complexidade": "N/A",
                "id_item": 3705,
                "valor": 24.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.7.14",
        "descricao_tarefa": "Elaborar script de automação",
        "plataforma": "Big Data",
        "disciplina": 5,
        "id_tarefa": 2075,
        "uni_medida": "Por Tarefa"
    },
    {
        "atividade": "5.7    Atividade: DW e Analytics",
        "itens": [
            {
                "descricao_complex": "Resolução de incidentes (RDI).\nEntrega/Repositório:     Incidente     resolvido     e finalizado  no  GSTI  e  registrado  na  OF  (número\ndo RDI).",
                "complexidade": "N/A",
                "id_item": 3706,
                "valor": 16.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.7.15",
        "descricao_tarefa": "Solucionar incidente em Big Data",
        "plataforma": "Big Data",
        "disciplina": 5,
        "id_tarefa": 2076,
        "uni_medida": "Por incidente"
    },
    {
        "atividade": "5.7    Atividade: DW e Analytics",
        "itens": [
            {
                "descricao_complex": "Elaboração de lista tabular com pelo menos 2 Colunas.\nEntrega/Repositório:  Arquivo  da  análise  (DXP,\nPBIX  ou  similar)  disponibilizado  no  repositório, com o endereço (link) informado na OF.",
                "complexidade": "N/A",
                "id_item": 3707,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.7.16",
        "descricao_tarefa": "Construir/alterar relatório utilizando ferramentas de visualização de dados (Ex: Spotfire ou similar)",
        "plataforma": "Análise e exploração de dados",
        "disciplina": 5,
        "id_tarefa": 2077,
        "uni_medida": "Por Relatório"
    },
    {
        "atividade": "5.7    Atividade: DW e Analytics",
        "itens": [
            {
                "descricao_complex": "Construção de elemento visual para representar dados.\nEntrega/Repositório:  Arquivo  da  análise  (DXP, PBIX  ou  similar)  disponibilizado  no  repositório com   o   endereço   (link)   informado   na   OF   e\nImagem   da   captura   de   tela   identificando   os gráficos criados anexada na OF.",
                "complexidade": "N/A",
                "id_item": 3708,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.7.17",
        "descricao_tarefa": "Construir/alterar gráfico utilizando ferramentas de visualização de dados\n(Ex: Spotfire ou similar)",
        "plataforma": "Análise e exploração de dados",
        "disciplina": 5,
        "id_tarefa": 2078,
        "uni_medida": "Por gráfico"
    },
    {
        "atividade": "5.7    Atividade: DW e Analytics",
        "itens": [
            {
                "descricao_complex": "Construção   de   indicador   em   forma   de   lista, medidor, filtros, seletores ou propriedades.\nEntrega/Repositório:  Arquivo  da  análise  (DXP, PBIX  ou  similar)  disponibilizado  no  repositório\ncom o endereço (link) informado na OF e com a identificação dos elementos descrita na OF.",
                "complexidade": "N/A",
                "id_item": 3709,
                "valor": 1.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.7.18",
        "descricao_tarefa": "Construir/alterar Indicador utilizando ferramentas de visualização de dados (Ex: Spotfire ou Similar)",
        "plataforma": "Análise e exploração de dados",
        "disciplina": 5,
        "id_tarefa": 2079,
        "uni_medida": "Por indicador"
    },
    {
        "atividade": "5.7    Atividade: DW e Analytics",
        "itens": [
            {
                "descricao_complex": "Construção de uma página ou aba contendo 2 ou mais gráficos ou indicadores.\nEntrega/Repositório:  Arquivo  da  análise  (DXP, PBIX  ou  similar)  disponibilizado  no  repositório com   o   endereço   (link)   informado   na   OF   e Imagem  da  captura  de  tela  identificando  cada\npágina ou aba criada, anexada na OF",
                "complexidade": "N/A",
                "id_item": 3710,
                "valor": 8.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.7.19",
        "descricao_tarefa": "Construir/alterar Dashboard utilizando ferramentas de visualização de dados (Ex: Spotfire ou similar)",
        "plataforma": "Análise e exploração de dados",
        "disciplina": 5,
        "id_tarefa": 2080,
        "uni_medida": "Por dashboard"
    },
    {
        "atividade": "5.7    Atividade: DW e Analytics",
        "itens": [
            {
                "descricao_complex": "Mapeamento   de   objetos   como   filtros,   joins, conexão   com   banco   de   dados,   tabelas   ou queries.              Entrega/Repositório:  Arquivo  da  análise  (DXP, PBIX   ou   Similar   OF   (URL   para   acesso   ao repositório,   local   e   nome   do   arquivo   com   o código   fonte   do   modelo)   disponibilizado   no repositório  com  o  endereço  (link)  informado  na\nOF e Identificação na OF de todos os elementos criados no relatório (nome e local no repositório).",
                "complexidade": "N/A",
                "id_item": 3711,
                "valor": 1.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.7.20",
        "descricao_tarefa": "Mapear Objeto de Dados",
        "plataforma": "Análise e exploração de dados",
        "disciplina": 5,
        "id_tarefa": 2081,
        "uni_medida": "Por objeto/tabela"
    },
    {
        "atividade": "5.7    Atividade: DW e Analytics",
        "itens": [
            {
                "descricao_complex": "Suporte na construção dos seguintes elementos: gráficos, indicadores, dashboards ou mapeamento de objetos. Entrega/Repositório:     Requisição     de     Suporte Técnico   (tarefa   ALM   ou   similar)   validada   pelo solicitante identificando o painel e o elemento (join, gráfico, filtro, etc)  objeto da  requisição,  informada\nna OF.",
                "complexidade": "N/A",
                "id_item": 3712,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.7.21",
        "descricao_tarefa": "Realizar suporte técnico",
        "plataforma": "Análise e exploração de dados",
        "disciplina": 5,
        "id_tarefa": 2082,
        "uni_medida": "Por requisição"
    },
    {
        "atividade": "5.7    Atividade: DW e Analytics",
        "itens": [
            {
                "descricao_complex": "Elaboração de documento contendo boas práticas em visualização de dados. Entrega/Repositório:           Documento           texto, apresentação  de  Slides  ou  artigo  em  plataforma web (wiki, blog, notícia), contendo a descrição das práticas  de  visualização  de  dados  anexados  ou\nreferenciados na OF (para artefatos web, fornecer a URL).",
                "complexidade": "N/A",
                "id_item": 3713,
                "valor": 8.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.7.22",
        "descricao_tarefa": "Documentar práticas em Visualização de Dados",
        "plataforma": "Análise e exploração de dados",
        "disciplina": 5,
        "id_tarefa": 2083,
        "uni_medida": "Por documento"
    },
    {
        "atividade": "5.7    Atividade: DW e Analytics",
        "itens": [
            {
                "descricao_complex": "Construção    de    função,    script    ou    métricas calculadas  em  linguagens  de  programação.  (Ex: Python, R, DAX, M, S+ e similares).\nEntrega/Repositório:   Arquivo   da   análise   (DXP, PBIX ou similar) disponibilizado no repositório com o endereço (link) informado na OF e identificação na  OF  das  funções  criadas  no  relatório  (nome  e\nelemento (aba/página/gráfico) onde foi utilizada).",
                "complexidade": "N/A",
                "id_item": 3714,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.7.23",
        "descricao_tarefa": "Construir/alterar funções, scripts ou métricas calculadas utilizadas em ferramentas de visualização de dados (Ex: Spotfire ou similar)",
        "plataforma": "Análise e exploração de dados",
        "disciplina": 5,
        "id_tarefa": 2084,
        "uni_medida": "Por função, script ou métrica"
    },
    {
        "atividade": "5.7    Atividade: DW e Analytics",
        "itens": [
            {
                "descricao_complex": "Avaliação e diagnóstico das estruturas de carga visando melhoria de performance do processo de carga/volume de dados carregados.\nEntrega/Repositório:   Print   do   antes/depois   do tempo  de  carregamento  ou  do  volume  de  dados carregado anexado na OF.",
                "complexidade": "N/A",
                "id_item": 3715,
                "valor": 6.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.7.24",
        "descricao_tarefa": "Análise de Performance",
        "plataforma": "Análise e exploração de dados",
        "disciplina": 5,
        "id_tarefa": 2085,
        "uni_medida": "Por documento ou análise"
    },
    {
        "atividade": "5.7    Atividade: DW e Analytics",
        "itens": [
            {
                "descricao_complex": "Efetuar configuração e instalação de software em containers. Entrega/Repositório:     Arquivo     Dockerfile     ou dockercompose  armazenados  em  repositório  e\nreferenciados   na   OF   (URL   para   acesso   ao repositório, local e nome do arquivo).",
                "complexidade": "N/A",
                "id_item": 3716,
                "valor": 16.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.7.25",
        "descricao_tarefa": "Construir ou alterar script para a criação de imagens de containers",
        "plataforma": "Web Analytics",
        "disciplina": 5,
        "id_tarefa": 2086,
        "uni_medida": "Por arquivo de script"
    },
    {
        "atividade": "5.7    Atividade: DW e Analytics",
        "itens": [
            {
                "descricao_complex": "Entrega/Repositório:   Relatório   contendo   uma introdução      /      objetivo      da      pesquisa,      o detalhamento  dos  trabalhos  e  a  conclusão  dos estudos, anexado na OF.",
                "complexidade": "N/A",
                "id_item": 3717,
                "valor": 24.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.7.26",
        "descricao_tarefa": "Realizar pesquisa técnica de componentes",
        "plataforma": "Web Analytics",
        "disciplina": 5,
        "id_tarefa": 2087,
        "uni_medida": "Por Relatório"
    },
    {
        "atividade": "5.7    Atividade: DW e Analytics",
        "itens": [
            {
                "descricao_complex": "Até 2 objetos/tabelas contidos/envolvidos na\nquery. Repositório: ALM-GenTI.",
                "complexidade": "Baixa",
                "id_item": 3718,
                "valor": 1.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "De 3 até 5 objetos/tabelas contidos/envolvidos\nna query. Repositório: ALM-GenTI.",
                "complexidade": "Média",
                "id_item": 3719,
                "valor": 3.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Acima de 6 objetos/tabelas contidos/envolvidos na query. Repositório: ALM-GenTI.",
                "complexidade": "Alta",
                "id_item": 3720,
                "valor": 5.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.7.27",
        "descricao_tarefa": "Elaborar query para Inteligência Artificial",
        "plataforma": "Negócios em Inteligência Artificial\n(NIA)",
        "disciplina": 5,
        "id_tarefa": 2088,
        "uni_medida": "Objeto/Tabela"
    },
    {
        "atividade": "5.7    Atividade: DW e Analytics",
        "itens": [
            {
                "descricao_complex": "Exploração ou modelagem de dados com objetivo de entender e verificar padrões nos dados. Dataset: Até 100MB\nEntrega: Código fonte utilizado para a exploração ou modelagem e dados e resultado do processamento em formato markdown/jupyter notebook  ou similar\ndisponibilizado repositório corporativo (Git ou similares).",
                "complexidade": "Baixa",
                "id_item": 3721,
                "valor": 52.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Exploração ou modelagem de dados com objetivo de entender e verificar padrões nos dados. Dataset: 101MB a 1GB dados.\nEntrega: Código fonte utilizado para a exploração ou modelagem e dados e resultado do processamento em formato markdown/jupyter notebook  ou similar disponibilizado repositório corporativo (Git ou\nsimilares).",
                "complexidade": "Média",
                "id_item": 3722,
                "valor": 86.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Exploração ou modelagem de dados com objetivo de entender e verificar padrões nos dados. Dataset: 1,01GB a 10GB dados.\nEntrega: Código fonte utilizado para a exploração ou modelagem e dados e resultado do processamento em formato markdown/jupyter notebook  ou similar disponibilizado repositório corporativo (Git ou similares).",
                "complexidade": "Alta",
                "id_item": 3723,
                "valor": 126.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            },
            {
                "descricao_complex": "Exploração ou modelagem de dados com objetivo de entender e verificar padrões nos dados. Dataset: mais de 10,01GB dados.\nEntrega: Código fonte utilizado para a exploração ou modelagem e dados e resultado do processamento em formato markdown/jupyter notebook  ou similar disponibilizado repositório corporativo (Git ou similares).",
                "complexidade": "Muito Alta",
                "id_item": 3724,
                "valor": 162.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 5
            }
        ],
        "tarefa": "5.7.28",
        "descricao_tarefa": "Realizar exploração ou modelagem de dados.",
        "plataforma": "Machine Learning",
        "disciplina": 5,
        "id_tarefa": 2089,
        "uni_medida": "Por Relatório"
    },
    {
        "atividade": "5.7    Atividade: DW e Analytics",
        "itens": [
            {
                "descricao_complex": "Criação de rotina/script de processamento de dados para treino, predição ou modelagem de dados.\nEntrega: Script disponibilizado no repositório corporativo (Git ou similares).",
                "complexidade": "Baixa",
                "id_item": 3725,
                "valor": 30.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Criação de rotina/script para processamento de grandes volumes de dados (mais de 500MB) para treino, predição ou modelagem de dados.\nExemplos: utilização processamentos parelelo ou em cluster, Apache Hive, Hadoop, etc.\nEntrega: Script disponibilizado no repositório corporativo (Git ou similares).",
                "complexidade": "Alta",
                "id_item": 3726,
                "valor": 54.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.7.29",
        "descricao_tarefa": "Pré-processamento de dados",
        "plataforma": "Machine Learning",
        "disciplina": 5,
        "id_tarefa": 2090,
        "uni_medida": "Por script"
    },
    {
        "atividade": "5.7    Atividade: DW e Analytics",
        "itens": [
            {
                "descricao_complex": "Pesquisa de arquiteturas e modelos de Machine Learning disponíveis para utilização. Trata-se de pesquisa e revisão bibliográfica de trabalhos científicos para entender a aplicabilidade de determinada técnica ao problema em questão. Também engloba os testes preliminares de aplicação desses trabalhos científicos, busca e\nvalidação de repositórios.",
                "complexidade": "N/A",
                "id_item": 3727,
                "valor": 180.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.7.30",
        "descricao_tarefa": "Pesquisa técnica de Modelos e Métodos",
        "plataforma": "Machine Learning",
        "disciplina": 5,
        "id_tarefa": 2091,
        "uni_medida": "Por Modelo Avaliado"
    },
    {
        "atividade": "5.7    Atividade: DW e Analytics",
        "itens": [
            {
                "descricao_complex": "Configuração/Parametrização do modelo e seu respectivo script de treino, teste ou predição, em modelos de baixa complexidade como: Regressões, SVM, SVC, KNN, Binary Trees e modelos similares.\nEntrega: Códigos fonte, scripts e arquivos de configuração disponibilizados no repositório\ncorporativo (Git ou similares).",
                "complexidade": "Baixa",
                "id_item": 3728,
                "valor": 50.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Configuração/Parametrização do modelo e seu respectivo script de treino, teste ou predição, em modelos de média complexidade como: Redes neurais simples densa, XGB, K-means, Random Forest e modelos similares.\nEntrega: Códigos fonte, scripts e arquivos de configuração disponibilizados no repositório corporativo (Git ou similares).",
                "complexidade": "Média",
                "id_item": 3729,
                "valor": 79.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Configuração/Parametrização do modelo e seu respectivo script de treino, teste ou predição, em modelos de alta complexidade como: Redes neurais com até 5 camadas e modelos similares.\nEntrega: Códigos fonte, scripts e arquivos de configuração disponibilizados no repositório\ncorporativo (Git ou similares).",
                "complexidade": "Alta",
                "id_item": 3730,
                "valor": 108.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            },
            {
                "descricao_complex": "Configuração/Parametrização do modelo e seu respectivo script de treino, teste ou predição, em modelos de muito alta complexidade como: Modelos de Deep Learning e modelos similares.\nEntrega: Códigos fonte, scripts e arquivos de configuração disponibilizados no repositório corporativo (Git ou similares).",
                "complexidade": "Muito Alta",
                "id_item": 3731,
                "valor": 146.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 5
            }
        ],
        "tarefa": "5.7.31",
        "descricao_tarefa": "Parametrização/Confi guração de Modelo",
        "plataforma": "Machine Learning",
        "disciplina": 5,
        "id_tarefa": 2092,
        "uni_medida": "Por modelo"
    },
    {
        "atividade": "5.7    Atividade: DW e Analytics",
        "itens": [
            {
                "descricao_complex": "Iteração de treinamento e avaliação de modelos de baixa complexidade como: Regressões, SVM, SVC, KNN, Binary Trees e modelos similares.\nEntrega: Binários do modelo treinado disponibilizados no ambiente de Big Data e identificados na OF (caminho e nome dos arquivos). Relatório de performance do modelo com métricas de precisão, acurácia, F1, tempo de execução, quantidade de épocas e quantidade de amostras disponibilizado no na\ntarefa do ALM ou similar.",
                "complexidade": "Baixa",
                "id_item": 3732,
                "valor": 52.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Iteração de treinamento e avaliação de modelos de média complexidade como: Redes neurais simples, XGB, K-means, Random Forest e modelos similares.\nEntrega: Binários do modelo treinado disponibilizados no ambiente de Big Data e identificados na OF (caminho e nome dos arquivos). Relatório de performance do modelo com métricas de precisão, acurácia, F1, tempo de execução, quantidade de épocas e\nquantidade de amostras disponibilizado no na tarefa do ALM ou similar.",
                "complexidade": "Média",
                "id_item": 3733,
                "valor": 82.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Iteração de treinamento e avaliação de modelos de alta complexidade como: Redes neurais profundas até 5 camadas e modelos similares.\nEntrega: Binários do modelo treinado disponibilizados no ambiente de Big Data e identificados na OF (caminho e nome dos arquivos). Relatório de performance do modelo com métricas de precisão, acurácia, F1, tempo de execução, quantidade de épocas e quantidade de amostras disponibilizado no na tarefa do ALM ou similar.",
                "complexidade": "Alta",
                "id_item": 3734,
                "valor": 111.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            },
            {
                "descricao_complex": "Iteração de treinamento e avaliação de modelos de muito alta complexidade como: Modelos de Deep Learning e modelos similares.\nEntrega: Binários do modelo treinado disponibilizados no ambiente de Big Data e identificados na OF (caminho e nome dos arquivos). Relatório de performance do modelo com métricas de precisão, acurácia, F1, tempo de execução, quantidade de épocas e quantidade de amostras disponibilizado no na\ntarefa do ALM ou similar.",
                "complexidade": "Muito Alta",
                "id_item": 3735,
                "valor": 140.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 5
            }
        ],
        "tarefa": "5.7.32",
        "descricao_tarefa": "Treinamento/Retreina mento de Modelo e Análise de Resultados",
        "plataforma": "Machine Learning",
        "disciplina": 5,
        "id_tarefa": 2093,
        "uni_medida": "Por Iteração de Treinamento"
    },
    {
        "atividade": "5.7    Atividade: DW e Analytics",
        "itens": [
            {
                "descricao_complex": "Sessão de planejamento de projeto com entendimento do problema a ser resolvido, definição de objetivos, estratégia de dados, definição da arquitetura de alto nível a ser utilizada, definição de métricas de perfomance do modelo, critérios de sucesso, planejamento de sprints/cronograma.\nRelatório do planejamento contendo os seguintes dados:\n     Definição do problema\n     Objetivo\n     Estratégia de dados\n     Modelo geral de arquitetura da solução\n     Critérios de sucesso\n     Métricas                                                             Entrega: relatório disponibilizado na tarefa do ALM ou similar.",
                "complexidade": "N/A",
                "id_item": 3736,
                "valor": 130.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.7.33",
        "descricao_tarefa": "Planejamento da solução",
        "plataforma": "Machine Learning",
        "disciplina": 5,
        "id_tarefa": 2094,
        "uni_medida": "Por Relatório"
    },
    {
        "atividade": "5.7    Atividade: DW e Analytics",
        "itens": [
            {
                "descricao_complex": "Processo de Rotular a base de dados manualmente ou corrigir a rotulação automática a fim de gerar base de treinamento ou validação de modelos de Machine Learning.\nEntrega: Banco de dados com os rótulos associados a cada registro/entrada de dados em formato de tabela para dados relacionais ou arquivo compactado quando for um banco não relacional como imagens, arquivos, vídeos ou áudios, disponibilizados no ambiente de Big Data e identificados na OF (caminho e nome dos arquivos).",
                "complexidade": "N/A",
                "id_item": 3737,
                "valor": 25.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.7.34",
        "descricao_tarefa": "Anotação de dados",
        "plataforma": "Machine Learning",
        "disciplina": 5,
        "id_tarefa": 2095,
        "uni_medida": "Por cada lote de 1000"
    },
    {
        "atividade": "5.7    Atividade: DW e Analytics",
        "itens": [
            {
                "descricao_complex": "Produzir materiais didáticos e códigos fonte  e realizar seção de oficina para nivelamento de conhecimento da equipe com detalhamento de arquiteturas/modelos de ML em formato hands- on e análise de códigos.\nEntrega: Materiais, códigos e exemplos disponibilizados no repositório corporativo (Git ou similares).",
                "complexidade": "N/A",
                "id_item": 3738,
                "valor": 270.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.7.35",
        "descricao_tarefa": "Realização de oficina sobre Machine Learning",
        "plataforma": "Machine Learning",
        "disciplina": 5,
        "id_tarefa": 2096,
        "uni_medida": "Por Sessão"
    },
    {
        "atividade": "5.8    Atividade: Assembler",
        "itens": [
            {
                "descricao_complex": "Objetos que não contenham itens de complexidade;",
                "complexidade": "Baixa",
                "id_item": 3739,
                "valor": 40.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Objetos que contenham um ou mais itens de complexidade:\n- tabelas e/ou arrays tridimensionais ou acima;\n- chamadas a outros programas/sub-rotinas;\n- mapeamento de áreas do sistema operacional (data areas)",
                "complexidade": "Média",
                "id_item": 3740,
                "valor": 80.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Objetos que contenham um ou mais itens de complexidade:\n- chamadas a SVCs;\n- execução de comandos TSO via IKJ;\n- manipulação de arquivos\n- interceptação de erros (ESTAE, SPIE, ESPIE)\n- tratamento de concorrência",
                "complexidade": "Alta",
                "id_item": 3741,
                "valor": 160.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.8.1",
        "descricao_tarefa": "Criação de Objetos Assembler (Sub-rotina)",
        "plataforma": "Assembler",
        "disciplina": 5,
        "id_tarefa": 2097,
        "uni_medida": "Por objeto"
    },
    {
        "atividade": "5.8    Atividade: Assembler",
        "itens": [
            {
                "descricao_complex": "Objetos que não contenham itens de complexidade;",
                "complexidade": "Baixa",
                "id_item": 3742,
                "valor": 24.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Objetos que contenham um ou mais itens de complexidade:\n- tabelas e/ou arrays tridimensionais ou acima;\n- chamadas a outros programas/sub-rotinas;\n- mapeamento de áreas do sistema operacional (data areas)",
                "complexidade": "Média",
                "id_item": 3743,
                "valor": 40.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Objetos que contenham um ou mais itens de complexidade:\n- chamadas a SVCs;\n- execução de comandos TSO via IKJ;\n- manipulação de arquivos\n- interceptação de erros (ESTAE, SPIE, ESPIE)\n- tratamento de concorrência",
                "complexidade": "Alta",
                "id_item": 3744,
                "valor": 80.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.8.2",
        "descricao_tarefa": "Alteração de Objetos Assembler (Sub-rotina)",
        "plataforma": "Assembler",
        "disciplina": 5,
        "id_tarefa": 2098,
        "uni_medida": "Por objeto"
    },
    {
        "atividade": "5.8    Atividade: Assembler",
        "itens": [
            {
                "descricao_complex": "Em caso de alterações repetitivas. Ficará a critério, do demandante, decidir qual a forma de orçamento, por pacote ou unitário, em caso de alterações repetitivas em objetos.",
                "complexidade": "N/A",
                "id_item": 3745,
                "valor": 16.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.8.3",
        "descricao_tarefa": "Alteração (pacote de Objetos\nAssembler)",
        "plataforma": "Assembler",
        "disciplina": 5,
        "id_tarefa": 2099,
        "uni_medida": "Por pacote de até 5 objetos"
    },
    {
        "atividade": "5.9    Atividade: SAS",
        "itens": [
            {
                "descricao_complex": "Até 2 tabelas e/ou até 8 campos utilizados.",
                "complexidade": "Baixa",
                "id_item": 3746,
                "valor": 6.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "De 3 a 4 tabelas e/ou de 8 até 12 campos utilizados",
                "complexidade": "Média",
                "id_item": 3747,
                "valor": 10.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Demais casos",
                "complexidade": "Alta",
                "id_item": 3748,
                "valor": 18.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.9.1",
        "descricao_tarefa": "Construção do job Guide",
        "plataforma": "SAS",
        "disciplina": 5,
        "id_tarefa": 2100,
        "uni_medida": "Por Job Guide"
    },
    {
        "atividade": "5.9    Atividade: SAS",
        "itens": [
            {
                "descricao_complex": "Até 2 tabelas e/ou até 8 campos utilizados.",
                "complexidade": "Baixa",
                "id_item": 3749,
                "valor": 3.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "De 3 a 4 tabelas e/ou de 8 até 12 campos utilizados",
                "complexidade": "Média",
                "id_item": 3750,
                "valor": 5.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Demais casos",
                "complexidade": "Alta",
                "id_item": 3751,
                "valor": 9.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.9.2",
        "descricao_tarefa": "Alteração de job Guide",
        "plataforma": "SAS",
        "disciplina": 5,
        "id_tarefa": 2101,
        "uni_medida": "Por Job Guide"
    },
    {
        "atividade": "5.9    Atividade: SAS",
        "itens": [
            {
                "descricao_complex": "Até 4 steps na Especificação Funcional",
                "complexidade": "Baixa",
                "id_item": 3752,
                "valor": 8.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Entre 5 e 8 steps na Especificação Funcional",
                "complexidade": "Média",
                "id_item": 3753,
                "valor": 16.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Demais casos",
                "complexidade": "Alta",
                "id_item": 3754,
                "valor": 24.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.9.3",
        "descricao_tarefa": "Construção do job DI",
        "plataforma": "SAS",
        "disciplina": 5,
        "id_tarefa": 2102,
        "uni_medida": "Por Job DI"
    },
    {
        "atividade": "5.9    Atividade: SAS",
        "itens": [
            {
                "descricao_complex": "Até 4 steps na Especificação Funcional",
                "complexidade": "Baixa",
                "id_item": 3755,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Entre 5 e 8 steps na Especificação Funcional",
                "complexidade": "Média",
                "id_item": 3756,
                "valor": 8.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Demais casos",
                "complexidade": "Alta",
                "id_item": 3757,
                "valor": 12.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.9.4",
        "descricao_tarefa": "Alteração de job DI",
        "plataforma": "SAS",
        "disciplina": 5,
        "id_tarefa": 2103,
        "uni_medida": "Por Job DI"
    },
    {
        "atividade": "5.9    Atividade: SAS",
        "itens": [
            {
                "descricao_complex": "Cada step no job (Join, Extract, Splitter, etc) no SAS Data Integration.",
                "complexidade": "N/A",
                "id_item": 3758,
                "valor": 0.3,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.9.5",
        "descricao_tarefa": "Especificação Técnica",
        "plataforma": "SAS",
        "disciplina": 5,
        "id_tarefa": 2104,
        "uni_medida": "Passos no job DI"
    },
    {
        "atividade": "5.9    Atividade: SAS",
        "itens": [
            {
                "descricao_complex": "Até 2 tabelas ou até 5 atributos",
                "complexidade": "Baixa",
                "id_item": 3759,
                "valor": 6.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "3 ou mais tabelas ou 6 ou mais atributos",
                "complexidade": "Alta",
                "id_item": 3760,
                "valor": 8.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.9.6",
        "descricao_tarefa": "Construção de Relatórios VA",
        "plataforma": "SAS",
        "disciplina": 5,
        "id_tarefa": 2105,
        "uni_medida": "Por Visão (Gráfico)"
    },
    {
        "atividade": "5.10  Atividade: Plataforma Distribuída",
        "itens": [
            {
                "descricao_complex": "Quantidade de até 20 dos itens de complexidade abaixo:\n- Aplicação de estilo (considerar evento único);\n- Aplicação de internacionalização (considerar evento único);\n- Variáveis tratadas (por variável);\n- Campos editáveis ou atualizáveis automaticamente via JavaScript ou Integração (por campo);\n- Aplicações de eventos por elemento na página (por evento em cada elemento) (Ex: JavaScript para validações, formatações, conversores, carregamento de dados ou acionamento de eventos nativos);\n- Tabelas/listas (por tabela/lista - Conta-se apenas os eventos relacionados a quantidade de colunas, quando houver; e no caso de listas apenas um evento por lista);\n- Chamadas externas à tela (por chamada) (Ex: Links, botões, etc.).\n- Utilização de recursos nativos (Ex.: acionamento de câmera, localização via GPS, calendário, acionamento gravador de voz,\netc.);",
                "complexidade": "Baixa",
                "id_item": 3761,
                "valor": 8.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Quantidade de 21 até 50 dos itens de complexidade abaixo:\n- Aplicação de estilo (considerar evento único);\n- Aplicação de internacionalização (considerar evento único);\n- Variáveis tratadas (por variável);\n- Campos editáveis ou atualizáveis automaticamente via JavaScript ou Integração (por campo);\n- Aplicações de eventos por elemento na página (por evento em cada elemento) (Ex: JavaScript para validações, formatações, conversores, carregamento de dados ou acionamento de eventos nativos);\n- Tabelas/listas (por tabela/lista - Conta-se apenas os eventos relacionados a quantidade de colunas, quando houver; e no caso de listas apenas um evento por lista);\n- Chamadas externas à tela (por chamada) (Ex: Links, botões, etc.).\n- Utilização de recursos nativos (Ex.: acionamento de câmera, localização via GPS, calendário, acionamento gravador de voz, etc.);\nOU\na presença de tabelas/listas multidimensionais.",
                "complexidade": "Média",
                "id_item": 3762,
                "valor": 16.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Quantidade acima de 50 dos itens de complexidade abaixo:\n- Aplicação de estilo (considerar evento único);\n- Aplicação de internacionalização (considerar evento único);\n- Variáveis tratadas (por variável);\n- Campos editáveis ou atualizáveis automaticamente via JavaScript ou Integração (por campo);\n- Aplicações de eventos por elemento na página (por evento em cada elemento) (Ex: JavaScript para validações, formatações, conversores, carregamento de dados ou acionamento de eventos nativos);\n- Tabelas/listas (por tabela/lista - Conta-se apenas os eventos relacionados a quantidade de colunas, quando houver; e no caso de listas apenas um evento por lista);\n- Chamadas externas à tela (por chamada) (Ex: Links, botões, etc.).\n- Utilização de recursos nativos (Ex.: acionamento de câmera, localização via GPS, calendário, acionamento gravador de voz, etc.);",
                "complexidade": "Alta",
                "id_item": 3763,
                "valor": 24.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.10.1",
        "descricao_tarefa": "Criação de tela\nHTML ou XHTML ou JSP ou XML ou VTL ou XSL ou Swing ou AWT ou XUI ou PHP",
        "plataforma": "SAS",
        "disciplina": 5,
        "id_tarefa": 2106,
        "uni_medida": "Por arquivo"
    },
    {
        "atividade": "5.10  Atividade: Plataforma Distribuída",
        "itens": [
            {
                "descricao_complex": "Quantidade de até 20 dos itens de complexidade abaixo:\n- Aplicação de estilo (considerar evento único);\n- Aplicação de internacionalização (considerar evento único);\n- Variáveis tratadas (por variável);\n- Campos editáveis ou atualizáveis automaticamente via JavaScript ou Integração (por campo);\n- Aplicações de eventos por elemento na página (por evento em cada elemento) (Ex: JavaScript para validações, formatações, conversores, carregamento de dados ou acionamento de eventos nativos);\n- Tabelas/listas (por tabela/lista - Conta-se apenas os eventos relacionados a quantidade de colunas, quando houver; e no caso de listas apenas um evento por lista);\n- Chamadas externas à tela (por chamada) (Ex: Links, botões, etc.).\n- Utilização de recursos nativos (Ex.: acionamento de câmera, localização via GPS, calendário, acionamento gravador de voz,\netc.);",
                "complexidade": "Baixa",
                "id_item": 3764,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Quantidade de 21 até 50 dos itens de complexidade abaixo:\n- Aplicação de estilo (considerar evento único);\n- Aplicação de internacionalização (considerar evento único);\n- Variáveis tratadas (por variável);\n- Campos editáveis ou atualizáveis automaticamente via JavaScript ou Integração (por campo);\n- Aplicações de eventos por elemento na página (por evento em cada elemento) (Ex: JavaScript para validações, formatações, conversores, carregamento de dados ou acionamento de eventos nativos);\n- Tabelas/listas (por tabela/lista - Conta-se apenas os eventos relacionados a quantidade de colunas, quando houver; e no caso de listas apenas um evento por lista);\n- Chamadas externas à tela (por chamada) (Ex: Links, botões, etc.).\n- Utilização de recursos nativos (Ex.: acionamento de câmera, localização via GPS, calendário, acionamento gravador de voz, etc.);\nOU\na presença de tabelas/listas multidimensionais. ",
                "complexidade": "Média",
                "id_item": 3765,
                "valor": 8.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Quantidade acima de 50 dos itens de complexidade abaixo:\n- Aplicação de estilo (considerar evento único);\n- Aplicação de internacionalização (considerar evento único);\n- Variáveis tratadas (por variável);\n- Campos editáveis ou atualizáveis automaticamente via JavaScript ou Integração (por campo);\n- Aplicações de eventos por elemento na página (por evento em cada elemento) (Ex: JavaScript para validações, formatações, conversores, carregamento de dados ou acionamento de eventos nativos);\n- Tabelas/listas (por tabela/lista - Conta-se apenas os eventos relacionados a quantidade de colunas, quando houver; e no caso de listas apenas um evento por lista);\n- Chamadas externas à tela (por chamada) (Ex: Links, botões, etc.).\n- Utilização de recursos nativos (Ex.: acionamento de câmera, localização via GPS, calendário, acionamento gravador de voz, etc.);",
                "complexidade": "Alta",
                "id_item": 3766,
                "valor": 12.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.10.2",
        "descricao_tarefa": "Alteração de tela                     HTML ou XHTML ou JSP ou XML ou VTL ou XSL ou Swing ou AWT ou XUI ou PHP",
        "plataforma": "SAS",
        "disciplina": 5,
        "id_tarefa": 2107,
        "uni_medida": "Por arquivo"
    },
    {
        "atividade": "5.10  Atividade: Plataforma Distribuída",
        "itens": [
            {
                "descricao_complex": "Até 30 diretivas/blocos implementados.",
                "complexidade": "Baixa",
                "id_item": 3767,
                "valor": 8.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "De 31 até 60 diretivas/blocos implementados.",
                "complexidade": "Média",
                "id_item": 3768,
                "valor": 16.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Acima de 60 diretivas/blocos implementados.",
                "complexidade": "Alta",
                "id_item": 3769,
                "valor": 24.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.10.3",
        "descricao_tarefa": "Criação CSS ou SCSS",
        "plataforma": "SAS",
        "disciplina": 5,
        "id_tarefa": 2108,
        "uni_medida": "Por arquivo"
    },
    {
        "atividade": "5.10  Atividade: Plataforma Distribuída",
        "itens": [
            {
                "descricao_complex": "Até 30 diretivas/blocos implementados.",
                "complexidade": "Baixa",
                "id_item": 3770,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "De 31 até 60 diretivas/blocos implementados.",
                "complexidade": "Média",
                "id_item": 3771,
                "valor": 8.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Acima de 60 diretivas/blocos implementados.",
                "complexidade": "Alta",
                "id_item": 3772,
                "valor": 12.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.10.4",
        "descricao_tarefa": "Alteração CSS ou SCSS",
        "plataforma": "SAS",
        "disciplina": 5,
        "id_tarefa": 2109,
        "uni_medida": "Por arquivo"
    },
    {
        "atividade": "5.10  Atividade: Plataforma Distribuída",
        "itens": [
            {
                "descricao_complex": "Até 10 funções implementadas.",
                "complexidade": "Baixa",
                "id_item": 3773,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "De 11 Até 20 funções implementadas.",
                "complexidade": "Média",
                "id_item": 3774,
                "valor": 8.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Acima de 20 funções implementadas.",
                "complexidade": "Alta",
                "id_item": 3775,
                "valor": 12.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.10.5",
        "descricao_tarefa": "Criação JavaScript",
        "plataforma": "SAS",
        "disciplina": 5,
        "id_tarefa": 2110,
        "uni_medida": "Por arquivo"
    },
    {
        "atividade": "5.10  Atividade: Plataforma Distribuída",
        "itens": [
            {
                "descricao_complex": "Até 10 funções implementadas.",
                "complexidade": "Baixa",
                "id_item": 3776,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "De 11 até 20 funções implementadas.",
                "complexidade": "Média",
                "id_item": 3777,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Acima de 20 funções implementadas.",
                "complexidade": "Alta",
                "id_item": 3778,
                "valor": 6.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.10.6",
        "descricao_tarefa": "Alteração JavaScript",
        "plataforma": "SAS",
        "disciplina": 5,
        "id_tarefa": 2111,
        "uni_medida": "Por arquivo"
    },
    {
        "atividade": "5.10  Atividade: Plataforma Distribuída",
        "itens": [
            {
                "descricao_complex": "Até 100 pares de chaves/valores ou por tag de xml.",
                "complexidade": "Baixa",
                "id_item": 3779,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "De 101 até 300 pares de chaves/valores ou por tag de xml.",
                "complexidade": "Média",
                "id_item": 3780,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Acima de 300 pares de chaves/valores ou por tag de xml.",
                "complexidade": "Alta",
                "id_item": 3781,
                "valor": 6.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.10.7",
        "descricao_tarefa": "Criação de arquivo chave/valor ou tipo xml",
        "plataforma": "SAS",
        "disciplina": 5,
        "id_tarefa": 2112,
        "uni_medida": "Por arquivo"
    },
    {
        "atividade": "5.10  Atividade: Plataforma Distribuída",
        "itens": [
            {
                "descricao_complex": "Até 100 pares de chaves/valores ou por tag de xml.",
                "complexidade": "Baixa",
                "id_item": 3782,
                "valor": 1.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "De 101 até 300 pares de chaves/valores ou por tag de xml.",
                "complexidade": "Média",
                "id_item": 3783,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Acima de 300 pares de chaves/valores ou por tag de xml.",
                "complexidade": "Alta",
                "id_item": 3784,
                "valor": 3.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.10.8",
        "descricao_tarefa": "Alteração de arquivo chave/valor ou tipo xml",
        "plataforma": "SAS",
        "disciplina": 5,
        "id_tarefa": 2113,
        "uni_medida": "Por arquivo"
    },
    {
        "atividade": "5.10  Atividade: Plataforma Distribuída",
        "itens": [
            {
                "descricao_complex": "Objeto destinado ao trânsito de dados, podendo conter aplicações de formatações e validações sobre os dados encapsulados. (Exemplo: VO – Value Object, DTO – Data\nTransfer Object).",
                "complexidade": "Muito Baixa",
                "id_item": 3785,
                "valor": 1.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 1
            },
            {
                "descricao_complex": "Quantidade de até 15 dos itens de complexidade abaixo:\n- Grupos de até 5 variáveis de entrada/saída para validação (por grupo de variáveis);\n- Exposição de API REST (por exposição);\n- Chamadas externas ao objeto (IIB, GTR, WS, BD, JMS, Socket, HTTP Client, API Rest, LDAP, Tibco Rendezvous, Apache Kafka) (por chamada);\n- Tratamento de arquivos (por arquivo);\n- Instruções SQL (DML - Data Manipulation Language) ou chamadas de Frameworks ou APIs que abstraem estas instruções, tais como\nJPA, Hibernate, etc.(por instrução ou chamada); - Codificações de threads (por thread).\n- Criação e configuração de módulos de autenticação para gerenciadores de acesso\n(por módulo)",
                "complexidade": "Baixa",
                "id_item": 3786,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Quantidade de 16 até 30 dos itens de complexidade elencados abaixo:\n- Grupos de até 5 variáveis de entrada/saída para validação (por grupo de variáveis);\n- Exposição de API Rest (por exposição);\n- Chamadas externas ao objeto (IIB, GTR, WS, BD, JMS, Socket, HTTP Client, API Rest, LDAP, Tibco Rendezvous, Apache Kafka) (por chamada);\n- Tratamento de arquivos (por arquivo);\n- Instruções SQL (DML - Data Manipulation Language) ou chamadas de Frameworks ou APIs que abstraem estas instruções, tais como JPA, Hibernate, etc.(por instrução ou chamada);\n- Codificações de threads (por thread).\n- Criação e configuração de módulos de autenticação para gerenciadores de acesso\n(por módulo)",
                "complexidade": "Média",
                "id_item": 3787,
                "valor": 12.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Quantidade acima de 30 a 50 dos itens de complexidade elencados abaixo:\n- Grupos de até 5 variáveis de entrada/saída para validação (por grupo de variáveis);\n- Exposição de API Rest (por exposição);\n- Chamadas externas ao objeto (IIB, GTR, WS, BD, JMS, Socket, HTTP Client, API Rest, LDAP, Tibco Rendezvous, Apache Kafka) (por chamada);\n- Tratamento de arquivos (por arquivo);\n- Instruções SQL (DML - Data Manipulation Language) ou chamadas de Frameworks ou APIs que abstraem estas instruções, tais como JPA, Hibernate, etc.(por instrução ou chamada);\n- Codificações de threads (por thread).\n- Criação e configuração de módulos de autenticação para gerenciadores de acesso (por módulo)",
                "complexidade": "Alta",
                "id_item": 3788,
                "valor": 20.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            },
            {
                "descricao_complex": "Quantidade acima de 50 dos itens de complexidade elencados abaixo:\n- Grupos de até 5 variáveis de entrada/saída para validação (por grupo de variáveis);\n- Exposição de API Rest (por exposição);\n- Chamadas externas ao objeto (IIB, GTR, WS, BD, JMS, Socket, HTTP Client, API Rest, LDAP, Tibco Rendezvous, Apache Kafka) (por chamada);\n- Tratamento de arquivos (por arquivo);\n- Instruções SQL (DML - Data Manipulation Language) ou chamadas de Frameworks ou APIs que abstraem estas instruções, tais como JPA, Hibernate, etc.(por instrução ou chamada);\n- Codificações de threads (por thread).\n- Criação e configuração de módulos de autenticação para gerenciadores de acesso (por módulo).",
                "complexidade": "Muito Alta",
                "id_item": 3789,
                "valor": 40.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 5
            }
        ],
        "tarefa": "5.10.9",
        "descricao_tarefa": "Criação de objetos de Integração e Negócio Java",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2114,
        "uni_medida": "Por arquivo"
    },
    {
        "atividade": "5.10  Atividade: Plataforma Distribuída",
        "itens": [
            {
                "descricao_complex": "Objeto destinado ao trânsito de dados, podendo conter aplicações de formatações e validações sobre os dados encapsulados. (Exemplo: VO – Value Object, DTO – Data Transfer Objec).",
                "complexidade": "Muito Baixa",
                "id_item": 3790,
                "valor": 0.5,
                "componente": {},
                "quantidade": {},
                "id_complex": 1
            },
            {
                "descricao_complex": "Quantidade de até 15 dos itens de complexidade abaixo:\n- Grupos de até 5 variáveis de entrada/saída para validação (por grupo de variáveis);\n- Exposição de Api Rest (por exposição);\n- Chamadas externas ao objeto (IIB, GTR, WS, BD, JMS, Socket, HTTP Client, API Rest, LDAP, Tibco Rendezvous, Apache Kafka) (por chamada);\n- Tratamento de arquivos (por arquivo);\n- Instruções SQL (DML - Data Manipulation Language) ou chamadas de Frameworks ou APIs que abstraem estas instruções, tais como JPA, Hibernate, etc.(por instrução ou chamada);\n- Codificações de threads (por thread).\n- Criação e configuração de módulos de\nautenticação para gerenciadores de acesso (por módulo)",
                "complexidade": "Baixa",
                "id_item": 3791,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Quantidade de 16 até 30 dos itens de complexidade elencados abaixo:\n- Grupos de até 5 variáveis de entrada/saída para validação (por grupo de variáveis);\n- Exposição de Api Rest (por exposição);\n- Chamadas externas ao objeto (IIB, GTR, WS, BD, JMS, Socket, HTTP Client, API Rest, LDAP, Tibco Rendezvous, Apache Kafka) (por chamada);\n- Tratamento de arquivos (por arquivo);\n- Instruções SQL (DML - Data Manipulation Language) ou chamadas de Frameworks ou APIs que abstraem estas instruções, tais como JPA, Hibernate, etc.(por instrução ou chamada);\n- Codificações de threads (por thread).\n- Criação e configuração de módulos de\nautenticação para gerenciadores de acesso (por módulo)",
                "complexidade": "Média",
                "id_item": 3792,
                "valor": 6.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Quantidade acima de 30 a 50 dos itens de complexidade elencados abaixo:\n- Grupos de até 5 variáveis de entrada/saída para validação (por grupo de variáveis);\n- Exposição de Api Rest (por exposição);\n- Chamadas externas ao objeto (IIB, GTR, WS, BD, JMS, Socket, HTTP Client, API Rest, LDAP, Tibco Rendezvous, Apache Kafka) (por chamada);\n- Tratamento de arquivos (por arquivo);\n- Instruções SQL (DML - Data Manipulation Language) ou chamadas de Frameworks ou APIs que abstraem estas instruções, tais como JPA, Hibernate, etc.(por instrução ou chamada);\n- Codificações de threads (por thread).\n- Criação e configuração de módulos de autenticação para gerenciadores de acesso (por módulo)",
                "complexidade": "Alta",
                "id_item": 3793,
                "valor": 10.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            },
            {
                "descricao_complex": "Quantidade acima de 50 dos itens de complexidade elencados abaixo:\n- Grupos de até 5 variáveis de entrada/saída para validação (por grupo de variáveis);\n- Exposição de Api Rest (por exposição);\n- Chamadas externas ao objeto (IIB, GTR, WS, BD, JMS, Socket, HTTP Client, API Rest, LDAP, Tibco Rendezvous, Apache Kafka) (por chamada);\n- Tratamento de arquivos (por arquivo);\n- Instruções SQL (DML - Data Manipulation Language) ou chamadas de Frameworks ou APIs que abstraem estas instruções, tais como JPA, Hibernate, etc.(por instrução ou chamada);\n- Codificações de threads (por thread).             - Criação e configuração de módulos de\nautenticação para gerenciadores de acesso (por módulo)",
                "complexidade": "Muito Alta",
                "id_item": 3794,
                "valor": 20.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 5
            }
        ],
        "tarefa": "5.10.10",
        "descricao_tarefa": "Alteração de Objetos de Integração e Negócio Java",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2115,
        "uni_medida": "Por arquivo"
    },
    {
        "atividade": "5.10  Atividade: Plataforma Distribuída",
        "itens": [
            {
                "descricao_complex": "Ficará a critério, do demandante, decidir qual a forma de orçamento, por pacote ou unitário, em caso de alterações repetitivas em objetos.",
                "complexidade": "N/A",
                "id_item": 3795,
                "valor": 8.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.10.11",
        "descricao_tarefa": "Alteração de pacote de Objetos de Integração e Negócio Java",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2116,
        "uni_medida": "Por pacote de até 5 arquivos"
    },
    {
        "atividade": "5.10  Atividade: Plataforma Distribuída",
        "itens": [
            {
                "descricao_complex": "Objeto destinado ao trânsito de dados, podendo conter aplicações de formatações e validações sobre os dados encapsulados. (Exemplo: VO – Value Object, DTO – Data Transfer Object).",
                "complexidade": "Muito Baixa",
                "id_item": 3796,
                "valor": 1.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 1
            },
            {
                "descricao_complex": "Quantidade de até 15 dos itens de complexidade abaixo:\n- Grupos de até 5 variáveis de entrada/saída para validação (por grupo de variáveis);\n- Regras de negócio a serem aplicadas (por regra de negócio);\n- Chamadas externas ao objeto (IIB, GTR, WS, BD, JMS, Socket, HTTP Client, LDAP, Tibco Rendezvous, Apache Kafka) (por chamada);\n- Tratamento de arquivos (por arquivo);\n- Instruções SQL (DML - Data Manipulation Language) ou chamadas de Frameworks ou APIs que abstraem estas instruções, tais como JPA, Hibernate, etc.(por instrução ou chamada);\n- Codificações de threads (por thread). - Criação e configuração de módulos de autenticação para gerenciadores de acesso (por módulo)",
                "complexidade": "Baixa",
                "id_item": 3797,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Quantidade de 16 até 30 dos itens de complexidade elencados abaixo:\n- Grupos de até 5 variáveis de entrada/saída para validação (por grupo de variáveis);\n- Regras de negócio a serem aplicadas (por regra de negócio);\n- Chamadas externas ao objeto (IIB, GTR, WS, BD, JMS, Socket, HTTP Client, LDAP, Tibco Rendezvous, Apache Kafka) (por chamada);\n- Tratamento de arquivos (por arquivo);\n- Instruções SQL (DML - Data Manipulation Language) ou chamadas de Frameworks ou APIs que abstraem estas instruções, tais como JPA, Hibernate, etc.(por instrução ou chamada);\n- Codificações de threads (por thread).\n- Criação e configuração de módulos de\nautenticação para gerenciadores de acesso (por módulo)",
                "complexidade": "Média",
                "id_item": 3798,
                "valor": 12.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Quantidade acima de 30 a 50 dos itens de complexidade elencados abaixo:\n- Grupos de até 5 variáveis de entrada/saída para validação (por grupo de variáveis);\n- Regras de negócio a serem aplicadas (por regra de negócio);\n- Chamadas externas ao objeto (IIB, GTR, WS, BD, JMS, Socket, HTTP Client, LDAP, Tibco Rendezvous, Apache Kafka) (por chamada);\n- Tratamento de arquivos (por arquivo);\n- Instruções SQL (DML - Data Manipulation Language) ou chamadas de Frameworks ou APIs que abstraem estas instruções, tais como JPA, Hibernate, etc.(por instrução ou chamada);\n- Codificações de threads (por thread).\n- Criação e configuração de módulos de autenticação para gerenciadores de acesso (por módulo)",
                "complexidade": "Alta",
                "id_item": 3799,
                "valor": 20.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            },
            {
                "descricao_complex": "Quantidade acima de 50 dos itens de complexidade elencados abaixo:\n- Grupos de até 5 variáveis de entrada/saída para validação (por grupo de variáveis);\n- Regras de negócio a serem aplicadas (por regra de negócio);\n- Chamadas externas ao objeto (IIB, GTR, WS, BD, JMS, Socket, HTTP Client, LDAP, Tibco Rendezvous, Apache Kafka) (por chamada);\n- Tratamento de arquivos (por arquivo);\n- Instruções SQL (DML - Data Manipulation Language) ou chamadas de Frameworks ou APIs que abstraem estas instruções, tais como JPA, Hibernate, etc.(por instrução ou chamada);\n- Codificações de threads (por thread).\n- Criação e configuração de módulos de\nautenticação para gerenciadores de acesso (por módulo).",
                "complexidade": "Muito Alta",
                "id_item": 3800,
                "valor": 40.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 5
            }
        ],
        "tarefa": "5.10.12",
        "descricao_tarefa": "Criação de objetos de Integração e Negócio C, C# e C++",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2117,
        "uni_medida": "Por arquivo"
    },
    {
        "atividade": "5.10  Atividade: Plataforma Distribuída",
        "itens": [
            {
                "descricao_complex": "Objeto destinado ao trânsito de dados, podendo conter aplicações de formatações e validações sobre os dados encapsulados. (Exemplo: VO – Value Object, DTO – Data Transfer Objec).",
                "complexidade": "Muito Baixa",
                "id_item": 3801,
                "valor": 0.5,
                "componente": {},
                "quantidade": {},
                "id_complex": 1
            },
            {
                "descricao_complex": "Quantidade de até 15 dos itens de complexidade abaixo:\n- Grupos de até 5 variáveis de entrada/saída para validação (por grupo de variáveis);\n- Regras de negócio a serem aplicadas (por regra de negócio);\n- Chamadas externas ao objeto (IIB, GTR, WS, BD, JMS, Socket, HTTP Client, LDAP, Tibco Rendezvous, Apache Kafka) (por chamada);\n- Tratamento de arquivos (por arquivo);\n- Instruções SQL (DML - Data Manipulation Language) ou chamadas de Frameworks ou APIs que abstraem estas instruções, tais como JPA, Hibernate, etc.(por instrução ou chamada);\n- Codificações de threads (por thread).\n- Criação e configuração de módulos de\nautenticação para gerenciadores de acesso (por módulo)",
                "complexidade": "Baixa",
                "id_item": 3802,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Quantidade de 16 até 30 dos itens de complexidade elencados abaixo:\n- Grupos de até 5 variáveis de entrada/saída para validação (por grupo de variáveis);\n- Regras de negócio a serem aplicadas (por regra de negócio);\n- Chamadas externas ao objeto (IIB, GTR, WS, BD, JMS, Socket, HTTP Client, LDAP, Tibco Rendezvous, Apache Kafka) (por chamada);\n- Tratamento de arquivos (por arquivo);\n- Instruções SQL (DML - Data Manipulation Language) ou chamadas de Frameworks ou APIs que abstraem estas instruções, tais como JPA, Hibernate, etc.(por instrução ou chamada);\n- Codificações de threads (por thread).\n- Criação e configuração de módulos de autenticação para gerenciadores de acesso (por módulo)",
                "complexidade": "Média",
                "id_item": 3803,
                "valor": 6.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Quantidade acima de 30 a 50 dos itens de complexidade elencados abaixo:\n- Grupos de até 5 variáveis de entrada/saída para validação (por grupo de variáveis);\n- Regras de negócio a serem aplicadas (por regra de negócio);\n- Chamadas externas ao objeto (IIB, GTR, WS, BD, JMS, Socket, HTTP Client, LDAP, Tibco Rendezvous, Apache Kafka) (por chamada);\n- Tratamento de arquivos (por arquivo);\n- Instruções SQL (DML - Data Manipulation Language) ou chamadas de Frameworks ou APIs que abstraem estas instruções, tais como JPA, Hibernate, etc.(por instrução ou chamada);\n- Codificações de threads (por thread).\n- Criação e configuração de módulos de\nautenticação para gerenciadores de acesso (por módulo)",
                "complexidade": "Alta",
                "id_item": 3804,
                "valor": 10.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            },
            {
                "descricao_complex": "Quantidade acima de 50 dos itens de complexidade elencados abaixo:\n- Grupos de até 5 variáveis de entrada/saída para validação (por grupo de variáveis);\n- Regras de negócio a serem aplicadas (por regra de negócio);\n- Chamadas externas ao objeto (IIB, GTR, WS, BD, JMS, Socket, HTTP Client, LDAP, Tibco Rendezvous, Apache Kafka) (por chamada);\n- Tratamento de arquivos (por arquivo);\n- Instruções SQL (DML - Data Manipulation Language) ou chamadas de Frameworks ou APIs que abstraem estas instruções, tais como JPA, Hibernate, etc.(por instrução ou chamada);\n- Codificações de threads (por thread).\n- Criação e configuração de módulos de autenticação para gerenciadores de acesso\n(por módulo)",
                "complexidade": "Muito Alta",
                "id_item": 3805,
                "valor": 20.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 5
            }
        ],
        "tarefa": "5.10.13",
        "descricao_tarefa": "Alteração de Objetos de Integração e Negócio C, C# e C++",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2118,
        "uni_medida": "Por arquivo"
    },
    {
        "atividade": "5.10  Atividade: Plataforma Distribuída",
        "itens": [
            {
                "descricao_complex": "Ficará a critério, do demandante, decidir qual a forma de orçamento, por pacote ou unitário, em caso de alterações repetitivas em objetos.",
                "complexidade": "N/A",
                "id_item": 3806,
                "valor": 8.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.10.14",
        "descricao_tarefa": "Alteração de pacote de Objetos de Integração e Negócio C, C# e C++",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2119,
        "uni_medida": "Por pacote de até 5 arquivos"
    },
    {
        "atividade": "5.10  Atividade: Plataforma Distribuída",
        "itens": [
            {
                "descricao_complex": "Objeto destinado ao trânsito de dados, podendo conter aplicações de formatações e validações sobre os dados encapsulados. (Exemplo: VO – Value Object, DTO – Data Transfer Object).",
                "complexidade": "Muito Baixa",
                "id_item": 3807,
                "valor": 1.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 1
            },
            {
                "descricao_complex": "Quantidade de até 15 dos itens de complexidade abaixo:\n- Grupos de até 5 variáveis de entrada/saída para validação (por grupo de variáveis);\n- Regras de negócio a serem aplicadas (por regra de negócio);\n- Chamadas externas ao objeto (IIB, GTR, WS, BD, JMS, Socket, HTTP Client, LDAP, Tibco Rendezvous, Apache Kafka) (por chamada);\n- Tratamento de arquivos (por arquivo);\n- Instruções SQL (DML - Data Manipulation Language) ou chamadas de Frameworks ou APIs que abstraem estas instruções, tais como JPA, Hibernate, etc.(por instrução ou chamada);\n- Codificações de threads (por thread).\n- Criação e configuração de módulos de autenticação para gerenciadores de acesso\n(por módulo)",
                "complexidade": "Baixa",
                "id_item": 3808,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Quantidade de 16 até 30 dos itens de complexidade elencados abaixo:\n- Grupos de até 5 variáveis de entrada/saída para validação (por grupo de variáveis);\n- Regras de negócio a serem aplicadas (por regra de negócio);\n- Chamadas externas ao objeto (IIB, GTR, WS, BD, JMS, Socket, HTTP Client, LDAP, Tibco Rendezvous, Apache Kafka) (por chamada);\n- Tratamento de arquivos (por arquivo);\n- Instruções SQL (DML - Data Manipulation Language) ou chamadas de Frameworks ou APIs que abstraem estas instruções, tais como JPA, Hibernate, etc.(por instrução ou\nchamada); - Codificações de threads (por thread).\n- Criação e configuração de módulos de autenticação para gerenciadores de acesso (por módulo)",
                "complexidade": "Média",
                "id_item": 3809,
                "valor": 12.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Quantidade acima de 30 a 50 dos itens de complexidade elencados abaixo:\n- Grupos de até 5 variáveis de entrada/saída para validação (por grupo de variáveis);\n- Regras de negócio a serem aplicadas (por regra de negócio);\n- Chamadas externas ao objeto (IIB, GTR, WS, BD, JMS, Socket, HTTP Client, LDAP, Tibco Rendezvous, Apache Kafka) (por chamada);\n- Tratamento de arquivos (por arquivo);\n- Instruções SQL (DML - Data Manipulation Language) ou chamadas de Frameworks ou APIs que abstraem estas instruções, tais como JPA, Hibernate, etc.(por instrução ou chamada);\n- Codificações de threads (por thread).\n- Criação e configuração de módulos de\nautenticação para gerenciadores de acesso (por módulo)",
                "complexidade": "Alta",
                "id_item": 3810,
                "valor": 20.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            },
            {
                "descricao_complex": "Quantidade acima de 50 dos itens de complexidade elencados abaixo:\n- Grupos de até 5 variáveis de entrada/saída para validação (por grupo de variáveis);\n- Regras de negócio a serem aplicadas (por regra de negócio);\n- Chamadas externas ao objeto (IIB, GTR, WS, BD, JMS, Socket, HTTP Client, LDAP, Tibco Rendezvous, Apache Kafka) (por chamada);\n- Tratamento de arquivos (por arquivo);\n- Instruções SQL (DML - Data Manipulation Language) ou chamadas de Frameworks ou APIs que abstraem estas instruções, tais como JPA, Hibernate, etc.(por instrução ou chamada);\n- Codificações de threads (por thread).\n- Criação e configuração de módulos de autenticação para gerenciadores de acesso (por módulo).",
                "complexidade": "Muito Alta",
                "id_item": 3811,
                "valor": 40.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 5
            }
        ],
        "tarefa": "5.10.15",
        "descricao_tarefa": "Criação de objetos de Integração e Negócio\n.Net",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2120,
        "uni_medida": "Por arquivo"
    },
    {
        "atividade": "5.10  Atividade: Plataforma Distribuída",
        "itens": [
            {
                "descricao_complex": "Objeto destinado ao trânsito de dados, podendo conter aplicações de formatações e validações sobre os dados encapsulados. (Exemplo: VO – Value Object, DTO – Data Transfer Objec).",
                "complexidade": "Muito Baixa",
                "id_item": 3812,
                "valor": 0.5,
                "componente": {},
                "quantidade": {},
                "id_complex": 1
            },
            {
                "descricao_complex": "Quantidade de até 15 dos itens de complexidade abaixo:\n- Grupos de até 5 variáveis de entrada/saída para validação (por grupo de variáveis);\n- Regras de negócio a serem aplicadas (por regra de negócio);\n- Chamadas externas ao objeto (IIB, GTR, WS, BD, JMS, Socket, HTTP Client, LDAP, Tibco Rendezvous, Apache Kafka) (por chamada);\n- Tratamento de arquivos (por arquivo);\n- Instruções SQL (DML - Data Manipulation Language) ou chamadas de Frameworks ou APIs que abstraem estas instruções, tais como\nJPA, Hibernate, etc.(por instrução ou chamada); - Codificações de threads (por thread).\n- Criação e configuração de módulos de autenticação para gerenciadores de acesso (por módulo)",
                "complexidade": "Baixa",
                "id_item": 3813,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Quantidade de 16 até 30 dos itens de complexidade elencados abaixo:\n- Grupos de até 5 variáveis de entrada/saída para validação (por grupo de variáveis);\n- Regras de negócio a serem aplicadas (por regra de negócio);\n- Chamadas externas ao objeto (IIB, GTR, WS, BD, JMS, Socket, HTTP Client, LDAP, Tibco Rendezvous, Apache Kafka) (por chamada);\n- Tratamento de arquivos (por arquivo);\n- Instruções SQL (DML - Data Manipulation Language) ou chamadas de Frameworks ou APIs que abstraem estas instruções, tais como JPA, Hibernate, etc.(por instrução ou chamada);\n- Codificações de threads (por thread).\n- Criação e configuração de módulos de\nautenticação para gerenciadores de acesso (por módulo)",
                "complexidade": "Média",
                "id_item": 3814,
                "valor": 6.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Quantidade acima de 30 a 50 dos itens de complexidade elencados abaixo:\n- Grupos de até 5 variáveis de entrada/saída para validação (por grupo de variáveis);\n- Regras de negócio a serem aplicadas (por regra de negócio);\n- Chamadas externas ao objeto (IIB, GTR, WS, BD, JMS, Socket, HTTP Client, LDAP, Tibco Rendezvous, Apache Kafka) (por chamada);\n- Tratamento de arquivos (por arquivo);\n- Instruções SQL (DML - Data Manipulation Language) ou chamadas de Frameworks ou APIs que abstraem estas instruções, tais como JPA, Hibernate, etc.(por instrução ou chamada);\n- Codificações de threads (por thread).\n- Criação e configuração de módulos de autenticação para gerenciadores de acesso (por módulo)",
                "complexidade": "Alta",
                "id_item": 3815,
                "valor": 10.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            },
            {
                "descricao_complex": "Quantidade acima de 50 dos itens de complexidade elencados abaixo:\n- Grupos de até 5 variáveis de entrada/saída para validação (por grupo de variáveis);\n- Regras de negócio a serem aplicadas (por regra de negócio);\n- Chamadas externas ao objeto (IIB, GTR, WS, BD, JMS, Socket, HTTP Client, LDAP, Tibco Rendezvous, Apache Kafka) (por chamada);\n- Tratamento de arquivos (por arquivo);\n- Instruções SQL (DML - Data Manipulation Language) ou chamadas de Frameworks ou APIs que abstraem estas instruções, tais como JPA, Hibernate, etc.(por instrução ou chamada);\n- Codificações de threads (por thread).\n- Criação e configuração de módulos de\nautenticação para gerenciadores de acesso (por módulo)",
                "complexidade": "Muito Alta",
                "id_item": 3816,
                "valor": 20.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 5
            }
        ],
        "tarefa": "5.10.16",
        "descricao_tarefa": "Alteração de Objetos de Integração e Negócio .Net",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2121,
        "uni_medida": "Por arquivo"
    },
    {
        "atividade": "5.10  Atividade: Plataforma Distribuída",
        "itens": [
            {
                "descricao_complex": "Ficará a critério, do demandante, decidir qual a forma de orçamento, por pacote ou unitário, em caso de alterações repetitivas em objetos.",
                "complexidade": "N/A",
                "id_item": 3817,
                "valor": 8.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.10.17",
        "descricao_tarefa": "Alteração de pacote de Objetos de Integração e Negócio\n.Net",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2122,
        "uni_medida": "Por pacote de até 5 arquivos"
    },
    {
        "atividade": "5.10  Atividade: Plataforma Distribuída",
        "itens": [
            {
                "descricao_complex": "Quantidade de até 30 itens de complexidade abaixo:\n- Cenários de teste (por cenário);\n- Grupo de até 5 variáveis (por grupo de variável);\n- Configurações a fontes de dados externos (por configuração)",
                "complexidade": "Baixa",
                "id_item": 3818,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Quantidade de 31 até 60 itens de complexidade elencados abaixo:\n- Cenários de teste (por cenário);\n- Grupo de até 5 variáveis (por grupo de variável);\n- Configurações a fontes de dados externos (por configuração)",
                "complexidade": "Média",
                "id_item": 3819,
                "valor": 12.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Quantidade acima de 60 itens de complexidade elencados abaixo:\n- Cenários de teste (por cenário);\n- Grupo de até 5 variáveis (por grupo de variável);\n- Configurações a fontes de dados externos (por configuração)",
                "complexidade": "Alta",
                "id_item": 3820,
                "valor": 20.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.10.18",
        "descricao_tarefa": "Criação de objeto de teste automatizado",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2123,
        "uni_medida": "Por arquivo"
    },
    {
        "atividade": "5.11  Atividade: BMC AR SYSTEM",
        "itens": [
            {
                "descricao_complex": "Formulário com até 20 campos",
                "complexidade": "Baixa",
                "id_item": 3821,
                "valor": 1.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Formulário de 21 a 50 campos",
                "complexidade": "Média",
                "id_item": 3822,
                "valor": 3.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Formulário com mais de 50 campos",
                "complexidade": "Alta",
                "id_item": 3823,
                "valor": 5.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.11.1",
        "descricao_tarefa": "Formulário",
        "plataforma": "Baixa/x86",
        "disciplina": 5,
        "id_tarefa": 2124,
        "uni_medida": "Por objeto"
    },
    {
        "atividade": "5.11  Atividade: BMC AR SYSTEM",
        "itens": [
            {
                "descricao_complex": "Até 10 campos por operação",
                "complexidade": "Baixa",
                "id_item": 3824,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Superior a 10 campos por operações",
                "complexidade": "Alta",
                "id_item": 3825,
                "valor": 8.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.11.2",
        "descricao_tarefa": "Web Services",
        "plataforma": "Baixa/x89",
        "disciplina": 5,
        "id_tarefa": 2125,
        "uni_medida": "Por operação"
    },
    {
        "atividade": "5.11  Atividade: BMC AR SYSTEM",
        "itens": [
            {
                "descricao_complex": "Geração de relatórios no BIRT (Business Intelligence and Reporting Tools)",
                "complexidade": "N/A",
                "id_item": 3826,
                "valor": 10.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.11.3",
        "descricao_tarefa": "Relatório BIRT",
        "plataforma": "Baixa/x91",
        "disciplina": 5,
        "id_tarefa": 2126,
        "uni_medida": "Por Relatório"
    },
    {
        "atividade": "5.11  Atividade: BMC AR SYSTEM",
        "itens": [
            {
                "descricao_complex": "Quantidade de variáveis de flashboard até 3",
                "complexidade": "Baixa",
                "id_item": 3827,
                "valor": 5.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Quantidade de variáveis de flashboard superior a 3",
                "complexidade": "Alta",
                "id_item": 3828,
                "valor": 10.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.11.4",
        "descricao_tarefa": "Flashboards",
        "plataforma": "Baixa/x92",
        "disciplina": 5,
        "id_tarefa": 2127,
        "uni_medida": "Por objeto"
    },
    {
        "atividade": "5.11  Atividade: BMC AR SYSTEM",
        "itens": [
            {
                "descricao_complex": "Até 5 campos por notificação",
                "complexidade": "Baixa",
                "id_item": 3829,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Superior a 5 campos por notificação",
                "complexidade": "Alta",
                "id_item": 3830,
                "valor": 8.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.11.5",
        "descricao_tarefa": "Notificação",
        "plataforma": "Baixa/x94",
        "disciplina": 5,
        "id_tarefa": 2128,
        "uni_medida": "Por objeto"
    },
    {
        "atividade": "5.11  Atividade: BMC AR SYSTEM",
        "itens": [
            {
                "descricao_complex": "Filtros/Activelinks/Escalations com até de 4 ações",
                "complexidade": "Baixa",
                "id_item": 3831,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Filtros/Activelinks/Escalations de 5 a 12 ações",
                "complexidade": "Média",
                "id_item": 3832,
                "valor": 5.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Filtros/Activelinks/Escalations com mais de 12 ações",
                "complexidade": "Alta",
                "id_item": 3833,
                "valor": 10.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.11.6",
        "descricao_tarefa": "Workflow",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2129,
        "uni_medida": "Por objeto"
    },
    {
        "atividade": "5.12  Atividade: Portal Server",
        "itens": [
            {
                "descricao_complex": "Páginas estáticas",
                "complexidade": "Baixa",
                "id_item": 3834,
                "valor": 9.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            }
        ],
        "tarefa": "5.12.1",
        "descricao_tarefa": "Desenvolvimento de página Web com publicação em WCM",
        "plataforma": "Portal Server",
        "disciplina": 5,
        "id_tarefa": 2130,
        "uni_medida": "Por Página"
    },
    {
        "atividade": "5.12  Atividade: Portal Server",
        "itens": [
            {
                "descricao_complex": "Páginas Dinâmicas Ou Com Customização Do WCM Através De Plugins",
                "complexidade": "Alta",
                "id_item": 3835,
                "valor": 14.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            },
            {
                "descricao_complex": "Páginas Estáticas",
                "complexidade": "Baixa",
                "id_item": 3836,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Páginas Dinâmicas Ou Com Customização Do WCM Através De Plugins",
                "complexidade": "Alta",
                "id_item": 3837,
                "valor": 6.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.12.2",
        "descricao_tarefa": "Desenvolvimento de página Web com publicação em WCM",
        "plataforma": "Portal Server",
        "disciplina": 5,
        "id_tarefa": 2131,
        "uni_medida": "Por Página"
    },
    {
        "atividade": "5.12  Atividade: Portal Server",
        "itens": [
            {
                "descricao_complex": "interface de publicação utilizando elementos nativos do wcm",
                "complexidade": "Baixa",
                "id_item": 3838,
                "valor": 5.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Interface de Publicação utilizando elementos nativos do WCM e fluxos de trabalho",
                "complexidade": "Média",
                "id_item": 3839,
                "valor": 7.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Interface de Publicação utilizando campos personalizados e API do WCM",
                "complexidade": "Alta",
                "id_item": 3840,
                "valor": 9.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.12.3",
        "descricao_tarefa": "Desenvolvimento de Interface de Publicação com WCM",
        "plataforma": "Portal Server",
        "disciplina": 5,
        "id_tarefa": 2132,
        "uni_medida": "Por Interface"
    },
    {
        "atividade": "5.12  Atividade: Portal Server",
        "itens": [
            {
                "descricao_complex": "Interface de Publicação utilizando elementos nativos do WCM",
                "complexidade": "Baixa",
                "id_item": 3841,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Interface de Publicação utilizando elementos nativos do WCM e fluxos de trabalho",
                "complexidade": "Média",
                "id_item": 3842,
                "valor": 3.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Interface de Publicação utilizando campos personalizados e API do WCM",
                "complexidade": "Alta",
                "id_item": 3843,
                "valor": 6.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.12.4",
        "descricao_tarefa": "Alteração de Interface de Publicação com WCM",
        "plataforma": "Portal Server",
        "disciplina": 5,
        "id_tarefa": 2133,
        "uni_medida": "Por Interface"
    },
    {
        "atividade": "5.12  Atividade: Portal Server",
        "itens": [
            {
                "descricao_complex": "Plugin de renderização, condição",
                "complexidade": "Média",
                "id_item": 3844,
                "valor": 11.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Plugin de customização de fluxo de trabalho utilizando a API WCM",
                "complexidade": "Alta",
                "id_item": 3845,
                "valor": 14.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.12.5",
        "descricao_tarefa": "Desenvolvimento de plugin de customização do WCM",
        "plataforma": "Portal Server",
        "disciplina": 5,
        "id_tarefa": 2134,
        "uni_medida": "Por Plugin"
    },
    {
        "atividade": "5.12  Atividade: Portal Server",
        "itens": [
            {
                "descricao_complex": "Plugin de renderização, condição",
                "complexidade": "Média",
                "id_item": 3846,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Plugin de customização de fluxo de trabalho utilizando a API WCM",
                "complexidade": "Alta",
                "id_item": 3847,
                "valor": 6.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.12.6",
        "descricao_tarefa": "Alteração de plugin de customização do WCM",
        "plataforma": "Portal Server",
        "disciplina": 5,
        "id_tarefa": 2135,
        "uni_medida": "Por Plugin"
    },
    {
        "atividade": "5.12  Atividade: Portal Server",
        "itens": [
            {
                "descricao_complex": "Páginas estáticas",
                "complexidade": "Baixa",
                "id_item": 3848,
                "valor": 9.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Páginas dinâmicas ou com customização do Portal através da API de Portal",
                "complexidade": "Alta",
                "id_item": 3849,
                "valor": 14.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.12.7",
        "descricao_tarefa": "Desenvolvimento de página Web para tema de Portal",
        "plataforma": "Portal Server",
        "disciplina": 5,
        "id_tarefa": 2136,
        "uni_medida": "Por Página"
    },
    {
        "atividade": "5.12  Atividade: Portal Server",
        "itens": [
            {
                "descricao_complex": "Páginas estáticas",
                "complexidade": "Baixa",
                "id_item": 3850,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Páginas dinâmicas ou com customização do Portal através da API de Portal",
                "complexidade": "Alta",
                "id_item": 3851,
                "valor": 6.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.12.8",
        "descricao_tarefa": "Alteração de página Web para tema de Portal",
        "plataforma": "Portal Server",
        "disciplina": 5,
        "id_tarefa": 2137,
        "uni_medida": "Por Página"
    },
    {
        "atividade": "5.12  Atividade: Portal Server",
        "itens": [
            {
                "descricao_complex": "Views estáticas (Especificação JSR 168, JSR 286 e JSR 356)",
                "complexidade": "Baixa",
                "id_item": 3852,
                "valor": 9.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Páginas dinâmicas (Especificação JSR 168, JSR 286 e JSR 356)",
                "complexidade": "Alta",
                "id_item": 3853,
                "valor": 14.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.12.9",
        "descricao_tarefa": "Desenvolvimento de view de Portlet",
        "plataforma": "Portal Server",
        "disciplina": 5,
        "id_tarefa": 2138,
        "uni_medida": "Por View"
    },
    {
        "atividade": "5.12  Atividade: Portal Server",
        "itens": [
            {
                "descricao_complex": "Views estáticas (Especificação JSR 168, JSR 286 e JSR 356)",
                "complexidade": "Baixa",
                "id_item": 3854,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Páginas dinâmicas (Especificação JSR 168, JSR 286 e JSR 356)",
                "complexidade": "Alta",
                "id_item": 3855,
                "valor": 6.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.12.10",
        "descricao_tarefa": "Alteração de view de Portlet",
        "plataforma": "Portal Server",
        "disciplina": 5,
        "id_tarefa": 2139,
        "uni_medida": "Por View"
    },
    {
        "atividade": "5.13  Atividade: Automação Bancária e Terminais",
        "itens": [
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 3856,
                "valor": 3.0,
                "componente": "Classe",
                "quantidade": {},
                "id_complex": 6
            },
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 3857,
                "valor": 1.5,
                "componente": "Método",
                "quantidade": {},
                "id_complex": 6
            },
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 3858,
                "valor": 0.5,
                "componente": "Parâmetro",
                "quantidade": {},
                "id_complex": 6
            },
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 3859,
                "valor": 0.2,
                "componente": "Retorno",
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.13.1",
        "descricao_tarefa": "Framework – Criação de Classes e Funcionalidades de Transações",
        "plataforma": "Automação Bancária e Terminais",
        "disciplina": 5,
        "id_tarefa": 2140,
        "uni_medida": "Por Conjunto dos Objetos"
    },
    {
        "atividade": "5.13  Atividade: Automação Bancária e Terminais",
        "itens": [
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 3860,
                "valor": 1.0,
                "componente": "Classe",
                "quantidade": {},
                "id_complex": 6
            },
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 3861,
                "valor": 0.5,
                "componente": "Método",
                "quantidade": {},
                "id_complex": 6
            },
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 3862,
                "valor": 0.2,
                "componente": "Parâmetro",
                "quantidade": {},
                "id_complex": 6
            },
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 3863,
                "valor": 0.1,
                "componente": "Retorno",
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.13.2",
        "descricao_tarefa": "Framework – Alteração de Classes e Funcionalidades de Transações",
        "plataforma": "Automação Bancária e Terminais",
        "disciplina": 5,
        "id_tarefa": 2141,
        "uni_medida": "Por Conjunto dos Objetos"
    },
    {
        "atividade": "5.13  Atividade: Automação Bancária e Terminais",
        "itens": [
            {
                "descricao_complex": "Dispositivo de Controle/Status ou de Saída.",
                "complexidade": "Baixa",
                "id_item": 3864,
                "valor": 10.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Dispositivo de Captura ou de Cartões - Trilhas.",
                "complexidade": "Média",
                "id_item": 3865,
                "valor": 30.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Dispositivo de Segurança, de Comunicação Móvel ou de SmartCard.",
                "complexidade": "Alta",
                "id_item": 3866,
                "valor": 70.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            },
            {
                "descricao_complex": "Dispositivo de Mecânica Fina.",
                "complexidade": "Muito Alta",
                "id_item": 3867,
                "valor": 120.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 5
            }
        ],
        "tarefa": "5.13.3",
        "descricao_tarefa": "Dispositivo (Hardware) – Criação de Funcionalidades",
        "plataforma": "Automação Bancária e Terminais",
        "disciplina": 5,
        "id_tarefa": 2142,
        "uni_medida": "Por Função ou Método"
    },
    {
        "atividade": "5.13  Atividade: Automação Bancária e Terminais",
        "itens": [
            {
                "descricao_complex": "Módulos RPR/PRT Impressora, STU Acessibilidade, FLK Flicker, HRD Configuração ou Touch Screen.",
                "complexidade": "Baixa",
                "id_item": 3868,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Módulos BCR Código Barras, DPC Câmera, PIN Teclado PIN ou CRW Trilhas.",
                "complexidade": "Média",
                "id_item": 3869,
                "valor": 12.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Módulos AIO Sensores, EPP/EP2 Teclado Criptográfico, BIO Identificação Biométrica,\nCCR/NFC Comunicação Móvel ou SMC SmartCard.",
                "complexidade": "Alta",
                "id_item": 3870,
                "valor": 24.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            },
            {
                "descricao_complex": "Módulos BDU Dispensador Cédulas, CDR Reciclador Cédulas, EDU Depositário Envelopes ou FPU Impressão Cheques.",
                "complexidade": "Muito Alta",
                "id_item": 3871,
                "valor": 48.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 5
            }
        ],
        "tarefa": "5.13.4",
        "descricao_tarefa": "Dispositivo (Hardware) – Alteração de Funcionalidades",
        "plataforma": "Automação Bancária e Terminais",
        "disciplina": 5,
        "id_tarefa": 2143,
        "uni_medida": "Por Função ou Método"
    },
    {
        "atividade": "5.13  Atividade: Automação Bancária e Terminais",
        "itens": [
            {
                "descricao_complex": "Módulo de Monitoração Cli ou Outros de baixa complexidade.",
                "complexidade": "Baixa",
                "id_item": 3872,
                "valor": 9.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Módulo de Contabilidade ou de Monitoração Srv.",
                "complexidade": "Média",
                "id_item": 3873,
                "valor": 18.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Módulo de Comunicação, de Atualização ou de Gerenciamento.",
                "complexidade": "Alta",
                "id_item": 3874,
                "valor": 36.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.13.5",
        "descricao_tarefa": "Módulo Auxiliar – Criação de Funcionalidades",
        "plataforma": "Automação Bancária e Terminais",
        "disciplina": 5,
        "id_tarefa": 2144,
        "uni_medida": "Por Função ou Método"
    },
    {
        "atividade": "5.13  Atividade: Automação Bancária e Terminais",
        "itens": [
            {
                "descricao_complex": "Módulo de Monitoração Cli ou Outros de baixa complexidade.",
                "complexidade": "Baixa",
                "id_item": 3875,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Módulo de Contabilidade ou de Monitoração Srv.",
                "complexidade": "Média",
                "id_item": 3876,
                "valor": 6.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Módulo de Comunicação, de Atualização ou de Gerenciamento.",
                "complexidade": "Alta",
                "id_item": 3877,
                "valor": 10.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.13.6",
        "descricao_tarefa": "Módulo Auxiliar – Alteração de Funcionalidades",
        "plataforma": "Automação Bancária e Terminais",
        "disciplina": 5,
        "id_tarefa": 2145,
        "uni_medida": "Por Função ou Método"
    },
    {
        "atividade": "5.14  Atividade: Formulários de Impressão",
        "itens": [
            {
                "descricao_complex": "Texto simples com até 05 variáveis/campos, preenchendo até uma página;",
                "complexidade": "Baixa",
                "id_item": 3878,
                "valor": 6.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "De 06 a 15 variáveis/campos e/ou textos com mais de uma página;",
                "complexidade": "Média",
                "id_item": 3879,
                "valor": 10.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Mais de 15 variáveis/campos diferentes;",
                "complexidade": "Alta",
                "id_item": 3880,
                "valor": 20.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.14.1",
        "descricao_tarefa": "Criação de formulário (utilizando IDE gráfica, VTL ou página web com HTML/JavaScript)",
        "plataforma": "Formulários de Impressão",
        "disciplina": 5,
        "id_tarefa": 2146,
        "uni_medida": "Por formulário"
    },
    {
        "atividade": "5.14  Atividade: Formulários de Impressão",
        "itens": [
            {
                "descricao_complex": "Texto simples com até 05 variáveis/campos a serem alterados, preenchendo até uma página;",
                "complexidade": "Baixa",
                "id_item": 3881,
                "valor": 3.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "De 06 a 15 variáveis/campos a serem alterados ou incluídos e/ou textos com mais de uma página;",
                "complexidade": "Média",
                "id_item": 3882,
                "valor": 5.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Mais de 15 variáveis/campos diferentes a serem alterados e/ou necessidade de alteração da lógica do formulário;",
                "complexidade": "Alta",
                "id_item": 3883,
                "valor": 10.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.14.2",
        "descricao_tarefa": "Alteração ou Reaproveitamento de formulário (utilizando IDE gráfica, VTL ou página web com HTML/JavaScript)",
        "plataforma": "Formulários de Impressão",
        "disciplina": 5,
        "id_tarefa": 2147,
        "uni_medida": "Por formulário"
    },
    {
        "atividade": "5.14  Atividade: Formulários de Impressão",
        "itens": [
            {
                "descricao_complex": "Criação de chancelas, logos, fundo chapado, etc;",
                "complexidade": "N/A",
                "id_item": 3884,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.14.3",
        "descricao_tarefa": "Criação de imagens",
        "plataforma": "Formulários de Impressão",
        "disciplina": 5,
        "id_tarefa": 2148,
        "uni_medida": "Por imagem"
    },
    {
        "atividade": "5.14  Atividade: Formulários de Impressão",
        "itens": [
            {
                "descricao_complex": "Texto simples com até 05 variáveis/campos, preenchendo até uma página;",
                "complexidade": "Baixa",
                "id_item": 3885,
                "valor": 16.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "De 06 a 15 variáveis/campos a serem alterados ou incluídos e/ou textos com mais de uma página;",
                "complexidade": "Média",
                "id_item": 3886,
                "valor": 30.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Mais de 15 variáveis/campos diferentes a serem alterados e/ou necessidade de alteração da lógica do formulário;",
                "complexidade": "Alta",
                "id_item": 3887,
                "valor": 60.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.14.4",
        "descricao_tarefa": "Criação de formulário (exclusivo para a tecnologia iText)",
        "plataforma": "Formulários de Impressão",
        "disciplina": 5,
        "id_tarefa": 2149,
        "uni_medida": "Por formulário"
    },
    {
        "atividade": "5.14  Atividade: Formulários de Impressão",
        "itens": [
            {
                "descricao_complex": "Texto simples com até 05 variáveis/campos, preenchendo até uma página;",
                "complexidade": "Baixa",
                "id_item": 3888,
                "valor": 8.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "De 06 a 15 variáveis/campos a serem alterados ou incluídos e/ou textos com mais de uma página;",
                "complexidade": "Média",
                "id_item": 3889,
                "valor": 15.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Mais de 15 variáveis/campos diferentes a serem\nalterados e/ou necessidade de alteração da lógica do formulário;",
                "complexidade": "Alta",
                "id_item": 3890,
                "valor": 30.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.14.5",
        "descricao_tarefa": "Alteração de formulário (exclusivo para a tecnologia iText)",
        "plataforma": "Formulários de Impressão",
        "disciplina": 5,
        "id_tarefa": 2150,
        "uni_medida": "Por formulário"
    },
    {
        "atividade": "5.15  Atividade: Software de Infraestrutura",
        "itens": [
            {
                "descricao_complex": "Até 10 funções implementadas.",
                "complexidade": "Baixa",
                "id_item": 3891,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "De 11 Até 20 funções implementadas.",
                "complexidade": "Média",
                "id_item": 3892,
                "valor": 8.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Acima de 20 funções implementadas.",
                "complexidade": "Alta",
                "id_item": 3893,
                "valor": 12.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.15.1",
        "descricao_tarefa": "Criação de scripts Shell em JavaScript, Shell, PowerShell, PowerCli ou linguagem de construção de scripts equivalente, utilizado para automação de construção de\ninfraestrutura de TI",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2151,
        "uni_medida": "Por script"
    },
    {
        "atividade": "5.15  Atividade: Software de Infraestrutura",
        "itens": [
            {
                "descricao_complex": "Até 10 funções implementadas.",
                "complexidade": "Baixa",
                "id_item": 3894,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "De 11 Até 20 funções implementadas.",
                "complexidade": "Média",
                "id_item": 3895,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Acima de 20 funções implementadas.",
                "complexidade": "Alta",
                "id_item": 3896,
                "valor": 6.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.15.2",
        "descricao_tarefa": "Alteração de scripts Shell em JavaScript, Shell, PowerShell, PowerCli ou linguagem de construção de scripts equivalente, utilizado para\nautomação de construção de infraestrutura de TI",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2152,
        "uni_medida": "Por script"
    },
    {
        "atividade": "5.15  Atividade: Software de Infraestrutura",
        "itens": [
            {
                "descricao_complex": "Até 20 variáveis tratadas.",
                "complexidade": "Baixa",
                "id_item": 3897,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "De 21 até 50 variáveis tratadas.",
                "complexidade": "Média",
                "id_item": 3898,
                "valor": 9.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Acima de 50 variáveis tratadas.",
                "complexidade": "Alta",
                "id_item": 3899,
                "valor": 14.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.15.3",
        "descricao_tarefa": "Criação de módulo em Python utilizado para automação de construção de infraestrutura de TI",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2153,
        "uni_medida": "Por arquivo"
    },
    {
        "atividade": "5.15  Atividade: Software de Infraestrutura",
        "itens": [
            {
                "descricao_complex": "Até 20 variáveis tratadas.",
                "complexidade": "Baixa",
                "id_item": 3900,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "De 21 até 50 variáveis tratadas.",
                "complexidade": "Média",
                "id_item": 3901,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Acima de 50 variáveis tratadas.",
                "complexidade": "Alta",
                "id_item": 3902,
                "valor": 7.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.15.4",
        "descricao_tarefa": "Alteração de módulo em Python utilizado para automação de construção de infraestrutura de TI",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2154,
        "uni_medida": "Por arquivo"
    },
    {
        "atividade": "5.15  Atividade: Software de Infraestrutura",
        "itens": [
            {
                "descricao_complex": "Até 20 variáveis tratadas.",
                "complexidade": "Baixa",
                "id_item": 3903,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "De 21 até 50 variáveis tratadas.",
                "complexidade": "Média",
                "id_item": 3904,
                "valor": 8.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Acima de 50 variáveis tratadas.",
                "complexidade": "Alta",
                "id_item": 3905,
                "valor": 12.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.15.5",
        "descricao_tarefa": "Criação de módulo em Java utilizado para automação de construção de infraestrutura de TI",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2155,
        "uni_medida": "Por arquivo"
    },
    {
        "atividade": "5.15  Atividade: Software de Infraestrutura",
        "itens": [
            {
                "descricao_complex": "Até 20 variáveis tratadas.",
                "complexidade": "Baixa",
                "id_item": 3906,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "De 21 até 50 variáveis tratadas.",
                "complexidade": "Média",
                "id_item": 3907,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Acima de 50 variáveis tratadas.",
                "complexidade": "Alta",
                "id_item": 3908,
                "valor": 6.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.15.6",
        "descricao_tarefa": "Alteração de módulo em Java utilizado para automação de construção de infraestrutura de TI",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2156,
        "uni_medida": "Por arquivo"
    },
    {
        "atividade": "5.15  Atividade: Software de Infraestrutura",
        "itens": [
            {
                "descricao_complex": "Até 5 instruções implementadas.",
                "complexidade": "Baixa",
                "id_item": 3909,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "De 6 a 10 instruções implementadas.",
                "complexidade": "Média",
                "id_item": 3910,
                "valor": 8.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Acima de 10 instruções implementadas.",
                "complexidade": "Alta",
                "id_item": 3911,
                "valor": 12.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.15.7",
        "descricao_tarefa": "Elaboração e criação de arquivo de definição \"Dockerfile\"",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2157,
        "uni_medida": "Por arquivo"
    },
    {
        "atividade": "5.15  Atividade: Software de Infraestrutura",
        "itens": [
            {
                "descricao_complex": "Até 5 instruções implementadas.",
                "complexidade": "Baixa",
                "id_item": 3912,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "De 6 a 10 instruções implementadas.",
                "complexidade": "Média",
                "id_item": 3913,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Acima de 10 instruções implementadas.",
                "complexidade": "Alta",
                "id_item": 3914,
                "valor": 6.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.15.8",
        "descricao_tarefa": "Alteração de arquivo de definição \"Dockerfile\"",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2158,
        "uni_medida": "Por arquivo"
    },
    {
        "atividade": "5.15  Atividade: Software de Infraestrutura",
        "itens": [
            {
                "descricao_complex": "Até 5 serviços implementados.",
                "complexidade": "Baixa",
                "id_item": 3915,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "De 6 a 10 serviços implementados.",
                "complexidade": "Média",
                "id_item": 3916,
                "valor": 8.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Acima de 10 serviços  implementados.",
                "complexidade": "Alta",
                "id_item": 3917,
                "valor": 12.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.15.9",
        "descricao_tarefa": "Elaboração e criação de arquivo de definição \"Docker Compose\"",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2159,
        "uni_medida": "Por arquivo"
    },
    {
        "atividade": "5.15  Atividade: Software de Infraestrutura",
        "itens": [
            {
                "descricao_complex": "Até 5 serviços implementados.",
                "complexidade": "Baixa",
                "id_item": 3918,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "De 6 a 10 serviços implementados.",
                "complexidade": "Média",
                "id_item": 3919,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Acima de 10 serviços  implementados.",
                "complexidade": "Alta",
                "id_item": 3920,
                "valor": 6.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.15.10",
        "descricao_tarefa": "Alteração de arquivo de definição \"Docker Compose\"",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2160,
        "uni_medida": "Por arquivo"
    },
    {
        "atividade": "5.15  Atividade: Software de Infraestrutura",
        "itens": [
            {
                "descricao_complex": "Até 2 componentes implementados.",
                "complexidade": "Baixa",
                "id_item": 3921,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "De 3 a 5 componentes implementados.",
                "complexidade": "Média",
                "id_item": 3922,
                "valor": 8.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Acima de 5 componentes\nimplementados.",
                "complexidade": "Alta",
                "id_item": 3923,
                "valor": 12.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.15.11",
        "descricao_tarefa": "Definição e criação de arquivo de configuração para orquestrador de contêineres;",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2161,
        "uni_medida": "Por arquivo"
    },
    {
        "atividade": "5.15  Atividade: Software de Infraestrutura",
        "itens": [
            {
                "descricao_complex": "Até 2 componentes implementados.",
                "complexidade": "Baixa",
                "id_item": 3924,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "De 3 a 5 componentes implementados.",
                "complexidade": "Média",
                "id_item": 3925,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Acima de 5 componentes\nimplementados.",
                "complexidade": "Alta",
                "id_item": 3926,
                "valor": 6.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.15.12",
        "descricao_tarefa": "Alteração de arquivo de configuração para orquestrador de contêineres;",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2162,
        "uni_medida": "Por arquivo"
    },
    {
        "atividade": "5.15  Atividade: Software de Infraestrutura",
        "itens": [
            {
                "descricao_complex": "Até 10 instruções implementadas.",
                "complexidade": "Baixa",
                "id_item": 3927,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "De 11 a 20 instruções implementadas.",
                "complexidade": "Média",
                "id_item": 3928,
                "valor": 8.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Acima de 20 instruções implementadas.",
                "complexidade": "Alta",
                "id_item": 3929,
                "valor": 12.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.15.13",
        "descricao_tarefa": "Definição e criação de objetos de integração e negócio Node.js/GoLang/Kotlin;",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2163,
        "uni_medida": "Por arquivo"
    },
    {
        "atividade": "5.15  Atividade: Software de Infraestrutura",
        "itens": [
            {
                "descricao_complex": "Até 10 instruções implementadas.",
                "complexidade": "Baixa",
                "id_item": 3930,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "De 11 a 20 instruções implementadas.",
                "complexidade": "Média",
                "id_item": 3931,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Acima de 20 instruções implementadas.",
                "complexidade": "Alta",
                "id_item": 3932,
                "valor": 6.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.15.14",
        "descricao_tarefa": "Alteração de objetos de integração e negócio Node.js/GoLang/Kotlin;",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2164,
        "uni_medida": "Por arquivo"
    },
    {
        "atividade": "5.16  Atividade: Mobile",
        "itens": [
            {
                "descricao_complex": "Ocorrência de até 3 pontos de complexidade elencados abaixo:\nItens de 1 ponto:\n- Uso de até 8 componentes de interface que não exijam datasource(Ex.: campo de texto, switch, label, botão etc...);\n- Uso de até 5 alertas na tela(Ex.: dialog, alertview, actionsheet);\n- Uso de até 5 eventos de reconhecimento de gestos simples (Ex.: toque simples ou duplo, long press);\n- Uso de até 1 evento de reconhecimento de gestos complexos (Ex.: pinça, drag, swipe);\n- Criação de layout responsivo (landscape e portrait);\n- Tela customizada com arquivos de layout especifica para tablet;\n- Utilização de layout com paginação;\n- Aplicação de internacionalização (evento único);\n- Uso de gerenciadores de navegação (Ex.: navigationController);\n- Tratamento de eventos por campo de tela (Ex.: listeners de componentes de tela, campo de texto, seletor de data, switch entre outros, para validações e execuções de scripts) = 1 ponto por tratamento de evento;\n- Utilização de componentes de interface que exijam um datasource (Ex.: listas verticais e horizontais, combobox) = 1 ponto por componente;\nItens de 2 pontos:\n- Uso de mais de 8 componentes de interface que não exijam datasource (Ex.: campo de texto, switch, label, botão etc...);\n- Uso de mais de 5 alertas na tela (Ex.: dialog, alertview, actionsheet);\n- Uso de mais de 5 eventos de reconhecimento de gestos simples (Ex.: toque simples ou duplo, long press); - Uso de mais de 1 evento de reconhecimento de gestos complexos (Ex.: pinça, drag, swipe);",
                "complexidade": "Baixa",
                "id_item": 3933,
                "valor": 6.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Ocorrência de uma das funcionalidades abaixo:\n- Captura de código de barras ou QRCode Ou\nOcorrência de 4 a 8 pontos de complexidade elencados abaixo:\nItens de 1 ponto:\n- Uso de até 8 componentes de interface que não exijam datasource (Ex.: campo de texto, switch, label, botão etc);\n- Uso de até 5 alertas na tela (Ex.: dialog, alertview, actionsheet);\n- Uso de até 5 eventos de reconhecimento de gestos simples (Ex.: toque simples ou duplo, longpress);\n- Uso de até 1 evento de reconhecimento de gestos complexos (Ex.: pinça, drag, swipe);\n- Criação de layout responsivo (landscape e portrait);\n- Tela customizada com arquivos de layout especifica para tablet;\n- Utilização de layout com paginação;\n- Aplicação de internacionalização (evento único);\n- Uso de gerenciadores de navegação (Ex.: navigationController);\n- Tratamento de eventos por campo de tela (Ex.: listeners de componentes de tela, campo de texto, seletor de data, switch entre outros, para validações e execuções de scripts) = 1 ponto por tratamento de evento;\n- Utilização de componentes de interface que exijam um datasource (Ex.: listas verticais e horizontais, combobox) = 1 ponto por componente;\nItens de 2 pontos:\n- Uso de mais de 8 componentes de interface que não exijam datasource (Ex.: campo de texto, switch, label, botão etc);\n- Uso de mais de 5 alertas na tela (Ex.: dialog, alertview, actionsheet);\n- Uso de mais de 5 eventos de reconhecimento de gestos simples (Ex.: toque simples ou duplo, longpress);\n- Uso de mais de 1 evento de reconhecimento de gestos complexos (Ex.: pinça, drag, swipe);",
                "complexidade": "Média",
                "id_item": 3934,
                "valor": 12.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Ocorrência de uma das funcionalidades abaixo:\n- Streaming vídeo;\n- Customização de câmera;\n- Uso de gerenciadores de layout complexos (Ex.: layout de divisão de tela/SplitLayout)\nOu\nAcima de 8 pontos de complexidade elencados abaixo:\nItens de 1 ponto:\n- Uso de até 8 componentes de interface que não exijam datasource (Ex.: campo de texto, switch, label, botão etc);\n- Uso de até 5 alertas na tela (Ex.: dialog, alertview, actionsheet);\n- Uso de até 5 eventos de reconhecimento de gestos simples (Ex.: toque simples ou duplo, long press);\n- Uso de até 1 evento de reconhecimento de gestos complexos (Ex.: pinça, drag, swipe);\n- Criação de layout responsivo (landscape e portrait);\n- Tela customizada com arquivos de layout especifica para tablet;\n- Utilização de layout com paginação;\n- Aplicação de internacionalização (evento único);\n- Uso de gerenciadores de navegação (Ex.: navigationController);\n- Tratamento de eventos por campo de tela (Ex.: listeners de componentes de tela, campo de texto, seletor de data, switch entre outros, para validações e execuções de scripts) = 1 ponto por tratamento de evento;\n- Utilização de componentes de interface que exijam um datasource (Ex.: listas verticais e horizontais, combobox) = 1 ponto\npor componente; Itens de 2 pontos:\n- Uso de mais de 8 componentes de interface que não exijam datasource (Ex.: campo de texto, switch, label, botão etc);\n- Uso de mais de 5 alertas na tela (Ex.: dialog, alertview, actionsheet);\n- Uso de mais de 5 eventos de reconhecimento de gestos simples (Ex.: toque simples ou duplo, long press);\n- Uso de mais de 1 evento de reconhecimento de gestos complexos (Ex.: pinça, drag, swipe);",
                "complexidade": "Alta",
                "id_item": 3935,
                "valor": 24.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.16.1",
        "descricao_tarefa": "Desenvolvimento de Interface (elaboração gráfica de tela, a partir de especificação técnica)",
        "plataforma": "Mobile (Aplicações Nativas)",
        "disciplina": 5,
        "id_tarefa": 2165,
        "uni_medida": "Por Tela"
    },
    {
        "atividade": "5.16  Atividade: Mobile",
        "itens": [
            {
                "descricao_complex": "Ocorrência de até 3 pontos de complexidade elencados abaixo:                                      Itens de 1 ponto:\n- Uso de até 8 componentes de interface que não exijam datasource(Ex.: campo de texto, switch, label, botão etc...);\n- Uso de até 5 alertas na tela (Ex.: dialog, alertview, actionsheet);\n- Uso de até 5 eventos de reconhecimento de gestos simples (Ex.: toque simples ou duplo, long press);\n- Uso de até 1 evento de reconhecimento de gestos complexos (Ex.: pinça, drag, swipe);\n- Criação de layout responsivo (landscape e portrait);\n- Tela customizada com arquivos de layout especifica para tablet;\n- Utilização de layout com paginação;\n- Aplicação de internacionalização (evento único);\n- Uso de gerenciadores de navegação (Ex.: navigationController);\n- Tratamento de eventos por campo de tela (Ex.: listeners de componentes de tela, campo de texto, seletor de data, switch entre outros, para validações e execuções de scripts) = 1 ponto por tratamento de evento;\n- Utilização de componentes de interface que exijam um datasource (Ex.: listas verticais e horizontais, combobox) = 1 ponto por componente;        Itens de 2 pontos:                                         - Uso de mais de 8 componentes de interface que não exijam datasource (Ex.: campo de texto, switch, label, botão etc);\n- Uso de mais de 5 alertas na tela (Ex.: dialog, alertview, actionsheet);\n- Uso de mais de 5 eventos de reconhecimento de gestos simples (Ex.: toque simples ou duplo, longpress); - Uso de mais de 1 evento de reconhecimento de gestos complexos (Ex.: pinça, drag, swipe);",
                "complexidade": "Baixa",
                "id_item": 3936,
                "valor": 3.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Ocorrência de uma das funcionalidades abaixo:\n- Captura de código de barras ou QRCode      Ou                                                     Ocorrência de 4 a 8 pontos de complexidade elencados abaixo:                                                                  Itens de 1 ponto:\n- Uso de até 8 componentes de interface que não exijam datasource (Ex.: campo de texto, switch, label, botão etc);\n- Uso de até 5 alertas na tela (Ex.: dialog, alertview, actionsheet);\n- Uso de até 5 eventos de reconhecimento de gestos simples (Ex.: toque simples ou duplo, longpress);\n- Uso de até 1 evento de reconhecimento de gestos complexos (Ex.: pinça, drag, swipe);\n- Criação de layout responsivo (landscape e portrait);\n- Tela customizada com arquivos de layout especifica para tablet;\n- Utilização de layout com paginação;\n- Aplicação de internacionalização (evento único);\n- Uso de gerenciadores de navegação (Ex.: navigationController);\n- Tratamento de eventos por campo de tela (Ex.: listeners de componentes de tela, campo de texto, seletor de data, switch entre\noutros, para validações e execuções de scripts) = 1 ponto por tratamento de evento; - Utilização de componentes de interface que exijam um datasource (Ex.: listas verticais e horizontais, combobox) = 1 ponto por componente;                          I321Itens de 2 pontos:\n- Uso de mais de 8 componentes de interface que não exijam datasource (Ex.: campo de texto, switch, label, botão etc);\n- Uso de mais de 5 alertas na tela (Ex.: dialog, alertview, actionsheet);\n- Uso de mais de 5 eventos de reconhecimento de gestos simples (Ex.: toque simples ou duplo, longpress);\n- Uso de mais de 1 evento de reconhecimento de gestos complexos (Ex.: pinça, drag, swipe); - Utilização de componentes de interface que exijam um datasource (Ex.: listas verticais e horizontais, combobox) = 1 ponto por componente;                          I321Itens de 2 pontos:\n- Uso de mais de 8 componentes de interface que não exijam datasource (Ex.: campo de texto, switch, label, botão etc);\n- Uso de mais de 5 alertas na tela (Ex.: dialog, alertview, actionsheet);\n- Uso de mais de 5 eventos de reconhecimento de gestos simples (Ex.: toque simples ou duplo, longpress);\n- Uso de mais de 1 evento de reconhecimento de gestos complexos (Ex.: pinça, drag, swipe);",
                "complexidade": "Média",
                "id_item": 3937,
                "valor": 6.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Ocorrência de uma das funcionalidades abaixo:\n- Streaming vídeo;\n- Customização de câmera;\n- Uso de gerenciadores de layout complexos (Ex.: layout de divisão de tela/SplitLayout)      Ou                                                          Acima de 8 pontos de complexidade elencados abaixo:\nItens de 1 ponto:\n- Uso de até 8 componentes de interface que não exijam datasource(Ex.: campo de texto, switch, label, botão etc...);\n- Uso de até 5 alertas na tela (Ex.: dialog, alertview, actionsheet);\n- Uso de até 5 eventos de reconhecimento de gestos simples (Ex.: toque simples ou duplo, longpress);\n- Uso de até 1 evento de reconhecimento de gestos complexos (Ex.: pinça, drag, swipe);\n- Criação de layout responsivo (landscape e portrait);\n- Tela customizada com arquivos de layout especifica para tablet;\n- Utilização de layout com paginação;\n- Aplicação de internacionalização (evento único);\n- Uso de gerenciadores de navegação (Ex.: navigationController); - Tratamento de eventos por campo de tela (Ex.: listeners de componentes de tela, campo de texto, seletor de data, switch entre outros, para validações e execuções de scripts) = 1 ponto por tratamento de evento;\n- Utilização de componentes de interface que exijam um datasource (Ex.: listas verticais e horizontais, combobox) = 1 ponto por componente;\nItens de 2 pontos:\n- Uso de mais de 8 componentes de interface que não exijam datasource (Ex.: campo de texto, switch, label, botão etc);\n- Uso de mais de 5 alertas na tela (Ex.: dialog, alertview, actionsheet);\n- Uso de mais de 5 eventos de reconhecimento de gestos simples (Ex.: toque simples ou duplo, longpress);\n- Uso de mais de 1 evento de reconhecimento de gestos complexos (Ex.: pinça, drag, swipe);",
                "complexidade": "Alta",
                "id_item": 3938,
                "valor": 12.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.16.2",
        "descricao_tarefa": "Alteração de Interface (elaboração gráfica de tela, a partir de especificação técnica incluindo-se os componentes de interface",
        "plataforma": "Mobile (Aplicações Nativas)",
        "disciplina": 5,
        "id_tarefa": 2166,
        "uni_medida": "Por Tela"
    },
    {
        "atividade": "5.16  Atividade: Mobile",
        "itens": [
            {
                "descricao_complex": "Até 6 regras de comportamento.  (Ex. Ações que podem ser executadas e/ou formas de exibição do componente).",
                "complexidade": "Baixa",
                "id_item": 3939,
                "valor": 10.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "De 7 a 12 regras de comportamento. (Ex. Ações que podem ser executadas e/ou formas de exibição do componente).",
                "complexidade": "Média",
                "id_item": 3940,
                "valor": 20.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Acima de 12 regras de comportamento. (Ex. Ações que podem ser executadas e/ou formas de exibição do componente).",
                "complexidade": "Alta",
                "id_item": 3941,
                "valor": 40.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.16.3",
        "descricao_tarefa": "Desenvolvimento de componente de interface reutilizável e customizado (elaboração gráfica de componente de interface, solicitada de forma avulsa, para adição ou substituição em tela já existente. Ex.: botões, campo de texto, etc.)",
        "plataforma": "Mobile (Aplicações Nativas)",
        "disciplina": 5,
        "id_tarefa": 2167,
        "uni_medida": "Por componente"
    },
    {
        "atividade": "5.16  Atividade: Mobile",
        "itens": [
            {
                "descricao_complex": "Até 6 regras de comportamento. (Ex. Ações que podem ser executadas e/ou formas de exibição do componente).",
                "complexidade": "Baixa",
                "id_item": 3942,
                "valor": 5.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "De 7 a 12 regras de comportamento. (Ex. Ações que podem ser executadas e/ou formas de exibição do componente).",
                "complexidade": "Média",
                "id_item": 3943,
                "valor": 10.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Mais 12 regras de comportamento. (Ex. Ações que podem ser executadas e/ou formas de exibição do componente).",
                "complexidade": "Alta",
                "id_item": 3944,
                "valor": 20.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.16.4",
        "descricao_tarefa": "Alteração de componente de interface reutilizável e customizado\n(elaboração gráfica de componente de interface, solicitada de forma avulsa, para adição ou substituição em tela já existente. Ex.:\nbotões, campo de texto, etc.)",
        "plataforma": "Mobile (Aplicações Nativas)",
        "disciplina": 5,
        "id_tarefa": 2168,
        "uni_medida": "Por componente"
    },
    {
        "atividade": "5.16  Atividade: Mobile",
        "itens": [
            {
                "descricao_complex": "Até 10 métodos codificados em todas as classes relacionadas à funcionalidade (não considerar métodos que podem ser gerados\nautomaticamente como, por exemplo, getters e setters).",
                "complexidade": "Baixa",
                "id_item": 3945,
                "valor": 6.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "De 11 a 20 métodos codificados em todas as classes relacionadas\nà funcionalidade (não considerar métodos que podem ser gerados automaticamente como por exemplo getters e setters).",
                "complexidade": "Média",
                "id_item": 3946,
                "valor": 12.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "De 21 a 30 métodos codificados em todas as classes relacionadas à funcionalidade (não considerar métodos que podem ser gerados automaticamente como, por exemplo, getters e setters).",
                "complexidade": "Alta",
                "id_item": 3947,
                "valor": 20.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            },
            {
                "descricao_complex": "Acima de 30 métodos codificados em todas as classes relacionadas à funcionalidade (não considerar métodos que podem ser gerados automaticamente como, por exemplo, getters e setters).",
                "complexidade": "Muito Alta",
                "id_item": 3948,
                "valor": 30.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 5
            }
        ],
        "tarefa": "5.16.5",
        "descricao_tarefa": "Desenvolvimento de funcionalidade não vinculada à tela (não considerar consumo de serviço interno. Ex.: serviços disponibilizados pelo servidor web.)",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2169,
        "uni_medida": "Por funcionalidade"
    },
    {
        "atividade": "5.16  Atividade: Mobile",
        "itens": [
            {
                "descricao_complex": "Até 10 métodos alterados em todas as classes relacionadas à funcionalidade (não considerar métodos que podem ser gerados automaticamente como, por exemplo, getters e setters).",
                "complexidade": "Baixa",
                "id_item": 3949,
                "valor": 3.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "De 11 a 20 métodos alterados em todas as classes relacionadas à funcionalidade (não considerar métodos que podem ser gerados automaticamente como, por exemplo, getters e setters).",
                "complexidade": "Média",
                "id_item": 3950,
                "valor": 6.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "De 21 a 30 métodos alterados em todas as classes relacionadas à funcionalidade (não considerar métodos que podem ser gerados automaticamente como, por exemplo, getters e setters).",
                "complexidade": "Alta",
                "id_item": 3951,
                "valor": 10.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            },
            {
                "descricao_complex": "Acima de 30 métodos codificados em todas as classes relacionadas à funcionalidade (não considerar métodos que podem ser gerados automaticamente como, por exemplo, getters e setters).",
                "complexidade": "Muito Alta",
                "id_item": 3952,
                "valor": 15.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 5
            }
        ],
        "tarefa": "5.16.6",
        "descricao_tarefa": "Alteração de funcionalidade não vinculada à tela (não considerar consumo de serviço interno. Ex.: serviços disponibilizados pelo servidor web.)",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2170,
        "uni_medida": "Por funcionalidade"
    },
    {
        "atividade": "5.16  Atividade: Mobile",
        "itens": [
            {
                "descricao_complex": "Codificar consumo de serviço pelo aplicativo. Ex.: serviços disponibilizados pelo servidor web.",
                "complexidade": "N/A",
                "id_item": 3953,
                "valor": 1.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.16.7",
        "descricao_tarefa": "Criar consumo de serviço interno e tratamento do retorno",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2171,
        "uni_medida": "Por serviço consumido"
    },
    {
        "atividade": "5.16  Atividade: Mobile",
        "itens": [
            {
                "descricao_complex": "Alterar consumo de serviço pelo aplicativo. Ex.: serviços disponibilizados pelo servidor web.",
                "complexidade": "N/A",
                "id_item": 3954,
                "valor": 0.5,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.16.8",
        "descricao_tarefa": "Alterar consumo de serviço interno e\ntratamento de retorno",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2172,
        "uni_medida": "Por serviço consumido"
    },
    {
        "atividade": "5.16  Atividade: Mobile",
        "itens": [
            {
                "descricao_complex": "Desenvolver função que acione o GPS do dispositivo para captura\nda localização do usuário, sem atualização contínua e sem exibição em mapa.",
                "complexidade": "Baixa",
                "id_item": 3955,
                "valor": 10.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Desenvolver função que acione o GPS do dispositivo para captura\nda localização do usuário, com atualização contínua e/ou exibição em mapa, sem cálculo de rotas.",
                "complexidade": "Média",
                "id_item": 3956,
                "valor": 20.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Desenvolver função que acione o GPS do dispositivo para captura da localização do usuário, com atualização contínua e/ou exibição em mapa, com cálculo de rotas e apresentação de pontos de interesse.",
                "complexidade": "Alta",
                "id_item": 3957,
                "valor": 30.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.16.9",
        "descricao_tarefa": "Desenvolvimento de captura de dados de localização do GPS do dispositivo",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2173,
        "uni_medida": "Por mapa"
    },
    {
        "atividade": "5.16  Atividade: Mobile",
        "itens": [
            {
                "descricao_complex": "Widget para apresentação de dados:",
                "complexidade": "Baixa",
                "id_item": 3958,
                "valor": 10.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Widget para apresentação e/ou entrada de dados:",
                "complexidade": "Alta",
                "id_item": 3959,
                "valor": 20.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.16.10",
        "descricao_tarefa": "Implementar Widget",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2174,
        "uni_medida": "Por Widget"
    },
    {
        "atividade": "5.16  Atividade: Mobile",
        "itens": [
            {
                "descricao_complex": "Implementar função que acione a leitora biométrica do dispositivo, com o objetivo de capturar dados para identificação do usuário.",
                "complexidade": "N/A",
                "id_item": 3960,
                "valor": 40.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.16.11",
        "descricao_tarefa": "Implementar leitura biométrica em dispositivo",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2175,
        "uni_medida": "Por leitor"
    },
    {
        "atividade": "5.16  Atividade: Mobile",
        "itens": [
            {
                "descricao_complex": "Implementar componentes necessários para incluir, alterar, consultar e excluir dados em uma tabela.",
                "complexidade": "N/A",
                "id_item": 3961,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.16.12",
        "descricao_tarefa": "Implementar persistência de dados",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2176,
        "uni_medida": "Por entidade"
    },
    {
        "atividade": "5.16  Atividade: Mobile",
        "itens": [
            {
                "descricao_complex": "Implementar função que utilize algoritmo de criptografia já existente (DES, 3DES, MD5).",
                "complexidade": "N/A",
                "id_item": 3962,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.16.13",
        "descricao_tarefa": "Implementar algoritmo de\ncriptografia",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2177,
        "uni_medida": "Por algoritmo"
    },
    {
        "atividade": "5.16  Atividade: Mobile",
        "itens": [
            {
                "descricao_complex": "Codificar e configurar conexão com servidor de envio de notificações PUSH.",
                "complexidade": "N/A",
                "id_item": 3963,
                "valor": 40.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.16.14",
        "descricao_tarefa": "Implementar Push",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2178,
        "uni_medida": "Por push"
    },
    {
        "atividade": "5.16  Atividade: Mobile",
        "itens": [
            {
                "descricao_complex": "Codificar o tratamento da notificação ao ser recebida pelo dispositivo.",
                "complexidade": "N/A",
                "id_item": 3964,
                "valor": 20.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.16.15",
        "descricao_tarefa": "Implementar tratamento ao receber notificação Push",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2179,
        "uni_medida": "Por regra com o tratamento da mesma"
    },
    {
        "atividade": "5.16  Atividade: Mobile",
        "itens": [
            {
                "descricao_complex": "Implementar função que acione o NFC do dispositivo para troca de dados com outros dispositivos NFC.",
                "complexidade": "N/A",
                "id_item": 3965,
                "valor": 48.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.16.16",
        "descricao_tarefa": "Implementar função que acione o NFC do dispositivo",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2180,
        "uni_medida": "Por função"
    },
    {
        "atividade": "5.16  Atividade: Mobile",
        "itens": [
            {
                "descricao_complex": "Animações que utilizem o sdk da plataforma. Exemplo: Fade in,\nFade out, Flip, Slide. Implementar animações nativas da plataforma.",
                "complexidade": "Baixa",
                "id_item": 3966,
                "valor": 1.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Animações customizadas",
                "complexidade": "Alta",
                "id_item": 3967,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.16.17",
        "descricao_tarefa": "Implementar animação",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2181,
        "uni_medida": "Por elemento animado"
    },
    {
        "atividade": "5.16  Atividade: Mobile",
        "itens": [
            {
                "descricao_complex": "Implementar função que integre a API de terceiros.",
                "complexidade": "N/A",
                "id_item": 3968,
                "valor": 16.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.16.18",
        "descricao_tarefa": "Implementar função que integre a API de terceiros",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2182,
        "uni_medida": "Por função"
    },
    {
        "atividade": "5.16  Atividade: Mobile",
        "itens": [
            {
                "descricao_complex": "Tipos de tratamento como: iluminação, crop, redimensionamento, filtros de imagem, etc.",
                "complexidade": "N/A",
                "id_item": 3969,
                "valor": 30.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.16.19",
        "descricao_tarefa": "Implementar tratamento de\nimagem",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2183,
        "uni_medida": "Por imagem tratada"
    },
    {
        "atividade": "5.16  Atividade: Mobile",
        "itens": [
            {
                "descricao_complex": "Implementar tratamentos necessários para adequar o arquivo às restrições de upload. Ex: compressão de imagem.",
                "complexidade": "N/A",
                "id_item": 3970,
                "valor": 24.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.16.20",
        "descricao_tarefa": "Implementar tratamento de arquivos para\nupload",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2184,
        "uni_medida": "Por função de upload"
    },
    {
        "atividade": "5.16  Atividade: Mobile",
        "itens": [
            {
                "descricao_complex": "Implementar abertura de outros aplicativos com passagem de parâmetros. Ex: abertura de mapas, facebook, acionamento simples da câmera, etc.",
                "complexidade": "N/A",
                "id_item": 3971,
                "valor": 8.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.16.21",
        "descricao_tarefa": "Implementar abertura de aplicativo através de\nUrlScheme/Intent",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2185,
        "uni_medida": "Por aplicativo integrado"
    },
    {
        "atividade": "5.16  Atividade: Mobile",
        "itens": [
            {
                "descricao_complex": "Quantidade de até 20 itens de complexidade abaixo:\n- Cenários de teste (por cenário);\n- Configurações a fontes de dados externos (por configuração)",
                "complexidade": "Baixa",
                "id_item": 3972,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Quantidade de 21 até 40 itens de complexidade elencados acima.",
                "complexidade": "Média",
                "id_item": 3973,
                "valor": 12.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Quantidade acima de 40 itens de complexidade elencados acima.",
                "complexidade": "Alta",
                "id_item": 3974,
                "valor": 20.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.16.22",
        "descricao_tarefa": "Codificação de objetos de teste unitário (não considerar o teste unitário previsto no PDSTI)",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2186,
        "uni_medida": "Por classe"
    },
    {
        "atividade": "5.17  Atividade: Tarefas correlacionadas à Implementação",
        "itens": [
            {
                "descricao_complex": "Carregar base de dados.",
                "complexidade": "N/A",
                "id_item": 3975,
                "valor": 0.5,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.17.1",
        "descricao_tarefa": "Load",
        "plataforma": "Mainframe",
        "disciplina": 5,
        "id_tarefa": 2187,
        "uni_medida": "Por tabela"
    },
    {
        "atividade": "5.17  Atividade: Tarefas correlacionadas à Implementação",
        "itens": [
            {
                "descricao_complex": "Descarregar base de dados.",
                "complexidade": "N/A",
                "id_item": 3976,
                "valor": 0.5,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.17.2",
        "descricao_tarefa": "Unload",
        "plataforma": "Mainframe",
        "disciplina": 5,
        "id_tarefa": 2188,
        "uni_medida": "Por tabela"
    },
    {
        "atividade": "5.17  Atividade: Tarefas correlacionadas à Implementação",
        "itens": [
            {
                "descricao_complex": "Recompilar objeto(s) por motivos registrados pelo demandante.",
                "complexidade": "N/A",
                "id_item": 3977,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.17.3",
        "descricao_tarefa": "Recompilação (Objetos Cobol/Natural)",
        "plataforma": "Mainframe",
        "disciplina": 5,
        "id_tarefa": 2189,
        "uni_medida": "Por pacote de até 10 objetos"
    },
    {
        "atividade": "5.17  Atividade: Tarefas correlacionadas à Implementação",
        "itens": [
            {
                "descricao_complex": "Análise de conformidade de operação cadastrada no Catálogo de Serviços de TI, conforme estabelecido no PDSTI, resultando na aprovação ou reprovação da mesma. Em caso de reprovação, inclui-se posteriores reanálises após ajuste ou argumentação do solicitante.",
                "complexidade": "N/A",
                "id_item": 3978,
                "valor": 0.8,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.17.4",
        "descricao_tarefa": "Aprovação de operação no Catálogo Corporativo de Serviços de TI (CTL) conforme estabelecido no Processo de Desenvolvimento de Soluções de TI (PDSTI)",
        "plataforma": "Mainframe",
        "disciplina": 5,
        "id_tarefa": 2190,
        "uni_medida": "Por operação"
    },
    {
        "atividade": "5.17  Atividade: Tarefas correlacionadas à Implementação",
        "itens": [
            {
                "descricao_complex": "Atividades denominadas “Caixa Rápido” em recurso tecnológico de Gestão de Ciclo de vida de Aplicativos (IBM ALM ou similar) e sistemas complementares (Acesso etc.).\nExemplos de atendimentos:\n- Criação de Time;\n- Criação e ajustes de Linhas de Tempo;\n- Criação de Regra de Acesso;\n- Criação e atualização de Categorias;\n- Criação de Modelo de Item de Trabalho;\n- Exclusão de Modelo de Item de Trabalho;\n- Criação de Sigla;\n- Criação e atualização de Área de Projeto;\n- Migração de Itens de Trabalho;\n- Criação e Atualização de painéis e consultas;\n- Criação de consultas no JRS;\n- Geração de relatórios;\n- Migração de artefatos do RDNG;\n- Migração de artefatos do RQM.\nArtefato: detalhamento registrado em tarefa no ALM ou similar.",
                "complexidade": "N/A",
                "id_item": 3979,
                "valor": 1.5,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.17.5",
        "descricao_tarefa": "Gerenciar Ciclo de Vida de Aplicações",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2191,
        "uni_medida": "Por atendimento"
    },
    {
        "atividade": "5.17  Atividade: Tarefas correlacionadas à Implementação",
        "itens": [
            {
                "descricao_complex": "Atuar e colaborar em time ágil de forma sistemática, participando em atividades de planejamento e revisão de trabalhos, retrospectiva e apresentação de resultados.\nEntrega: participação registrada no ALM ou recurso similar.",
                "complexidade": "N/A",
                "id_item": 3980,
                "valor": 19.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.17.6",
        "descricao_tarefa": "Participar em “ritos” de sala ágil",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2192,
        "uni_medida": "por participante em sprint quinzenal"
    },
    {
        "atividade": "5.17  Atividade: Tarefas correlacionadas à Implementação",
        "itens": [
            {
                "descricao_complex": "Executar atividades tais como pesquisas, estudos e discussões que consolidem requisitos, regras de negócio e/ou refinamento de história (s) referente (s) à sprint em andamento.\nEntrega: “História(s) de Usuário” e detalhamento de sua evolução registrados no ALM ou recurso similar.",
                "complexidade": "N/A",
                "id_item": 3981,
                "valor": 17.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.17.7",
        "descricao_tarefa": "Realizar refinamento de requisitos\n(sprint em andamento)",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2193,
        "uni_medida": "por participante em sprint quinzenal"
    },
    {
        "atividade": "5.17  Atividade: Tarefas correlacionadas à Implementação",
        "itens": [
            {
                "descricao_complex": "Executar atividades tais como pesquisas, estudos e discussões que consolidem requisitos, regras de negócio e/ou refinamento de história (s) referente (s) à próxima sprint.\nEntrega: “História(s) de Usuário” e detalhamento de sua evolução registrados no ALM ou recurso similar.",
                "complexidade": "N/A",
                "id_item": 3982,
                "valor": 9.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.17.8",
        "descricao_tarefa": "Realizar refinamento de história (s)\n(próxima sprint)",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2194,
        "uni_medida": "por participante em sprint quinzenal"
    },
    {
        "atividade": "5.17  Atividade: Tarefas correlacionadas à Implementação",
        "itens": [
            {
                "descricao_complex": "Realizar o cadastramento dos dados e informações de uma operação no Catálogo Corporativo de TI (CTL).",
                "complexidade": "N/A",
                "id_item": 3983,
                "valor": 0.5,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.17.9",
        "descricao_tarefa": "Cadastrar operação para integração",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2195,
        "uni_medida": "Por operação"
    },
    {
        "atividade": "5.17  Atividade: Tarefas correlacionadas à Implementação",
        "itens": [
            {
                "descricao_complex": "Realizar o cadastramento e/ou a vinculação da mensagem no sistema MSG (Ocorrências de Mensagens).\nA mensagem deverá estar nos padrões\nestabelecidos pela Ditec no “Guia de boas práticas de redação de mensagens para usuários.",
                "complexidade": "N/A",
                "id_item": 3984,
                "valor": 0.5,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.17.10",
        "descricao_tarefa": "Cadastrar e/ou vincular mensagem",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2196,
        "uni_medida": "por mensagem"
    },
    {
        "atividade": "5.18  Atividade: HP Service Manager",
        "itens": [
            {
                "descricao_complex": "Tabela com até 10 campos",
                "complexidade": "Baixa",
                "id_item": 3985,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Tabela de 11 a 20 campos",
                "complexidade": "Média",
                "id_item": 3986,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Tabela com mais de 21 campos",
                "complexidade": "Alta",
                "id_item": 3987,
                "valor": 6.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.18.1",
        "descricao_tarefa": "Estrutura banco de dados (dbdict/datadict)",
        "plataforma": "Baixa/x86",
        "disciplina": 5,
        "id_tarefa": 2197,
        "uni_medida": "Por objeto"
    },
    {
        "atividade": "5.18  Atividade: HP Service Manager",
        "itens": [
            {
                "descricao_complex": "Formulário com até 10 campos",
                "complexidade": "Baixa",
                "id_item": 3988,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Formulário de 11 a 20 campos",
                "complexidade": "Média",
                "id_item": 3989,
                "valor": 8.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Formulário com mais de 21 campos",
                "complexidade": "Alta",
                "id_item": 3990,
                "valor": 16.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.18.2",
        "descricao_tarefa": "Design Formulário (format)",
        "plataforma": "Baixa/x86",
        "disciplina": 5,
        "id_tarefa": 2198,
        "uni_medida": "Por objeto"
    },
    {
        "atividade": "5.18  Atividade: HP Service Manager",
        "itens": [
            {
                "descricao_complex": "Formulário com até 10 campos",
                "complexidade": "Baixa",
                "id_item": 3991,
                "valor": 5.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Formulário de 11 a 20 campos",
                "complexidade": "Média",
                "id_item": 3992,
                "valor": 15.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Formulário com mais de 21 campos",
                "complexidade": "Alta",
                "id_item": 3993,
                "valor": 30.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.18.3",
        "descricao_tarefa": "Regras Formulário (formatcontrol)",
        "plataforma": "Baixa/x86",
        "disciplina": 5,
        "id_tarefa": 2199,
        "uni_medida": "Por objeto"
    },
    {
        "atividade": "5.18  Atividade: HP Service Manager",
        "itens": [
            {
                "descricao_complex": "Criação de um objeto",
                "complexidade": "Baixa",
                "id_item": 3994,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Criação de 2 a 4 objetos",
                "complexidade": "Média",
                "id_item": 3995,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Criação de mais de 5 objetos",
                "complexidade": "Alta",
                "id_item": 3996,
                "valor": 6.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.18.4",
        "descricao_tarefa": "Regras Tela (displayscreen)",
        "plataforma": "Baixa/x86",
        "disciplina": 5,
        "id_tarefa": 2200,
        "uni_medida": "Por objeto"
    },
    {
        "atividade": "5.18  Atividade: HP Service Manager",
        "itens": [
            {
                "descricao_complex": "Formulário com até 10 botões",
                "complexidade": "Baixa",
                "id_item": 3997,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Formulário de 11 a 30 botões",
                "complexidade": "Média",
                "id_item": 3998,
                "valor": 8.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Formulário com mais de 31 botões",
                "complexidade": "Alta",
                "id_item": 3999,
                "valor": 16.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.18.5",
        "descricao_tarefa": "Botões de tela (displayoption)",
        "plataforma": "Baixa/x86",
        "disciplina": 5,
        "id_tarefa": 2201,
        "uni_medida": "Por objeto"
    },
    {
        "atividade": "5.18  Atividade: HP Service Manager",
        "itens": [
            {
                "descricao_complex": "Fluxo com até 3 telas",
                "complexidade": "Baixa",
                "id_item": 4000,
                "valor": 6.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Fluxo de 4 a 6 telas",
                "complexidade": "Média",
                "id_item": 4001,
                "valor": 12.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Fluxo com mais de 7 telas",
                "complexidade": "Alta",
                "id_item": 4002,
                "valor": 18.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.18.6",
        "descricao_tarefa": "Wizards",
        "plataforma": "Baixa/x86",
        "disciplina": 5,
        "id_tarefa": 2202,
        "uni_medida": "por fluxo"
    },
    {
        "atividade": "5.18  Atividade: HP Service Manager",
        "itens": [
            {
                "descricao_complex": "Menu/ScriptLibrary/Triggers/Object/Process/States criação de até 4 objetos",
                "complexidade": "Baixa",
                "id_item": 4003,
                "valor": 5.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Menu/ScriptLibrary/Triggers/Object/Process/States criação de 5 até 10 objetos",
                "complexidade": "Média",
                "id_item": 4004,
                "valor": 15.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Menu/ScriptLibrary/Triggers/Object/Process/States criação de mais de 11 objetos",
                "complexidade": "Alta",
                "id_item": 4005,
                "valor": 30.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.18.7",
        "descricao_tarefa": "Workflow (demais objetos)",
        "plataforma": "Baixa/x86",
        "disciplina": 5,
        "id_tarefa": 2203,
        "uni_medida": "Por objeto"
    },
    {
        "atividade": "5.18  Atividade: HP Service Manager",
        "itens": [
            {
                "descricao_complex": "Até 10 campos por operação",
                "complexidade": "Baixa",
                "id_item": 4006,
                "valor": 15.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Superior a 10 campos por operações",
                "complexidade": "Alta",
                "id_item": 4007,
                "valor": 30.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.18.8",
        "descricao_tarefa": "Web Services",
        "plataforma": "Baixa/x86",
        "disciplina": 5,
        "id_tarefa": 2204,
        "uni_medida": "Por operação"
    },
    {
        "atividade": "5.18  Atividade: HP Service Manager",
        "itens": [
            {
                "descricao_complex": "Manutenção de até 15 campos",
                "complexidade": "Baixa",
                "id_item": 4008,
                "valor": 1.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Manutenção de 16 a 30 campos",
                "complexidade": "Média",
                "id_item": 4009,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Manutenção de mais de 30 campos",
                "complexidade": "Alta",
                "id_item": 4010,
                "valor": 3.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.18.9",
        "descricao_tarefa": "Alteração de Estrutura banco de dados (dbdict/datadict)",
        "plataforma": "Baixa/x86",
        "disciplina": 5,
        "id_tarefa": 2205,
        "uni_medida": "Por objeto"
    },
    {
        "atividade": "5.18  Atividade: HP Service Manager",
        "itens": [
            {
                "descricao_complex": "Manutenção de até 15 campos",
                "complexidade": "Baixa",
                "id_item": 4011,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Manutenção de 16 a 30 campos",
                "complexidade": "Média",
                "id_item": 4012,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Manutenção de mais de 30 campos",
                "complexidade": "Alta",
                "id_item": 4013,
                "valor": 8.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.18.10",
        "descricao_tarefa": "Alteração de Design Formulário\n(format)",
        "plataforma": "Baixa/x86",
        "disciplina": 5,
        "id_tarefa": 2206,
        "uni_medida": "Por objeto"
    },
    {
        "atividade": "5.18  Atividade: HP Service Manager",
        "itens": [
            {
                "descricao_complex": "Manutenção de formatcontrol de formulário com até 10 campos",
                "complexidade": "Baixa",
                "id_item": 4014,
                "valor": 3.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Manutenção de formatcontrol de formulário de 11 a 20 campos",
                "complexidade": "Média",
                "id_item": 4015,
                "valor": 8.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Manutenção de formatcontrol de formulário com mais de 21 campos",
                "complexidade": "Alta",
                "id_item": 4016,
                "valor": 15.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.18.11",
        "descricao_tarefa": "Alteração Regras Formulário (formatcontrol)",
        "plataforma": "Baixa/x86",
        "disciplina": 5,
        "id_tarefa": 2207,
        "uni_medida": "Por objeto"
    },
    {
        "atividade": "5.18  Atividade: HP Service Manager",
        "itens": [
            {
                "descricao_complex": "Manutenção de um objeto",
                "complexidade": "Baixa",
                "id_item": 4017,
                "valor": 1.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Manutenção de 2 a 4 objetos",
                "complexidade": "Média",
                "id_item": 4018,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Manutenção de mais de 5 objetos",
                "complexidade": "Alta",
                "id_item": 4019,
                "valor": 3.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.18.12",
        "descricao_tarefa": "Alteração de Regras Tela\n(displayscreen)",
        "plataforma": "Baixa/x86",
        "disciplina": 5,
        "id_tarefa": 2208,
        "uni_medida": "Por objeto"
    },
    {
        "atividade": "5.18  Atividade: HP Service Manager",
        "itens": [
            {
                "descricao_complex": "Manutenção de até 10 botões",
                "complexidade": "Baixa",
                "id_item": 4020,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Manutenção de 11 a 30 botões",
                "complexidade": "Média",
                "id_item": 4021,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Manutenção de mais de 31 botões",
                "complexidade": "Alta",
                "id_item": 4022,
                "valor": 8.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.18.13",
        "descricao_tarefa": "Alteração de Botões de tela\n(displayoption)",
        "plataforma": "Baixa/x86",
        "disciplina": 5,
        "id_tarefa": 2209,
        "uni_medida": "Por objeto"
    },
    {
        "atividade": "5.18  Atividade: HP Service Manager",
        "itens": [
            {
                "descricao_complex": "Manutenção de wizard com até 3 telas",
                "complexidade": "Baixa",
                "id_item": 4023,
                "valor": 3.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Manutenção de wizard com 4 a 6 telas",
                "complexidade": "Média",
                "id_item": 4024,
                "valor": 6.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Manutenção de wizard com mais de 7 telas",
                "complexidade": "Alta",
                "id_item": 4025,
                "valor": 9.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.18.14",
        "descricao_tarefa": "Alteração de Wizards",
        "plataforma": "Baixa/x86",
        "disciplina": 5,
        "id_tarefa": 2210,
        "uni_medida": "Por objeto"
    },
    {
        "atividade": "5.18  Atividade: HP Service Manager",
        "itens": [
            {
                "descricao_complex": "Menu/ScriptLibrary/Triggers/Object/Process/States manutenção de até 4 objetos",
                "complexidade": "Baixa",
                "id_item": 4026,
                "valor": 3.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Menu/ScriptLibrary/Triggers/Object/Process/States manutenção de 5 a 10 objetos",
                "complexidade": "Média",
                "id_item": 4027,
                "valor": 8.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Menu/ScriptLibrary/Triggers/Object/Process/States manutenção de mais de 11 objetos",
                "complexidade": "Alta",
                "id_item": 4028,
                "valor": 15.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.18.15",
        "descricao_tarefa": "Alteração de Workflow (demais objetos)",
        "plataforma": "Baixa/x86",
        "disciplina": 5,
        "id_tarefa": 2211,
        "uni_medida": "Por objeto"
    },
    {
        "atividade": "5.18  Atividade: HP Service Manager",
        "itens": [
            {
                "descricao_complex": "Manutenção de até 10 campos",
                "complexidade": "Baixa",
                "id_item": 4029,
                "valor": 8.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Manutenção de mais de 11 campos",
                "complexidade": "Alta",
                "id_item": 4030,
                "valor": 15.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.18.16",
        "descricao_tarefa": "Alteração de Web Services",
        "plataforma": "Baixa/x86",
        "disciplina": 5,
        "id_tarefa": 2212,
        "uni_medida": "Por operação"
    },
    {
        "atividade": "5.19  Atividade: Serviços de integração externa",
        "itens": [
            {
                "descricao_complex": "Existência de 5 ou 6 dos itens abaixo:\n-  Disponibilidade  de  arquivo  xml,  xsd,  wsdl,  Json  ou  arquivo Excel (xls ou csv) contendo uma descrição dos campos, mesmo sem todas as informações necessárias para criação do Book;\n- Disponibilidade de manual técnico;\n- Manual técnico em português;\n-  O  manual  técnico  possui  todas  as  informações  necessárias para   o   andamento   da   demanda   (requisitos   de   segurança, comunicação,    tamanho    das    variáveis    e    quantidade    de ocorrências, etc.);\n- Necessidade de realizar testes diretamente pela nossa equipe;\n- Quantidade de campos do copybook é menor que 20 posições.",
                "complexidade": "Baixa",
                "id_item": 4031,
                "valor": 12.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Existência de 3 ou 4 dos itens abaixo:\n-  Disponibilidade  de  arquivo  xml,  xsd,  wsdl,  Json  ou  arquivo Excel (xls ou csv) contendo uma descrição dos campos, mesmo sem todas as informações necessárias para criação do Book;\n- Disponibilidade de manual técnico;\n- Manual técnico em português;\n-  O  manual  técnico  possui  todas  as  informações  necessárias para   o   andamento   da   demanda   (requisitos   de   segurança, comunicação,    tamanho    das    variáveis    e    quantidade    de ocorrências, etc.);\n- Necessidade de realizar testes diretamente pela nossa equipe;\n- Quantidade de campos do copybook é menor que 20 posições.",
                "complexidade": "Média",
                "id_item": 4032,
                "valor": 24.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Existência de 1 ou 2 dos itens abaixo:\n-  Disponibilidade  de  arquivo  xml,  xsd,  wsdl,  Json  ou  arquivo Excel (xls ou csv) contendo uma descrição dos campos, mesmo sem todas as informações necessárias para criação do Book;\n- Disponibilidade de manual técnico;\n- Manual técnico em português;\n-  O  manual  técnico  possui  todas  as  informações  necessárias para   o   andamento   da   demanda   (requisitos   de   segurança, comunicação,    tamanho    das    variáveis    e    quantidade    de ocorrências, etc.);\n- Necessidade de realizar testes diretamente pela nossa equipe;\n- Quantidade de campos do copybook é menor que 20 posições.",
                "complexidade": "Alta",
                "id_item": 4033,
                "valor": 72.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.19.1",
        "descricao_tarefa": "Análise da integração Externa (se já existe ou qual a melhor infraestrutura de comunicação).",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2213,
        "uni_medida": "Por ação SSTI"
    },
    {
        "atividade": "5.19  Atividade: Serviços de integração externa",
        "itens": [
            {
                "descricao_complex": "Sem VPN",
                "complexidade": "Baixa",
                "id_item": 4034,
                "valor": 12.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Com de VPN",
                "complexidade": "Alta",
                "id_item": 4035,
                "valor": 24.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.19.2",
        "descricao_tarefa": "Requisição das necessidades de infraestrutura de comunicação e segurança (servidores, regras de firewall, DNS, VIP, VPN e criação do tipo de Transporte - Filas\nMQ ou EMS).",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2214,
        "uni_medida": "Por ação SSTI"
    },
    {
        "atividade": "5.19  Atividade: Serviços de integração externa",
        "itens": [
            {
                "descricao_complex": "Book com até 20 campos e havendo todas as informações",
                "complexidade": "Baixa",
                "id_item": 4036,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Book maior que 20 campos e sem informações necessárias ou mais de 3 níveis.",
                "complexidade": "Média",
                "id_item": 4037,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Book maior que 20 campos com vários níveis e sem informações necessárias.",
                "complexidade": "Alta",
                "id_item": 4038,
                "valor": 12.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.19.3",
        "descricao_tarefa": "Análise do contrato de comunicação – copybook – e operação no catálogo (tipo, tamanho e quantidade de ocorrência e caso não exista definir essas informações junto ao\ndemandante).",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2215,
        "uni_medida": "Por Objeto (Operação cadastrada no CTL)"
    },
    {
        "atividade": "5.19  Atividade: Serviços de integração externa",
        "itens": [
            {
                "descricao_complex": "Estrutura padrão de integração externa (IIB, transportes e troca de certificados)",
                "complexidade": "Baixa",
                "id_item": 4039,
                "valor": 18.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Uso de estrutura divergente da padrão.",
                "complexidade": "Alta",
                "id_item": 4040,
                "valor": 30.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.19.4",
        "descricao_tarefa": "Criar projeto BW, criar repositório GIT, configurar conexões externas; configurar transportes e configurar segurança.",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2216,
        "uni_medida": "Por integração"
    },
    {
        "atividade": "5.19  Atividade: Serviços de integração externa",
        "itens": [
            {
                "descricao_complex": "Estrutura padrão de integração externa (IIB, transportes e troca de certificados)",
                "complexidade": "Baixa",
                "id_item": 4041,
                "valor": 10.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Uso de estrutura divergente da padrão.",
                "complexidade": "Alta",
                "id_item": 4042,
                "valor": 16.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.19.5",
        "descricao_tarefa": "Alterar projeto BW, repositório GIT, reconfigurar conexões externas, reconfigurar transportes e reconfigurar segurança.",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2217,
        "uni_medida": "Por integração"
    },
    {
        "atividade": "5.19  Atividade: Serviços de integração externa",
        "itens": [
            {
                "descricao_complex": "Até 20 campos",
                "complexidade": "Baixa",
                "id_item": 4043,
                "valor": 8.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "De 21 a 40 campos",
                "complexidade": "Média",
                "id_item": 4044,
                "valor": 12.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Acima de 40 campos",
                "complexidade": "Alta",
                "id_item": 4045,
                "valor": 16.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.19.6",
        "descricao_tarefa": "Construir uma integração nova para uma operação padrão IIB.",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2218,
        "uni_medida": "Por integração"
    },
    {
        "atividade": "5.19  Atividade: Serviços de integração externa",
        "itens": [
            {
                "descricao_complex": "Até 20 campos",
                "complexidade": "Baixa",
                "id_item": 4046,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "De 21 a 40 campos",
                "complexidade": "Média",
                "id_item": 4047,
                "valor": 6.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Acima de 40 campos",
                "complexidade": "Alta",
                "id_item": 4048,
                "valor": 8.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.19.7",
        "descricao_tarefa": "Alterar uma integração de uma operação padrão IIB.",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2219,
        "uni_medida": "Por integração"
    },
    {
        "atividade": "5.19  Atividade: Serviços de integração externa",
        "itens": [
            {
                "descricao_complex": "Até 20 campos",
                "complexidade": "Baixa",
                "id_item": 4049,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "De 21 a 40 campos",
                "complexidade": "Média",
                "id_item": 4050,
                "valor": 3.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Acima de 40 campos",
                "complexidade": "Alta",
                "id_item": 4051,
                "valor": 5.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.19.8",
        "descricao_tarefa": "Validar a integração mediante execução de cenários de uso da solução de negócio, providenciar e analisar log das execuções realizadas. Realizar\neventuais ajustes na integração.",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2220,
        "uni_medida": "Por integração"
    },
    {
        "atividade": "5.19  Atividade: Serviços de integração externa",
        "itens": [
            {
                "descricao_complex": "Analisar e propor solução de integração com base em siglas e serviços disponíveis;\nProver informações de integração com base em siglas e serviços disponíveis;\nGerar conteúdo para documentação e suporte das siglas e serviços da integração;\nEntrega/Repositório: detalhamento da solução em tarefa no ALM ou similar, informado na OF.",
                "complexidade": "N/A",
                "id_item": 4052,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.19.9",
        "descricao_tarefa": "Realizar serviço de integração",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2221,
        "uni_medida": "Tarefa"
    },
    {
        "atividade": "5.20  Atividade: Sterling Business Integrator",
        "itens": [
            {
                "descricao_complex": "Possuir duas ou mais características abaixo:\n- Arquivo com até 79 campos\n- Arquivo fazendo referência a apenas 1 XSD\n- Arquivo com até 6 grupos/subgrupos\n* Caso o arquivo possua apenas 2 características, de complexidades distintas, deverá ser categorizado com a maior.\nEx.: Arquivo com 79 campos (baixa) e fazendo referência a 2 XSDs (média), será categorizado como complexidade média.",
                "complexidade": "Baixa",
                "id_item": 4053,
                "valor": 6.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Possuir duas ou mais características abaixo:\n- Arquivo com 80 até 199 campos\n- Arquivo fazendo referência a 2 XSDs\n- Arquivo com 1 regra estendida\n- Arquivo com 7 a 20 grupos/subgrupos\n* Caso o arquivo possua apenas 2 características, de complexidades distintas, deverá ser categorizado com a maior.\nEx.: Arquivo com 79 campos (baixa) e fazendo referência a 2 XSDs (média), será categorizado como complexidade média.",
                "complexidade": "Média",
                "id_item": 4054,
                "valor": 12.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Possuir duas ou mais características abaixo:\n- Arquivo com 200 ou mais campos\n- Arquivo fazendo referência a mais 2 XSDs\n- Arquivo com 2 ou mais regras estendidas\n- Arquivo mais de 20 grupos/subgrupos\n* Caso o arquivo possua apenas 2 características, de\ncomplexidades distintas, deverá ser categorizado com a maior.  Ex.: Arquivo com 79 campos (baixa) e fazendo referência a 2 XSDs (média), será categorizado como complexidade média.",
                "complexidade": "Alta",
                "id_item": 4055,
                "valor": 24.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.20.1",
        "descricao_tarefa": "Criação de mapa de conversão XML/Positional na ferramenta Sterling Business Integrator - Mapa sterling (arquivo .map ou\n.mxl)",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2222,
        "uni_medida": "Por arquivo"
    },
    {
        "atividade": "5.20  Atividade: Sterling Business Integrator",
        "itens": [
            {
                "descricao_complex": "Possuir duas ou mais características abaixo:\n- Arquivo com até 79 campos\n- Arquivo fazendo referência a apenas 1 XSD\n- Arquivo com até 6 grupos/subgrupos\n* Caso o arquivo possua apenas 2 características, de complexidades distintas, deverá ser categorizado com a maior.\nEx.: Arquivo com 79 campos (baixa) e fazendo referência a 2 XSDs (média), será categorizado como complexidade média.",
                "complexidade": "Baixa",
                "id_item": 4056,
                "valor": 3.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Possuir duas ou mais características abaixo:\n- Arquivo com 80 até 199 campos\n- Arquivo fazendo referência a 2 XSDs\n- Arquivo com 1 regra estendida\n- Arquivo com 7 a 20 grupos/subgrupos\n* Caso o arquivo possua apenas 2 características, de complexidades distintas, deverá ser categorizado com a maior.  Ex.: Arquivo com 79 campos (baixa) e fazendo referência a 2 XSDs\n(média), será categorizado como complexidade média.",
                "complexidade": "Média",
                "id_item": 4057,
                "valor": 6.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 3
            },
            {
                "descricao_complex": "Possuir duas ou mais características abaixo:\n- Arquivo com 200 ou mais campos\n- Arquivo fazendo referência a mais 2 XSDs\n- Arquivo com 2 ou mais regras estendidas\n- Arquivo mais de 20 grupos/subgrupos\n* Caso o arquivo possua apenas 2 características, de complexidades distintas, deverá ser categorizado com a maior.\nEx.: Arquivo com 79 campos (baixa) e fazendo referência a 2 XSDs (média), será categorizado como complexidade média.",
                "complexidade": "Alta",
                "id_item": 4058,
                "valor": 12.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "5.20.2",
        "descricao_tarefa": "Alteração de mapa de conversão XML/Positional na ferramenta Sterling Business Integrator - Mapa sterling (arquivo .map ou\n.mxl)",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2223,
        "uni_medida": "Por arquivo"
    },
    {
        "atividade": "5.21  Atividade: Curadoria - Design de Diálogo",
        "itens": [
            {
                "descricao_complex": "Criar ou alterar um nó de diálogo com condições como entidades, intenções e variáveis de contexto e podendo utilizar recursos de programação como actions, spel, json, javascript, slots, handlers.\nEntrega: arquivo com documentação do fluxo de diálogo, printscreen de evidência do diálogo criado/alterado. No caso de alteração, detalhar o que foi alterado.",
                "complexidade": "N/A",
                "id_item": 4059,
                "valor": 5.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.21.1",
        "descricao_tarefa": "Criar ou alterar nó de diálogo, história de usuário ou recurso similar",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2224,
        "uni_medida": "por nó (pai ou filho) ou história"
    },
    {
        "atividade": "5.21  Atividade: Curadoria - Design de Diálogo",
        "itens": [
            {
                "descricao_complex": "Incluir ou alterar intenção ou entidade.",
                "complexidade": "N/A",
                "id_item": 4060,
                "valor": 0.5,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.21.2",
        "descricao_tarefa": "Incluir ou alterar\nartefatos de IA - intenções ou entidades",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2225,
        "uni_medida": "por intenção/entidade"
    },
    {
        "atividade": "5.21  Atividade: Curadoria - Design de Diálogo",
        "itens": [
            {
                "descricao_complex": "Prospectar novas ferramentas e metodologias para aplicação em curadoria.\nEntrega: relatório contendo introdução, objetivo da pesquisa, detalhamento dos trabalhos e conclusão\ndos estudos.",
                "complexidade": "N/A",
                "id_item": 4061,
                "valor": 24.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.21.3",
        "descricao_tarefa": "Pesquisa para prospecção de novas ferramentas e metodologias",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2226,
        "uni_medida": "por pesquisa"
    },
    {
        "atividade": "5.21  Atividade: Curadoria - Design de Diálogo",
        "itens": [
            {
                "descricao_complex": "Testar novas ferramentas e metodologias para aplicação em curadoria.\nEntrega: relatório contendo o objetivo dos testes, evidenciando etapas realizadas, resultados e parecer\ntécnico.",
                "complexidade": "N/A",
                "id_item": 4062,
                "valor": 24.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.21.4",
        "descricao_tarefa": "Testes de novas ferramentas e metodologias",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2227,
        "uni_medida": "Por produto"
    },
    {
        "atividade": "5.21  Atividade: Curadoria - Design de Diálogo",
        "itens": [
            {
                "descricao_complex": "Coletar dados para geração de relatórios usando\nquerie de um parâmetro.\nEntrega: relatório contendo dados obtidos.",
                "complexidade": "N/A",
                "id_item": 4063,
                "valor": 1.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.21.5",
        "descricao_tarefa": "Gerar dados para relatório",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2228,
        "uni_medida": "Por Relatório"
    },
    {
        "atividade": "5.21  Atividade: Curadoria - Design de Diálogo",
        "itens": [
            {
                "descricao_complex": "Até 100 processos de avaliação do comportamento do bot perante as entradas dos usuários, confirmando acertos ou apontando inadequações para correção.\nExclusões não são consideradas.\nEntrega: printscreen do dashboard do NIA ou outra ferramenta de anotação evidenciando a produção no\nperíodo.",
                "complexidade": "N/A",
                "id_item": 4064,
                "valor": 5.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.21.6",
        "descricao_tarefa": "Curadoria de interações/entradas de usuários",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2229,
        "uni_medida": "por lote"
    },
    {
        "atividade": "5.21  Atividade: Curadoria - Design de Diálogo",
        "itens": [
            {
                "descricao_complex": "Executar um teste simulando 10 entradas de usuário no\nbot.\nEntrega: arquivos com printscreen de todos os testes.",
                "complexidade": "N/A",
                "id_item": 4065,
                "valor": 1.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.21.7",
        "descricao_tarefa": "Executar testes manuais de comportamento do bot",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2230,
        "uni_medida": "Por teste"
    },
    {
        "atividade": "5.21  Atividade: Curadoria - Design de Diálogo",
        "itens": [
            {
                "descricao_complex": "Preencher planilha ou formulário de registro dos testes. Cada teste deve conter, no mínimo, 10 entradas de usuário.\nEntrega: relatório de registro e resultado de testes.",
                "complexidade": "N/A",
                "id_item": 4066,
                "valor": 1.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.21.8",
        "descricao_tarefa": "Produzir relatório de testes do bot",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2231,
        "uni_medida": "Por teste"
    },
    {
        "atividade": "5.21  Atividade: Curadoria - Design de Diálogo",
        "itens": [
            {
                "descricao_complex": "Incluir um cenário de testes automatizados na ferramenta específica\nEntrega: documento com descrição dos casos de teste e cenários com evidências de inclusão",
                "complexidade": "N/A",
                "id_item": 4067,
                "valor": 0.5,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "5.21.9",
        "descricao_tarefa": "Incluir cenário de teste automatizados",
        "plataforma": {},
        "disciplina": 5,
        "id_tarefa": 2232,
        "uni_medida": "por cenário"
    },
    {
        "atividade": "6.1    Atividade: Planejar, especificar, preparar, executar manualmente e avaliar os testes de sistema funcionais (caixa\npreta) e de compatibilidade",
        "itens": [
            {
                "descricao_complex": "Testes unitários, de integração e\naceitação",
                "complexidade": "Baixa",
                "id_item": 4068,
                "valor": 1.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Todos os níveis de testes",
                "complexidade": "Alta",
                "id_item": 4069,
                "valor": 10.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "6.1.1",
        "descricao_tarefa": "Elaborar    o    Plano    de    Testes    para execução manual de testes",
        "plataforma": {},
        "disciplina": 6,
        "id_tarefa": 2233,
        "uni_medida": "Por PLT"
    },
    {
        "atividade": "6.1    Atividade: Planejar, especificar, preparar, executar manualmente e avaliar os testes de sistema funcionais (caixa\npreta) e de compatibilidade",
        "itens": [
            {
                "descricao_complex": "Com requisitos fornecidos",
                "complexidade": "Baixa",
                "id_item": 4070,
                "valor": 1.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Sem requisitos fornecidos",
                "complexidade": "Alta",
                "id_item": 4071,
                "valor": 1.5,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "6.1.2",
        "descricao_tarefa": "Especificar    Casos    de    Testes    para execução manual de testes",
        "plataforma": {},
        "disciplina": 6,
        "id_tarefa": 2234,
        "uni_medida": "Por Caso de Teste"
    },
    {
        "atividade": "6.1    Atividade: Planejar, especificar, preparar, executar manualmente e avaliar os testes de sistema funcionais (caixa\npreta) e de compatibilidade",
        "itens": [
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 4072,
                "valor": 0.7,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "6.1.3",
        "descricao_tarefa": "Alterar  Casos  de  Testes  para  execução manual de testes",
        "plataforma": {},
        "disciplina": 6,
        "id_tarefa": 2235,
        "uni_medida": "Por Caso de Teste"
    },
    {
        "atividade": "6.1    Atividade: Planejar, especificar, preparar, executar manualmente e avaliar os testes de sistema funcionais (caixa\npreta) e de compatibilidade",
        "itens": [
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 4073,
                "valor": 0.6,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "6.1.4",
        "descricao_tarefa": "Preparar   a   massa   de   dados   para   a execução manual de testes",
        "plataforma": {},
        "disciplina": 6,
        "id_tarefa": 2236,
        "uni_medida": "Por Caso de Teste"
    },
    {
        "atividade": "6.1    Atividade: Planejar, especificar, preparar, executar manualmente e avaliar os testes de sistema funcionais (caixa\npreta) e de compatibilidade",
        "itens": [
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 4074,
                "valor": 0.5,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "6.1.5",
        "descricao_tarefa": "Executar  manualmente  Casos  de  Teste, analisar os resultados e registrar defeitos detectados (até 3 ciclos)",
        "plataforma": {},
        "disciplina": 6,
        "id_tarefa": 2237,
        "uni_medida": "Por Caso de Teste"
    },
    {
        "atividade": "6.1    Atividade: Planejar, especificar, preparar, executar manualmente e avaliar os testes de sistema funcionais (caixa\npreta) e de compatibilidade",
        "itens": [
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 4075,
                "valor": 6.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "6.1.6",
        "descricao_tarefa": "Avaliar   os   testes   realizados   de   forma manual",
        "plataforma": {},
        "disciplina": 6,
        "id_tarefa": 2238,
        "uni_medida": "Por RFT"
    },
    {
        "atividade": "6.1    Atividade: Planejar, especificar, preparar, executar manualmente e avaliar os testes de sistema funcionais (caixa\npreta) e de compatibilidade",
        "itens": [
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 4076,
                "valor": 1.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "6.1.7",
        "descricao_tarefa": "Executar Testes de Compatibilidade",
        "plataforma": {},
        "disciplina": 6,
        "id_tarefa": 2239,
        "uni_medida": "Por Caso de Teste"
    },
    {
        "atividade": "6.2    Atividade: Planejar, especificar, codificar, preparar, executar e avaliar os testes funcionais Automatizados",
        "itens": [
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 4077,
                "valor": 1.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "6.2.1",
        "descricao_tarefa": "Elaborar   o   Plano   de   Testes   para execução automatizada de testes",
        "plataforma": {},
        "disciplina": 6,
        "id_tarefa": 2240,
        "uni_medida": "Por PLT"
    },
    {
        "atividade": "6.2    Atividade: Planejar, especificar, codificar, preparar, executar e avaliar os testes funcionais Automatizados",
        "itens": [
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 4078,
                "valor": 1.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "6.2.2",
        "descricao_tarefa": "Especificar    Casos    de    Teste    para execução automatizada de testes",
        "plataforma": {},
        "disciplina": 6,
        "id_tarefa": 2241,
        "uni_medida": "Por Caso de Teste"
    },
    {
        "atividade": "6.2    Atividade: Planejar, especificar, codificar, preparar, executar e avaliar os testes funcionais Automatizados",
        "itens": [
            {
                "descricao_complex": "Sem validação de regra de negócio",
                "complexidade": "Baixa",
                "id_item": 4079,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Com validação de regra de negócio",
                "complexidade": "Alta",
                "id_item": 4080,
                "valor": 8.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "6.2.3",
        "descricao_tarefa": "Codificar   script(s)   para   a   realização automatizada de testes",
        "plataforma": {},
        "disciplina": 6,
        "id_tarefa": 2242,
        "uni_medida": "Por Caso de Teste"
    },
    {
        "atividade": "6.2    Atividade: Planejar, especificar, codificar, preparar, executar e avaliar os testes funcionais Automatizados",
        "itens": [
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 4081,
                "valor": 6.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "6.2.4",
        "descricao_tarefa": "Codificar    suíte    para    a    execução conjunta      de      casos      de      testes automatizados",
        "plataforma": {},
        "disciplina": 6,
        "id_tarefa": 2243,
        "uni_medida": "Por Suíte de Execução de Casos de Teste"
    },
    {
        "atividade": "6.2    Atividade: Planejar, especificar, codificar, preparar, executar e avaliar os testes funcionais Automatizados",
        "itens": [
            {
                "descricao_complex": "Sem validação de regra de negócio",
                "complexidade": "Baixa",
                "id_item": 4082,
                "valor": 2.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 2
            },
            {
                "descricao_complex": "Com validação de regra de negócio",
                "complexidade": "Alta",
                "id_item": 4083,
                "valor": 4.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 4
            }
        ],
        "tarefa": "6.2.5",
        "descricao_tarefa": "Alterar    script(s)    para    a    realização automatizada de testes",
        "plataforma": {},
        "disciplina": 6,
        "id_tarefa": 2244,
        "uni_medida": "Por Caso de Teste"
    },
    {
        "atividade": "6.2    Atividade: Planejar, especificar, codificar, preparar, executar e avaliar os testes funcionais Automatizados",
        "itens": [
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 4084,
                "valor": 3.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "6.2.6",
        "descricao_tarefa": "Alterar suíte para a execução conjunta de casos de testes automatizados",
        "plataforma": {},
        "disciplina": 6,
        "id_tarefa": 2245,
        "uni_medida": "Por Suíte de Execução de Casos de Teste"
    },
    {
        "atividade": "6.2    Atividade: Planejar, especificar, codificar, preparar, executar e avaliar os testes funcionais Automatizados",
        "itens": [
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 4085,
                "valor": 0.5,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "6.2.7",
        "descricao_tarefa": "Preparar  a  massa  de  dados  para  a execução automatizada dos testes",
        "plataforma": {},
        "disciplina": 6,
        "id_tarefa": 2246,
        "uni_medida": "Por Casos de Teste"
    },
    {
        "atividade": "6.2    Atividade: Planejar, especificar, codificar, preparar, executar e avaliar os testes funcionais Automatizados",
        "itens": [
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 4086,
                "valor": 0.05,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "6.2.8",
        "descricao_tarefa": "Executar de forma automatizada Casos de   Teste,   analisar   os   resultados   e registrar defeitos detectados",
        "plataforma": {},
        "disciplina": 6,
        "id_tarefa": 2247,
        "uni_medida": "Por Caso de Teste"
    },
    {
        "atividade": "6.2    Atividade: Planejar, especificar, codificar, preparar, executar e avaliar os testes funcionais Automatizados",
        "itens": [
            {
                "descricao_complex": "N/A",
                "complexidade": "N/A",
                "id_item": 4087,
                "valor": 1.0,
                "componente": {},
                "quantidade": {},
                "id_complex": 6
            }
        ],
        "tarefa": "6.2.9",
        "descricao_tarefa": "Avaliar  os  testes  realizados  de  forma automatizada",
        "plataforma": {},
        "disciplina": 6,
        "id_tarefa": 2248,
        "uni_medida": "Por RFT"
    }
]

    this.listaDisciplinasGuia = [
      {
          "id": 1,
          "descricao": "User Experience (UX)",
          "perfil": "Baixa"
      },
      {
          "id": 2,
          "descricao": "Requisitos de Software",
          "perfil": "Alta"
      },
      {
          "id": 3,
          "descricao": "Design de Processos",
          "perfil": "Baixa"
      },
      {
          "id": 4,
          "descricao": "Análise e Projeto de Software",
          "perfil": "Alta"
      },
      {
          "id": 5,
          "descricao": "Implementação de Software",
          "perfil": "Baixa/Alta"
      },
      {
          "id": 6,
          "descricao": "Teste e Homolocação de Software",
          "perfil": "Baixa/Alta"
      }
  ]

    this.paginator._intl.itemsPerPageLabel = 'Tarefas por página';
    this.paginator._intl.getRangeLabel = (page: number, pageSize: number, length: number) => {
      let qtdPaginas = Math.ceil((length) / (pageSize));  
      return "Página - " + (page + 1).toString() + " de " + (qtdPaginas).toString() ;
    
    };
   
  }

  carregaItensGuia(){
    this.guia.getItensGuia().subscribe(
      (data)=>{          
        this.listaItensGuiaAux = data;   
        this.filtraDisciplina(1);     
      }
    );
  }

  carregaDisciplinas(){
    this.ts.getDisciplinas().subscribe(
      (data)=>{
        this.listaDisciplinasGuia = data; 
      }
    );
  }

  filtraDisciplina(id){
    this.listaItensGuia = [];
    for(let i of this.listaItensGuiaAux){

      if(i.disciplina == id){
        this.listaItensGuia.push(i);
      }

    }  
    this.dataSource = new MatTableDataSource(this.listaItensGuia);
    this.dataSource.paginator = this.paginator;
    this.dataSource.paginator.firstPage();
  }

  agrupaComplexidadesTrf(itensTrf){
    let complexidades = new Set();
    let res = [];

    for(let i of itensTrf){
      complexidades.add(i.complexidade);
    }

    for(let i of complexidades){
      res.push(i);
    }

    return res;
  }

  filtraTrfPorComplexidade(itens, complex){

    let res = [];
    for(let i of itens){
      if(i.complexidade == complex){
        res.push(i);
      }
    }

    return res;
  }

  isNull(obj){
    return typeof(obj) == 'object'; 
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
 
  }

}
