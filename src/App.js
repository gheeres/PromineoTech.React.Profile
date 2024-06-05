import { useState, useEffect } from 'react';
import './App.css';

import ProfileList from './components/ProfileList';

import UserProfileService from './services/UserProfileService';
import RandomUserProfileService from './services/RandomUserProfileService';
//const service = new UserProfileService();
const service = new RandomUserProfileService();

function App() {
  const [ users, setUsers ] = useState([]);
  
  useEffect(() => {
    reload();
  }, []);
  
  function reload() {
    service.all().then((results) => {
      setUsers(results);
    });  
  }

  function handleFollow(id, e) {
    console.log(`App.handleFollow(${ id })`);
    if (id) {
      service.follow(id, 'anonymous').then((success) => {
        console.log(`Follow for ${ id } was ${ success }...`);
        if (success) {
          reload();
        }
      });
    }
  }

  console.log(`App.render()`);
  return (
    <section className="vh-100" style={  { backgroundColor: '#eee' }   }>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-12 col-xl-4">
            <ProfileList users={ users } onFollow={ handleFollow } />
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
