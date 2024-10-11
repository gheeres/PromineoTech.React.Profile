export default function Avatar({ photo, ...props }) {
  return (
    <div className="avatar mt-3 mb-4">
      <img src={ photo } className="rounded-circle img-fluid" />
    </div>
  );
}