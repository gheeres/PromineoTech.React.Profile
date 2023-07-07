import React from "react";

export default class ProfileAvatar extends React.Component {
  render() {
    const url = this.props.image || 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp';

    return(
      <img src={ url } className="rounded-circle img-fluid profile-avatar" alt="Your Name" />
    );
  }
}