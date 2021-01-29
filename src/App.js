import React, { useState, useRef } from "react";
//? Import Styles 
import './styles/app.scss';
//? Adding Components
import Player from "./Components/Player";
import Song from "./Components/Songs";
import Library from './Components/Library';
//? Import Utilities 
import data from './library'

function App() {

  //? Ref
  const audioRef = useRef(null); //this is how you reference an element in the code. we will use this to reference the audio element below also add from react.
  //? State 
  const [songs, setSongs] = useState(data());
  // updating current time and showing the duration of the current song
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  // updates current time for song
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = (Math.ceil(e.target.duration) - current);
    //TODO changed duration to change in sync with currentTime

    //setting state
    setSongInfo({ ...songInfo, currentTime: current, duration })
  };
  // returns whole array of song objects 
  const [currentSong, setCurrentSong] = useState(songs[0])
  //set the initial song when page is loaded 
  const [isPlaying, setIsPlaying] = useState(false)
  // looks if music is playing


  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        audioRef={audioRef}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
      />
      <Library
        audioRef={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setSongs={setSongs}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler} // loading data will show duration as soon as loaded
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;
