import React, { useState } from 'react';
import settings from '../Settings';

/*
export default class FollowButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followers: this.props.followers || 0
    };
  }

  handleClick = (e) => {
    console.log(this);
    console.log(`FollowButton.click(${ this.state.followers }, ${ this.props.followers } )`, e);
    //this.state.followers++;
    this.setState({
      followers : this.state.followers + 1
    });
  }

  render() {
    const followers = this.state.followers || 0;
    //document.getElementById('button').addEventListener('click', (e) => {
    //});

    return(
      <button type="button" onClick={ this.handleClick } className="btn btn-primary position-relative btn-rounded btn-lg">
        Follow Me 
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          { followers } <span className="visually-hidden">followers</span>
        </span>
      </button>
    );
  }
}
*/

/*
export default function FollowButton(props) {
  const [ followers, setFollowers ] = useState(props.followers || 0);

  function handleClick(e) {
    setFollowers(followers + 1);
  }

  return(
    <button type="button" onClick={ handleClick } className="btn btn-primary position-relative btn-rounded btn-lg">
      Follow Me 
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        { followers } <span className="visually-hidden">followers</span>
      </span>
    </button>
  );
}
*/

export default function FollowButton(props) {
  const followers = props.followers || 0;

  function handleClick(e) {
    if (followers < settings.maxFollowers) {
      if (props.onFollow) {
        props.onFollow(e);
      }
    }
  }

  return(
    <button type="button" onClick={ handleClick } className="btn btn-primary position-relative btn-rounded btn-lg">
      Follow Me 
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        { followers } <span className="visually-hidden">followers</span>
      </span>
    </button>
  );
}