import {Entity, Animation} from 'aframe-react';
import React from 'react';
import Camera from './Camera';

export default class CameraAnimation extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    
    console.log("render cameraAnimation");
    console.log("old camera pos " + this.props.oldCameraPosition);
    console.log("new camera pos " + this.props.newCameraPosition);

    return (
          <Animation
              id="cameraChangeAnimation"
              attribute="position"
              dur="4000"
              from={ this.props.oldCameraPosition }
              to={ this.props.newCameraPosition }
              begin="playAnimation"
          />
    );
  }
}
