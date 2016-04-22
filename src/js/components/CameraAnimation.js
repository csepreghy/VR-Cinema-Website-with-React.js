import {Entity, Animation} from 'aframe-react';
import React from 'react';

export default class CameraAnimation extends React.Component {
  constructor(props) {
    super(props);

    this.state = { newPosition:  [0, 0, 0] };
  }

  render() {
    return (
          <Animation
              attribute="position"
              dur="4000"
              to={ this.state.newPosition }
          />
    );
  }
}
