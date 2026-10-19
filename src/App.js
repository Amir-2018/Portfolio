import { useState } from 'react';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/css/style.css';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={`App${menuOpen ? ' menu-open' : ''}`}>
      <Header onNavigate={closeMenu} />
      <Main onMenuToggle={() => setMenuOpen((isOpen) => !isOpen)} />
    </div>
  );
}

export default App;
