import {Entity} from 'aframe-react';
import React from 'react';

export default class A14 extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
        <Entity position={[10, 40, -114]}
                rotation={[0, 0, 0]}>
          <a-image src="#a14"
                   width="0.6"
                   height="0.4"
                   id="a14"
                   onClick={ this.props.a14 }
          />
        </Entity>
    );
  }}