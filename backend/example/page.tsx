'use client';
import { useState } from "react";
import { useWallet } from "./hooks/useWallet";
import { walletStore } from "./storage/storage";
import { WalletContractV4 } from "@ton/ton";
import CreateTx from "./components/CreateTx";


export default function Home() {
  const wallet = useWallet;

  const [connection, setConnection] = useState<WalletContractV4 | null>();
  const [password, setPassword] = useState<string>("");

  const connect = async (pwd: string) => {
    wallet.connect(pwd).then((_connection) => {
      console.log(_connection?.address)
      setConnection(_connection);
    });

  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {(connection) ? <div>
        <CreateTx />
      </div> :
        <div className='flex flex-col gap-12 justify-center items-center h-full w-full'>
          <div className="mb-5">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input
              onChange={(e) => {
                console.log(e.target.value);
                setPassword(e.target.value);
              }}
              type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
          </div>

          <button
            onClick={async () => {
              await connect(password);
            }}
            type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Connect</button>
        </div>
      }
    </main >
  );
}
