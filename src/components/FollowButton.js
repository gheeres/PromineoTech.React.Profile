import React from 'react';

export default class FollowButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      followers: parseInt(this.props.followers, 10) || 0,
    };
  }

  #handleClick = (e) => {
    console.log(e);
    this.setState({
      followers: this.state.followers + 1,
    });
    //console.log(`onClick:props.followers=${ this.props.followers }`);
    //console.log(`onClick:state.followers=${ this.state.followers }`);
  }

  render() {
    let followers = this.state.followers || 0;
    //console.log(`render:followers=${ followers }`);

    return(
      <button type="button" onClick={ this.#handleClick } className="btn btn-primary position-relative btn-rounded btn-lg">
        Follow Me 
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          { followers } <span className="visually-hidden">followers</span>
        </span>
      </button>
    );
  }
}