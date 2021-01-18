import React, { useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";


const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
    //? Ref
    const audioRef = useRef(null); //this is how you reference an element in the code. we will use this to reference the audio element below also add from react.

    //? Event Handlers 
    const playSongHandler = () => {
        if (isPlaying) {
            //if the song is playing this will allow pause
            audioRef.current.pause();
            setIsPlaying(!isPlaying); // this will switch state isPlaying true or false
        } else {
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    }



    return (
        <div className="player">
            <div className="time-control">
                <p>Start Time</p>
                <input type="range" />
                <p>End Time</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon
                    className='rewind'
                    size="2x"
                    icon={faAngleLeft}

                />
                <FontAwesomeIcon
                    className='play'
                    size="2x"
                    icon={faPlay}
                    onClick={playSongHandler} //function will handle playing the song
                />
                <FontAwesomeIcon
                    className='fast-forward'
                    size="2x"
                    icon={faAngleRight}
                />
            </div>
            <audio ref={audioRef} src={currentSong.audio}></audio>
        </div>
    );
}


export default Player;