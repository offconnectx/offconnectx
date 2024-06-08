import crypto from 'crypto';
import * as bip39 from 'bip39';
import { mnemonicToWalletKey } from '@ton/crypto';
import { WalletContractV4 } from '@ton/ton';




async function  createWallet(pwd:string) {

	// TODO: generate mnemonic
	const mnemonic = generateMnemonic()

	// TODO: create a password
	const encryptedMnemonic = encryptMnemonic(mnemonic, pwd);

	// TODO: hash the password;
	const hashedPassword = hashString(pwd);
	
	// TODO: store encrypted mnemonic & hashed password in secure storage

}


async function loadWallet(plainPassword: string): Promise<WalletContractV4> {
	// TODO: gets a mnemonic from storage
	const encryptedMnemonic = getWalletMnemonic();
	

	// TODO: decrypt mnemonic & generate keypair
	const key = await mnemonicToWalletKey(
		decryptMnemonic(encryptedMnemonic,plainPassword).split(" ")
	);

	// return wallet from keypair pubKey and workchain
	return WalletContractV4.create({publicKey: key.publicKey, workchain: 0});
}


function getWalletMnemonic(): string {
	// TODO: get encrypted mnemonic from secure local storage
	const encryptedMnemonic = "";
	return encryptedMnemonic;
}


function generateMnemonic(): string {
	const entropy = crypto.randomBytes(32);

	// Generate a BIP39 mnemonic phrase from the random bytes
	const mnemonic = bip39.entropyToMnemonic(entropy);

	return mnemonic;
}

function encryptMnemonic(mnemonic: string, pwd: string): string {
	
	const iv = crypto.randomBytes(16);

	const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(pwd), iv);

	let encrypted = cipher.update(mnemonic, 'utf-8', 'hex');
	encrypted += cipher.final('hex');
	return iv.toString('hex') + "." + encrypted;
}


function decryptMnemonic(encrypedText: string, pwd: string): string {
	const parts = encrypedText.split(".");
	const iv = Buffer.from(parts[0], 'hex');

	const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(pwd), iv);
	let decrypted = decipher.update(parts[1], 'hex', 'utf-8');
	decrypted += decipher.final('utf-8');

	return decrypted;
}


function hashString(plainString: string): string {
	return crypto.hash('sha256', plainString);
}

function validateHashString(hashedString: string,plainString: string): boolean {
	return hashedString == crypto.hash('sha256', plainString);
}



function importWallet(mnemonic: string) {
	// TODO: this function will recover a wallet using as mnemonic phrase
} 
