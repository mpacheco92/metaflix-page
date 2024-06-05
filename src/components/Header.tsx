import { useState } from 'react';
import logo from '../images/logo.png';

export default function Header() {
  const [active, setActive] = useState(false);

  function animatedLink () {
    const navLinks = document.querySelectorAll('li');
    navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = '')
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${ index / 7 + 0.3 }s`);
    })
  }

  const handleClick = () => {
    setActive(!active);
    animatedLink();
  };

  return (
    <header>
      <nav>
        <img src={logo} alt="logo-metaflix" className="logo-img" />
        <div
          className={ `mobile-menu ${active ? 'active' : ''}` }
          onClick={handleClick}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <ul className={`nav-itens ${active ? 'active' : ''}`}>
          <li><a href="#planos">Planos</a></li>
          <li><a href="#perguntas">FAQs</a></li>
          <li><a href="#contatos">Contato</a></li>
          <a href="https://tinyurl.com/metaflix-contato" target="_blank"><li className="move-link negrito">Acesse agora</li></a>
        </ul>
      </nav>
    </header>
  )
};
