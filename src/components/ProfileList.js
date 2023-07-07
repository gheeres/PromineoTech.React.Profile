import React from 'react';
import Profile from '../components/Profile';
import DemoUserProfileService from '../services/DemoUserProfileService';
import RandomUserProfileService from '../services/RandomUserProfileService';

//const service = new DemoUserProfileService();
const service = new RandomUserProfileService();

export default class ProfileList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: this.props.users || []
    };
  }

  componentDidMount() {
    service.all().then((users) => {
      this.setState({ users: [ ...users ] });
    });
  }

  render() {
    let users = this.state.users || [];
    console.log(`ProfileList.render([...${users.length }])`);

    const items = users.map((user) => {
      return(
        <li key={ user.id } className="list-unstyled col-md-12 col-xl-4 mb-2">
          <Profile person={ user } />
        </li>
      );
    })

    return(
      <ul className='row d-flex justify-content-center align-items-center h-100'>
        { items }
      </ul>
    );
  }
};