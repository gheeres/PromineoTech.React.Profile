import Avatar from "./Avatar";
import SocialMedia from "./SocialMedia";
import FollowButton from "./FollowButton";

export default function Profile({ user, ...props }) {
  function handleFollow(e) {
    console.log('Profile.handleFollow', e, user);
  }
  
  return (
    <div className="col-md-12 col-xl-4">
      <div className="profile card">
        <div className="card-body text-center">
          <Avatar photo={ user.photo } />
          <h4 className="mb-2">{ `${ user.firstName } ${ user.lastName }` }</h4>
          <p className="text-muted mb-4">@{ user.title } 
            <span className="mx-2">|</span> 
            <a href="#!">{ user.email }</a>
          </p>
          <SocialMedia socialMedia={ user.socialMedia } />
          <FollowButton followers={ user.followers } onFollow={ handleFollow } />
        </div>
      </div>
    </div>
  ); 
}