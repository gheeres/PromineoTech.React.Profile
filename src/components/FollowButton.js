import React from "react";

export default class FollowButton extends React.Component {
  // constructor(props) {
  //   super(props);
  //   console.log(this.props);

  //   this.state = {
  //     followers : this.props.followers || 0
  //   };
  // }

  #handleClick = (e) => {
    //this.setState((state,props) => {
    //  return { followers: state.followers + 1 };
    //});
    if (this.props.onFollow) {
      this.props.onFollow(e);
    }
  }

  render() {
    const followers = this.props.followers;
    console.log(`followers=${ followers }`);

    return(
      <button type="button" onClick={ this.#handleClick } className="btn btn-primary position-relative btn-rounded btn-lg">
      Follow Me 
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          { followers } <span className="visually-hidden">followers</span>
        </span>
      </button>
    );
  };
}