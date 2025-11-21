import { connect } from "solana-kite";

const connection = connect("devnet");

const fileName = "quicknode-learn-solana.json";

const wallet = await connection.loadWalletFromFile(fileName);

const balance = await connection.getLamportBalance(wallet.address);

const explorerLink = connection.getExplorerLink("address", wallet.address);

console.log(`✅ Loaded wallet from ${fileName}!`)
console.log(`The address is: ${wallet.address}`);
console.log(`The explorer link is: ${explorerLink}`);

console.log(`The balance of ${wallet.address} is: ${balance.toLocaleString()} lamports`);  