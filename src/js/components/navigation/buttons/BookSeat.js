import {Entity, Animation} from 'aframe-react';
import React from 'react';

export default class BookSeat extends React.Component {
  constructor(props) {
    super(props);

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter() {
    document.querySelector('#book-seat-text-nav').emit('fadeIn');
  }

  handleMouseLeave() {
    document.querySelector('#book-seat-text-nav').emit('fadeOut');
  }

  render() {
    return (
        <Entity position={[0, -2, -1.4]}
                rotation={[-40, 0, 0]} >
          <Entity position={[0, 0.8, 0.1]}>
            <a-image src="#book-seat-text"
                     width="1.2"
                     height="0.12"
                     opacity="0"
                     id="book-seat-text-nav" >
              <Animation attribute="opacity"
                         from="0"
                         to="1"
                         dur="350"
                         begin="fadeIn" />
              <Animation attribute="opacity"
                         from="1"
                         to="0"
                         dur="200"
                         begin="fadeOut" />
            </a-image>
          </Entity>
          <Entity onMouseEnter={ this.handleMouseEnter }
                  onMouseLeave={ this.handleMouseLeave } >
            <a-image
                src="#book-seat"
                width="0.8"
                height="0.5">
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
        </Entity>
    );
  }
}
