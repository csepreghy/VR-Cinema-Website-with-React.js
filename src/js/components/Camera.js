import {Entity} from 'aframe-react';
import React from 'react';
import CameraAnimation from './CameraAnimation';
import Cursor from './Cursor';
import Navigation from './Navigation';

export default class Camera extends React.Component {
  constructor(props) {
    super(props);

    this.state = { cameraPosition: [0, 200, -1060] }

    this.changeCameraPosition = this.changeCameraPosition.bind(this);
  }

  changeCameraPosition() {
    this.setState({
      cameraPosition: [10, 15, 55]
    });
    console.log(this.state.cameraPosition);
    document.querySelector('#cameraChangeAnimation').emit('playSeatChangeAnimation');
  }

  render() {
      return (
          <Entity position={ this.props.originalCameraPosition }>
            <CameraAnimation newPosition={ this.state.cameraPosition }/>
            <Navigation handleBackClick={ this.changeCameraPosition }/>
            <Entity camera=""
                    look-controls=""
                    wasd-controls={{enabled: true}}>
              <Cursor />
            </Entity>
          </Entity>
      );
    }
}
