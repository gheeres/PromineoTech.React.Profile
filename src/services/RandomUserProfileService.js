const seed = 'promineotech';
const defaultUrl = `https://randomuser.me/api/?nat=us&seed=${ seed }`;

export default class RandomUserProfileService {
  constructor(url) {
    this.url = url || defaultUrl;
  }

  toUser(user) {
    const match = user.email.match(/^(.+)@(.+)$/)
    return {
      id: user.login.uuid,
      name: `${ user.name.last }, ${ user.name.first }`,
      title: user.location.country,
      domain: `${ match[1] }`,
      image: user.picture.large,
      socialMedia: {
        twitter: `@${ user.login.username }`,
        skype: `live:cid.${ user.login.username }`,
        facebook : `match[0]`
      },
      followers: parseInt((new Date().getTime() - new Date(user.registered.date).getTime()) / (1000 * 3600 * 24), 10) 
    };
  }

  all() {
    return fetch(`${ this.url }&results=10`)
          .then(res => res.json())
          .then(data => {
            return data.results.map(u => {
              return this.toUser(u);
            });
          });
  }
}