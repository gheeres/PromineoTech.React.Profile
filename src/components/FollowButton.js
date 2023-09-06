export default function FollowButton() {
  return(
    <button type="button" className="btn btn-primary position-relative btn-rounded btn-lg">
      Follow Me 
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        0 <span className="visually-hidden">followers</span>
      </span>
    </button>
  );
}