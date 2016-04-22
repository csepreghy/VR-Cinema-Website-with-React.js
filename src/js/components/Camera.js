import {Entity} from 'aframe-react';
import React from 'react';

export default class Camera extends React.Component {
  constructor(props) {
    super(props);

  }
    render() {
      return (
          <Entity position={[10, 0, 20]}
                  rotation={[0, 0, 0]}>
            <a-animation
                attribute="position"
                dur="4000"
                to="0 0 0"
            />
            <Entity camera=""
                    look-controls=""
                    wasd-controls={{enabled: true}}>
            </Entity>
          </Entity>
      );
    }
}
