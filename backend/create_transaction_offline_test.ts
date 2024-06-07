import { getHttpEndpoint } from "@orbs-network/ton-access";
import { mnemonicToWalletKey } from "@ton/crypto";
import { Cell, SendMode, TonClient, WalletContractV4, internal } from "@ton/ton";
import fs from 'fs';



async function main() {
	console.log("Somevalue")

	// open wallet
	const mnemonic = "promote love soccer hello mule mail pulse note first desk wrap lift brass match fury floor tribe prosper useful soda autumn drum grocery ride";
	console.log(mnemonic)
	const key = await mnemonicToWalletKey(mnemonic.split(" "));
	// console.log("Key : ", key.publicKey)
	const wallet  = WalletContractV4.create({publicKey: key.publicKey, workchain: 0});

	console.log(wallet.address.toString());

	const amount = 100_000_000;

	const receiver_address = "UQB7oov7eX8Q4xyKDHAHU6Ka0Ra0ULjcDDjIP53RadTAGkua";

	
	// TODO: store sequence number
	// & increment with every transaction
	let seqno = 4;
	
	const transfer = wallet.createTransfer({
		seqno: 4,
		secretKey: key.secretKey,
		sendMode: SendMode.PAY_GAS_SEPARATELY,
		messages: [
			internal({
				to: receiver_address,
				value: "0.1", // 0.05 TON
				body: "Hello", // optional comment
				bounce: false,
				
			  })
		] 
	});

	  
	// //   save the transaction as boc
	serialize(transfer);

	// //   read the txx boc file
	const bocFromFile = fs.readFileSync('txx.boc');


	// //   parse boc to cell
	

	console.log(transfer)


	// TODO: from here we needs internet connection
	const endpoint = await getHttpEndpoint({ network: "testnet"});
	const client = new TonClient({ endpoint });

	const walletContract =  client.open(wallet);


	seqno = await walletContract.getSeqno();
	console.log("Seq_No : ", seqno);

	  
	await walletContract.send(Cell.fromBoc(bocFromFile)[0]); 
}


function serialize(cell: Cell) {
	const boc = cell.toBoc();
	fs.writeFileSync('txx.boc', boc);
	return boc
}

main();
