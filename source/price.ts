import { price } from "./fetchdata";
import { writePrice } from "./filewriter";

async function main() {

    const data = await price(); 

    writePrice({
        diadesorte: data.find(mod => mod.lottery === 'DIA_DE_SORTE')?.price ?? null,
        duplasena: data.find(mod => mod.lottery === 'DUPLA_SENA')?.price ?? null,
        federal: data.find(mod => mod.lottery === 'FEDERAL')?.price ?? null,
        loteca: data.find(mod => mod.lottery === 'LOTECA')?.price ?? null,
        lotofacil: data.find(mod => mod.lottery === 'LOTOFACIL')?.price ?? null,
        lotomania: data.find(mod => mod.lottery === 'LOTOMANIA')?.price ?? null,
        maismilionaria: data.find(mod => mod.lottery === 'MAIS_MILIONARIA')?.price ?? null,
        megasena: data.find(mod => mod.lottery === 'MEGA_SENA')?.price ?? null,
        quina: data.find(mod => mod.lottery === 'QUINA')?.price ?? null,
        supersete: data.find(mod => mod.lottery === 'SUPER_7')?.price ?? null,
        timemania: data.find(mod => mod.lottery === 'TIMEMANIA')?.price ?? null
    });

}

main();
