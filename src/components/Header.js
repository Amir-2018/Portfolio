import profile from '../assets/img/amir.png';

const Header = ({ onNavigate }) => (
  <header id="header">
    <div className="profile">
      <img src={profile} alt="Portrait d’Amir Maalaoui" className="img-fluid rounded-circle" />
      <h1><a href="#hero" onClick={onNavigate}>Amir Maalaoui</a></h1>
      <p className="profile-title">Ingénieur en génie logiciel</p>
      <div className="social-links">
        <a href="https://github.com/Amir-2018" target="_blank" rel="noreferrer" aria-label="GitHub">
          <i className="bx bxl-github" aria-hidden="true"></i>
        </a>
        <a href="https://www.linkedin.com/in/amir-maalaoui-12b67020a/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <i className="bx bxl-linkedin" aria-hidden="true"></i>
        </a>
        <a href="mailto:amir.maalaoui27@gmail.com" aria-label="Envoyer un e-mail">
          <i className="bx bx-envelope" aria-hidden="true"></i>
        </a>
      </div>
    </div>

    <nav className="nav-menu" aria-label="Navigation principale">
      <ul>
        <li><a href="#hero" onClick={onNavigate}><i className="bx bx-home" aria-hidden="true"></i><span>Accueil</span></a></li>
        <li><a href="#about" onClick={onNavigate}><i className="bx bx-user" aria-hidden="true"></i><span>À propos</span></a></li>
        <li><a href="#skills" onClick={onNavigate}><i className="bx bx-code-alt" aria-hidden="true"></i><span>Compétences</span></a></li>
        <li><a href="#projects" onClick={onNavigate}><i className="bx bx-window-alt" aria-hidden="true"></i><span>Projets</span></a></li>
        <li><a href="#experience" onClick={onNavigate}><i className="bx bx-briefcase" aria-hidden="true"></i><span>Expérience</span></a></li>
        <li><a href="#education" onClick={onNavigate}><i className="bx bx-book" aria-hidden="true"></i><span>Formation</span></a></li>
        <li><a href="#languages" onClick={onNavigate}><i className="bx bx-globe" aria-hidden="true"></i><span>Langues</span></a></li>
        <li><a href="#contact" onClick={onNavigate}><i className="bx bx-envelope" aria-hidden="true"></i><span>Contact</span></a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
