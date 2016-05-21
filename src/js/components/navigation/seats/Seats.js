import {Entity} from 'aframe-react';
import React from 'react';
import S1_1 from './individual_seats/S1_1';

export default class Seats extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Entity>
          <S1_1 ref="s1_1" s1_1={ this.props.s1_1 }/>
        </Entity>
    );
  }
}