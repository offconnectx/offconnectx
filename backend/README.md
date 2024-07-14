## OffConnect Backend

The backend has an implementation  of `storage`  and `useWallet hook `


## storage
Although not very secure, is just an idea of how we can store very critical information about the wallet, the `mnemonic`, `password`, `balance`, and the current `seqno`

It has a couple of methods that expose storage state (attributes).


This function receives the password (encryption key) as parameter, read, decrypt then return the wallet mnemonic:

	getMnemonic = async (pwd: string) : Promise<string | null>


This function takes in the mnemonic array and password (encryption key) as parameters, it uses the password to encrypt the mnemonic and stores it:

	backupWallet = (mnemonic: Array<string>, pwd: string)



TODO: implement a hashing function to hash the password for storage, so on decryption we can compare the given password and the stored hashed password, this will help in saving resources when decrypting.

Here is the blueprint for the hashing function:

	private hashPassword = (plainPassword: string) : string


This function will be used to compare the given password and the stored hashed password:

	private validatePassword(pwd: string): boolean



## useWallet

UseWallet hook exposes the wallet and the storage to the ui.

TODO: An interface that useWallet will implement, by doing this any changes made to useWallet will not affect the ui it uses.


UseWallet exposes these function to the ui:


This function will be used for creating a new contract, it generate a new wallet mnemonic and returns it to be displayed to the client so they can back it up:

	createMnemonic = () : Array<string>



This function will mostly be used when a new wallet is create, after generating the mnemonic and the client want to secure it, they will provide the mnemonic and password to be used to encrypt the mnemonic. The mnemonic will be encrypted and stored in the storage. `[NOTE: the storage is required only to exist in the client's local device and can never be backed up off device, so it is adviced to enforce the user to also backup a copy of the mnemonic, either by writing it down on a paper or encrypted storage of their choice]`:

	secureWallet = async (mnemonic: Array<string>, password: string)


This Function is used to connect to an existing wallet, the wallet `password` has  to be provided to decrypt the mnemonic and create a `WalletContractV4` object, this object is returned or `null` if error occures:

	connect = async (pwd: string) : Promise<WalletContractV4 | null>

This function will take the wallet `password`, `recipient`, `amount` and transaction `reference`, from these parameters it will create a transaction offline in BoC format and save the BoC to local storage in cases were there is no internet connection. When the internet connection is recovered the transaction will be published to the blockchain:

	createTx = async (pwd: string, recipient: string, amount: string, reference: string)


### UNDER DEVELOPMENT

A function used to transfer a transaction in BoC format to another device using nfc connections:

	nfcTransfer = async ()


A function used to get the balance of the connected wallet:
	getBalance = async ()


A function used to serialize a Cell to BoC and save it to local storage:
	
	private serialize = async (transfer: Cell)

## 

#### [ CHECK `https://github.com/Luqxus/in-finite/tree/dev/backend/example` FOR EXAMPLE.]
