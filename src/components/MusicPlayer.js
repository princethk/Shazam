import React from 'react';
import './musicplayer.css';
import Header from './Header';
function Musicplayer(props) {
  return (
    <>
    <Header/>
    <div className="App">
      
      <div className="music-player">
        <audio controls>
        <source src={props?.data} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
    </>
  );
}

export default Musicplayer;
