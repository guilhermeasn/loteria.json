import axios from 'axios';
import { readFileSync, writeFileSync } from 'fs';
import { Agent } from 'http';
import { join } from 'path';

import type {
    Format,
    Lottery,
    Raffle,
    Registry,
    Result
} from './types';

const API = 'https://servicebus2.caixa.gov.br/portaldeloterias/api';

export default async function updateRaffle(lottery : Lottery, count : number = 0, data ?: Raffle) : Promise<boolean> {

    let updated : boolean = false;
    
    const last : Result = await getResult(lottery);

    let raffle : Raffle = data || require(`../data/${ lottery }.json`) || {};
    let result : Result = null;

    while(true) if(!(++count in raffle)) {

        result = await getResult(lottery, count);

        if(!result) {
            if(last && parseInt(Object.keys(last)?.[0] ?? 0) > count) {
                if(await updateRaffle(lottery, count, raffle))
                    updated = true;
            } else {
                const last = count - 1;
                writeLastRaffle(lottery, last);
                console.warn(`The search for result of lottery ${ lottery.toUpperCase() } ended in raffle ${ last }`);
            }
            break;
        }
        
        raffle = { ...raffle, ...result };
        writeRaffle(lottery, raffle);
        updated = true;

        console.log(`Added in '${ lottery }': ${ JSON.stringify(result) }`);

    };

    return updated;

}

function writeRaffle(lottery : Lottery, raffle : Raffle) {

    writeFileSync(
        join('data', lottery + '.json'),
        JSON.stringify(raffle)
    );

}

function writeLastRaffle(lottery : Lottery, lastRaffle : number) {

    const file : string = join('data', '__registry__.json');
    const registry : Registry = JSON.parse(readFileSync(file).toString());

    writeFileSync(
        file,
        JSON.stringify({
            ...registry,
            [lottery] : lastRaffle
        }, undefined, 2)
    );

}

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

async function getResult(lottery : Lottery, number ?: number) : Promise<Result> {

    try {
        
        const request = await axios.get(`${ API }/${ lottery }/${ number?.toString() || '' }`, {
            httpAgent: new Agent({ keepAlive: true }),
            headers: { Host: API.replace(/^(https?:\/\/)?([\w\.]+).*/, '$2') }
        });

        let data : Format = [];

        switch(lottery) {

            case 'timemania':
            case 'diadesorte':
                data = [
                    ...request.data.dezenasSorteadasOrdemSorteio,
                    request.data.nomeTimeCoracaoMesSorte
                ];
                break;

            case 'loteca':
                data = request.data.listaResultadoEquipeEsportiva.map((obj : any) => `
                    ${ obj.nomeEquipeUm.replace(/\W/g, '') }:${ obj.nuGolEquipeUm.replace(/\W/g, '') }-
                    ${ obj.nomeEquipeDois.replace(/\W/g, '') }:${ obj.nuGolEquipeDois.replace(/\W/g, '') }
                `)
                break;

            default:
                data = request.data.dezenasSorteadasOrdemSorteio;
                break;

        }

        return { [request.data.numero]: data }

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
