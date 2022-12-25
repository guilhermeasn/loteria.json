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
const helpers_1 = __importDefault(require("./helpers"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, helpers_1.default)('maismilionaria');
        yield (0, helpers_1.default)('megasena');
        yield (0, helpers_1.default)('lotofacil');
        yield (0, helpers_1.default)('quina');
        yield (0, helpers_1.default)('lotomania');
        yield (0, helpers_1.default)('timemania');
        yield (0, helpers_1.default)('duplasena');
        yield (0, helpers_1.default)('federal');
        yield (0, helpers_1.default)('diadesorte');
        yield (0, helpers_1.default)('supersete');
        yield (0, helpers_1.default)('loteca');
    });
}
main();
