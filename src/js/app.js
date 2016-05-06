import 'aframe';
import 'babel-polyfill';
import {Animation, Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

import Camera from './components/Camera';
import Sky from './components/Sky';
import Assets from './components/Assets';
import CinemaModel from './components/Cinema-Model';

class BoilerplateScene extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
      <Scene stats="" fog={{type: 'exponential', color: '#AAA', density: 0}}>
        <Assets />
        <Camera originalCameraPosition={[25, 100, -550]}/>

        <Sky/>

        <Entity light={{type: 'ambient', color: '#888'}}/>
        <Entity light={{type: 'directional', intensity: 0.2}} position={[-1, 7000, 0]}/>
        <Entity light={{type: 'directional', intensity: 0.1}} position={[1, 7000, 0]}/>

        <CinemaModel />
      </Scene>
    );
  }
}

ReactDOM.render(<BoilerplateScene/>, document.getElementById('scene-container'));
