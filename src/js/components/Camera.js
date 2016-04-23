import {Entity} from 'aframe-react';
import React from 'react';
import CameraAnimation from './CameraAnimation';
import Cursor from './Cursor';
import Navigation from './Navigation';

export default class Camera extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentPosition: [4, 0, 11] }
  }
    render() {
      return (
          <Entity position={ this.state.currentPosition }>
            <CameraAnimation newPosition={ this.state.currentPosition }/>
            <Navigation />
            <Entity camera=""
                    look-controls=""
                    wasd-controls={{enabled: false}}>
              <Cursor />
            </Entity>
          </Entity>
      );
    }
}
