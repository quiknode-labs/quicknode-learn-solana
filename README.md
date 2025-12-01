## `#QuicknodeLearnSolana`

This repo contains the scripts, slides and animations used in `#QuicknodeLearnSolana`, a free set of lessons for people new to blockchain to learn Solana.

Quicknode's own videos are on the [Quicknode Youtube channel](https://www.youtube.com/@QuickNode), but these notes a provided as a service for anyone else creating Solana educational content to develop their own content.

These slides were in turn adapted from [the Solana Foundation professional education repo](https://github.com/solana-developers/professional-education) but substantially rewritten including updates for Solana Kit.

We'll be adding to them more in future lessons!

## Lesson 1: Digital signatures and key pairs

### Create Wallet

```bash
npx tsx create-wallet.ts
```

### Load Wallet

```bash
npx tsx load-wallet.ts
```

## Lesson 2: Lamports and SOL

### Check Balance

```bash
npx tsx check-balance.ts <wallet_address>
```

## Lesson 3: Running transactions on Solana

### Send SOL

```bash
npx tsx send-sol.ts <recipient_address> <amount_in_lamports> <memo>
```
