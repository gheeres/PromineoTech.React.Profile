import React from 'react';

export default class ProfileAvatar extends React.Component {
  render() {
    const mystyle = { width: '100px' };
    const url = this.props.avatar ||
                this.props.url ||
                'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp' 
    return (
      <img src={ url }
           className="rounded-circle img-fluid" style={ mystyle } />
    )
  }  
}