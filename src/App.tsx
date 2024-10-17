import ProfileList from './components/ProfileList.tsx';
import type { User } from './types.ts';

let users: User[] = [
  { id: 1, 
    lastName: 'Heeres', firstName: 'George',
    title: 'Instructor',
    email: 'gheeres@gmail.com',
    photo: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp',
    socialMedia: {
      facebook: '@gheeres',
      twitter: '#gheeres',
      skype: '8675309'
    },
    followers: [
    ]
  },
  { id: 2, 
    lastName: 'Smith', firstName: 'Andrew',
    title: 'Alexa Whisperer',
    email: 'asmith@gmail.com',
    photo: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp',
    socialMedia: {
      facebook: '@asmith'
    },
    followers: [
      'gheeres', 'katie'
    ]
  },
  { id: 3, 
    lastName: 'Bethke', firstName: 'Jason',
    title: 'CISCO Engineer',
    email: 'jbethke@light-net.com',
    photo: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp',
    socialMedia: {
      twitter: '#jbethke',
      facebook: '@jbethke'
    },
    followers: [
      'gheeres'
    ]
  },
];

function App() {
  return (
    <>
      <ProfileList users={ users } />
    </>
  )
}

export default App
