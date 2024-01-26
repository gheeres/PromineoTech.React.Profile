export default class DemoUserProfileService {
  /**
   * Retrieves all available users.
   * @returns {Array.Object} The users.
   */
  all() {
    return Promise.resolve([
      { name: "George Heeres", title: "Instructor",
        email: "heeresonline.com", followers: 2 },
      { name: 'Jake Sasse', title: 'Business Analyst',
        email: 'jaketheman@gmail.com', followers: 10000 },
      { name: 'Andrew Smith', title: 'Alexa Whispere',
        email: 'asmith@amazon.com', followers: 765 }
    ]);
  }
}