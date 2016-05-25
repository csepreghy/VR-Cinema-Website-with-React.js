import 'aframe';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

import Camera from './components/Camera';
import Assets from './components/Assets';
import CinemaModel from './components/Cinema-Model';
import Movie from './components/Movie';
import Lights from './components/Lights.js';
import Seats from './components//navigation/seats/Seats';

var TWEEN = require('tween.js');

class BoilerplateScene extends React.Component {
  constructor(props) {
    super(props);

    this.seatAnimation = this.seatAnimation.bind(this);
    this.handleChangeSeatClick = this.handleChangeSeatClick.bind(this);
    this.introAnimation = this.introAnimation.bind(this);
  }

  handleChangeSeatClick() {
    this.refs['camera'].moveTo_CV_change_seat();
    this.refs['camera'].refs['cursor'].cursorAnimation();
    this.refs['seats'].fadeIn();
    this.refs['movie'].fadeOut();
  }


  seatAnimation(e) {
    this.refs['camera'].idToCoordinates(e.target.id);
    this.refs['camera'].refs['cursor'].revertBackToOriginal();
    this.refs['seats'].fadeOut();
    this.refs['movie'].fadeIn();
  }

  introAnimation() {
    console.log("intro anim app level")
    this.refs['camera'].introAnimation();
  }

  render () {
    return (
      <Scene stats="">
        <Assets introAnimation={this.introAnimation}/>
        <Camera handleChangeSeatClick={ this.handleChangeSeatClick } ref="camera"/>
        
        <Lights />

        <Seats ref="seats" seatAnimation={ this.seatAnimation }/>
        <CinemaModel />
        <Movie ref="movie"/>
      </Scene>
    );
  }
}

ReactDOM.render(<BoilerplateScene/>, document.getElementById('scene-container'));
