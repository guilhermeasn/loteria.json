import updateRaffle from "./fetchdata";

/* RECOVERY */
// import { recovery } from './helpers';
// import { timemania_1_1876 } from '../recovery/lotteryRecovery.json';
// recovery('timemania', timemania_1_1876);

async function main() {

    await updateRaffle('maismilionaria');
    await updateRaffle('megasena');
    await updateRaffle('lotofacil');
    await updateRaffle('quina');
    await updateRaffle('lotomania');
    await updateRaffle('timemania');
    await updateRaffle('duplasena');
    await updateRaffle('federal');
    await updateRaffle('diadesorte');
    await updateRaffle('supersete');
    await updateRaffle('loteca');

    if(new Date().getUTCDay() === 0) {
        console.log('analytic in sunday')
    } else {
        console.log('don\'t analytic');
    }
    
}

main();
