import React from 'react';
import './MusicDetail.css'

const MusicDetail = (props) => {
  if (!props.song) return null;
  return(
    <div className="music-detail">
      <div className="info-image">
        <div className="info">
          <h3>{props.song['im:name'].label}</h3>
          <p> Artist: {props.song['im:artist'].label} </p>
          <p> Chart Position: {props.position}</p>
        </div>
        <img src={props.song['im:image'][2].label} alt="" />
      </div>
      <audio controls>
        <source src={props.song.link[1].attributes.href} />
      </audio>
    </div>
  )
}

export default MusicDetail
