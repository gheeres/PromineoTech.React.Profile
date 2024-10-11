export default function FollowButton({ followers, onFollow, ...props }) {
  function handleFollowClick(e) {
    console.log('handleFollowClick()', e);
    if (onFollow) {
      onFollow(e);
    }
  }

  return(
    <button type="button" onClick={ handleFollowClick } className="btn btn-primary position-relative btn-rounded btn-lg">
      Follow Me 
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        { followers?.length || 0 } <span className="visually-hidden">followers</span>
      </span>
    </button>
  );
}