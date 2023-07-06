import React from 'react'
import ProfileList from './components/ProfileList';
import './App.css';

export default class App extends React.Component {
  render() {
    //console.log(`App.render()`);

    return (
      <section className="profile vh-100">
        <div className="container py-5 h-100">
          <ProfileList />
        </div>
      </section>
    );
  }
}