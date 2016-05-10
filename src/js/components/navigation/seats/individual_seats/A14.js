import {Entity} from 'aframe-react';
import React from 'react';

export default class A14 extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("kakika");
  }

  render() {
    return (
        <Entity position={[1558, 300, 0]}
                rotation={[0, 270, 0]}>
          <a-image src="#a14"
                   width="22"
                   height="15"
                   id="a14"
                   onClick={ this.handleClick }
          />
        </Entity>
    );
  }
}