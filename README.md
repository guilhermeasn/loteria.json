# loteria.json

[![Run Script](https://github.com/guilhermeasn/loteria.json/actions/workflows/run.yml/badge.svg)](https://github.com/guilhermeasn/loteria.json/actions/workflows/run.yml)

Todos os resultados atualizados e analisados das loterias da Caixa Econômica Federal em arquivos JSON. A atualização dos arquivos são feitas automaticamente, todos os dias, com Cron Job via GitHub Actions.

Últimos sorteios registrados:

 - **Dia de Sorte**: <!--diadesorte-->861 => 25, 11, 16, 15, 20, 08, 30, Novembro
 - **Dupla Sena**: <!--duplasena-->2.616 => 47, 39, 09, 20, 02, 33, 08, 11, 48, 07, 42, 36
 - **Federal**: <!--federal-->5.831 => 051528, 020321, 007592, 035960, 061479
 - **Lotofácil**: <!--lotofacil-->3.002 => 08, 03, 06, 07, 15, 21, 04, 25, 22, 19, 14, 23, 10, 18, 12
 - **Lotomania**: <!--lotomania-->2.571 => 76, 26, 29, 93, 15, 69, 44, 70, 34, 74, 85, 51, 57, 67, 12, 07, 72, 38, 66, 09
 - **+Milionária**: <!--maismilionaria-->111 => 26, 03, 15, 23, 50, 24, 01, 03
 - **Mega Sena**: <!--megasena-->2.674 => 46, 23, 15, 21, 14, 08
 - **Quina**: <!--quina-->6.339 => 61, 21, 62, 41, 46
 - **Super Sete**: <!--supersete-->494 => 2, 4, 0, 9, 7, 3, 5
 - **Timemania**: <!--timemania-->2.040 => 49, 19, 35, 34, 20, 41, 56, ATLETICO/GO
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

## Projetos que utilizam estes dados

 - **Analisador de Jogos da Lotofácil**: https://github.com/guilhermeasn/lotofacil/

## Autor

* **Guilherme Neves** - [github](https://github.com/guilhermeasn/) - [website](https://gn.dev.br/)

## Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE](https://github.com/guilhermeasn/loteria.json/blob/master/LICENSE) para detalhes.
