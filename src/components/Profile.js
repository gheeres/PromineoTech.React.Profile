import React from 'react';
import Avatar from './Avatar';

export default class Profile extends React.Component 
{
  constructor(props) {
    super(props);
  }  

  render() {
    let name = this.props.name;
    let classification = this.props.classification;
    let photo = this.props.photo;

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
          <button type="button" className="btn btn-primary position-relative btn-rounded btn-lg">
            Follow Me 
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              0 <span className="visually-hidden">followers</span>
            </span>
          </button>
        </div>
      </div>
    );
  }
}