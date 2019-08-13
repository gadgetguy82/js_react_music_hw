import React from 'react';

const MusicSelector = (props) => {
  const options = props.songs.map((song, index) => {
    return <option value={index} key={index}>{song["im:name"].label}</option>
  });

  function handleChange(event)  {
    props.onSongSelected(event.target.value);
  }

  return(
    <select id="music-selector" defaultValue="default" onChange={handleChange}>
      <option disabled value="default">Choose a song...</option>
      {options}
    </select>
  )
}

export default MusicSelector;
