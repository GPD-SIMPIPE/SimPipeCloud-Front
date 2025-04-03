import './Header.css';
import brFlag from '../../assets/flags/BrazilFlag.png';
import esFlag from '../../assets/flags/SpainFlag.png';
import usFlag from '../../assets/flags/USAFlag.png';
import logo from '../../assets/Logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Simpipe Cloud" className="logo" />
        <h1>Simpipe Cloud</h1>
      </div>
      
      <div className="header-right">
        <div className="language-flags">
          <img src={usFlag} alt="English" className="flag" />
          <img src={esFlag} alt="Español" className="flag" />
          <img src={brFlag} alt="Português" className="flag" />
        </div>
        
        <div className="user-info">
          <span>Seja Bem Vindo Fernando!</span>
          <button className="logout-btn">Sair</button>
        </div>
      </div>
    </header>
  );
};

export default Header; 