import { useState, createContext, useContext, useEffect } from "react";

import WalletActivity from './WalletActivity';
import WalletCreate from './WalletCreate';
import { UserContext } from "./../../context";

import WalletBackground from "../../assets/images/wallet/wallet-background.png";

// const UserContext = createContext();

export default function () {
  const [isWalletInfoLoad, setWalletInfo] = useState(false);
  const [privateKey, setPrivateKey] = useState('');
  const [isAppLoad] = useState(false);

  useEffect(() => {
    const _privateKey = localStorage.getItem("private_key");
    if(_privateKey != null) {
      setPrivateKey(_privateKey);
      setWalletInfo(true);
    }
  }, [isAppLoad])

  const savePrivateKey = _privatekey => {
    setPrivateKey(_privatekey);
    localStorage.setItem("private_key", _privatekey);
  }

  return (
    <div style={{backgroundImage: 'url("'+WalletBackground+'")', backgroundSize: 'cover', backgroundPosition: 'center', width: "100%", height: "100%"}}>
      {
        !isWalletInfoLoad ?
          <WalletCreate 
            setWalletInfo={setWalletInfo}
            savePrivateKey={savePrivateKey}
            /> :
          <WalletActivity privateKey={privateKey} />
      }
    </div>
  )
}