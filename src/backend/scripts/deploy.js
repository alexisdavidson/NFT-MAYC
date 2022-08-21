// Before mainnet deploying:
// Set recipient address at NFT.deploy('0x1E016c6466F124A5626d94b91b13A4D0FeeF9623');
// Update Contract URI metadata (contractMetaData.json) 
// Discuss initial state of presale and whitelist to avoid gas fees upon changing it

// IQ: set owner upon deploying?

async function main() {

  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  // deploy contracts here:
  const NFT = await ethers.getContractFactory("NFT");
  // const nft = await NFT.deploy([1355, 2598, 4324, 27466], "0x3E4E32B8263056D70559565BF5Dab42EEf1e46F1"); // rinkeby address as owner
  const nft = await NFT.deploy([1355, 2598, 4324, 27466], "0x3a6aE16ff1B18b457A37bFAC9f5712845E5D2c93"); // mainnet client address

  console.log("Deployer address", deployer.getAddress())
  console.log("NFT contract address", nft.address)
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
