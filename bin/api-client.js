var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function getSongs() {
    return __awaiter(this, arguments, void 0, function* (singerName = "Sonu Nigam") {
        const URL = ` https://itunes.apple.com/search?term=${singerName}&limit=25.`;
        try {
            const response = yield fetch(URL);
            const data = yield response.json();
            console.log("data recieved", data);
            return data;
        }
        catch (err) {
            console.log(err);
            throw new Error('Something went WrongLocation.' + err.message);
        }
    });
}
// getSongs();
