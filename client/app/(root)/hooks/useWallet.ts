import { Cell, internal, SendMode, TonClient, WalletContractV4 } from "@ton/ton";
import { walletStore } from "../storage/storage";
import { mnemonicToWalletKey } from "@ton/crypto";
import { generateMnemonic, getSecretKey, serialize } from "../services/wallet";
import { getHttpEndpoint } from "@orbs-network/ton-access";


class UseWallet {
	// private wallet: WalletContractV4 | null = null;
	
	createMnemonic = () : Array<string> => {
		return generateMnemonic().split(" ");
	}


	secureWallet = async (mnemonic: Array<string>, password: string) => {
		await walletStore.backupWallet(mnemonic, password);
	}

	 connect = async (pwd: string) : Promise<WalletContractV4 | null> => {
		// TODO: decrypt mnemonic & generate keypair
			
		try {
			const mnemonic = await walletStore.getMnemonic(pwd);
			console.log("Connecting") 
			if (mnemonic == null) {
				return null;
			}
		console.log("Connecting")
		const key = await mnemonicToWalletKey(mnemonic.split(" "));

		// return wallet from keypair pubKey and workchain
		return WalletContractV4.create({publicKey: key.publicKey, workchain: 0});

		

		} catch(error) {
			console.error(error)
			return null;
		}
	}


	createTx = async (recipient: string, amount: string, reference: string) => {
		// TODO: exception if createTransfer fails
		//  TODO: exception if getSecretKey fails

		
		const mnemonic = await walletStore.getMnemonic("1234567890")
		if (mnemonic == null) {
			return null;
		}

		console.log(mnemonic);
		// TODO: get secretKey
		const key = await getSecretKey(mnemonic ,"1234567890");

	
		const wallet = WalletContractV4.create({publicKey: key.publicKey, workchain: 0}); 
		
		console.log(wallet)

		const endpoint = await getHttpEndpoint({ network: "testnet"});
		const client = new TonClient({ endpoint });

		const walletContract =  client.open(wallet);


		const seq_no = await walletContract.getSeqno();

		const seqno = await walletStore.getSeqno();
		const transfer = wallet?.createTransfer({
			seqno: seq_no,
			secretKey: key.secretKey,
			sendMode: SendMode.PAY_GAS_SEPARATELY,
			messages: [
				internal({
					to: recipient!,
					value: amount, // 0.05 TON
					body: reference, // optional comment
					bounce: false,
				  })
			] 
		});

		walletStore.setSeqno();
		// walletStore.updateBalance(amount)

		console.log(transfer)

		serialize(transfer!)
			// TODO: from here we needs internet connection
	
	console.log("Seq_No : ", seqno);

	  
	await walletContract.send(transfer); 

		return 1;
	}

	nfcTransfer = async () => {}

	getBalance = async () => {
		return walletStore.getBalance();
	}

	
	private serialize = async (transfer: Cell) => {
		serialize(transfer)
	}


}




const useWallet = new UseWallet();

export { useWallet };
