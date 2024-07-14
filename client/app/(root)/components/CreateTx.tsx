import React, { useState } from "react";
import { useWallet } from "../hooks/useWallet";


import { useContext, useEffect } from "react";
import "../App.scss";
import MoonIcon from "../../assets/icons/moon.svg";
// import MoonIcon from "../../assets/icons";
import SunIcon from "../../assets/icons/sun.svg";
// import { Dashboard, PageNotFound } from "../screens";
import Sidebar from "./sidebar/Sidebar"
import Dashboard from "../screens/DashboardScreen";

function Dashboard1() {

	return (
		<>
			<main className="page-wrapper">
				{/* left of page */}
				<Sidebar />
				{/* right side/content of the page */}
				<div className="content-wrapper">
					<Dashboard />
					<button
						type="button"
						className="theme-toggle-btn"

					>
						<img
							className="theme-icon"
							src={MoonIcon}
						/>
					</button>
				</div>
			</main>
		</>
	);
}

export default Dashboard1;


// const CreateTx = () => {

// 	const wallet = useWallet;
// 	const [recipient, setRecipient] = useState<string>("");
// 	const [amount, setAmount] = useState<string>("");
// 	const [reference, setReference] = useState<string>("");
// 	const [password, setPassword] = useState<string>("");
// 	const [isError, setIsError] = useState<boolean>(false);
// 	const [isSuccess, setIsSuccess] = useState<boolean>(false);


// 	const createTx = async () => {
// 		const result = wallet.createTx(password, recipient, amount, reference);

// 		if (result == null) {
// 			setIsError(true)
// 			return;
// 		}

// 		setIsSuccess(true);
// 	}

// 	return (
// 		<form
// 			onSubmit={async (event) => {
// 				event.preventDefault();
// 				await createTx()

// 				console.log(isError);
// 			}}
// 			className="max-w-sm mx-auto">
// 			<div className="mb-5">
// 				<label htmlFor="recipient" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Recipient Address</label>
// 				<input
// 					onChange={(event) => {
// 						setRecipient(event.target.value);
// 					}}
// 					type="text" id="recipient" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
// 			</div>
// 			<div className="mb-5">
// 				<label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
// 				<input
// 					onChange={(event) => {
// 						setAmount(event.target.value);
// 					}}
// 					type="number" id="amount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
// 			</div>
// 			<div className="mb-5">
// 				<label htmlFor="reference" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Reference</label>
// 				<input
// 					onChange={(event) => {
// 						setReference(event.target.value);
// 					}}
// 					type="text" id="reference" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
// 			</div>
// 			<div className="mb-5">
// 				<label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
// 				<input
// 					onChange={(event) => {
// 						setPassword(event.target.value);
// 					}}
// 					type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
// 			</div>
// 			<button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

// 		</form>
// 	);
// }


// export default CreateTx;
