import {Entity} from 'aframe-react';
import React from 'react';

export default class Movie extends React.Component {

  opacity = { x: 1, y: 24, z:44 }

  constructor(props) {
    super(props);

    this.state = { opacity: this.opacity }

    this.fadeOut = this.fadeOut.bind(this);
    this.tweenUpdate = this.tweenUpdate.bind(this);
  }

  fadeOut() {
    console.log("movie fadeOut");
    let newOpacity = { x: 0 }
    let tween = new TWEEN.Tween(this.opacity).to(newOpacity, 500);
    tween.delay(4000);
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
              opacity={ this.state.opacity.x }
              src="#movie"
              width="90"
              height="48"
              position="0 40 -154" />
        </Entity>
    );
  }}
