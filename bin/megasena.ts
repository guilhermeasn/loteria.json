import data from '../data/megasena.json';

const sum = () => Object.values(data).map(raffle => (
    raffle.reduce((p, c) => p + parseInt(c), 0)
));

const pair = () => Object.values(data).map(raffle => (
    raffle.reduce((p, c) => parseInt(c) % 2 === 0 ? ++p : p, 0)
));

const isPrime = (num : number) => {
    for (let i = 2; i < num; i++) if (num % i === 0) return false;
    return num > 1;
};

const primes = () => Object.values(data).map(raffle => (
    raffle.reduce((p, c) => isPrime(parseInt(c)) ? ++p : p, 0)
));

function occurences(arr : number[] = [], offset = []) {

    const map : { [k: number] : number } = offset.reduce((r, v) => ({ ...r, [v]: 0 }), {});
    arr.forEach(v => { map?.[v] ? map[v]++ : map[v] = 1 });

    return Object.entries(map)
        .sort(([a], [b]) => parseInt(b) - parseInt(a))
        .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
        
}

console.dir(occurences(sum()));
