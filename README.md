# loteria.json

[![Run Script](https://github.com/guilhermeasn/loteria.json/actions/workflows/run.yml/badge.svg)](https://github.com/guilhermeasn/loteria.json/actions/workflows/run.yml)

Todos os resultados atualizados e analisados das loterias da Caixa Econômica Federal em arquivos JSON. A atualização dos arquivos são feitas automaticamente, todos os dias, com Cron Job via GitHub Actions.

Últimos sorteios registrados:

 - **Dia de Sorte**: <!--diadesorte-->801 => 01, 31, 14, 18, 23, 09, 24, Novembro
 - **Dupla Sena**: <!--duplasena-->2.558 => 22, 44, 45, 08, 09, 41, 13, 36, 04, 20, 35, 22
 - **Federal**: <!--federal-->5.793 => 058775, 067454, 029873, 039314, 012093
 - **Lotofácil**: <!--lotofacil-->2.898 => 06, 20, 16, 10, 18, 01, 14, 12, 15, 17, 22, 23, 09, 21, 24
 - **Lotomania**: <!--lotomania-->2.511 => 84, 55, 72, 74, 41, 94, 95, 63, 62, 00, 30, 19, 99, 04, 35, 85, 16, 83, 46, 24
 - **+Milionária**: <!--maismilionaria-->71 => 47, 04, 23, 14, 45, 38, 06, 04
 - **Mega Sena**: <!--megasena-->2.624 => 31, 58, 05, 52, 37, 47
 - **Quina**: <!--quina-->6.224 => 23, 04, 52, 47, 66
 - **Super Sete**: <!--supersete-->436 => 6, 6, 1, 4, 4, 9, 7
 - **Timemania**: <!--timemania-->1.980 => 24, 47, 74, 44, 51, 21, 22, PALMEIRAS/SP
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
