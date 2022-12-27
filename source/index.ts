import analyze from "./analytic";
import updateRaffle from "./fetchdata";

/* RECOVERY */
// import { recovery } from './helpers';
// import { timemania_1_1876 } from '../recovery/lotteryRecovery.json';
// recovery('timemania', timemania_1_1876);

async function main() {

    if(await updateRaffle('diadesorte'))
        analyze('diadesorte', [ 7 ]);

    if(await updateRaffle('duplasena'))
        analyze('duplasena');

    if(await updateRaffle('lotofacil'))
        analyze('lotofacil');

    if(await updateRaffle('lotomania'))
        analyze('lotomania');

    if(await updateRaffle('maismilionaria'))
        analyze('maismilionaria', [ 6, 7 ]);

    if(await updateRaffle('megasena'))
        analyze('megasena');

    if(await updateRaffle('quina'))
        analyze('quina');

    if(await updateRaffle('supersete'))
        analyze('supersete');

    if(await updateRaffle('timemania'))
        analyze('timemania', [ 7 ]);
    
    await updateRaffle('federal', 5376);
    await updateRaffle('loteca', 100);

}

main();
