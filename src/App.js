import logo from './logo.svg';
import React from 'react';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import ProfileList from './components/ProfileList';
import UserProfileService from './services/UserProfileService';

const service = new UserProfileService();
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: props.users || []
    };
  }

  componentDidMount() {
    service.all().then(users => {
      //console.log(users);
      this.setState({ users: users || [] });
    });
  }

  render() {
    console.log(`App.render()`, this.state.users);
    const users = this.state.users;

    //const template = `My name is ${ "Bob" }`;
    const sectionStyle = {
      backgroundColor: '#eee'
    };
    return( 
      <section className="vh-100" style={ sectionStyle } >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-12 col-xl-4">
            <ProfileList users={ users } />
          </div>
        </div>
      </div>
    </section>
    );
  }

}