import React from 'react';
import Settings from '../Settings';

export default class ProfileAvatar extends React.Component {
  render() {
    //const image = `${ Settings.avatar.baseUrl }/${ this.props.photo }`;
    const image = this.props.photo || this.props.image;

    return(
      <img src={ image } className="rounded-circle img-fluid" style={ { width: '100px' } } />
    );
  }
}