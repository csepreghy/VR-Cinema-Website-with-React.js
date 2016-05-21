import 'aframe';
import 'babel-polyfill';
import {Animation, Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

import Camera from './components/Camera';
import Sky from './components/Sky';
import Assets from './components/Assets';
import CinemaModel from './components/Cinema-Model';
import Seats from './components//navigation/seats/Seats';

var TWEEN = require('tween.js');

class BoilerplateScene extends React.Component {
  constructor(props) {
    super(props);

    this.s1_1 = this.s1_1.bind(this);
  }

  s1_1() {
    console.log("A14 clicked");
    this.refs['camera'].moveTo_A14();
    this.refs['camera'].refs['cursor'].revertBackToOriginal();
    this.refs['seats'].refs['s1_1'].handleClick();
  }

  render () {
    console.log(Camera)
    return (
      <Scene stats="" fog={{type: 'exponential', color: '#AAA', density: 0}}>
        <Assets />
        <Camera ref="camera"/>

        <Sky/>

        <Entity light={{type: 'ambient', color: '#888'}}/>
        <Entity light={{type: 'directional', intensity: 0.2}} position={[-1, 7000, 0]}/>
        <Entity light={{type: 'directional', intensity: 0.1}} position={[1, 7000, 0]}/>

        <Seats ref="seats" s1_1={ this.s1_1 }/>
        <CinemaModel />
      </Scene>
    );
  }
}

ReactDOM.render(<BoilerplateScene/>, document.getElementById('scene-container'));
