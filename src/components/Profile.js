import React from 'react';
import FollowButton from './FollowButton';
import ProfileAvatar from './ProfileAvatar';
import SocialMediaButtons from './SocialMediaButtons';
import UserProfileService from '../services/UserProfileService';

const profileService = new UserProfileService();

export default class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: { ...this.props.user },
    }
  }

  #handleFollow = () => {
    const id = this.state.user.id;
    //const followers = this.state.user.followers;
    //console.log(`FollowButton.#handleFollow(${ id },${ followers })`);

    profileService.follow(id).then((result) => {
      if (result) {
        this.setState((state,props) => {
          return { user: { 
            ...state.user,
            followers: state.user.followers + 1
          }};
        });
      }
    });
  }

  render() {
    //console.log("Profile.render()");

    const name = (this.state.user || {}).name || this.state.name;
    const image = (this.state.user || {}).image || this.state.image;
    const title = (this.state.user || {}).title || this.state.title;
    const domain = this.state.user?.domain || this.state.domain;
    const socialMedia = this.state.user?.socialMedia || this.state.socialMedia || {};
    const followers = this.state.user?.followers || this.state.followers || 0;

    return(
      <div className="card profile-card">
        <div className="card-body text-center">
          <div className="mt-3 mb-4">
            <ProfileAvatar image={ image } />
          </div>
          <h4 className="mb-2">{ name } <sup className="text-muted">({ followers })</sup></h4>
          <p className="text-muted mb-4">@{ title } <span className="mx-2">|</span> 
            <a href="#!">{ domain }</a>
          </p>
          <div className="mb-4 pb-2">
            <SocialMediaButtons items={ socialMedia } />
          </div>
          <FollowButton followers={ followers } onFollow={ this.#handleFollow } />
        </div>
      </div>
    );
  }
};