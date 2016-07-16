import React from 'react';

export default class Assets extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
        <a-assets>

          <a-asset-item id="cinema-obj" src="assets/models/Grand-Teatret.obj"></a-asset-item>
          <a-asset-item id="cinema-mtl" src="assets/models/Grand-Teatret.mtl"></a-asset-item>

          <img id="back" src="assets/img/back-icon.png"></img>
          <img id="book-seat" src="assets/img/book-seat-icon.png"></img>
          <img id="change-seat" src="assets/img/change-seat-icon.png"></img>

          <img id="seat" src="assets/img/seats/seat.png"></img>

          <video id="movie" loop="true" src="assets/movie.mp4"></video>

        </a-assets>
    );
  }
}
