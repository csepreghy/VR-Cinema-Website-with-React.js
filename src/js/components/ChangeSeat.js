import {Entity, Animation} from 'aframe-react';
import React from 'react';

export default class ChangeSeat extends React.Component {
  constructor(props) {
    super(props);
  }

  handleMouseEnter() {
    console.log('mouse entered');
  }

  handleClick() {
    console.log('çlicked');
  }

  render() {
    return (
        <Entity position={[1, -2, -1]}
                rotation={[-40, -45, 0]} >
          <a-image
              src="#change-seat"
              width="0.8"
              height="0.5"
              onMouseEnter={ this.handleMouseEnter }
              onClick={ this.handleClick }>
            <Animation attribute="width"
                       from="0.8"
                       to="1"
                       dur="250"
                       begin="mouseenter" />
            <Animation attribute="width"
                       from="1"
                       to="0.8"
                       dur="250"
                       begin="mouseleave" />
            <Animation attribute="height"
                       from="0.5"
                       to="0.7"
                       dur="250"
                       begin="mouseenter" />
            <Animation attribute="height"
                       from="0.7"
                       to="0.5"
                       dur="250"
                       begin="mouseleave" />
          </a-image>
        </Entity>
    );
  }
}