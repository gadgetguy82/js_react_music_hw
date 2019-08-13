import React, {Component} from 'react';
import MusicSelector from '../components/MusicSelector';
import MusicDetail from '../components/MusicDetail';

class MusicBox extends Component {
  render() {
    return(
      <div>
        <MusicSelector />
        <MusicDetail />
      </div>
    );
  }
}

export default MusicBox
