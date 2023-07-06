import React from "react";

export default class ProfileAvatar extends React.Component {
  render() {
    //console.log('ProfileAvatar.render()');
    
    const image = this.props.image;
    return(
      <img src={ image } className="rounded-circle img-fluid profile-avatar" alt="Your Name" />
    );
  }
}