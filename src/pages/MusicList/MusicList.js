import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  getMusicList
} from '../../reducers/MusicReducer/actions';

import './MusicList.css'

class MusicList extends Component {

  componentDidMount() {
    this.props.getMusicList()
    localStorage.setItem("api_key", "6f95c3a259565d78d40cc073a2d7a7d2")
  }

  renderTracks = () => {
    console.log(this.props)
    return this.props.music.tracks.track.map((track, index) => {
      return (
        <div key={`track_${index}`} className="trackHolder">
          <div className="imageHolder">
            <img src={track.image[2]['#text']} alt="track" />
          </div>
          <div className="descriptionHolder">
            <div className="trackTitle">
              {track.name} by <span className="artistName"> {track.artist.name} </span>
            </div>
            <div className="playCount">
              Play count: {track.playcount}
            </div>
          </div>
        </div>
      )
    })
  }

  renderTitle() {
    return (
      <div className="listTitle">
        Top 10 Tracks Right Now <span className="fireIcon">🔥 🔥 🔥</span>
      </div>
    )
  }

  render() {
    return(
      <div>
        { this.renderTitle() }
        {
          this.props.music.tracks ? this.renderTracks() : ""
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    music: state.music.musicList
  }
}

function dispatchToProps(dispatch) {
  return bindActionCreators({
    getMusicList
  }, dispatch)
}

const MusicList_Connected = connect(mapStateToProps, dispatchToProps)(MusicList);

export default MusicList_Connected;
