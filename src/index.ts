import { getResult, Raffle, recovery, Result, writeRaffle } from "./helpers";
import megasena from '../data/megasena.json';

async function main() {

    let raffle : Raffle = megasena as unknown as Raffle;
    let result : Result = null;
    let count  : number = 0;

    while(true) if(!(++count in megasena)) {

        result = await getResult('megasena', count);
        if(!result) break;

        console.log('Added raffle: ' + JSON.stringify(result));
        
        raffle = { ...raffle, ...result };
        writeRaffle('megasena', raffle);

    };

}

main();
