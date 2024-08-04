import React from 'react';
import '../Popup.css';

interface PopupProps {
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const Popup: React.FC<PopupProps> = ({ setShowPopup }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <button
          className="popup-close"
          onClick={() => setShowPopup(false)}
        >
          X
        </button>
        <div className="popup-content">
          Ao clicar no botão abaixo, você será redirecionado para o WhatsApp. <br/><br/> Inicie a conversa para receber seu acesso.
        </div>
        <button className='popup-btn'>
          <h2>
            <a href="https://tinyurl.com/metaflix-contact" target="_blank" onClick={ () => setShowPopup(false) }>
              QUERO MEU ACESSO
            </a>
          </h2>
        </button>
      </div>
    </div>
  );
};

export default Popup;
