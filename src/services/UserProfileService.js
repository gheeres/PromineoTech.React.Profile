  const users = [
  { 
    id: '7907699c-9d9c-11ed-a8fc-0242ac120002',
    name: "Mark Cornelius",
    photo: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp",
    classification: "student",
    followers: 1043
  },
  { 
    id: 'd21a6786-ae9f-41a4-91d2-0afb24882e1e',
    name: "George Heeres",
    photo: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp",
    classification: "instructor",
    followers: -1
  },
  {
    id: 'bc78263d-3c2b-4cc4-b338-672a94cf25dc',
    name: "Nelvison Almanzar",
    photo: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp",
    classification: "student",
    followers: 5
  },
  {
    id: '8b0ee321-c707-43f6-99f4-51e20b6e6ceb',
    name: "Junius Williams",
    photo: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp",
    classification: "student",
    followers: 3867
  },
  {
    id: 'e9e83bc7-83a0-4d95-aeab-8f088f4076e6',
    name: "Byron Rodriquez",
    photo: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp",
    classification: "student",
    followers: 64
  }
];

export default class UserProfileService
{
  /**
   * Returns all of the available users.
   * @returns 
   */
  async all() {
    return [...users];
  }

  /**
   * Finds a user by their unique id.
   * @param {String} id The unique id of the user.
   * @returns The user if found, otherwise null.
   */
  async get(id) {
    return users.find((user) => user.id === id);
  }

  /**
   * Adds the specified person as a follower of the user with the specified unique id.
   * @param {String} id The unique id of the user.
   * @param {String} follower The follower information.
   * @returns {Boolean} True if followed, false if otherwise.
   */
  async follow(id, follower) {
    let user = await this.get(id);
    if (user) {
      user.followers++;
      return true;  
    }
    return false;
  }
}