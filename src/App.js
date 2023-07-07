import React from 'react'
import Profile from './components/Profile';
import './App.css';
import Profile from './components/Profile';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  componentDidMount() {
  }

  render() {
    return (
      <section className="profile vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="d-flex-item pb-2">
              <Profile person={ { name: "George Heeres", image: 'ava1-bg.webp' } } 
                       socialMedia={ { twitter: '@gheeres', facebook: 'gheeres' } } 
              />
            </div>
            <div className="d-flex-item pb-2">
              <Profile person={ { image: 'ava3-bg.webp' } } name="Jason Bethke" />
            </div>
            <div className="d-flex-item pb-2">
              <Profile person={ { image: 'ava2-bg.webp' } } name="Andrew Smith" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}