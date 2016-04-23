import {Entity} from 'aframe-react';
import React from 'react';

export default class Check extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Entity position={[0, -2, -1.4]}
                rotation={[-40, 0, 0]} >
          <a-image
              src="#check"
              width="0.8"
              height="0.5" />
        </Entity>
    );
  }
}