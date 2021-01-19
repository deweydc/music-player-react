import React, { useRef, useState } from 'react';
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


    // updates current time for song
    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime;
        const duration = (Math.ceil(e.target.duration) - current);
        //TODO changed duration to change in sync with currentTime

        //setting state
        setSongInfo({ ...songInfo, currentTime: current, duration })
    };

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

    //? State 
    // updating current time and showing the duration of the current song
    const [songInfo, setSongInfo] = useState({
        currentTime: null,
        duration: null,
    });



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
                    icon={faPlay}
                    onClick={playSongHandler} //function will handle playing the song
                />
                <FontAwesomeIcon
                    className='fast-forward'
                    size="2x"
                    icon={faAngleRight}
                />
            </div>
            <audio
                onTimeUpdate={timeUpdateHandler}
                onLoadedMetadata={timeUpdateHandler} // loading data will show duration as soon as loaded
                ref={audioRef}
                src={currentSong.audio}
            ></audio>
        </div>
    );
}


export default Player;