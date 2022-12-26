import analyze from "./analytic";
import updateRaffle from "./fetchdata";

/* RECOVERY */
// import { recovery } from './helpers';
// import { timemania_1_1876 } from '../recovery/lotteryRecovery.json';
// recovery('timemania', timemania_1_1876);

async function main() {

    // await updateRaffle('diadesorte');
    // await updateRaffle('duplasena');
    // await updateRaffle('federal');
    // await updateRaffle('loteca');
    // await updateRaffle('lotofacil');
    // await updateRaffle('lotomania');
    // await updateRaffle('maismilionaria');
    // await updateRaffle('megasena');
    // await updateRaffle('quina');
    // await updateRaffle('supersete');
    // await updateRaffle('timemania');

    analyze('diadesorte', [ 7 ]);
    analyze('duplasena');
    analyze('lotofacil');
    analyze('lotomania');
    analyze('maismilionaria', [ 6, 7 ]);
    analyze('megasena');
    analyze('quina');
    analyze('supersete');
    analyze('timemania', [ 7 ]);
    
}

main();
