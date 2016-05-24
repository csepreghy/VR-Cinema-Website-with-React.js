import {Entity} from 'aframe-react';
import React from 'react';

export default class Seat extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      opacity: 1
    };
  }
  
  render() {
    
    return (
        <Entity position={this.props.seatPos} >
          <a-image src="#seat"
                   width="0.2"
                   height="0.1"
                   id={this.props.componentId}
                   opacity={ this.props.Opacity }
                   onClick={ this.props.seatAnimation }
          />
        </Entity>
    );
  }}
