import { VagasInterface } from "src/app/interfaces/VagasInterfaces";
import { Bu } from "../bu/bu.model";
import { Candidatos } from "../candidato/candidatos.model";
import { Funcao } from "../cargo/funcao.model";
import { Especialidade } from "../especialidade/Especialidade.model";
import { Etapa } from "../etapa/etapa.model";
import { Operacao } from "../operacao/operacao.model";
import { Recrutador } from "../recrutador/recrutador.model";
import { Status } from "../status/status.model";

export class Vagas implements VagasInterface {

    id?: number;
    numero_zoro?: string;
    vale_alimentacao?: string;
    vale_refeicao?: string;
    remuneracao?: string;
    plano_saude?: string;
    cesta?: string;
    flash?: string;
    bonus?: string;
    etapa?: Etapa;
    status?: Status;
    cargo?: Funcao;
    especialidade?: Especialidade;
    recrutador?: Recrutador;
    bu?: Bu;
    operacao?: Operacao;
    data_inicio?: Date;
    candidato?: Candidatos;


    constructor( 
        id?: number,
        candidato?: Candidatos,
        numero_zoro?: string,
        vale_alimentacao?: string,
        vale_refeicao?: string,
        remuneracao?: string,
        plano_saude?: string,
        cesta?: string,
        flash?: string,
        bonus?: string,
        etapa?: Etapa,
        cargo?: Funcao,
        status?: Status,
        especialidade?: Especialidade,
        recrutadora?: string,
        bu?: Bu,
        operacao?: Operacao,
        recrutador?: Recrutador,
        data_inicio?: Date,
    ) { }
}