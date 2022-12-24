import updateRaffle from "./helpers";

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
    await updateRaffle('loteca', 99);
}

main();
