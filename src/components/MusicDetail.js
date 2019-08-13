import React, {Fragment} from 'react';

const MusicDetail = (props) => {
  if (!props.song) return null;
  return(
    <Fragment>
    <h3>{props.song['im:name'].label}</h3>
    <p> Artist: {props.song['im:artist'].label} </p>
    <p> Chart Position: {props.position}</p>
    </Fragment>
  )
}

export default MusicDetail
