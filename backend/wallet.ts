import { KeyPair, mnemonicToWalletKey } from "@ton/crypto";
import { Cell, WalletContractV4 } from "@ton/ton";
import * as bip39 from 'bip39';
import crypto from 'crypto';

// async function loadWallet(plainPassword: string): Promise<WalletContractV4> {
// 	// TODO: gets a mnemonic from storage
// 	const encryptedMnemonic = await getWalletMnemonic();
	

// 	// TODO: decrypt mnemonic & generate keypair
// 	const key = await mnemonicToWalletKey(
// 		decryptMnemonic(encryptedMnemonic,plainPassword).split(" ")
// 	);

// 	// return wallet from keypair pubKey and workchain
// 	return WalletContractV4.create({publicKey: key.publicKey, workchain: 0});
// }


export function generateMnemonic(): string {
	const entropy = crypto.randomBytes(32);

	// Generate a BIP39 mnemonic phrase from the random bytes
	const mnemonic = bip39.entropyToMnemonic(entropy);

	return mnemonic;
}

export async function getSecretKey(pwd: string, mnemonic: string): Promise<KeyPair> {
	
	// TODO: decrypt mnemonic & generate keypair
	return await mnemonicToWalletKey(
		mnemonic.split(" "),pwd
	);
}

// async function getWalletMnemonic(): Promise<string> {
// 	// TODO: get encrypted mnemonic from secure local storage
// 	const encryptedMnemonic = "";
// 	return encryptedMnemonic;
// }

export function decryptMnemonic(encrypedText: string, pwd: string): string {
	let key = crypto.createHash('sha256').update(String(pwd)).digest();
	const parts = encrypedText.split(".");
	const iv = Buffer.from(parts[0], 'hex');

	const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
	let decrypted = decipher.update(parts[1], 'hex', 'utf-8');
	decrypted += decipher.final('utf-8');

	return decrypted;
}

export function encryptMnemonic(mnemonic: string, pwd: string): string {
	let key = crypto.createHash('sha256').update(String(pwd)).digest();
	const iv = crypto.randomBytes(16);

	const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);

	let encrypted = cipher.update(mnemonic, 'utf-8', 'hex');
	encrypted += cipher.final('hex');
	return iv.toString('hex') + "." + encrypted;
}

export function serialize(cell: Cell) {
	// TODO: save boc to ecrypted local storage
	const boc = cell.toBoc();
	// fs.writeFileSync('txx.boc', boc);
	return boc
}
