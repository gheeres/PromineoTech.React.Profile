const users = [
  { id: '282aee86-9d9c-11ed-a8fc-0242ac120002', 
    name: 'George Heeres', image: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp',
    title: 'Instructor', domain: 'heeresonline.com',
    socialMedia: {
      twitter: '@gheeres',
      facebook: 'gheeres'
    },
    followers: 2
  },
  { id: '51b2190a-9d9c-11ed-a8fc-0242ac120002', 
    name: 'Jason Bethke', image: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp',
    title: 'System Engineer', domain: 'prioritybiz.net',
    socialMedia: {
      twitter: '@jbethke'
    },
    followers: 10
  },
  { id: '7907699c-9d9c-11ed-a8fc-0242ac120002', 
    name: 'Andrew Smith', image: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp',
    title: 'Alexa Whisperer', domain: 'amazon.com',
    socialMedia: {
      twitter: '@andrew.smith',
      facebook: 'andrew12334',
      skype: 'live:cid.224b5c7ae7d20cbf'
    },
    followers: 0
  },  
];

export default class UserProfileService {
  /**
   * Retrieves all available users.
   * @returns {Array.Profile} The collection of users.
   */
  async all() {
    return users;
  }
  //all() {
  //  return new Promise((resolve) => {
  //    resolve(user);
  //  });
  //}  

  async get(id) {
    return users.find((u) => u.id === id);
  }

  async follow(id) {
  }
}