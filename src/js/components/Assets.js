import {Entity} from 'aframe-react';
import React from 'react';

export default props => (
      <a-assets>
        <a-asset-item id="cinema-obj" src="assets/models/cinema.obj"></a-asset-item>
        <a-asset-item id="cinema-mtl" src="assets/models/cinema.mtl"></a-asset-item>

        <img id="back" src="assets/img/back-icon.png"></img>
        <img id="book-seat" src="assets/img/book-seat-icon.png"></img>
        <img id="change-seat" src="assets/img/change-seat-icon.png"></img>
      </a-assets>
);
