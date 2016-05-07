import {Entity} from 'aframe-react';
import React from 'react';
import Back from './buttons/Back';
import BookSeat from './buttons/BookSeat';
import ChangeSeat from './buttons/ChangeSeat';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Entity>
          <Back/>
          <BookSeat />
          <ChangeSeat handleClick={ this.props.handleClick } />
        </Entity>
    );
  }
}
