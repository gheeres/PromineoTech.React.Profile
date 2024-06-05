const seed = 'promineo';
const baseUrl = `https://randomuser.me/api/?nat=us&seed=${ seed }`;

export default class RandomUserProfileService
{
  /**
   * Returns all of the available users.
   * @returns 
   */
  async all() {
    let url = `${ baseUrl }&results=10`;
    return fetch(url).then((res) => res.json())
                     .then((data) => {
                        return data.results.map(user => {
                          return {
                            id: user.login.uuid,
                            name: `${ user.name.first } ${ user.name.last }`,
                            photo: user.picture.large,
                            classification: user.location.country,
                            followers: 0
                          };
                        });
                     });
  }

  /**
   * Finds a user by their unique id.
   * @param {String} id The unique id of the user.
   * @returns The user if found, otherwise null.
   */
  async get(id) {
    return null;
  }

  /**
   * Adds the specified person as a follower of the user with the specified unique id.
   * @param {String} id The unique id of the user.
   * @param {String} follower The follower information.
   * @returns {Boolean} True if followed, false if otherwise.
   */
  async follow(id, follower) {
    return false;
  }
}