import { User } from "../types";
import Profile from "./Profile";

type ProfileListProps = {
  users: User [],
}
export default function ProfileList({ users, ...props }: ProfileListProps) {
  let profiles = users.map((user, index) => <Profile key={ user.id } user={ user } />);
  return(
    <>
      { profiles }
    </>
  );
}