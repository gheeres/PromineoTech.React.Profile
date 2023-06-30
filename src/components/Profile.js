import React from 'react';
import './Profile.css';
import ProfileAvatar from './ProfileAvatar';

export default class Profile extends React.Component {
  render() {
    console.log('Profile.render()');
    console.log(this.props);

    const name = (this.props.person || {}).name || this.props.name;
    const title = (this.props.person || {}).title || this.props.title;
    const avatar = this.props.avatar;

    return (
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-12 col-xl-4">
            <div className="profile card">
              <div className="card-body text-center">
                <ProfileAvatar avatar={ avatar } />
                <h4 className="mb-2">{ name }</h4>
                <p className="text-muted mb-4">@{ title } <span className="mx-2">|</span> <a
                   href="#!">yourdomain.com</a></p>
                <div className="mb-4 pb-2">
                  <button type="button" className="btn btn-outline-primary btn-floating">
                    <i className="bi bi-facebook"></i>
                  </button>
                  <button type="button" className="btn btn-outline-primary btn-floating">
                    <i className="bi bi-twitter"></i>
                  </button>
                  <button type="button" className="btn btn-outline-primary btn-floating">
                    <i className="bi bi-skype"></i>
                  </button>
                </div>
                <button type="button" className="btn btn-primary position-relative btn-rounded btn-lg">
                  Follow Me 
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    0 <span className="visually-hidden">followers</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }    
}

//export default Profile;