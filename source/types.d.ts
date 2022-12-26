export type Format = Array<number | string>;
export type Raffle = { [key in number]: Format };
export type Result = Raffle | null;

export type Lottery = (
    'maismilionaria' |
    'megasena'       |
    'lotofacil'      |
    'quina'          |
    'lotomania'      |
    'timemania'      |
    'duplasena'      |
    'federal'        |
    'loteca'         |
    'diadesorte'     |
    'supersete'
);

export type Numerical = { [key in number] : number };

export type Analytic = {
    sums       : Numerical;
    pairs      : Numerical;
    primes     : Numerical;
    quantity   : Numerical;
    sequential : Raffle
}
