import React from "react";

export default class ProfileAvatar extends React.Component {
  render() {
    const image = this.props.image || 'ava6-bg.webp';
    const url = `https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/${ image }`;

    return(
      <img src={ url } className="rounded-circle img-fluid profile-avatar" alt="Your Name" />
    );
  }
}