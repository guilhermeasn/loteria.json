import axios from 'axios';
import { writeFileSync } from 'fs';
import { join } from 'path';
import { Agent } from 'http';

const API = 'http://servicebus2.caixa.gov.br/portaldeloterias/api';

export type Raffle = { [key in number]: Array<number | string> };
export type Result = Raffle | null;

export type Lottery = (
    'maismilionaria' |
    'megasena' |
    'lotofacil' |
    'quina' |
    'lotomania' |
    'timemania' |
    'duplasena' |
    'federal' |
    'loteca' |
    'diadesorte' |
    'supersete'
);

export function writeRaffle(lottery : Lottery, raffle : Raffle) {

    writeFileSync(
        join('data', lottery + '.json'),
        JSON.stringify(raffle)
    );

}

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

function sleep(ms : number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function getResult(lottery : Lottery, number ?: number) : Promise<Result> {

    await sleep(5000);

    try {

        const http = await axios.get(`${ API }/${ lottery }/${ number?.toString() || '' }`, {
            httpAgent: new Agent({ keepAlive: true })
        });

        let result : Array<string | number> = [];

        switch(lottery) {

            case 'maismilionaria':
                result = [
                    ...http.data.dezenasSorteadasOrdemSorteio,
                    ...http.data.trevosSorteados
                ];
                break;

            case 'timemania':
            case 'diadesorte':
                result = [
                    ...http.data.dezenasSorteadasOrdemSorteio,
                    http.data.nomeTimeCoracaoMesSorte
                ];
                break;

            case 'loteca':
                result = http.data.listaResultadoEquipeEsportiva.map((obj : any) => `${ obj.nomeEquipeUm }:${ obj.nuGolEquipeUm }-${ obj.nomeEquipeDois }:${ obj.nuGolEquipeDois }`)
                break;

            default:
                result = http.data.dezenasSorteadasOrdemSorteio;
                break;

        }

        return { [http.data.numero]: result }

    } catch(error) {

        console.error(error);
        return null;

    }

}

export function recovery(lottery: Lottery, data : Array<Array<number | string>>) {

    let raffle : Raffle = {};

    data.forEach((v, k) => {
        raffle = {
            ...raffle,
            [k + 1]: v
        }
    });

    writeRaffle(lottery, raffle);

}
