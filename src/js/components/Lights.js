import {Entity} from 'aframe-react';
import React from 'react';
import Light from './Light'

export default class Lights extends React.Component {

  constructor(props) {
    super(props);

  }

  material = {color: '#fff', shader: 'flat'};

  position_canvas = [0, 35, -150];
  position_ceiling_front = [0, 70, -100];
  position_ceiling_back = [0, 70, 40];
  position_3 = [56, 27, -51];
  position_4 = [56, 27, -31];
  position_5 = [56, 27, -11];
  position_6 = [56, 27, 21];
  position_7 = [-56, 27, -51];
  position_8 = [-56, 27, -83];

  angleCanvas = 90;
  angleCeiling = 90;


  rotationCanvas = [180, 30, 40];
  rotationCeiling = [20, 160, 20]

  render() {
    return (
        <Entity>
          <Light Position={this.position_canvas} Rotation={this.rotationCanvas} Angle={this.angleCanvas} Decay={2} Distance={300} Type={'spot'} Intensity={1}/>
          <Light Position={this.position_ceiling_front} Rotation={this.rotationCeiling} Angle={this.angleCeiling} Decay={2} Distance={200} Type={'point'} Intensity={0.6}/>
          <Light Position={this.position_ceiling_back} Rotation={this.rotationCeiling} Angle={this.angleCeiling} Decay={2} Distance={300} Type={'point'} Intensity={0.2}/>
        </Entity>
    );
  }
}
