import { writeAnalytic } from './filewriter';

import type {
    Lottery,
    Numerical,
    Raffle
} from './types';

const sum = (data : number[][]) => data.map(raffle => (
    raffle.reduce((p, c) => p + c, 0)
));

const pair = (data : number[][]) => data.map(raffle => (
    raffle.reduce((p, c) => c % 2 === 0 ? p + 1 : p, 0)
));

const primes = (data : number[][]) => data.map(raffle => {

    const isPrime = (num : number) => {
        for (let i = 2; i < num; i++) if (num % i === 0) return false;
        return num > 1;
    };

    return raffle.reduce((p, c) => isPrime(c) ? p + 1 : p, 0);

});

const tens = (data : number[][]) => {
    const ten = (n : number) => ((--n - n % 10) / 10 + 1) * 10;
    return data.reduce((p, c) => (
        [ ...p, ...c.map(i => ten(i === 0 ? 100 : i)) ]
    ), []);
};

const ones = (data : number[][]) => data.reduce((p, c) => (
    [ ...p, ...c.map(i => parseInt(i.toString().slice(-1))) ]
), []);

const quantity = (data : number[][]) => data.reduce((p, c) => [ ...p, ...c ], []);

const sequential = (data : number[][]) => data.reduce((p : any, c: number[]) => [
    ...c.map((v, i) => [ ...(p?.[i] ?? []), v ])
], []);

function occurences(arr : number[] = []) : Numerical {

    const map : { [k: number] : number } = {};

    arr.forEach(v => { map?.[v] ? map[v]++ : map[v] = 1 });

    return Object.entries(map)
        .sort(([,a], [,b]) => b - a)
        .reduce((r, [k, v]) => ({ ...r, [`#${k}`]: v }), {});
        
}

export default function analyze(lottery : Lottery, ignore : number[] = []) {

    const data = Object.values((require(`../data/${ lottery }.json`) || {}) as Raffle).map(v => (
        v.map(i => parseInt(i.toString())).filter((_, k) => !ignore.find(i => i === k))
    ));

    const calcSum = sum(data);

    writeAnalytic(lottery, {
        ones:       occurences(ones(data)),
        tens:       occurences(tens(data)),
        sums:       occurences(calcSum),
        mean:       occurences(calcSum.map(s => Math.round(s/data[0].length))),
        pairs:      occurences(pair(data)),
        primes:     occurences(primes(data)),
        quantity:   occurences(quantity(data)),
        sequential: sequential(data).map(occurences)
    });

    console.log(`Full review of '${ lottery }'`);

}
