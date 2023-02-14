import { Bu } from "../models/bu/bu.model";
import { Funcao } from "../models/cargo/funcao.model";
import { Especialidade } from "../models/especialidade/Especialidade.model";
import { Etapa } from "../models/etapa/etapa.model";
import { Operacao } from "../models/operacao/operacao.model";
import { Recrutador } from "../models/recrutador/recrutador.model";
import { Status } from "../models/status/status.model";

export interface VagasInterface {
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
    recrutadora?: string;
    bu?: Bu;
    operacao?: Operacao;
    recrutador?: Recrutador;
    data_inicio?: Date;

}