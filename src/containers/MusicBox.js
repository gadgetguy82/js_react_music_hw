import React, {Component} from 'react';
import MusicSelector from '../components/MusicSelector';
import MusicDetail from '../components/MusicDetail';



class MusicBox extends Component {

constructor(props) {
  super(props);
  this.state = {
    songs: [],
    currentSong: null
  };
  this.handleSongSelected = this.handleSongSelected.bind(this);
}

componentDidMount() {
  const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'
  fetch(url)
  .then(res=>res.json())
  .then(songs => this.setState({songs: songs.feed.entry}))
  .catch(err => console.error);
}

handleSongSelected(index) {
  const selectedSong = this.state.songs[index];
  this.setState({currentSong: selectedSong});
}

  render() {
    return(
      <div>
        <MusicSelector
        songs={this.state.songs}/>
        <MusicDetail />
      </div>
    );
  }
}

export default MusicBox
