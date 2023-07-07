import React from 'react';

const defaultMaxRating = 5;

export default class Stars extends React.Component {
  constructor(props) {
    super(props);
  } 

  #handleClick = (e) => {
    if (e.target) {
      let rating = e.target.dataset.rating;
      if (rating) {
        if (this.props.onRating) {
          this.props.onRating(rating);  
        }
      }
    }
  }

  getColorForRating(rating) {
    switch(rating) {
      case 1:
      case 2:  
        return '#f00';
      case 3:  
        return '#FFA500';
      case 4:  
        return '#cc9900';
      case 5:  
        return '#008000';
    }
    return '#000';
  }

  render() {
    let rating = parseInt(this.props.rating || 0, 10);
    console.log(`Stars.render(${ rating })`);
    let maxRating = this.props.maxRating || defaultMaxRating;
    let color = this.getColorForRating(rating);

    let items = [];
    for(let i = 1; i <= maxRating; i++) {
      items.push(
        <i key={ i } data-rating={ i } style={ { color: color } } className={ `bi bi-star${ (rating >= i) ? '-fill' : '' }`}></i>
      ) ; 
    }

    return (
      <div onClick={ this.#handleClick } >
        { items }
      </div>
    );
  }
}