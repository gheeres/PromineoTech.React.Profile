import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import './App.css';
import Profile from './components/Profile';
import Navigation from './components/Navigation';
import LoginForm from './components/LoginForm';
import ProfileAvatar from './components/ProfileAvatar';

function App() {
  return (
    <>
      <Navigation />
      <ProfileAvatar />
      <LoginForm />

      <div>
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
      </div>
    </>
  );
}

export default App;
