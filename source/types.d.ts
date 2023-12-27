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

export type AnalysisGroup = { [key in Lottery] : Analytic };
export type Numerical = { [key in string] : number };

export type Analytic = {
    ones       : Numerical;
    tens       : Numerical;
    sums       : Numerical;
    mean       : Numerical;
    pairs      : Numerical;
    primes     : Numerical;
    quantity   : Numerical;
    sequential : Numerical[];
}

export type Price = Record<Lottery, number | null>;
