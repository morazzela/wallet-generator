const { Wallet } = require("ethers")

const iterations = 100

const wallets = []
for (let i = 0; i < iterations; i++) {
    wallets.push(Wallet.createRandom())
}

console.log(wallets.map(wal => ({
    address: wal.address,
    pk: wal.privateKey
})))
