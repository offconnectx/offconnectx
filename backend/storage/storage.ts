import { decryptMnemonic, encryptMnemonic } from "../services/wallet";

class WalletStorage {
	private mnemonic: string | null;
	private password: string | null;
	private balance: number;
	private seqno: number;

	constructor() {
		this.balance = 0;
		this.seqno = 0;

		// hardcoded values designed for testing purposes
		const _mnemonic = "promote love soccer hello mule mail pulse note first desk wrap lift brass match fury floor tribe prosper useful soda autumn drum grocery ride";
		const _pwd = "1234567890";
		this.password = _pwd;
		this.mnemonic =  encryptMnemonic(_mnemonic, _pwd);
		// const _password = "1234567890";
		// this.backupWallet(_mnemonic.split(" "), _password);
	}

	 backupWallet = async (mnemonic: Array<string>, pwd: string) => {
		this. mnemonic = encryptMnemonic(mnemonic.join(" "), "1234567890")
	 }

	getMnemonic = async (pwd: string) : Promise<string | null> => {
		if (this.mnemonic == null || !this.validatePassword(pwd)) {
			return null
		}
		return  decryptMnemonic(this.mnemonic, pwd);
	}

	// getPassword() : string | null {
	// 	return this.password;
	// }

	private validatePassword(pwd: string): boolean {
		if (this.password == null) {
			return false;
		}
		else if (pwd == this.password) {
			return true;
		}

		return false;
	}

	//  setMnemonic = async (v: string, pwd: string) => {
	// 	// this.mnemonic = v;
	// 	const _mnemonic = "promote love soccer hello mule mail pulse note first desk wrap lift brass match fury floor tribe prosper useful soda autumn drum grocery ride";
	// 	this.mnemonic =  encryptMnemonic(_mnemonic, "1234567890");
	// }

	// private setPassword(v: string) {
	// 	this.password = v;
	// }

	private hashPassword = (plainPassword: string) : string => {
		return ""
	}
}

let walletStore = new WalletStorage();

export {walletStore}
