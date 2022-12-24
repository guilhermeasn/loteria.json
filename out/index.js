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
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./helpers");
function main(lottery) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = require(`../data/${lottery}.json`) || {};
        let raffle = data;
        let result = null;
        let count = 0;
        while (true)
            if (!(++count in data)) {
                result = yield (0, helpers_1.getResult)(lottery, count);
                if (!result)
                    break;
                raffle = Object.assign(Object.assign({}, raffle), result);
                (0, helpers_1.writeRaffle)(lottery, raffle);
                console.log(`Added in '${lottery}': ${JSON.stringify(result)}`);
            }
        ;
    });
}
main('maismilionaria');
