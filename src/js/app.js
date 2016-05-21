import 'aframe';
import 'babel-polyfill';
import {Animation, Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

import Camera from './components/Camera';
import Sky from './components/Sky';
import Assets from './components/Assets';
import CinemaModel from './components/Cinema-Model';
import Movie from './components/Movie';
import Seats from './components//navigation/seats/Seats';

var TWEEN = require('tween.js');

class BoilerplateScene extends React.Component {
  constructor(props) {
    super(props);

    this.s1_1 = this.s1_1.bind(this);
    this.handleChangeSeatClick = this.handleChangeSeatClick.bind(this)
  }

  handleChangeSeatClick() {
    this.refs['camera'].moveTo_CV_change_seat();
    this.refs['camera'].refs['cursor'].cursorAnimation();
    this.refs['seats'].fadeIn();
    this.refs['movie'].fadeOut();
  }


  s1_1() {
    console.log("A14 clicked");
    this.refs['camera'].moveTo_A14();
    this.refs['camera'].refs['cursor'].revertBackToOriginal();
    this.refs['seats'].refs['s1_1'].handleClick();
  }

  render () {
    return (
      <Scene stats="" fog={{type: 'exponential', color: '#AAA', density: 0}}>
        <Assets />
        <Camera handleChangeSeatClick={ this.handleChangeSeatClick } ref="camera"/>

        <Entity light={{type: 'ambient', color: '#888'}}/>
        <Entity light={{type: 'directional', intensity: 0.2}} position={[-1, 50, 0]}/>
        <Entity light={{type: 'directional', intensity: 0.1}} position={[1, 50, 0]}/>

        <Seats ref="seats" s1_1={ this.s1_1 }/>
        <CinemaModel />
        <Movie ref="movie"/>
      </Scene>
    );
  }
}

ReactDOM.render(<BoilerplateScene/>, document.getElementById('scene-container'));
