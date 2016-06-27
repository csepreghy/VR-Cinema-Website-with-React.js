import {Entity, Animation} from 'aframe-react';
import React from 'react';

export default class Back extends React.Component {

  opacity = { x:0 };
  navBackTextOpacity={ x: 0 };

  constructor(props) {
    super(props);

    this.state = {
      opacity: { x: 0 },
      navBackTextVisible: false
     };

    this.redirect = this.redirect.bind(this);
    this.fadeIn = this.fadeIn.bind(this);
    this.fadeOut = this.fadeOut.bind(this);
    this.tweenUpdate = this.tweenUpdate.bind(this);
    this.tweenNavBackTextOpacityUpdate = this.tweenNavBackTextOpacityUpdate.bind(this);
    this.fadeBackTextIn = this.fadeBackTextIn.bind(this);
    this.fadeBackTextOut = this.fadeBackTextOut.bind(this);
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

  fadeBackTextIn() {
    console.log("fade in");
    this.setState({ navBackTextVisible: true });

    let newOpacity = { x: 1 };

    let tween = new TWEEN.Tween(this.navBackTextOpacity).to(newOpacity, 300);
    tween.easing(TWEEN.Easing.Cubic.InOut);
    tween.start();
    tween.onUpdate(this.tweenNavBackTextOpacityUpdate);
  }

  fadeBackTextOut() {
    console.log("fade out");
    this.setState({ navBackTextVisible: true });

    let newOpacity = { x: 0 };

    let tween = new TWEEN.Tween(this.navBackTextOpacity).to(newOpacity, 300);
    tween.easing(TWEEN.Easing.Cubic.InOut);
    tween.start();
    tween.onUpdate(this.tweenNavBackTextOpacityUpdate);
  }

  tweenNavBackTextOpacityUpdate() {
    console.log(this.state.navBackTextOpacity);
    console.log(this.navBackTextOpacity);
    this.setState({ navBackTextOpacity: this.navBackTextOpacity });
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
            <Entity  visible={this.state.navBackTextVisible}
                     material={{color: 'white', transparent: true, shader: 'flat', opacity: this.navBackTextOpacity.x}}
                     position={[-4.15, 0, -6]}
                     size={0.01}
                     text={{text: "Go back to normal website"}} />
          </Entity>
          <Entity onMouseEnter={ this.fadeBackTextIn }
                  onMouseLeave={ this.fadeBackTextOut }
                /*  onMouseLeave={  } */
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
