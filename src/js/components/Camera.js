import {Entity} from 'aframe-react';
import React from 'react';
import CameraAnimation from './CameraAnimation';
import Cursor from './Cursor';

export default class Camera extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentPosition: [10, 0, 20]}
  }
    render() {
      return (
          <Entity position={ this.state.currentPosition }>
            <CameraAnimation />
            <Entity camera=""
                    look-controls=""
                    wasd-controls={{enabled: true}}>
              <Cursor />
            </Entity>
          </Entity>
      );
    }
}
