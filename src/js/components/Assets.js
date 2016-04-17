import {Entity} from 'aframe-react';
import React from 'react';

export default props => (
      <a-assets>
        <a-asset-item id="cinema-obj" src="/models/cinema.obj"></a-asset-item>
        <a-asset-item id="cinema-mtl" src="/models/cinema.mtl"></a-asset-item>
      </a-assets>
);
