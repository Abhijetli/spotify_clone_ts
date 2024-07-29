import { getSongs } from "./api-client.js";
import Singer from "./singer-model.js";

export async function getAllSongs(singerName="Sonu Nigam"){
    const data= await getSongs();
    const singers:Singer[]=[];
    data.results.map((Obj:any)=>{
        const singer:Singer= new Singer(Obj['artistName'],Obj['trackName'],Obj['artworkUrl100'],Obj['previewUrl']);
        singers.push(singer)
    })
    console.log('All data is ', singers)
    return singers;
}
getAllSongs();