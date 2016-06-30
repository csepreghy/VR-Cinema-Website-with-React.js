import 'aframe';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import 'aframe-fps-look-component';
import 'aframe-extras';
import 'aframe-text-component';

import Camera from './components/Camera';
import Assets from './components/Assets';
import CinemaModel from './components/Cinema-Model';
import Movie from './components/Movie';
import Lights from './components/Lights';
import Seats from './components//navigation/seats/Seats';

var extras = require('aframe-extras');
AFRAME.registerComponent('velocity', extras.math.velocity); // Register a single component.
extras.physics.registerAll();                               // Register a particular package, and its dependencies.
extras.registerAll();

class BoilerplateScene extends React.Component {
  constructor(props) {
    super(props);

    this.state = { yourCurrentSeat: 'S7_1'};

    this.seatAnimation = this.seatAnimation.bind(this);
    this.handleChangeSeatClick = this.handleChangeSeatClick.bind(this);
  }

  handleChangeSeatClick() {
    this.refs['camera'].moveTo_CV_change_seat();
    this.refs['camera'].fadeCanvasTextIn();
    this.refs['camera'].refs['cursor'].cursorAnimation();
    this.refs['seats'].fadeIn();
    this.refs['movie'].fadeOut();
  }


  seatAnimation(e) {

    this.setState({ yourCurrentSeat: e.target.id });

    this.refs['camera'].idToCoordinates(e.target.id);
    this.refs['camera'].refs['cursor'].revertBackToOriginal();
    this.refs['seats'].fadeOut();
    this.refs['movie'].fadeIn();
  }

  render () {

    return (
      <Scene>
        <Assets introAnimation={this.introAnimation}/>
        <Camera handleChangeSeatClick={ this.handleChangeSeatClick }
                ref="camera"
                yourCurrentSeat={ this.state.yourCurrentSeat } />

        <Lights />

        <Seats ref="seats" seatAnimation={ this.seatAnimation }/>
        <CinemaModel />
        <Movie ref="movie"/>
      </Scene>
    );
  }
}

ReactDOM.render(<BoilerplateScene/>, document.getElementById('scene-container'));
