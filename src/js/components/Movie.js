import {Entity} from 'aframe-react';
import React from 'react';

export default class Movie extends React.Component {

  opacity = { x: 1, y: 24, z:44 };
  volume = { x: 1 };

  constructor(props) {
    super(props);

    this.state = {
      opacity: this.opacity,
    };

    this.fadeOut = this.fadeOut.bind(this);
    this.tweenUpdate = this.tweenUpdate.bind(this);
    this.fadeIn = this.fadeIn.bind(this);
  }

  fadeOut() {

    setTimeout(() => {
      let movie = document.querySelector('#movie');
      movie.volume = 0;
    }, 4500);


    console.log("movie fadeOut");
    let newOpacity = { x: 0 }
    let tween = new TWEEN.Tween(this.opacity).to(newOpacity, 500);
    tween.delay(4000);
    tween.start();
    tween.onUpdate(this.tweenUpdate);
  }

  fadeIn() {
    let movie = document.querySelector('#movie');
    movie.volume = 1;

    console.log("movie fadeIn");
    let newOpacity = { x: 1 }
    let tween = new TWEEN.Tween(this.opacity).to(newOpacity, 500);
    tween.delay(500);
    tween.start();
    tween.onUpdate(this.tweenUpdate);
  }

  tweenUpdate() {
    this.setState({ opacity: this.opacity });
  }

  render() {
    return (
        <Entity>
          <a-video
              id="movie"
              opacity={ this.state.opacity.x }
              src="#movie"
              width="90"
              height="48"
              position="0 40 -154" />
        </Entity>
    );
  }}
