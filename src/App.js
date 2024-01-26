import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import './App.css';
import React from 'react';
import Profile from './components/Profile';
import Navigation from './components/Navigation';
import LoginForm from './components/LoginForm';
import ProfileAvatar from './components/ProfileAvatar';
import ProfileList from './components/ProfileList';
import DemoUserProfileService from './services/DemoUserProfileService';
import RandomUserProfileService from './services/RandomUserProfileService';

//const service = new DemoUserProfileService();
const service = new RandomUserProfileService(null, 5);

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      people: []
    }; // users
  }

  componentDidMount() {
    service.all().then(users => {
      this.setState({
        people: users || [],
      });
    });
  }

  render() {
    const people = this.state.people || [];
    return (
      <>
        <Navigation />
  
        <div>
          <ProfileList people={ people } />
        </div>
      </>
    );
  }
}
