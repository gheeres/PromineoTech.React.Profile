type AvatarProps = {
  photo: string,
};

export default function Avatar({ photo, ...props }: AvatarProps) {
  return (
    <div className="avatar mt-3 mb-4">
      <img src={ photo } className="rounded-circle img-fluid" />
    </div>
  );
}