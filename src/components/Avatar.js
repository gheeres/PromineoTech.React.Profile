export default function Avatar(props) {
  let photo = props.photo || 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp';
  return (
    <div className="mt-3 mb-4">
      <img src={ photo } className="rounded-circle img-fluid" style={ { width: '100px' } } />
    </div>
  ); 
}

// import React from 'react';
// export default class Avatar extends React.Component
// {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     let photo = this.props.photo || 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp';
//     return (
//       <div className="mt-3 mb-4">
//         <img src={ photo } className="rounded-circle img-fluid" style={ { width: '100px' } } />
//       </div>
//     ); 
//   }
// }