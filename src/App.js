import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';

function App() {
  return (
    <section className="vh-100" style={  { backgroundColor: '#eee' }   }>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-12 col-xl-4">
          <Profile name="Mark Cornelius" classification="student" photo={ "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp "} />
          <Profile name="George Heeres" classification="instructor" photo={ "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp" } />
          <Profile name="Nelvison Almanzar" classification="student" photo={ "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp" } />
        </div>
      </div>
    </div>
  </section>
  );
}

export default App;
