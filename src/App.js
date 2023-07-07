import React from 'react';
import './App.css';
import ProfileList from './components/ProfileList';
import Stars from './components/Stars';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0
    };
  }

  #handleRatingChange = (e) => {
    console.log(`Rating changed...${ e }`)
    if (e) {
      this.setState({ rating: e })
      //this.state.rating = e;
      //this.render();
    }
  }

  render() {
    console.log(`App.render()`);
    const rating = this.state.rating;

    return (
      <section className="profile vh-100">
        <div className="container py-5 h-100">
          <Stars rating={ rating } color={ '#f00' } onRating={ this.#handleRatingChange } />
          <ProfileList />
        </div>
      </section>
    );
  }
}

export default App;
