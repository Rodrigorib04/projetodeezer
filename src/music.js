import {useState, useEffect} from "react"
import Player from "./Componentes/Player"






function Music  () {
const [songs] = useState ([

    {
        title: "Os melhores da Semana;",
        artist: "Hariel",
        img_src: "/img/hariell.jpg",
        src: "/music/hariel.mp3"
        },
{
title: "Os melhores da Semana;",
artist: "Anitta",
img_src: "/img/anitta.png",
src: "/music/anitta.mp3"
},

    {
        title: "Os melhores da Semana;",
        artist: "Pixote",
        img_src: "/img/pixote.jpg",
        src: "/music/pixote.mp3"
        },
        {
            title: "Os melhores da Semana",
            artist: "Charles Brown jr",
            img_src: "/img/cbjr.jpg",
            src: "/music/Charles.mp3"
            },
        {
            title: "Os melhores da Semana",
            artist: "Cassia Eller",
            img_src: "/img/cassia.jpg",
            src: "/music/cassia.mp3"
            },
            
                {
                    title: "Os melhores da Semana",
                    artist: "Hariel",
                    img_src: "/img/racanegra.jpg",
                    src: "/music/Doce.mp3"
                    },
            
]);

const [currentSongIndex, SetCurrentSongIndex]= useState (0);
const [nextSongIndex, SetNextSongIndex]= useState (currentSongIndex +1);

useEffect (()=>{
    SetNextSongIndex (()=>{
if (currentSongIndex + 1 > songs.length -1) {
    return 0;
}else{
    return currentSongIndex + 1;
}
    });
},[currentSongIndex]);


    return (
        <div className='App'>
        <Player 
        currentSongIndex={currentSongIndex}
        SetCurrentSongIndex= {SetCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs= {songs}
        />
        </div>
    )
};

export default Music