require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const contract = require("../artifacts/src/backend/contracts/NFT.sol/NFT.json");
const contractInterface = contract.abi;

// https://hardhat.org/plugins/nomiclabs-hardhat-ethers.html#provider-object
let provider = ethers.provider;

const tokenURI = "ipfs://QmNcrxTdth414XsaxGuzm2knbhHhCDzukW8ymEmKDTrK6y";
const privateKey = `0x${process.env.REACT_APP_PRIVATE_KEY}`;
const wallet = new ethers.Wallet(privateKey);

wallet.provider = provider;
const signer = wallet.connect(provider);

// https://docs.ethers.io/v5/api/contract/contract
const nft = new ethers.Contract(
    "0x6e26Fa4719a8857df99ddd3024aE6b858386B44D",
  contractInterface,
  signer
);

const main = () => {
  console.log("Waiting 5 blocks for confirmation...");
  nft
    .mint(tokenURI)
    .then((tx) => tx.wait(5))
    .then((receipt) => console.log(`Your transaction is confirmed, its receipt is: ${receipt.transactionHash}`))

    .catch((e) => console.log("something went wrong", e));
};

main();