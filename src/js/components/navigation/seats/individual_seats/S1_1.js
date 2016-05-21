import {Entity} from 'aframe-react';
import React from 'react';

export default class S1_1 extends React.Component {

  opactiy = 0;

  constructor(props) {
    super(props);

    this.state = {
      opacity: 1
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

  }

  render() {
    return (
        <Entity position={[0, 40.5, -129]}
                rotation={[0, 0, 0]} >
          <a-image src="#seat"
                   width="0.2"
                   height="0.1"
                   id="s1_1"
                   opacity={ this.state.opacity }
                   onClick={ this.props.s1_1 }
          />
        </Entity>
    );
  }}
