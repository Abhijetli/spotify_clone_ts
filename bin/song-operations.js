var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getSongs } from "./api-client.js";
import Singer from "./singer-model.js";
export function getAllSongs() {
    return __awaiter(this, arguments, void 0, function* (singerName = "Sonu Nigam") {
        const data = yield getSongs();
        const singers = [];
        data.results.map((Obj) => {
            const singer = new Singer(Obj['artistName'], Obj['trackName'], Obj['artworkUrl100'], Obj['previewUrl']);
            singers.push(singer);
        });
        console.log('All data is ', singers);
        return singers;
    });
}
getAllSongs();
