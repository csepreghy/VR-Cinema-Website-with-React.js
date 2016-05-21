import {Entity} from 'aframe-react';
import React from 'react';
import S1_1 from './individual_seats/S1_1';

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
  }

  fadeIn() {

    setTimeout(() => {this.setState({visible: true})}, 4999);

    let newOpacity = { x: 1 }
    let tween = new TWEEN.Tween(this.opacity).to(newOpacity, 500);
    tween.delay(5000);
    tween.start();

    tween.onUpdate(this.tweenUpdate);
  }

  tweenUpdate() {
    console.log(this.state.opacity.x)
    this.setState({ opacity: this.opacity });
  }

  render() {
    return (
        <Entity visible={ this.state.visible }>
          <S1_1
              ref="s1_1"
              Opacity={ this.state.opacity.x }
              s1_1={ this.props.s1_1 }/>
        </Entity>
    );
  }
}