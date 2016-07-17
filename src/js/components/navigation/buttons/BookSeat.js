import {Entity, Animation} from 'aframe-react';
import React from 'react';

export default class BookSeat extends React.Component {

  opacity = { x: 0 };
  btnTextOpacity = { x: 0 };

  constructor(props) {
    super(props);

    this.state = {
      opacity: { x: 0 },
      navTextVisible: false,
      btnTextOpacity: { x: 0 }
    };

    this.fadeIn = this.fadeIn.bind(this);
    this.fadeOut = this.fadeOut.bind(this);
    this.tweenUpdate = this.tweenUpdate.bind(this);
    this.fadeTextIn = this.fadeTextIn.bind(this);
    this.fadeTextOut = this.fadeTextOut.bind(this);
    this.tweenTextOpacityUpdate = this.tweenTextOpacityUpdate.bind(this);
  }

  fadeIn() {
    let newOpacity = { x: 1 };
    let tween = new TWEEN.Tween(this.opacity).to(newOpacity, 300);
    tween.start();

    tween.onUpdate(this.tweenUpdate);

    this.fadeTextIn(300);
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

  fadeTextIn() {
    this.setState({ navTextVisible: true });

    let newOpacity = { x: 1 };

    let tween = new TWEEN.Tween(this.btnTextOpacity).to(newOpacity, 300);
    tween.easing(TWEEN.Easing.Cubic.InOut);
    tween.start();
    tween.onUpdate(this.tweenTextOpacityUpdate);
  }

  fadeTextOut() {
    let newOpacity = { x: 0 };

    let tween = new TWEEN.Tween(this.btnTextOpacity).to(newOpacity, 300);
    tween.easing(TWEEN.Easing.Cubic.InOut);
    tween.start();
    tween.onUpdate(this.tweenTextOpacityUpdate);

    setTimeout(() => {this.setState({ navTextVisible: false }) }, 400);
  }

  tweenTextOpacityUpdate() {
    this.setState({ navTextOpacity: this.btnTextOpacity });
  }

  render() {
    return (
        <Entity position={[0, -2, -1.4]}
                rotation={[-40, 0, 0]} >
          <Entity position={[0, 0.8, 0.1]}>
            <Entity  visible={this.state.navTextVisible}
                     material={{color: 'white', transparent: true, shader: 'flat', opacity: this.btnTextOpacity.x}}
                     position={[-2.2, 0, -6]}
                     size={0.01}
                     text={{text: "Book this seat"}} />
          </Entity>
          <Entity onMouseEnter={ this.fadeTextIn }
                  onMouseLeave={ this.fadeTextOut }
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
