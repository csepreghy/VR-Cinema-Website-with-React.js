import {Entity} from 'aframe-react';
import React from 'react';

export default props => (
      <a-assets>
        <a-asset-item id="cinema-obj" src="assets/models/cinema.obj"></a-asset-item>
        <a-asset-item id="cinema-mtl" src="assets/models/cinema.mtl"></a-asset-item>
        <img id="back-icon" src="assets/img/back-icon.png"></img>
      </a-assets>
);
