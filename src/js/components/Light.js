import {Entity} from 'aframe-react';
import React from 'react';

export default class Light extends React.Component {

  constructor(props) {
    super(props);

  }

  material = {color: '#fff', shader: 'flat'};

  render() {
    return (

        <Entity>
          <Entity position={this.props.Position}
                  rotation={this.props.Rotation}
                  light={{type: this.props.Type, distance: this.props.Distance, decay: this.props.Decay, intensity: this.props.Intensity, angle: this.props.Angle}}
                  // geometry={{primitive: 'sphere', radius: 1}}
                  //material={{color: 'white', shader: 'flat'}}
                   />
        </Entity>
    );
  }
}
