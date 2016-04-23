import {Entity} from 'aframe-react';
import React from 'react';

export default class Back extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Entity position={[-1, -2, -1]}
                rotation={[-40, 45, 0]}
        >
          <a-image
                  src="#back"
                  width="0.8"
                  height="0.5" />
        </Entity>
    );
  }
}