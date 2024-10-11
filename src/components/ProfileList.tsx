import Profile from "./Profile";

export default function ProfileList({ users, ...props }) {
  let profiles = users.map((user,index) => <Profile key={ user.id } user={ user } />);
  return(
    <>
      { profiles }
    </>
  );
}