import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlay,
    faAngleLeft,
    faAngleRight,
    faPause,
} from "@fortawesome/free-solid-svg-icons";


const Player = ({ audioRef, currentSong, isPlaying, setIsPlaying, setSongInfo, songInfo }) => {

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



    const getTime = (time) => {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }

    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        //? Set State
        setSongInfo({ ...songInfo, currentTime: e.target.value })
    }





    return (
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input
                    min={0}
                    max={songInfo.duration}
                    value={songInfo.currentTime}
                    type="range"
                    onChange={dragHandler}
                />
                <p>{getTime(songInfo.duration)}</p>
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
                    icon={isPlaying ? faPause : faPlay}
                    onClick={playSongHandler} //function will handle playing the song
                />
                <FontAwesomeIcon
                    className='fast-forward'
                    size="2x"
                    icon={faAngleRight}
                />
            </div>
        </div>
    );
}


export default Player;