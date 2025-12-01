import { connect } from "solana-kite";
import { address } from "@solana/kit";

const connection = connect("devnet");

// Get the wallet address from the command line arguments
const walletAddressString = process.argv[3];
if (!walletAddressString) {
  console.error("Please provide a wallet address as an argument");
  console.error("Usage: npx tsx check-balance.ts <wallet_address>");
  process.exit(1);
}

const walletAddress = address(walletAddressString);

const balance = await connection.getLamportBalance(walletAddress);
const explorerLink = connection.getExplorerLink("address", walletAddress);

console.log(`The balance of ${walletAddress} is: ${balance.toLocaleString()} lamports`);
console.log(`View this wallet on Solana Explorer: ${explorerLink}`);