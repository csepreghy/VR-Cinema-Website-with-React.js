import {Entity} from 'aframe-react';
import React from 'react';

export default class Movie extends React.Component {
  
  constructor(props) {
    super(props);

  }

  render() {
    return (
        <Entity>
          <a-video
              id="movie"
              src="#movie"
              width="90"
              height="48"
              position="0 40 -154" />
        </Entity>
    );
  }}
