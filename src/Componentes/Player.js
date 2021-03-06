import React, {useState, useRef, useEffect} from 'react'
import PlayerDetails from './PlayerDetails'
import PlayerControls from "./PlayerControls";
function Player(props) {
const audioEl = useRef (null);
const [isPlaying, setIsPlaying] =useState (false);

useEffect (()=>{
if (isPlaying) {
    audioEl.current.play();
}else{
    audioEl.current.pause();
}

});

const SkipSong = (forwards = true) => {
    if (forwards) {
props.SetCurrentSongIndex (()=>{
    let temp = props.currentSongIndex;
    temp++;

    if (temp > props.songs.length -1) {
        temp = 0;
    }

    return temp;
});
    }else{
        
        props.SetCurrentSongIndex (()=>{
        let temp = props.currentSongIndex;
        temp--;
    
        if (temp < 0) {
            temp = props.songs.length -1 ;
        }
    
        return temp;
    });

    }
}

    return (
        <div className ="c-player">
            <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
            <h4> DEEZER</h4>
            <PlayerDetails songs={props.songs[props.currentSongIndex]}/>
             <PlayerControls 
             isPlaying={isPlaying} 
             setIsPlaying={setIsPlaying} 
             SkipSong={SkipSong} 
             />
             <p><strong>Você Escolheu:</strong> {props.songs[props.nextSongIndex].title} Proxima {props.songs[props.nextSongIndex].artist} </p>
        </div>
      
    )
}

export default Player
