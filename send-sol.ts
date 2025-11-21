import { connect } from "solana-kite";
import { address, lamports } from "@solana/kit";
import { getTransferSolInstruction } from "@solana-program/system";
import { getAddMemoInstruction } from "@solana-program/memo";

const connection = connect("devnet");

// Load the wallet from file
const wallet = await connection.loadWalletFromFile("quicknode-learn-solana.json");

// Parse command line arguments
const recipientAddressString = process.argv[2];
const amountString = process.argv[3];
const memoString = process.argv[4];

if (!recipientAddressString || !amountString || !memoString) {
  console.error("Please provide recipient address, amount, and memo");
  console.error("Usage: npx tsx send-sol.ts <recipient_address> <amount_in_lamports> <memo>");
  process.exit(1);
}

const recipientAddress = address(recipientAddressString);

const recipientBalance = await connection.getLamportBalance(recipientAddress);

console.log(`The before balance of ${recipientAddress} is: ${recipientBalance.toLocaleString()} lamports`);

const amount = lamports(BigInt(amountString));

// Create instructions
const transferSolInstruction = getTransferSolInstruction({
  source: wallet,
  destination: recipientAddress,
  amount: amount,
});

// Add memo instruction
const addMemoInstruction = getAddMemoInstruction({
  memo: memoString,
});

// Send transaction
console.log(`Sending ${amount.toLocaleString()} lamports to ${recipientAddress} with memo: "${memoString}"...`);

const transactionSignature = await connection.sendTransactionFromInstructions({
  feePayer: wallet,
  instructions: [transferSolInstruction, addMemoInstruction],
});

const explorerLink = connection.getExplorerLink("transaction", transactionSignature);

console.log(`✅ Transaction successful!`);
console.log(`Transaction signature: ${transactionSignature}`);
console.log(`View on Solana Explorer: ${explorerLink}`);