import axios from 'axios';
import { writeFileSync } from 'fs';
import { join } from 'path';
import { Agent } from 'http';

const API = 'http://servicebus2.caixa.gov.br/portaldeloterias/api';

export type Raffle = { [key in number]: number[] };
export type Result = Raffle | null;
export type Lottery = 'megasena' | 'lotofacil' | 'quina' | 'duplasena' | 'lotomania';

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

    await sleep(3000);

    try {

        const http = await axios.get(`${ API }/${ lottery }/${ number?.toString() || '' }`, {
            httpAgent: new Agent({ keepAlive: true })
        });

        return { [http.data.numero]: http.data.dezenasSorteadasOrdemSorteio }

    } catch(error) {

        console.error(error);
        return null;

    }

}
