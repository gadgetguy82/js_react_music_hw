import React from 'react';

const MusicSelector = (props) => {
  return(
    <select id="music-selector" defaultValue="default">
      <option disabled value="default">Choose a song...</option>
    </select>
  )
}

export default MusicSelector;
