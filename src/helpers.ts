import axios from 'axios';
import { writeFileSync } from 'fs';
import { join } from 'path';

const API = 'http://servicebus2.caixa.gov.br/portaldeloterias/api';

export type Format = Array<number | string>;
export type Raffle = { [key in number]: Format };
export type Result = Raffle | null;

export type Lottery = (
    'maismilionaria' |
    'megasena'       |
    'lotofacil'      |
    'quina'          |
    'lotomania'      |
    'timemania'      |
    'duplasena'      |
    'federal'        |
    'loteca'         |
    'diadesorte'     |
    'supersete'
);

export default async function updateRaffle(lottery : Lottery, count : number = 0) {

    const data = require(`../data/${ lottery }.json`) || {};

    let raffle : Raffle = data;
    let result : Result = null;

    while(true) if(!(++count in data)) {

        result = await getResult(lottery, count);

        if(!result) {
            console.warn(`The search for result of lottery ${ lottery.toUpperCase() } ended in raffle ${ count - 1 }`);
            break;
        }
        
        raffle = { ...raffle, ...result };
        writeRaffle(lottery, raffle);

        console.log(`Added in '${ lottery }': ${ JSON.stringify(result) }`);

    };

}

export function writeRaffle(lottery : Lottery, raffle : Raffle) {

    writeFileSync(
        join('data', lottery + '.json'),
        JSON.stringify(raffle)
    );

}

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

export async function getResult(lottery : Lottery, number ?: number) : Promise<Result> {

    try {

        const http = await axios.get(`${ API }/${ lottery }/${ number?.toString() || '' }`);
        let result : Array<string | number> = [];

        switch(lottery) {

            case 'timemania':
            case 'diadesorte':
                result = [
                    ...http.data.dezenasSorteadasOrdemSorteio,
                    http.data.nomeTimeCoracaoMesSorte
                ];
                break;

            case 'loteca':
                result = http.data.listaResultadoEquipeEsportiva.map((obj : any) => `
                    ${ obj.nomeEquipeUm }:${ obj.nuGolEquipeUm }-
                    ${ obj.nomeEquipeDois }:${ obj.nuGolEquipeDois }
                `)
                break;

            default:
                result = http.data.dezenasSorteadasOrdemSorteio;
                break;

        }

        return { [http.data.numero]: result }

    } catch(error) {

        return null;

    }

}

export function recovery(lottery: Lottery, data : Format[]) {

    let raffle : Raffle = {};

    data.forEach((v, k) => {
        raffle = {
            ...raffle,
            [k + 1]: v
        }
    });

    writeRaffle(lottery, raffle);

}
