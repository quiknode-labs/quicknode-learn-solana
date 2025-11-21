import { connect } from "solana-kite";

const connection = connect("devnet");

const fileName = "quicknode-learn-solana.json"

const wallet = await connection.createWallet({
	fileName,
	prefix: "mm",
});

console.log(`✅ Created wallet at address: ${wallet.address} and saved it to ${fileName}`);