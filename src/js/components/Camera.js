import {Entity} from 'aframe-react';
import React from 'react';
import CameraAnimation from './CameraAnimation';
import Cursor from './Cursor';

export default class Camera extends React.Component {
  constructor(props) {
    super(props);

  }
    render() {
      return (
          <Entity position={[10, 0, 20]}
                  rotation={[0, 0, 0]}>
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
