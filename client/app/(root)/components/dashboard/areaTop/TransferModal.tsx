"use client";

import { useWallet } from "@/app/(root)/hooks/useWallet";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";

const TransferModal = (props: { balance: number, update: Function }) => {
	const [openModal, setOpenModal] = useState(true);

	const wallet = useWallet;
	const [recipient, setRecipient] = useState<string>("");
	const [amount, setAmount] = useState<string>("");
	const [reference, setReference] = useState<string>("");
	const [isError, setIsError] = useState<boolean>(false);
	const [isSuccess, setIsSuccess] = useState<boolean>(false);


	const createTx = async () => {
		const result = wallet.createTx(recipient, amount, reference);

		if (result == null) {
			setIsError(true);
			return;
		}

		setIsSuccess(true);

		props.update(Number(amount))
	}

	return (
		<>
			<button
				onClick={async () => {
					// TODO: receive function
					await createTx();
					setOpenModal(true);
				}}
				type="button" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Transfer</button>
			<Modal show={openModal} onClose={() => setOpenModal(false)}>
				<Modal.Header>Transfer</Modal.Header>
				<Modal.Body>

					<form
						onSubmit={async (event) => {
							event.preventDefault();
							await createTx()

							console.log(isError);
						}}
						className="max-w-sm mx-auto">
						<div className="mb-5">
							<label htmlFor="recipient" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Recipient Address</label>
							<input
								onChange={(event) => {
									setRecipient(event.target.value);
								}}
								type="text" id="recipient" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
						</div>
						<div className="mb-5">
							<label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
							<input
								onChange={(event) => {
									setAmount(event.target.value);
								}}
								type="number" id="amount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
						</div>
						<div className="mb-5">
							<label htmlFor="reference" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Reference</label>
							<input
								onChange={(event) => {
									setReference(event.target.value);
								}}
								type="text" id="reference" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
						</div>

						<div className="flex justify-end">

							<button
								onClick={() => {
									// TODO: receive function
									setOpenModal(false);
								}}
								type="button" className=" text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">Cancel</button>

							<button
								onClick={async () => {
									// TODOL receive function
									setOpenModal(false);
								}}
								type="button" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Transfer</button>
						</div>

					</form>

				</Modal.Body>
			</Modal >
		</>
	);
}

export default TransferModal;