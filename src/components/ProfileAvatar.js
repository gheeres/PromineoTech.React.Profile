import React from 'react';

//const avatarBaseUrl = 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/';
const avatarBaseUrl = 'https://i.pravatar.cc/';

export default class ProfileAvatar extends React.Component {
  render() {
    console.log('ProfileAvatar.render()');

    let url = `${avatarBaseUrl}/${ this.props.avatar || '69' }`;

    return(
      <div className="mt-3 mb-4">
        <img src={ url } alt="User avatar" className="rounded-circle img-fluid" />
      </div>
    );
  }
}