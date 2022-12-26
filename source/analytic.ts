import { Raffle } from './types';

const sum = (data : Raffle) => Object.values(data).map(raffle => (
    raffle.reduce((p, c) => parseInt(p.toString()) + parseInt(c.toString()), 0)
));

const pair = (data : Raffle) => Object.values(data).map(raffle => (
    raffle.reduce((p, c) => parseInt(c.toString()) % 2 === 0 ? parseInt(p.toString()) + 1 : parseInt(p.toString()), 0)
));

const isPrime = (num : number) => {
    for (let i = 2; i < num; i++) if (num % i === 0) return false;
    return num > 1;
};

const primes = (data : Raffle) => Object.values(data).map(raffle => (
    raffle.reduce((p, c) => isPrime(parseInt(c.toString())) ? parseInt(p.toString()) + 1 : parseInt(p.toString()), 0)
));

function occurences(arr : number[] = [], offset = []) {

    const map : { [k: number] : number } = offset.reduce((r, v) => ({ ...r, [v]: 0 }), {});
    arr.forEach(v => { map?.[v] ? map[v]++ : map[v] = 1 });

    return Object.entries(map)
        .sort(([a], [b]) => parseInt(b) - parseInt(a))
        .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
        
}
