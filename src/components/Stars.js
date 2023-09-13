const defaultMaxRating = 5;

export default function Stars(props) {
  const rating = props.rating || 0;
  const maxRating = props.maxRating || defaultMaxRating;

  function handleClick(e) {
    if (props.onRating) {
      let rating = e.target.dataset.rating; //['rating'];
      props.onRating(rating, e);
    }
  }

  let elements = [];
  for(let index = 0; index < maxRating; index++) {
    let className = `bi bi-star`;
    if (index < rating) {
      className = `bi bi-star-fill`;
    }
    elements.push(
      <i key={ index } className={ className } data-rating={ index + 1 }></i>
    );
  }

  return (
    <div data-rating={ rating } onClick={ handleClick }>
      { elements }
    </div>
  );
}