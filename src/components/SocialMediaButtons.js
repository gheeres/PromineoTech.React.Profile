import React from "react";

export default class SocialMediaButtons extends React.Component {
  render() {
    return(
      <>
        <button type="button" className="btn btn-outline-primary btn-floating">
          <i className="bi bi-facebook"></i>
        </button>
        <button type="button" className="btn btn-outline-primary btn-floating mx-2">
          <i className="bi bi-twitter"></i>
        </button>      
        <button type="button" className="btn btn-outline-primary btn-floating">
          <i className="bi bi-skype"></i>
        </button>      
      </>
    );
  };
}