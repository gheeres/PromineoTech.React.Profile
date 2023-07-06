const seed = 'promineotech';
const defaultUrl = `https://randomuser.me/api/?nat=us&seed=${ seed }`;

/**
 * Service for interacting with user profile data.
 */
export default class RandomUserProfileService {
  #data;

  constructor(url) {
    this.url = url || defaultUrl;
  }

  /**
   * Converts the API request into the local user model.
   * @param {Array.Object} user The user data.
   */
  #toUser(user) {
    if (user) {
      const match = user.email.match(/^(.+)@(.+)$/);
      return {
        id: user.login.uuid,
        name: `${ user.name.first } ${ user.name.last }`,
        domain: `${ match[1] }`,
        title: user.location.city,
        image: user.picture.large,
        socialMedia: {
          twitter: `@${ user.login.username }`,
          skype: `live:cid.${ user.login.username }`,
          facebook : `match[0]`
        },
        followers: parseInt((new Date().getTime() - new Date(user.registered.date).getTime()) / (1000 * 3600 * 24), 10)
      };
    }
  }
  
  /**
   * Retrieves a specific user by id.
   * @returns {Profile} The collection of users.
   */
  async get(id) {
    //console.log(`UserProfileService.get(${ id })`);
    const users = await this.all();
    return users.find((u) => u.id === id);
  }

  /**
   * Retrieves all available users.
   * @returns {Array.Profile} The collection of users.
   */
  async all() {
    //console.log(`UserProfileService.all()`);    
    if (this.#data) {
      return this.#data;
    }
      
    return fetch(`${ this.url }&results=10`).then((res) => {
      return res.json();
    }).then((data) => {
      this.#data = (data?.results || []).map((d,i) => this.#toUser(d));
      return this.#data;
    });
  }

  /**
   * Adds the specified follower to the user.
   * @param {string} id The unique id of the user to follow.
   * @param {string} follower The follower identifier.
   * @returns {boolean} True if follow succeeded, false if otherwise.
   */
  async follow(id, follower) {
    //console.log(`UserProfileService.follow(${ id },${ follower })`);

    const user = await this.get(id);
    if (user) {
      user.followers++;
      return true;
    }
    return false;
  }
};