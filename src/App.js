import './App.css';
import Profile from './components/Profile';

function App() {
  let person = {
    name: 'George Heeres',
    title: 'Sr. Software Engineer'
  };

  return (
    <div>
      <Profile person={ person } avatar="10" />
      <Profile person={ { name: 'Andrew Smith', title: 'Game Tester' } } />
      <Profile name="Ava" title="Lovable Daughter" avatar="22" />
    </div>
  );
}

export default App;
