import {Animation, Entity} from 'aframe-react';
import React from 'react';

export default props => {
  const geometry = {
    primitive: 'ring',
    radiusInner: 0.018,
    radiusOuter: 0.046
  };
  const material = {
    color: props.color,
    shader: 'flat',
    opacity: props.opacity || 0.9,
    transparent: true
  };
  return (
    <Entity cursor=""
            geometry={geometry}
            material={material}
            position="0 0 -5" >
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
