const seed = 'promineotech';
const defaultMaxCount = 10;

export default class RandomUserProfileService {
  constructor(url, maxUsers) {
    this.url = url || `https://randomuser.me/api?nat=us&seed=${ seed }`;
    this.maxUsers = maxUsers || defaultMaxCount;
  }

  /**
   * Retrieves all available users.
   * @returns {Array.Object} The users.
   */
  all() {
    let url = `${ this.url }&results=${ this.maxUsers }`;
    return fetch(url).then((res) => res.json())
                     .then((data) => {
                       // { name: '', email: '', title: '' }
                       return data.results.map((user) => {
                         return { 
                           name: `${ user.name.first } ${ user.name.last }`, 
                           email: user.email, 
                           title: user.location.city, 
                           followers: user.dob.age,
                           avatar: user.picture.thumbnail,
                           rating: user.location.street.number,
                        }
                       });
                     });
  }
}