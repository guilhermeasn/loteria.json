import { getResult, Lottery, Raffle, recovery, Result, writeRaffle } from "./helpers";

async function main(lottery : Lottery) {

    const data = require(`../data/${ lottery }.json`) || {};

    let raffle : Raffle = data;
    let result : Result = null;
    let count  : number = 0;

    while(true) if(!(++count in data)) {

        result = await getResult(lottery, count);
        if(!result) break;
        
        raffle = { ...raffle, ...result };
        writeRaffle(lottery, raffle);

        console.log(`Added in '${ lottery }': ${ JSON.stringify(result) }`);

    };

}

main('maismilionaria');
