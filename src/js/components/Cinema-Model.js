import {Entity} from 'aframe-react';
import React from 'react';
import Seats from './navigation/seats/Seats';

export default props => (
      <Entity obj-model={{obj: '#cinema-obj', mtl: '#cinema-mtl'}}
              position={[-60, 0, -60]}
              rotation={[0, 0, 0]}
              scale={[0.1, 0.1, 0.1]}
              material={{color: "#666"}} >
        <Seats />
      </Entity>
);
