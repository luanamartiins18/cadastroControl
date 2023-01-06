import { RhInterface } from "src/app/interfaces/RhInterfaces";
import { Bu } from "../bu/bu.model";
import { Funcao } from "../cargo/funcao.model";
import { Especialidade } from "../especialidade/Especialidade.model";
import { Etapa } from "../etapa/etapa.model";
import { Operacao } from "../operacao/operacao.model";
import { Recrutador } from "../recrutador/recrutador.model";
import { Status } from "../status/status.model";

export class Rh implements RhInterface {

    id?: number;
    candidato?: string;
    cpf?: string;
    rg?: string;
    numero_zoro?: string;
    email?: string;
    telefone?: string;
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


    constructor( 
        id?: number,
        candidato?: string,
        cpf?: string,
        rg?: string,
        numero_zoro?: string,
        email?: string,
        telefone?: string,
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