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
const helpers_1 = require("./helpers");
const megasena_json_1 = __importDefault(require("../data/megasena.json"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        let raffle = megasena_json_1.default;
        let result = null;
        let count = 0;
        while (true)
            if (!(++count in megasena_json_1.default)) {
                result = yield (0, helpers_1.getResult)('megasena', count);
                if (!result)
                    break;
                console.log('Added raffle: ' + JSON.stringify(result));
                raffle = Object.assign(Object.assign({}, raffle), result);
                (0, helpers_1.writeRaffle)('megasena', raffle);
            }
        ;
    });
}
main();
