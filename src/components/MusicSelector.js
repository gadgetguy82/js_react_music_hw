import React from 'react';

const MusicSelector = (props) => {
  const options = props.songs.map((song, index) => {
    return <option value={index} key={index}>{song["im:name"].label}</option>
  });

  return(
    <select id="music-selector" defaultValue="default">
      <option disabled value="default">Choose a song...</option>
      {options}
    </select>
  )
}

export default MusicSelector;
