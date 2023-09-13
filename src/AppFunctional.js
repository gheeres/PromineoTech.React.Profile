import { useEffect, useState } from 'react';
import ProfileList from './components/ProfileList';
import UserProfileService from './services/RandomUserProfileService';
import Stars from './components/Stars';

const service = new UserProfileService();
export default function AppFunctional(props) {
  const [ users, setUsers ] = useState(props.users || []);
  const [ rating, setRating ] = useState(2);
  useEffect(() => {
    service.all().then(users => {
      setUsers(users);
    });
  }, []);

  function handleRating(rating) {
    console.log(`RATING=${ rating }`);
    setRating(rating);
  }

  return(
    <>
     <Stars rating={ rating } maxRating={ 10 } onRating={ handleRating } />
     <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-12 col-xl-4">
            <ProfileList users={ users } />
          </div>
        </div>
      </div>
     </section>
    </>
  ); 
}