import React from "react";
//? Import Styles 
import './styles/app.scss';
//? Adding Components
import Player from "./Components/Player";
import Song from "./Components/Songs";

function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
