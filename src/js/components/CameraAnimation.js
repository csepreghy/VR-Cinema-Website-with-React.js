import {Entity} from 'aframe-react';
import React from 'react';

export default class CameraAnimation extends React.Component {
  constructor(props) {
    super(props);

    this.state = { kuki:  "0 0 0" };

  }
  render() {
    return (
          <a-animation
              attribute="position"
              dur="4000"
              to={ this.state.kuki }
          />
    );
  }
}
