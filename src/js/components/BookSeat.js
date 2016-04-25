import {Entity, Animation} from 'aframe-react';
import React from 'react';

export default class BookSeat extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
        <Entity position={[0, -2, -1.4]}
                rotation={[-40, 0, 0]} >
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
    );
  }
}
