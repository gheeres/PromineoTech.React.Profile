import React from "react";
import Profile from './Profile';
import UserProfileService from '../services/UserProfileService';

const profileService = new UserProfileService();

export default class ProfileList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: this.props.users || []
    };
  }

  componentDidMount() {
    //console.log('ProfileList.componentDidMount()');

    profileService.all().then((users) => {
      this.setState({ users: [ ...users ] });
    });
  }

  render() {
    const users = this.state.users || [];
    //console.log(`ProfileList.render(${ users.length })`);

    const items = users.map((u) => {
      return (
        <li key={ u.id } className="list-unstyled col-md-12 col-xl-4 mb-2">
          <Profile user={ u } />
        </li>
      );
    });

    return <ul className="row d-flex justify-content-center align-items-center h-100">{ items }</ul>
  }
}