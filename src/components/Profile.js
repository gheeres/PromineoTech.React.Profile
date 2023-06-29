import React from 'react';
import FollowButton from './FollowButton';
import ProfileAvatar from './ProfileAvatar';
import SocialMediaButtons from './SocialMediaButtons';

export default class Profile extends React.Component {
  render() {
    console.log("Profile.render()");
    const name = (this.props.person || {}).name || this.props.name;
    const image = (this.props.person || {}).image;

    return(
      <div className="card profile-card">
        <div className="card-body text-center">
          <div className="mt-3 mb-4">
            <ProfileAvatar image={ image } />
          </div>
          <h4 className="mb-2">{ name }</h4>
          <p className="text-muted mb-4">@Programmer <span className="mx-2">|</span> 
            <a href="#!">yourdomain.com</a>
          </p>
          <div className="mb-4 pb-2">
            <SocialMediaButtons />
          </div>
          <FollowButton />
        </div>
      </div>
    );
  }
};