# loteria.json

[![Run Script](https://github.com/guilhermeasn/loteria.json/actions/workflows/run.yml/badge.svg)](https://github.com/guilhermeasn/loteria.json/actions/workflows/run.yml)

Todos os resultados atualizados e analisados das loterias da Caixa Econômica Federal em arquivos JSON. A atualização dos arquivos são feitas automaticamente, todos os dias, com Cron Job via GitHub Actions.

Últimos sorteios registrados:

 - **Dia de Sorte**: <!--diadesorte-->761 => 06, 09, 17, 31, 25, 22, 10, Junho
 - **Dupla Sena**: <!--duplasena-->2.518 => 15, 10, 48, 07, 03, 40, 32, 15, 25, 39, 46, 29
 - **Federal**: <!--federal-->5.767 => 094475, 004528, 030136, 007287, 057715
 - **Lotofácil**: <!--lotofacil-->2.820 => 04, 05, 12, 06, 21, 25, 10, 09, 14, 23, 20, 19, 18, 17, 13
 - **Lotomania**: <!--lotomania-->2.472 => 95, 63, 82, 47, 51, 86, 71, 20, 54, 91, 28, 49, 61, 84, 43, 04, 58, 16, 03, 62
 - **+Milionária**: <!--maismilionaria-->52 => 49, 29, 36, 24, 31, 50, 04, 06
 - **Mega Sena**: <!--megasena-->2.595 => 52, 13, 01, 39, 50, 34
 - **Quina**: <!--quina-->6.157 => 35, 53, 37, 02, 25
 - **Super Sete**: <!--supersete-->397 => 6, 0, 1, 8, 0, 7, 5
 - **Timemania**: <!--timemania-->1.940 => 11, 51, 56, 39, 05, 28, 55, ATHLETICO/PR
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
