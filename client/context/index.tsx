'use client'

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import Web3Modal from 'web3modal';
// import { ethers } from 'ethers';

interface StateContextType {
  connectWallet: () => Promise<void>;
  address: string | null;
}

const StateContext = createContext<StateContextType | undefined>(undefined);

export const StateContextProvider = ({ children }: { children: ReactNode }) => {
  const [address, setAddress] = useState<string | null>(null);

  useEffect(() => {
    const initializeWeb3Modal = async () => {
      const web3ModalInstance = new Web3Modal();
      // setWeb3Modal(web3ModalInstance);
    };
    initializeWeb3Modal();
  }, []);

  const connectWallet = async () => {


    try {
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  };

  return (
    <StateContext.Provider value={{ connectWallet, address }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = (): StateContextType => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error('useStateContext must be used within a StateContextProvider');
  }
  return context;
};
