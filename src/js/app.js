import 'aframe';
import 'babel-polyfill';
import {Animation, Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

import Camera from './components/Camera';
import Assets from './components/Assets';
import CinemaModel from './components/Cinema-Model';
import Movie from './components/Movie';
import Seats from './components//navigation/seats/Seats';

var TWEEN = require('tween.js');

class BoilerplateScene extends React.Component {
  constructor(props) {
    super(props);

    this.seatAnimation = this.seatAnimation.bind(this);
    this.handleChangeSeatClick = this.handleChangeSeatClick.bind(this)
  }

  handleChangeSeatClick() {
    this.refs['camera'].moveTo_CV_change_seat();
    this.refs['camera'].refs['cursor'].cursorAnimation();
    this.refs['seats'].fadeIn();
    this.refs['movie'].fadeOut();
  }


  seatAnimation(e) {
    console.log(e.target.id);
    this.refs['camera'].idToCoordinates(e.target.id);
    this.refs['camera'].refs['cursor'].revertBackToOriginal();
    this.refs['seats'].fadeOut();
    this.refs['movie'].fadeIn();
  }

  render () {
    return (
      <Scene >
        <Assets />
        <Camera handleChangeSeatClick={ this.handleChangeSeatClick } ref="camera"/>

        <Entity light={{type: 'directional', intensity: 0.3}} position={[1, 50, -50]}/>
        <Entity light={{type: 'directional', intensity: 0.2}} position={[1, 50, 0]}/>

        <Seats ref="seats" seatAnimation={ this.seatAnimation }/>
        <CinemaModel />
        <Movie ref="movie"/>
      </Scene>
    );
  }
}

ReactDOM.render(<BoilerplateScene/>, document.getElementById('scene-container'));
