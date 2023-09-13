import Profile from './Profile';

export default function ProfileList(props) {
  const users = props.users || [];

  // foreach user in users
  // create a profilecomponent
  const elements = users.map((user,index) => {
    return (
      <li key={ user.id }>
        <Profile person={ user } />
      </li>
    );
  });

  return (
    <ul className="list-unstyled">
      { elements }
    </ul>
  );
}