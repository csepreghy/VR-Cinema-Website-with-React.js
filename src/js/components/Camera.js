import {Entity} from 'aframe-react';
import React from 'react';
import CameraAnimation from './CameraAnimation';
import Cursor from './Cursor';
import Navigation from './navigation/Navigation';

export default class Camera extends React.Component {

  //CV stands for Camera View

  cameraZ = -70;

  CV_change_seat = {x: 10, y:40, z:-110};
  CV_initial = {x:5, y:13, z:-70};
  CV_a14 = {x:6, y:13, z:-40};

  currentCameraPos = this.CV_initial;

  constructor(props) {
    super(props);

    this.state = {
            currentCameraPos: {x: 5, y:13, z:-70}
    };

    this.moveTo_CV_change_seat = this.moveTo_CV_change_seat.bind(this);
    this.tweenUpdate = this.tweenUpdate.bind(this);
    this.moveToNewView = this.moveToNewView.bind(this);
    this.moveTo_A14 = this.moveTo_A14.bind(this);
  }

  moveToNewView(newView) {
    let tween = new TWEEN.Tween(this.currentCameraPos).to(newView, 4000);
    tween.easing(TWEEN.Easing.Cubic.InOut)
    tween.start();
    tween.onUpdate(this.tweenUpdate);
  }

  tweenUpdate() {
    console.log(this.currentCameraPos);
    this.setState({currentCameraPos: this.currentCameraPos});
  }

  moveTo_CV_change_seat() {
    this.moveToNewView(this.CV_change_seat);
  }
  
  moveTo_A14() {
    this.moveToNewView(this.CV_a14);
  }

  render() {
      return (
          <Entity ref="root" id="cameraEntity" position={ [this.state.currentCameraPos.x, this.state.currentCameraPos.y, this.state.currentCameraPos.z] }>
            <Navigation handleClick={ this.moveTo_CV_change_seat }/>
            <Entity camera=""
                    look-controls=""
                    wasd-controls={{enabled: true}}>
              <Cursor />
            </Entity>
          </Entity>
      );
    }
}
