import React from 'react';
import Avatar from './Avatar';

export default function Profile(props)
{
  let id = props.id;
  let name = props.name;
  let classification = props.classification;
  let photo = props.photo;
  let followers = props.followers || 0;

  function handleFollowClick(e) {
    //console.log(`Followers: ${ followers }`);
    if (props.onFollow) {
      props.onFollow(id, e);
    }
  }

  return (
    <div className="card" style={ { borderRadius: '15px' } }>
      <div className="card-body text-center">
        <Avatar photo={ photo } />
        <h4 className="mb-2">{ name }</h4>
        <p className="text-muted mb-4">@{ classification } <span className="mx-2">|</span> <a
           href="#!">yourdomain.com</a></p>
        <div className="mb-4 pb-2">
          <button type="button" className="btn btn-outline-primary btn-floating">
            <i className="bi bi-facebook"></i>
          </button>
          <button type="button" className="btn btn-outline-primary btn-floating">
            <i className="bi bi-twitter"></i>
          </button>
          <button type="button" className="btn btn-outline-primary btn-floating">
            <i className="bi bi-skype"></i>
          </button>
        </div>
        <button type="button" onClick={ handleFollowClick } className="btn btn-primary position-relative btn-rounded btn-lg">
          Follow Me 
         <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            { followers } <span className="visually-hidden">followers</span>
          </span>
        </button>
      </div>
    </div>
  );
}