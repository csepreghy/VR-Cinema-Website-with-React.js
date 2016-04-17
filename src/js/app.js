import 'aframe';
import 'babel-polyfill';
import {Animation, Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

import Camera from './components/Camera';
import Cursor from './components/Cursor';
import Sky from './components/Sky';
import Assets from './components/Assets';
import CinemaModel from './components/Cinema-Model';

class BoilerplateScene extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
      <Scene stats="true" fog="type: eponential; color: #AAA; density: 0.001">
        <Assets />
        <Camera><Cursor/></Camera>

        <Sky/>

        <Entity light={{type: 'ambient', color: '#888'}}/>
        <Entity light={{type: 'directional', intensity: 0.5}} position={[-1, 1, 0]}/>
        <Entity light={{type: 'directional', intensity: 1}} position={[1, 1, 0]}/>

        <CinemaModel />
      </Scene>
    );
  }
}

ReactDOM.render(<BoilerplateScene/>, document.getElementById('scene-container'));
