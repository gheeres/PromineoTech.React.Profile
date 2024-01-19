import React from 'react';
import ProfileAvatar from './ProfileAvatar';
import SocialMediaButtons from './SocialMediaButtons';

export default class Profile extends React.Component {
    constructor(props) {
      super(props);
    }  
  
    render() {
    return (
        <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-12 col-xl-4">
            <div className="card" style={ { 'borderRadius': '15px' } } >
              <div className="card-body text-center">
                <div className="mt-3 mb-4">
                  <ProfileAvatar />
                </div>
                <h4 className="mb-2">Your Name</h4>
                <p className="text-muted mb-4">@Programmer <span className="mx-2">|</span> <a
                   href="#!">yourdomain.com</a></p>
                <div className="mb-4 pb-2">
                  <SocialMediaButtons />
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