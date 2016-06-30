import {Entity, Animation} from 'aframe-react';
import React from 'react';

export default class Back extends React.Component {

  opacity = { x:0 };
  navTextOpacity = { x: 0 };

  constructor(props) {
    super(props);

    this.state = {
      opacity: { x: 0 },
      navTextVisible: false
    };

    this.redirect = this.redirect.bind(this);
    this.fadeIn = this.fadeIn.bind(this);
    this.fadeOut = this.fadeOut.bind(this);
    this.tweenUpdate = this.tweenUpdate.bind(this);
    this.tweenTextOpacityUpdate = this.tweenTextOpacityUpdate.bind(this);
    this.fadeTextIn = this.fadeTextIn.bind(this);
    this.fadeTextOut = this.fadeTextOut.bind(this);
  }

  redirect() {
    window.location = "http://www.grandteatret.dk/";
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

  fadeTextIn() {
    this.setState({ navTextVisible: true });

    let newOpacity = { x: 1 };

    let tween = new TWEEN.Tween(this.navTextOpacity).to(newOpacity, 300);
    tween.easing(TWEEN.Easing.Cubic.InOut);
    tween.start();
    tween.onUpdate(this.tweenTextOpacityUpdate);
  }

  fadeTextOut() {
    let newOpacity = { x: 0 };

    let tween = new TWEEN.Tween(this.navTextOpacity).to(newOpacity, 300);
    tween.easing(TWEEN.Easing.Cubic.InOut);
    tween.start();
    tween.onUpdate(this.tweenTextOpacityUpdate);


  }

  tweenTextOpacityUpdate() {
    this.setState({ navTextOpacity: this.navTextOpacity });
  }

  tweenUpdate() {
    this.setState({ opacity: this.opacity });
  }

  render() {
    return (
        <Entity position={[-1, -2, -1]}
                rotation={[-40, 45, 0]}
        >
          <Entity position={[0, 0.8, 0]}>
            <Entity  visible={this.state.navTextVisible}
                     material={{color: 'white', transparent: true, shader: 'flat', opacity: this.navTextOpacity.x}}
                     position={[-4.15, 0, -6]}
                     size={0.01}
                     text={{text: "Go back to normal website"}} />
          </Entity>
          <Entity onMouseEnter={ this.fadeTextIn }
                  onMouseLeave={ this.fadeTextOut }
                  onClick={ this.redirect }>
            <a-image
                    src="#back"
                    width="0.8"
                    height="0.5" >
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
