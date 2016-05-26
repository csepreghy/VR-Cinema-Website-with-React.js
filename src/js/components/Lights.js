import {Entity} from 'aframe-react';
import React from 'react';
import Light from './Light'

export default class Lights extends React.Component {

  constructor(props) {
    super(props);

  }

  material = {color: '#fff', shader: 'flat'};

  position_canvas = [0, 35, -150];
  position_ceiling_front = [0, 70, -90];
  position_ceiling_back = [0, 70, -10];

  angleCanvas = 90;
  angleCeiling = 90;


  rotationCanvas = [180, 30, 40];
  rotationCeiling = [20, 160, 20];

  render() {
    return (
        <Entity>
          <Light Position={this.position_canvas} Rotation={this.rotationCanvas} Angle={this.angleCanvas} Decay={2} Distance={300} Type={'spot'} Intensity={1.5}/>
          <Light Position={this.position_ceiling_back} Rotation={this.rotationCeiling} Angle={this.angleCeiling} Decay={2} Distance={300} Type={'point'} Intensity={0.4}/>
        </Entity>
    );
  }
}
