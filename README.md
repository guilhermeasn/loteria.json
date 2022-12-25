# loteria.json

[![Fetch Data](https://github.com/guilhermeasn/loteria.json/actions/workflows/fetchdata.yml/badge.svg)](https://github.com/guilhermeasn/loteria.json/actions/workflows/fetchdata.yml)

Todos os resultados atualizados das loterias da Caixa Econômica Federal em arquivos JSON. A atualização dos arquivos são feitas automaticamente, todos os dias, via Cron Job com GitHub Actions.

## Formato

Os arquivos da pasta *data* contém um *object* no seguinte formato: suas **chaves** são formadas pelos **números dos sorteios** e os **valores** contém um **array com as dezenas sorteadas por ordem de sorteio**.

```
{ [key in number]: Array<number | string> }
```

## Acesso

Obtenha os dados via GET nos seguintes *endpoints*:

 - **Dia de Sorte**: https://raw.githubusercontent.com/guilhermeasn/loteria.json/master/data/diadesorte.json
 - **Dupla Sena**: https://raw.githubusercontent.com/guilhermeasn/loteria.json/master/data/duplasena.json
 - **Federal**: https://raw.githubusercontent.com/guilhermeasn/loteria.json/master/data/federal.json
 - **Loteca**: https://raw.githubusercontent.com/guilhermeasn/loteria.json/master/data/loteca.json
 - **Lotofácil**: https://raw.githubusercontent.com/guilhermeasn/loteria.json/master/data/lotofacil.json
 - **+Milionária**: https://raw.githubusercontent.com/guilhermeasn/loteria.json/master/data/maismilionaria.json
 - **Mega Sena**: https://raw.githubusercontent.com/guilhermeasn/loteria.json/master/data/megasena.json
 - **Quina**: https://raw.githubusercontent.com/guilhermeasn/loteria.json/master/data/quina.json
 - **Super Sete**: https://raw.githubusercontent.com/guilhermeasn/loteria.json/master/data/supersete.json
 - **Dupla Sena**: https://raw.githubusercontent.com/guilhermeasn/loteria.json/master/data/duplasena.json
 - **Timemania**: https://raw.githubusercontent.com/guilhermeasn/loteria.json/master/data/timemania.json

## Autor

* **Guilherme Neves** - [github](https://github.com/guilhermeasn/) - [website](https://gn.dev.br/)

## Licença

This project is under the MIT license - see file [LICENSE](https://github.com/guilhermeasn/loteria.json/blob/master/LICENSE) for details.
