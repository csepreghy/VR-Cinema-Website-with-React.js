import {Entity} from 'aframe-react';
import React from 'react';

export default props => (
      <Entity obj-model={{obj: '#cinema-obj'}}
              position={[0, -5, 0]}
              scale={[0.1, 0.1, 0.1]}
              material={{color: "#666"}} />
);
