import { useState } from 'react';
import logo from '../images/logo.png';
import Popup from './Popup';

const link = "https://api.whatsapp.com/send/?phone=5522992661644&text=Estou+vindo+do+site+e+quero+meu+acesso%21&type=phone_number&app_absent=0";

export default function Header() {
  const [active, setActive] = useState(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  // const changePopup = () => {
  //   setShowPopup(!showPopup);
  // }


  function animatedLink() {
    const navLinks = document.querySelectorAll('li');
    navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = '')
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
    })
  }

  const handleClick = () => {
    setActive(!active);
    animatedLink();
  };

  const handleScroll = (event: any) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement && targetElement.scrollIntoView({ behavior: 'smooth' });
  };

  return (<>
    {showPopup && <Popup setShowPopup={setShowPopup} />}
    <header>
      <nav>
        <img src={logo} alt="logo-metaflix" className="logo-img" />
        <div

          className={`mobile-menu ${active ? 'active' : ''}`}
          onClick={handleClick}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <ul className={`nav-itens ${active ? 'active' : ''}`}>
          <li><a href="#planos" className="scroll-link" onClick={handleScroll}>Planos</a></li>
          <li><a href="#perguntas" className="scroll-link" onClick={handleScroll}>FAQs</a></li>
          <li><a href="#contatos" className="scroll-link" onClick={handleScroll}>Contato</a></li>
          <a href={link} target="_blank"><li className="move-link negrito">Teste Grátis</li></a>
        </ul>
      </nav>
    </header>
  </>
  )
};
