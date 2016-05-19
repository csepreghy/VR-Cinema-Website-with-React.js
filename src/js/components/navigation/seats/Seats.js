import {Entity} from 'aframe-react';
import React from 'react';
import A14 from './individual_seats/A14';
import B14 from './individual_seats/B14';

export default class Seats extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Entity>
          <A14 a14={ this.props.a14 }/>
          <B14 />
        </Entity>
    );
  }
}