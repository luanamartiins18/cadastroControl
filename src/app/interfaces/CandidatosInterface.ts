import { StatusCandidato } from "../models/statusCandidato/statusCandidato.model";
import { Vagas } from "../models/vagas/vagas.model";

export interface CandidatosInterface {
    id?: number;
    candidatos?: string;
    cpf?: string;
    rg?: string;
    email?: string;
    telefone?: string; 
    vale_alimentacao_atual?: string;
    vale_refeicao_atual?: string;
    remuneracao_atual?: string;
    plano_saude_atual?: string;
    cesta_atual?: string;
    flash_atual?: string;
    bonus_atual?: string;
    vale_alimentacao_pretensao?: string;
    vale_refeicao_pretensao?: string;
    remuneracao_pretensao?: string;
    plano_saude_pretensao?: string;
    cesta_pretensao?: string;
    flash_pretensao?: string;
    bonus_pretensao?: string;
    arquivos?: string;
    status_candidato?: StatusCandidato;
    vagas?: Vagas;
}