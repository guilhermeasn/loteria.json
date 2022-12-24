"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.recovery = exports.getResult = exports.writeRaffle = void 0;
const axios_1 = __importDefault(require("axios"));
const fs_1 = require("fs");
const path_1 = require("path");
const API = 'http://servicebus2.caixa.gov.br/portaldeloterias/api';
function updateRaffle(lottery) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = require(`../data/${lottery}.json`) || {};
        let raffle = data;
        let result = null;
        let count = 0;
        while (true)
            if (!(++count in data)) {
                result = yield getResult(lottery, count);
                if (!result)
                    break;
                raffle = Object.assign(Object.assign({}, raffle), result);
                writeRaffle(lottery, raffle);
                console.log(`Added in '${lottery}': ${JSON.stringify(result)}`);
            }
        ;
    });
}
exports.default = updateRaffle;
function writeRaffle(lottery, raffle) {
    (0, fs_1.writeFileSync)((0, path_1.join)('data', lottery + '.json'), JSON.stringify(raffle));
}
exports.writeRaffle = writeRaffle;
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
function getResult(lottery, number) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const http = yield axios_1.default.get(`${API}/${lottery}/${(number === null || number === void 0 ? void 0 : number.toString()) || ''}`);
            let result = [];
            switch (lottery) {
                case 'timemania':
                case 'diadesorte':
                    result = [
                        ...http.data.dezenasSorteadasOrdemSorteio,
                        http.data.nomeTimeCoracaoMesSorte
                    ];
                    break;
                case 'loteca':
                    result = http.data.listaResultadoEquipeEsportiva.map((obj) => `${obj.nomeEquipeUm}:${obj.nuGolEquipeUm}-${obj.nomeEquipeDois}:${obj.nuGolEquipeDois}`);
                    break;
                default:
                    result = http.data.dezenasSorteadasOrdemSorteio;
                    break;
            }
            return { [http.data.numero]: result };
        }
        catch (error) {
            console.error(error);
            return null;
        }
    });
}
exports.getResult = getResult;
function recovery(lottery, data) {
    let raffle = {};
    data.forEach((v, k) => {
        raffle = Object.assign(Object.assign({}, raffle), { [k + 1]: v });
    });
    writeRaffle(lottery, raffle);
}
exports.recovery = recovery;
