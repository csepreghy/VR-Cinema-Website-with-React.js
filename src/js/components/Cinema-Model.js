import {Entity} from 'aframe-react';
import React from 'react';

export default props => (
      <Entity obj-model={{obj: '#cinema-obj', mtl: '#cinema-mtl'}}
              position={[0, 0, 0]}
              rotation={[0, 90, 0]}
              scale={[1, 1, 1]}
              material={{color: "#666"}} />
);
