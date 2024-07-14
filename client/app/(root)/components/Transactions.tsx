// import { ethers } from 'ethers';
// import { useEffect, useState } from 'react';
// import { shortenAddress } from "../../utils/shortenAddress";
// import { transactionsContract } from "../Connections";
// import { getInfoW } from '../mongo';
// import "../dashboard/areaTable/AreaTable.scss";

// const TABLE_HEADS = [
// 	"From",
// 	"Amount",
// 	"Account",
// 	"Country",
// 	"Status",
// 	"Currency",
// 	"Date",
// ];

// const TransactionsCard = ({ number, addressFrom, timestamp, account, country, currency, amount, isFirstRow }) => {
// 	return (
// 		<tr className={isFirstRow ? "border-b border-white" : ""}>
// 			<td className="px-3 py-2 sm:px-6 sm:py-4 border-r border-white">{number}</td>
// 			<td className="px-3 py-2 sm:px-6 sm:py-4">
// 				<a href={`https://sepolia.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer">
// 					{shortenAddress(addressFrom)}
// 				</a>
// 			</td>
// 			{/*<td className="px-3 py-2 sm:px-6 sm:py-4">
//         <a href={`https://sepolia.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer">
//           {shortenAddress(addressTo)}
//         </a>
//       </td> */}
// 			<td className="px-3 py-2 sm:px-6 sm:py-4">{amount.toString()} UZAR</td>
// 			<td className="px-3 py-2 sm:px-6 sm:py-4">{account && account.toString()}</td>
// 			<td className="px-3 py-2 sm:px-6 sm:py-4">{country}</td>
// 			<td className="px-3 py-2 sm:px-6 sm:py-4">{currency}</td>
// 			<td className="px-3 py-2 sm:px-6 sm:py-4">{timestamp}</td>
// 		</tr>
// 	);
// };



// const Transactions = () => {
// 	const [transactions, setTransactions] = useState([]);
// 	const [currentAccount, setCurrentAccount] = useState('');
// 	const [error, setError] = useState("");
// 	const { currentUser } = useAuth();

// 	const [, setWallet] = useState("");

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			try {
// 				const userWallet = await getInfoW(currentUser.email);
// 				setWallet(userWallet);
// 				console.log(userWallet);
// 			} catch (error) {
// 				console.error("Error fetching user information", error);
// 				setError("Failed to fetch user information");
// 			}
// 		};

// 		fetchData();
// 	}, [currentUser.email]);

// 	useEffect(() => {
// 		checkIfWalletIsConnected();
// 		checkIfTransactionsExist();
// 	}, []);

// 	const checkIfWalletIsConnected = async () => {
// 		const accounts = await getInfoW(currentUser.email);

// 		if (accounts.length) {
// 			setCurrentAccount(accounts);
// 			getAllTransactions();
// 		} else {
// 			console.log('No accounts found');
// 		}
// 	};

// 	const checkIfTransactionsExist = async () => {
// 		const transactionsCount = await transactionsContract.getTransactionCount();
// 		window.localStorage.setItem('transactionCount', transactionsCount.toNumber());
// 	};

// 	const getAllTransactions = async () => {
// 		const availableTransactions = await transactionsContract.getAllTransactions();

// 		const structuredTransactions = availableTransactions.map((transaction, i) => ({
// 			number: i + 1, // Add 1 to start numbering from 1
// 			addressFrom: transaction.sender,
// 			addressTo: transaction.receiver,
// 			account: transaction.account,
// 			country: transaction.country,
// 			timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
// 			currency: transaction.currency,
// 			amount: ethers.utils.formatUnits(transaction.amount, 'ether'),
// 		}));

// 		console.log(structuredTransactions);

// 		setTransactions(structuredTransactions);
// 	};

// 	return (
// 		<div className="w-full md:flex flex-col">
// 			<section className="flex flex-1 h-full">
// 				{error && (
// 					<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative" role="alert">
// 						{error}
// 					</div>
// 				)}
// 				<div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
// 					<div className="flex flex-col md:p-12 py-12 px-4">
// 						{currentAccount ? (
// 							<h3 className="text-white text-3xl text-center my-2">
// 								Latest Transactions
// 							</h3>
// 						) : (
// 							<h3 className="text-white text-3xl text-center my-2">
// 								Connect your account to see the latest transactions
// 							</h3>
// 						)}

// 						<table className="table-auto border-collapse border border-black">
// 							<thead>
// 								<tr>
// 									<th className="px-10 border-b border-white">#</th>
// 									<th className="px-5 border-b border-white">From</th>
// 									{/*<th className="px-5">To</th> */}
// 									<th className="px-10 border-b border-white">Amount</th>
// 									<th className="px-10 border-b border-white">Account</th>
// 									<th className="px-10 border-b border-white">Country</th>
// 									<th className="px-10 border-b border-white">Currency</th>
// 									<th className="px-10 border-b border-white">Timestamp</th>
// 								</tr>
// 							</thead>
// 							<tbody>
// 								{[...transactions].reverse().map((transaction) => (
// 									<TransactionsCard key={transaction.number} {...transaction} />
// 								))}
// 							</tbody>
// 						</table>
// 					</div>
// 				</div>
// 			</section>


// 		</div>
// 	);
// };

// export default Transactions;


