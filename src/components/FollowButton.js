import React from "react";

export default class FollowButton extends React.Component {
  //constructor(props) {
  //  super(props);
  //
  //  this.state = {
  //    followers : this.props.followers || 0,
  //  };
  //}

  #handleClick = () => {
    //this.setState((state,props)=> {
    //  return { followers: state.followers + 1 };
    //});
    //console.log('FollowButton.#handleClick()');

    if (this.props.onFollow) {
      this.props.onFollow();
    }
  }
  
  render() {
    //console.log('FollowButton.render()');
    //const followerCount = this.state.followers || 0;
    const followerCount = this.props.followers || 0;

    return(
      <button type="button" onClick={ this.#handleClick } className="btn btn-primary position-relative btn-rounded btn-lg">
      Follow Me 
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          { followerCount } <span className="visually-hidden">followers</span>
        </span>
      </button>
    );
  };
}