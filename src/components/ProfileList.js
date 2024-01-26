import React from 'react';
import Profile from './Profile';

export default class ProfileList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const people = this.props.people || [];
    
    // [] : JSON object => HTML Element
    //let items = [];
    //for(const person of people) {
    //  //console.log(person);
    //  const element = <Profile person={ person } />;
    //  items.push(element);
    //}
    let items = people.map((person,index) => {
      return (
        <Profile key={ index } person={ person } />
      );
    });

    return(
      <>
        { items }
      </>
    );
  }
}