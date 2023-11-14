# loteria.json

[![Run Script](https://github.com/guilhermeasn/loteria.json/actions/workflows/run.yml/badge.svg)](https://github.com/guilhermeasn/loteria.json/actions/workflows/run.yml)

Todos os resultados atualizados e analisados das loterias da Caixa Econômica Federal em arquivos JSON. A atualização dos arquivos são feitas automaticamente, todos os dias, com Cron Job via GitHub Actions.

Últimos sorteios registrados:

 - **Dia de Sorte**: <!--diadesorte-->835 => 24, 01, 10, 06, 21, 29, 02, Abril
 - **Dupla Sena**: <!--duplasena-->2.593 => 13, 08, 11, 32, 30, 23, 28, 24, 20, 48, 03, 18
 - **Federal**: <!--federal-->5.816 => 073411, 086661, 053288, 065917, 005835
 - **Lotofácil**: <!--lotofacil-->2.953 => 23, 13, 08, 20, 04, 09, 03, 05, 22, 01, 17, 19, 21, 07, 18
 - **Lotomania**: <!--lotomania-->2.546 => 90, 83, 72, 09, 94, 27, 73, 93, 78, 88, 69, 17, 43, 85, 41, 96, 51, 23, 35, 12
 - **+Milionária**: <!--maismilionaria-->94 => 26, 50, 21, 24, 07, 20, 03, 06
 - **Mega Sena**: <!--megasena-->2.655 => 30, 31, 49, 23, 56, 10
 - **Quina**: <!--quina-->6.290 => 15, 11, 78, 52, 58
 - **Super Sete**: <!--supersete-->471 => 4, 9, 3, 3, 0, 4, 6
 - **Timemania**: <!--timemania-->2.014 => 36, 32, 62, 72, 51, 05, 22, SPORT/PE
 <!-- - **Loteca**: 0 -->

## Sorteios

Os arquivos de sorteios que estão na pasta *data* contém um *object* no seguinte formato: suas **chaves** são formadas pelos **números dos sorteios** e os **valores** contém um **array com as dezenas sorteadas por ordem de sorteio**.

### Formato:

```
{ [key in number]: Array<number | string> }
```

### Acesso

Obtenha os dados via GET nos seguintes *endpoints*:

 - **Dia de Sorte**: https://raw.githubusercontent.com/guilhermeasn/loteria.json/master/data/diadesorte.json
 - **Dupla Sena**: https://raw.githubusercontent.com/guilhermeasn/loteria.json/master/data/duplasena.json
 - **Federal**: https://raw.githubusercontent.com/guilhermeasn/loteria.json/master/data/federal.json
 - **Lotofácil**: https://raw.githubusercontent.com/guilhermeasn/loteria.json/master/data/lotofacil.json
 - **Lotomania**: https://raw.githubusercontent.com/guilhermeasn/loteria.json/master/data/lotomania.json
 - **+Milionária**: https://raw.githubusercontent.com/guilhermeasn/loteria.json/master/data/maismilionaria.json
 - **Mega Sena**: https://raw.githubusercontent.com/guilhermeasn/loteria.json/master/data/megasena.json
 - **Quina**: https://raw.githubusercontent.com/guilhermeasn/loteria.json/master/data/quina.json
 - **Super Sete**: https://raw.githubusercontent.com/guilhermeasn/loteria.json/master/data/supersete.json
 - **Timemania**: https://raw.githubusercontent.com/guilhermeasn/loteria.json/master/data/timemania.json
 <!-- - **Loteca**: https://raw.githubusercontent.com/guilhermeasn/loteria.json/master/data/loteca.json -->
 
## Análises

Algumas análises dos resultados são realizadas e salvas na pasta *data*, com extensão *.analytic.json*, que contém um *object* no seguinte formato:
 - A **chave *ones***: informa a quantidade de números sorteados de acordo com o seu grupo de **unidade**.
 - A **chave *tens***: informa a quantidade de números sorteados de acordo com o seu grupo de **dezena**.
 - A **chave *sums***: informa a quantidade de sorteios de acordo com a **soma** de seus números.
 - A **chave *mean***: informa a quantidade de sorteios de acordo com a **média** arredondada de seus números.
 - A **chave *pairs***: informa a quantidade de sorteios de acordo com a quantidade de números **pares**.
 - A **chave *primes***: informa a quantidade de sorteios de acordo com a quantidade de números **primos**.
 - A **chave *quantity***: informa a quantidade de **vezes** que um número foi sorteado.
 - A **chave *sequential***: informa a quantidade de vezes que um número foi sorteado de acordo com a **ordem** de sorteio.

### Formato

```
{
    ones       : { [key in string] : number };
    tens       : { [key in string] : number };
    sums       : { [key in string] : number };
    mean       : { [key in string] : number };
    pairs      : { [key in string] : number };
    primes     : { [key in string] : number };
    quantity   : { [key in string] : number };
    sequential : Array<{ [key in string] : number }>;
}
```

### Acesso

Obtenha as análises via GET nos seguintes *endpoints*:

 - **Dia de Sorte**: https://raw.githubusercontent.com/guilhermeasn/loteria.json/master/data/diadesorte.analytic.json
 - **Dupla Sena**: https://raw.githubusercontent.com/guilhermeasn/loteria.json/master/data/duplasena.analytic.json
 - **Lotofácil**: https://raw.githubusercontent.com/guilhermeasn/loteria.json/master/data/lotofacil.analytic.json
 - **Lotomania**: https://raw.githubusercontent.com/guilhermeasn/loteria.json/master/data/lotomania.analytic.json
 - **+Milionária**: https://raw.githubusercontent.com/guilhermeasn/loteria.json/master/data/maismilionaria.analytic.json
 - **Mega Sena**: https://raw.githubusercontent.com/guilhermeasn/loteria.json/master/data/megasena.analytic.json
 - **Quina**: https://raw.githubusercontent.com/guilhermeasn/loteria.json/master/data/quina.analytic.json
 - **Super Sete**: https://raw.githubusercontent.com/guilhermeasn/loteria.json/master/data/supersete.analytic.json
 - **Timemania**: https://raw.githubusercontent.com/guilhermeasn/loteria.json/master/data/timemania.analytic.json

## Autor

* **Guilherme Neves** - [github](https://github.com/guilhermeasn/) - [website](https://gn.dev.br/)

## Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE](https://github.com/guilhermeasn/loteria.json/blob/master/LICENSE) para detalhes.
