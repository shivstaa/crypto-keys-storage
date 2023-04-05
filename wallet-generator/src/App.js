import React, { useState } from 'react';
import { createWallet, storeKeys } from './walletGenerator';

function App() {
  //for debugging purposes only (will print the info)
  const [walletAddress, setWalletAddress] = useState('');
  const [walletPrivateKey, setWalletPrivateKey] = useState('');
  const [walletPublicKey, setWalletPublicKey] = useState('');

  // On button click, will do the following: 

  const handleGenerateWallet = () => {
    
    //create a wallet, store the key of the wallets
    const wallet = createWallet();
    storeKeys(wallet);
    
    //update the address, private, and public key
    setWalletAddress(wallet.address);
    setWalletPrivateKey(wallet.privateKey);
    setWalletPublicKey(wallet.publicKey);
  };

  return (
    //Button to generate the key and stuff
    <div className="App">
      <button onClick={handleGenerateWallet}>Generate Wallet</button>
      <div>
        <h3>Wallet Address</h3>
        <p>{walletAddress}</p>
      </div>
      <div>
        <h3>Private Key</h3>
        <p>{walletPrivateKey}</p>
        <h3>Public Key</h3>
        <p>{walletPublicKey}</p>
      </div>
    </div>
  );
}

export default App;