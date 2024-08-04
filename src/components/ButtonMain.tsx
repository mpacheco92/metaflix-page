import { useState } from 'react';
import Popup from './Popup';

export default function ButtonMain() {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const changePopup = () => {
    setShowPopup(!showPopup);
  }

  return (
    <>
      <h3
        className="btn-acess"
        onClick={changePopup}
      >
        QUERO ACESSAR AGORA
      </h3>
      {showPopup && <Popup setShowPopup={setShowPopup} />}
    </>
  );
};
