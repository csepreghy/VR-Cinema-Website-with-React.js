import {Animation, Entity} from 'aframe-react';
import React from 'react';

export default class Cursor extends React.Component {

  geometry_near = {
    primitive: 'ring',
    radiusInner: 0.014,
    radiusOuter: 0.036
  };

  position = {x: 0, y: 0, z: -2.1};
  initialPos = {x: 0, y: 0, z: -2.1};
  seatChangePos = {x: 0, y: 0, z: -3};
  rotation = {x: 0, y: 0, z: 0};

  constructor(props) {
    super(props);

    this.cursorAnimation = this.cursorAnimation.bind(this);
    this.cursorAnimation2 = this.cursorAnimation2.bind(this);
    this.tweenRotationUpdate = this.tweenRotationUpdate.bind(this);
    this.changeColorToColor = this.changeColorToColor.bind(this);
    this.cursorPosScaleAnimation = this.cursorPosScaleAnimation.bind(this);
    this.tweenPosUpdate = this.tweenPosUpdate.bind(this);
    this.revertBackToOriginal = this.revertBackToOriginal.bind(this);
    this.changeColorToWhite = this.changeColorToWhite.bind(this);
    this.revertBackToOriginal2 = this.revertBackToOriginal2.bind(this);
    this.cursorPosScaleAnimationBack = this.cursorPosScaleAnimationBack.bind(this);

    this.state = {
      position: this.position,
      rotation: this.rotation,


      geometry: this.geometry_near,
      color: "#FFFFFF"
    }
  };

  cursorAnimation() {

    let newRotation = {x: 0, y: 90, z: 0}

    let tween = new TWEEN.Tween(this.rotation).to(newRotation, 300);
    tween.delay(500);
    tween.start();
    tween.onUpdate(this.tweenRotationUpdate);
    tween.onComplete(this.changeColorToColor);

  }

  changeColorToColor() {
    this.setState({color: "#FFFFFF"});
    this.cursorAnimation2();
  }

  cursorAnimation2() {
    let newRotation = {x: 0, y: 0, z: 0}
    let tween = new TWEEN.Tween(this.rotation).to(newRotation, 300);
    tween.start();
    tween.onUpdate(this.tweenRotationUpdate);
    tween.onComplete(this.cursorPosScaleAnimation);
  }

  tweenRotationUpdate() {
    this.setState({ rotation: this.rotation });
  }

  cursorPosScaleAnimation() {
    let tween = new TWEEN.Tween(this.position).to(this.seatChangePos, 400);
    tween.start();
    tween.onUpdate(this.tweenPosUpdate);
  }

  tweenPosUpdate() {
    this.setState({ position: this.position });
  }

  revertBackToOriginal() {
    let newRotation = {x: 0, y: 90, z: 0}

    let tween = new TWEEN.Tween(this.rotation).to(newRotation, 300);
    tween.delay(500);
    tween.start();
    tween.onUpdate(this.tweenRotationUpdate);
    tween.onComplete(this.changeColorToWhite)
  }

  changeColorToWhite() {
    this.setState({color: "#FFFFFF"});
    this.revertBackToOriginal2();
  }

  revertBackToOriginal2() {
    let newRotation = {x: 0, y: 0, z: 0}
    let tween = new TWEEN.Tween(this.rotation).to(newRotation, 300);
    tween.start();
    tween.onUpdate(this.tweenRotationUpdate);
    tween.onComplete(this.cursorPosScaleAnimationBack);
  }

  cursorPosScaleAnimationBack() {
    let tween = new TWEEN.Tween(this.position).to(this.initialPos, 400);
    tween.start();
    tween.onUpdate(this.tweenPosUpdate);
  }


  render() {
    return (
        <Entity cursor=""
                geometry={this.state.geometry}
                material={{color: this.state.color, shader: 'flat', opacity: 0.9, transparent: true}}
                position={[this.state.position.x, this.state.position.y, this.state.position.z]}
                rotation={ [this.state.rotation.x, this.state.rotation.y, this.state.rotation.z]} >
          <Animation attribute="scale" begin="click" dur="150" fill="backwards"
                     to="0 0 0"/>
          <Animation begin="click"git add
                     easing="ease-in"
                     attribute="scale"
                     fill="forwards"
                     from="0.2 0.2 0.2"
                     to="1 1 1"
                     dur="400"></Animation>
        </Entity>
    );
  }
}
