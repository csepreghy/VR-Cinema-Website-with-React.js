import {Animation, Entity} from 'aframe-react';
import React from 'react';

export default class Cursor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      geometry: {
        primitive: 'ring',
        radiusInner: 0.014,
        radiusOuter: 0.036
      },

      material: {
        color: props.color,
        shader: 'flat',
        opacity: props.opacity || 0.9,
        transparent: true
      }
    }
  };

  render() {
    return (
        <Entity cursor=""
                geometry={this.state.geometry}
                material={this.state.material}
                position="0 0 -2.1" >
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
