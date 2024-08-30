import AppRouter from './src/router/AppRouter';
import Navbar from './src/ui/Navbar';
import './styles.css';

function App() {
  return (
    <>
      <div className='header-app' >
        <h1>GymApp</h1>
        <hr />
      </div>
      <AppRouter />
      <Navbar />
    </>
  );
}

export default App;
