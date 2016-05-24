import {Entity} from 'aframe-react';
import React from 'react';
import Seat from './individual_seats/S1_1';

export default class Seats extends React.Component {

  opacity = { x: 0 };


  constructor(props) {
    super(props);

    this.state = {
      opacity: this.opacity,
      visible: false
    };

    this.fadeIn = this.fadeIn.bind(this);
    this.tweenUpdate = this.tweenUpdate.bind(this);
    this.fadeOut = this.fadeOut.bind(this);
  }

  //FadeIn Animation

  fadeIn() {
    setTimeout(() => {this.setState({visible: true})}, 4999);

    let newOpacity = { x: 1 };
    let tween = new TWEEN.Tween(this.opacity).to(newOpacity, 500);
    tween.delay(5000);
    tween.start();

    tween.onUpdate(this.tweenUpdate);
  }

  //FadeOut Animation

  fadeOut() {
    setTimeout(() => {this.setState({visible: false})}, 501);

    let newOpacity = { x: 0 };
    let tween = new TWEEN.Tween(this.opacity).to(newOpacity, 500);
    tween.start();

    tween.onUpdate(this.tweenUpdate);
  }

  tweenUpdate() {
    this.setState({ opacity: this.opacity });
  }



  seatButtonCoordinates = [
    [{id: 'S1_1'}, {pos: [0, 39.5, -129]}],
    [{id: 'S1_2'}, {pos: [0.25, 39.5, -129]}],
    [{id: 'S1_3'}, {pos: [-0.25, 39.5, -129]}],
    [{id: 'S1_4'}, {pos: [0.5, 39.5, -129]}],
    [{id: 'S1_5'}, {pos: [-0.5, 39.5, -129]}],
    [{id: 'S1_6'}, {pos: [0.74, 39.5, -129]}],
    [{id: 'S1_7'}, {pos: [-0.75, 39.5, -129]}],
    [{id: 'S1_8'}, {pos: [1, 39.5, -129]}],
    [{id: 'S1_9'}, {pos: [-1, 39.5, -129]}],
    [{id: 'S1_10'}, {pos: [1.25, 39.5, -129]}],
    [{id: 'S1_11'}, {pos: [-1.25, 39.5, -129]}],
    [{id: 'S1_12'}, {pos: [1.5, 39.5, -129]}],
    [{id: 'S1_13'}, {pos: [-1.5, 39.5, -129]}],
    [{id: 'S1_14'}, {pos: [1.75, 39.5, -129]}],
    [{id: 'S1_15'}, {pos: [-1.75, 39.5, -129]}],
    [{id: 'S1_16'}, {pos: [2, 39.5, -129]}],
    [{id: 'S1_17'}, {pos: [-2, 39.5, -129]}],
    [{id: 'S1_18'}, {pos: [2.25, 39.5, -129]}]
  ];


  render() {
    return (
        <Entity visible={ this.state.visible }>
          {this.seatButtonCoordinates.map(function(seat) {
            return (
                <Seat componentId={seat[0].id}
                      seatPos={seat[1].pos}
                      key={seat[0].id}
                      Opacity={ this.state.opacity.x }
                      seatAnimation={ this.props.seatAnimation }/>
            );
          }, this)}
        </Entity>
    );
  }
}
