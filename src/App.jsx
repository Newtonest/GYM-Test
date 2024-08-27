import AppRouter from './components/router/AppRouter';
import Navbar from './components/ui/Navbar';
import './styles.css';

function App() {
  return (
    <>
      <h1>GymApp</h1>
      <AppRouter />
      <Navbar />
    </>
  );
}

export default App;
