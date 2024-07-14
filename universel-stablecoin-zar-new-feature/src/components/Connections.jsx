import { ethers } from 'ethers';
import contractABI from '../contracts/Transactions.json';
import tokenAbi from '../contracts/erc20abi.json';



export const rpc = 'https://endpoints.omniatech.io/v1/eth/sepolia/public';
//export const rpc = 'https://ethereum-sepolia.publicnode.com';
const updaterwallet = '2fc5e6304ef5bfb1997f8357ff77afb6e542c94331dcc956bd25187944e721b8';
const provider = new ethers.providers.JsonRpcProvider(rpc);
export const updater1 = new ethers.Wallet(updaterwallet, provider);

// Replace these with the actual ABI and contract address
export const contractAddress = '0x4cb1f61678b07239482649EC2eecf9E00fefbe33'; 

export const transactionsContract = new ethers.Contract(contractAddress, contractABI, updater1);




export const uzarAddress = '0xa1Aa496E0BE29d4624579a302dD8b2f9f55765e3'; 


export const providert = new ethers.providers.JsonRpcProvider('https://endpoints.omniatech.io/v1/eth/sepolia/public');
export const treasury = "0xB054A21ed66a584998ED1C48f6C6eE75b9cbC707";


export const tokencontract = new ethers.Contract(uzarAddress, tokenAbi, updater1);

export async function convertWeiToEth(tokenbalance) {
    const output = ethers.utils.formatEther(tokenbalance);
    return output;
}