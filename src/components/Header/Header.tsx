import { useState } from 'react';
import './Header.css';
import brFlag from '../../assets/flags/BrazilFlag.png';
import esFlag from '../../assets/flags/SpainFlag.png';
import usFlag from '../../assets/flags/USAFlag.png';
import logo from '../../assets/logo-branca.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Simpipe Cloud" className="logo" />
        <h1>SimPipe Cloud</h1>
      </div>

      <div className="header-right">
        <div className="language-flags">
          <img src={usFlag} alt="English" className="flagEnglish" />
          <img src={esFlag} alt="Español" className="flagSpanish" />
          <img src={brFlag} alt="Português" className="flagPortuguese" />
        </div>

        <div className="menu-container">
          <button className="hamburger" onClick={toggleMenu}>
            &#9776;
          </button>

          {menuOpen && (
            <div className="dropdown-menu">
              <div className="menu-item">👤 Perfil</div>
              <div className="menu-item">⚙️ Configurações</div>
              <div className="menu-item">🚪 Sair</div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
