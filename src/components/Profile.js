import React from 'react';
import ProfileAvatar from './ProfileAvatar';
import SocialMediaButtons from './SocialMediaButtons';
import FollowButton from './FollowButton';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
  } 

  render() {
    const name = this.props.person 
      ? `${ this.props.person?.lastName}, ${ this.props.person?.firstName }`
      : this.props.name;
    const title = this.props.person?.title || this.props.title;
    const emailAddress = this.props.person?.emailAddress || this.props.emailAddress || 'n/a';
    const photo = this.props.person?.photo || this.props.photo;

    return(
      <div className="card" style={ { borderRadius: '15px' } }>
        <div className="card-body text-center">
          <div className="mt-3 mb-4">
            <ProfileAvatar photo={ photo } />
          </div>
          <h4 className="mb-2">{ name }</h4>
          <p className="text-muted mb-4">@{ title } <span className="mx-2">|</span> <a
             href="#!">{ emailAddress }</a></p>
          <div className="mb-4 pb-2">
            <SocialMediaButtons />
          </div>
          <FollowButton />
        </div>
      </div>
    );
  }
}