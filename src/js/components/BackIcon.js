import {Entity} from 'aframe-react';
import React from 'react';

export default class BackIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Entity position={[-1, -2, -1]}
                rotation={[-60, 30, 20]} >
          <a-image
                  src="#back-icon"
                  width="0.8"
                  height="0.5" />
        </Entity>
    );
  }
}