import axios from 'axios';

import { Agent } from 'http';

import type {
    Format,
    Lottery,
    Raffle,
    Result
} from './types';

import {
    writeLastRaffle,
    writeRaffle
} from './filewriter';

const API = 'https://servicebus2.caixa.gov.br/portaldeloterias/api';
const API_PRICE = 'https://www.loteriasonline.caixa.gov.br/silce-servico-rest/rest/v1/cGFyYW1ldHJvcy1zaW11bGFjYW8v/';

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
                console.warn(`The search for result of lottery ${ lottery.toUpperCase() } ended in raffle ${ last }`);
                writeLastRaffle(lottery, last, raffle[last]);
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

export async function price() {
    
    const request = await axios.get(API_PRICE, {
        httpAgent: new Agent({ keepAlive: true }),
        headers: { Host: API_PRICE.replace(/^(https?:\/\/)?([\w\.]+).*/, '$2') }
    });

    const data : Array<any> = request.data.payload.parametros;
    if(!Array.isArray(data)) throw new Error('Fail get price #1');

    const result = data.map(mod => ({
        lottery: mod.parametroJogo.concurso.modalidade as string,
        price: mod.parametroJogo.valoresAposta[0].valor as number
    }))

    if(result.some(mod => !mod.lottery || typeof mod.lottery !== 'string' || !mod.price || typeof mod.price !== 'number'))
        throw new Error('Fail get price #2');

    return result;

}
