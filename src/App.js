import logo from './logo.svg';
import React from 'react';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Profile from './components/Profile';

let george = {
  lastName: 'Heeres',
  firstName: 'George',
  title: 'Software Engineer',
  emailAddress: 'gheeres@gmail.com',
  photo: 'ava6-bg.webp'
}
export default class App extends React.Component {
  render() {
    //const template = `My name is ${ "Bob" }`;
    const sectionStyle = {
      backgroundColor: '#eee'
    };
    return( 
      <section className="vh-100" style={ sectionStyle } >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-12 col-xl-4">
            <Profile person={ george } />
            <Profile name="Andrew Smith" title="Alexa Whisperer" photo="ava2-bg.webp" emailAddress="andrew@amazon.com" />
            <Profile name="Jack George" title="Pickleball God" photo="ava4-bg.webp" emailAddress="jack@pickleballgods.org" />
          </div>
        </div>
      </div>
    </section>
    );
  }

}