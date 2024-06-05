import Profile from "./Profile";
import UserProfileService from "../services/UserProfileService";

const service = new UserProfileService();
export default function ProfileList(props) {
  let users = props.users || [];  

  let items = [];
  for(let user of users) {
    let element = <Profile key={ user.id } id={ user.id }
                           name={ user.name } photo={ user.photo } 
                           followers={ user.followers }
                           classification={ user.classification }
                           onFollow={ props.onFollow } />;
    items.push(element);
  }

  return(
    items
  ); 
}