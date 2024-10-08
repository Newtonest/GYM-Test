import AppRouter from './router/AppRouter';
import Navbar from './ui/Navbar';
import './styles.css';

function App() {
  return (
    <>
      <div className='header-app' >
        <a href="./">
          <h1>GymApp</h1>
        </a>
        <hr />
      </div>
      <AppRouter />
      <Navbar />
    </>
  );
}

export default App;
