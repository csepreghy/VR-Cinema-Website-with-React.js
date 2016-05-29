import {Entity, Animation} from 'aframe-react';
import React from 'react';

export default class BookSeat extends React.Component {

  opacity = { x: 0 };

  constructor(props) {
    super(props);

    this.state = { opacity: { x: 0}};

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
        <Entity position={[0, -2, -1.4]}
                rotation={[-40, 0, 0]} >
          <Entity position={[0, 0.8, 0.1]}>
            <a-image src="#book-seat-text"
                     width="1.2"
                     height="0.12"
                     opacity={ this.opacity.x }
                     id="book-seat-text-nav" />
          </Entity>
          <Entity onMouseEnter={ this.fadeIn }
                  onMouseLeave={ this.fadeOut }
                  onClick={ this.props.handleBookSeatClick }>
            <a-image
                src="#book-seat"
                width="0.8"
                height="0.5">
              <Animation attribute="width"
                         from="0.8"
                         to="1"
                         dur="250"
                         begin="mouseenter" />
              <Animation attribute="width"
                         from="1"
                         to="0.8"
                         dur="250"
                         begin="mouseleave" />
              <Animation attribute="height"
                         from="0.5"
                         to="0.7"
                         dur="250"
                         begin="mouseenter" />
              <Animation attribute="height"
                         from="0.7"
                         to="0.5"
                         dur="250"
                         begin="mouseleave" />
            </a-image>
          </Entity>
        </Entity>
    );
  }
}
