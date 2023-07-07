import React from "react";

export default class SocialMediaButtons extends React.Component {
  render() {
    //console.log(`SocialMediaButtons.render()`);
    
    const socialMedia = this.props.items || {};
    const items = Object.getOwnPropertyNames(socialMedia).map((prop,index) => {
      return(
        <button key={ prop } type="button" className="btn btn-outline-primary btn-floating">
          <i className={ `bi bi-${ prop }` }></i>
        </button>
      );
    });

    return(
      <>
        { items }
      </>
    );
  };
}