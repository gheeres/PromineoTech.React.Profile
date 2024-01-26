import React from 'react';
import ProfileAvatar from './ProfileAvatar';
import SocialMediaButtons from './SocialMediaButtons';
import FollowButton from './FollowButton';
import Stars from './Stars';
import RandomUserProfileService from '../services/RandomUserProfileService';

const service = new RandomUserProfileService();

export default class Profile extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        rating: (this.props.person?.rating 
                 || this.props.rating
                 || 0) % 5
      };
    }  
  
    #handleRatingChange = (rating, prevRating) => {
      console.log(`User: ${ this.props.person?.name } | Rating: ${ prevRating } > ${ rating }`);
      this.setState({
        rating: rating || prevRating || 0
      });
      //service.setRating(this.props.person?.id, rating).then(res => {
      //  service.getUser(this.props.person?.id).then(user => {
      //    this.setState({
      //      rating: user.rating,
      //    });
      //  });  
      //}
      //});
    }

    render() {
      const name = this.props.person 
                     ? this.props.person.name 
                     : this.props.name 
                   || "Somebody";
      const title = this.props.person?.title 
                    || this.props.title 
                    || "n/a";
      const email = this.props.person?.email 
                    || this.props.email 
                    || '???';
      const followers = this.props.person?.followers 
                        || this.props.followers
                        || 0;
      const avatar = this.props.person?.avatar
                      || this.props.avatar;
      const rating = this.state.rating || 0;

      return (
        <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-12 col-xl-4">
            <div className="card" style={ { 'borderRadius': '15px' } } >
              <div className="card-body text-center">
                <div className="mt-3 mb-4">
                  <ProfileAvatar avatar={ avatar } />
                </div>
                <h4 className="mb-2">{ name }</h4>
                <div><Stars rating={ rating } onRatingChange={ this.#handleRatingChange }/></div>
                <p className="text-muted mb-4">{ title } <span className="mx-2">|</span> <a
                   href="#!">{ email }</a></p>
                <div className="mb-4 pb-2">
                  <SocialMediaButtons />
                </div>
                <FollowButton followers={ followers } />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}