import { join } from 'path';

import {
    readFileSync,
    writeFileSync
} from "fs";

import type {
    Analytic,
    Format,
    Lottery,
    Raffle
} from "./types";

export function writeAnalytic(lottery : Lottery, analytic : Analytic) {

    writeFileSync(
        join('data', lottery + '.analytic.json'),
        JSON.stringify(analytic, undefined, 2)
    );

}

export function writeRaffle(lottery : Lottery, raffle : Raffle) {

    writeFileSync(
        join('data', lottery + '.json'),
        JSON.stringify(raffle)
    );

}

export function writeLastRaffle(lottery : Lottery, lastRaffle : number, content : Format) {

    const file : string = 'README.md';
    const sign : string = `<!--${lottery}-->`;
    const data : string = readFileSync(file).toString();
    const nums : string = JSON.stringify(content)?.replace(/[\[\]"\s]/g,'')?.replace(/,/g, ', ');

    writeFileSync(file, data.replace(new RegExp(sign + '.+'), sign + lastRaffle.toLocaleString('pt-BR') + ' => ' + nums));

}
