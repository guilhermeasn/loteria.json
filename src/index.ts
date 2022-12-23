import { getResult, Raffle, Result, writeRaffle } from "./helpers";
import megasena from '../data/megasena.json';

async function main() {

    let raffle : Raffle = {};
    let result : Result = null;
    let count  : number = 0;

    while(true) if(!(++count in megasena)) {

        result = await getResult('megasena', count);
        if(!result) break;

        console.log('Added raffle: ' + Object.entries(result)[0]);

        raffle = {
            ...raffle,
            ...(result ?? {})
        };

    };

    writeRaffle('megasena', { ...megasena, ...raffle } as unknown as Raffle);

}

main();
