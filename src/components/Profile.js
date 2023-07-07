import React from 'react';
import FollowButton from './FollowButton';
import ProfileAvatar from './ProfileAvatar';
import SocialMediaButtons from './SocialMediaButtons';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      followers: (this.props.person || {}).followers || this.followers || 0
    };
  }

  #handleFollow = (e) => {
    this.setState((state,props) => { 
      return { followers: state.followers + 1 }
    });
  }

  render() {
    const id = (this.props.person || {}).id || this.props.id;
    console.log(`Profile.render(${ id })`);

    const name = (this.props.person || {}).name || this.props.name;
    const image = (this.props.person || {}).image;
    const socialMedia = (this.props.person || {}).socialMedia;
    const followers = this.state.followers;

    return(
      <div className="card profile-card">
        <div className="card-body text-center">
          <div className="mt-3 mb-4">
            <ProfileAvatar image={ image } />
          </div>
          <h4 className="mb-2">{ name } <sup className="text-muted">({ followers })</sup></h4>
          <p className="text-muted mb-4">@Programmer <span className="mx-2">|</span> 
            <a href="#!">yourdomain.com</a>
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