import React from 'react';

export default class ProfileAvatar extends React.Component {
  render() {
    const mystyle = { width: '100px' };
    return (
      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
           className="rounded-circle img-fluid" style={ mystyle } />
    )
  }  
}