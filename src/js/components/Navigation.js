import {Entity} from 'aframe-react';
import React from 'react';
import Back from './Back';
import BookSeat from './BookSeat';
import ChangeSeat from './ChangeSeat';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Entity>
          <Back />
          <BookSeat />
          <ChangeSeat />
        </Entity>
    );
  }
}
