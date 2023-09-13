import React from 'react';
import ProfileAvatar from './ProfileAvatar';
import SocialMediaButtons from './SocialMediaButtons';
import FollowButton from './FollowButton';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: this.props.person || {}
    };
  } 

  handleFollow = (e) => {
    console.log('Profile.handleFollow', e);
    this.setState({
      person: Object.assign(this.state.person, { 
        followers: this.state.person.followers + 1
      })
    });
  }

  render() {
    const name = this.props.person 
      ? this.props.person?.name || 
        `${ this.props.person?.lastName}, ${ this.props.person?.firstName }`
      : this.props.name;
    const title = this.props.person?.title || this.props.title;
    const emailAddress = this.props.person?.domain || this.props.person?.emailAddress ||
                         this.props.emailAddress || 'n/a';
    const photo = this.props.person?.image ||
                  this.props.person?.photo || this.props.photo;
    const followers = this.props.person?.followers;

    return(
      <div className="card" style={ { borderRadius: '15px' } }>
        <div className="card-body text-center">
          <div className="mt-3 mb-4">
            <ProfileAvatar photo={ photo } />
          </div>
          <h4 className="mb-2">{ name } <sup>({ followers })</sup></h4>
          <p className="text-muted mb-4">@{ title } <span className="mx-2">|</span> <a
             href="#!">{ emailAddress }</a></p>
          <div className="mb-4 pb-2">
            <SocialMediaButtons />
          </div>
          <FollowButton followers={ followers } onFollow={ this.handleFollow } />
        </div>
      </div>
    );
  }
}