import React, {Component} from 'react';
import MusicSelector from '../components/MusicSelector';
import MusicDetail from '../components/MusicDetail';

class MusicBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      currentSong: null,
      position: 0
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
    this.setState({currentSong: selectedSong, position: parseInt(index) + 1});
  }

  render() {
    return(
      <div className="music-box">
        <MusicSelector
        songs={this.state.songs}
        onSongSelected={this.handleSongSelected}
        />
        <MusicDetail
        song = {this.state.currentSong}
        position = {this.state.position}
        />
      </div>
    );
  }
}

export default MusicBox
