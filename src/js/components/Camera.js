import {Entity} from 'aframe-react';
import React from 'react';

export default props => (
  <Entity position={[10, 0, 20]}
          rotation={[-15, 10, 0]}>
    <Entity camera=""
            look-controls=""
            wasd-controls={{enabled: true}} />
  </Entity>
);
