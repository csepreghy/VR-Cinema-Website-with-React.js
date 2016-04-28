import {Entity, Animation} from 'aframe-react';
import React from 'react';

export default class CameraAnimation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
          <Animation
              id="cameraChangeAnimation"
              attribute="position"
              dur="4000"
              to={ this.props.newPosition }
              begin="playSeatChangeAnimation"
          />
    );
  }
}
