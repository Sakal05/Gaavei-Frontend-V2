"use client";

import { ethers } from "ethers";

async function connectContract(
  contractAddress: string,
  contractABI: ethers.InterfaceAbi
) {
  let Contract;
  let Provider;
  let signer;
  try {
    const { ethereum } = window;
    //= checking for eth object in the window
    if (ethereum) {
      Provider = new ethers.BrowserProvider(window.ethereum);
      Provider.send("eth_requestAccounts", []);
      signer = await Provider.getSigner();
      // instantiating new connection to the contract
      Contract = new ethers.Contract(contractAddress, contractABI, signer);
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log("ERROR:", error);
  }

  return { Contract, Provider, signer };
}

export default connectContract;
