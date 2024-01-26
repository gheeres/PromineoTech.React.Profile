import React from "react";

const defaultMaxRating = 5;

export default class Stars extends React.Component {
  constructor(props) {
    super(props);
  }

  #handleClick = (e) => {
    const rating = e.target.dataset.rating;
    if (this.props.onRatingChange) {
      this.props.onRatingChange(rating, this.props.rating || 0);
    }
  }

  render() {
    let rating = this.props.rating || 0;
    let maxRating = this.props.maxRating || defaultMaxRating;
    let stars = [];

    for(let index = 0; index < maxRating; index++) {
      const icon = (index < rating) ? 'bi-star-fill' : 'bi-star';
      stars.push(<i key={ index } onClick={ this.#handleClick } className={ `bi ${ icon }` } 
                    data-rating={ index + 1 }></i>);
    }
    return(
      <>
      { stars }
      </>
    );
  }
}