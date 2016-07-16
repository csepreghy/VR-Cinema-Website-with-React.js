import {Entity} from 'aframe-react';
import React from 'react';
import Back from './buttons/Back';
import BookSeat from './buttons/BookSeat';
import ChangeSeat from './buttons/ChangeSeat';

export default class Navigation extends React.Component {

  opacity = { x: 0 };

  constructor(props) {
    super(props);

    this.state = {
      opacity: { x: 0 },
      navBackTextOpacity: { x: 0 },
      navBackTextVisible: false
    };

    this.fadeIn = this.fadeIn.bind(this);
    this.fadeOut = this.fadeOut.bind(this);
    this.tweenUpdate = this.tweenUpdate.bind(this);
  }

  fadeIn() {
    let newOpacity = { x: 1 };
    let tween = new TWEEN.Tween(this.opacity).to(newOpacity, 300);
    tween.start();

    tween.onUpdate(this.tweenUpdate);
  }

  fadeOut() {
    let newOpacity = { x: 0 };
    let tween = new TWEEN.Tween(this.opacity).to(newOpacity, 300);
    tween.start();

    tween.onUpdate(this.tweenUpdate);
  }

  tweenUpdate() {
    this.setState({ opacity: this.opacity });
  }

  render() {
    return (
        <Entity>
          <Back Opacity={ this.state.opacity.back }
                fadeIn={ this.fadeIn }
                fadeOut={ this.fadeOut } />
          <BookSeat Opacity={ this.state.opacity.bookseat }
                    fadeIn={ this.fadeIn }
                    fadeOut={ this.fadeOut }
                    handleBookSeatClick={ this.props.handleBookSeatClick }/>
          <ChangeSeat
              handleChangeSeatClick={ this.props.handleChangeSeatClick }
              Opacity={ this.state.opacity.x }
              fadeIn={ this.fadeIn }
              fadeOut={ this.fadeOut }/>
        </Entity>
    );
  }
}
