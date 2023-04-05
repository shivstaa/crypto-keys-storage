import {ethers} from 'ethers';

// Generate a wallet
export function createWallet() {
    const wallet = ethers.Wallet.createRandom()
    return wallet
}

// Store wallet public and private keys locally
export function storeKeys(wallet)  {
    console.log('prev', localStorage)

    //In local storage, set address private key, and public key to generated values
    localStorage.setItem('walletAddress', wallet.address)
    localStorage.setItem('walletPrivateKey', wallet.privateKey);
    localStorage.setItem('walletPublicKey', wallet.publicKey);
    console.log('cur', localStorage)

}