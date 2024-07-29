import Singer from "./singer-model.js";
import { getAllSongs } from "./song-operations.js";
getAllSongsBySinger();
async function getAllSongsBySinger(){
    const singer:Singer[]=await getAllSongs();
    singer.forEach(singer=>{
        const cardDiv=prepareCard(singer);
        const div=document.querySelector('#songs')
        div?.appendChild(cardDiv);
    })


}

function prepareCard(singer:Singer){
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.style.width = '18rem';

    // Create and append the image
    const image = document.createElement('img');
    image.src = singer.photo;
    image.className = 'card-img-top';
    cardDiv.appendChild(image);

    // Create the card body div
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    // Create and append the title
    const h5 = document.createElement('h5');
    h5.innerText = singer.name;
    h5.className = 'card-title';
    cardBody.appendChild(h5);

    // Create and append the text
    const p = document.createElement('p');
    p.innerText = singer.title;
    p.className = 'card-text';
    cardBody.appendChild(p);

    // Create and append the audio tag
    const audioTag = document.createElement('audio');
    audioTag.src = singer.audio;
    audioTag.controls = true;
    cardBody.appendChild(audioTag);

    // Append the card body to the main card div
    cardDiv.appendChild(cardBody);

    return cardDiv;
}
    /*const cardDiv=document.createElement('div');
    cardDiv.className='card';
    cardDiv.style.width='18rem'
    const image=document.createElement('img');
    image.src=singer.photo;
    image.className='card-img-top'
    cardDiv.appendChild(image);
    const cardBody=document.createElement('div')
    cardBody.className='card-body';
    const h5=document.createElement('h5')
    h5.innerText=singer.name
    h5.className='card-title'
    cardBody.appendChild(h5);
    cardDiv.appendChild(cardBody);
    const p=document.createElement('p');
    p.innerText=singer.title;
    p.className="card-text";
    cardBody.appendChild(p)
    const audioTag=document.createElement('audio')
    audioTag.src=singer.audio
    audioTag.controls=true;
    cardBody.appendChild(audioTag);
    return cardDiv;

}
<div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div> */