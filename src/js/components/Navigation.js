import {Entity} from 'aframe-react';
import React from 'react';
import BackIcon from './BackIcon.js';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Entity>
          <BackIcon />
        </Entity>
    );
  }
}
