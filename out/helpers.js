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
exports.getResult = exports.writeRaffle = void 0;
const axios_1 = __importDefault(require("axios"));
const fs_1 = require("fs");
const path_1 = require("path");
const http_1 = require("http");
const API = 'http://servicebus2.caixa.gov.br/portaldeloterias/api';
function writeRaffle(lottery, raffle) {
    (0, fs_1.writeFileSync)((0, path_1.join)('data', lottery + '.json'), JSON.stringify(raffle));
}
exports.writeRaffle = writeRaffle;
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function getResult(lottery, number) {
    return __awaiter(this, void 0, void 0, function* () {
        yield sleep(3000);
        try {
            const http = yield axios_1.default.get(`${API}/${lottery}/${(number === null || number === void 0 ? void 0 : number.toString()) || ''}`, {
                httpAgent: new http_1.Agent({ keepAlive: true })
            });
            return { [http.data.numero]: http.data.dezenasSorteadasOrdemSorteio };
        }
        catch (error) {
            console.error(error);
            return null;
        }
    });
}
exports.getResult = getResult;
