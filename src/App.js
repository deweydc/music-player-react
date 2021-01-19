import React, { useState } from "react";
//? Import Styles 
import './styles/app.scss';
//? Adding Components
import Player from "./Components/Player";
import Song from "./Components/Songs";
//? Import Utilities 
import data from './library'

function App() {

  //State 
  const [songs, setSongs] = useState(data());
  // returns whole array of song objects 
  const [currentSong, setCurrentSong] = useState(songs[6])
  //set the initial song when page is loaded 
  const [isPlaying, setIsPlaying] = useState(false)
  // looks if music is playing


  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
      />
    </div>
  );
}

export default App;
