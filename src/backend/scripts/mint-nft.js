require("dotenv").config()

const REACT_APP_API_URL = process.env.REACT_APP_API_URL
const REACT_APP_PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY
const REACT_APP_PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY

const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3(REACT_APP_API_URL)

const contract = require(__dirname + "/../../frontend/contractsData/NFT.json")

console.log(JSON.stringify(contract.abi))

const contractAddress = "0xB99462a753c933347cED850B1450b16ffCA7C742"

const nftContract = new web3.eth.Contract(contract.abi, contractAddress)


async function mintNFT(tokenURI) {
  console.log("Balance: " + web3.utils.fromWei(await web3.eth.getBalance(REACT_APP_PUBLIC_KEY), 'ether') + " ETH")
  const nonce = await web3.eth.getTransactionCount(REACT_APP_PUBLIC_KEY, 'latest'); //get latest nonce
  // console.log("Nonce: " + nonce)
  var gasPrice = 0;
  await web3.eth.getGasPrice().then((result) => {
    gasPrice = result
    console.log("gas price: " + web3.utils.fromWei(gasPrice, 'ether') + " ETH")
    })
//the transaction
  const tx = {
    'from': REACT_APP_PUBLIC_KEY,
    'to': contractAddress,
    'nonce': nonce,
     'gas': web3.utils.toWei("100", "gwei"),
    // 'gas': Math.floor(Math.min(21000, gasPrice) * 1.40),
    'data': nftContract.methods.mint(tokenURI).encodeABI()
  };
  
  const signPromise = web3.eth.accounts.signTransaction(tx, REACT_APP_PRIVATE_KEY)
  signPromise.then((signedTx) => {
      web3.eth.sendSignedTransaction(
        signedTx.rawTransaction,
        function (err, hash) {
          if (!err) {
            console.log(
              "The hash of your transaction is: ",
              hash,
              "\nCheck Alchemy's Mempool to view the status of your transaction!"
            )
          } else {
            console.log(
              "Something went wrong when submitting your transaction:",
              err
            )
          }
        }
      ).on('confirmation', function(confirmationNumber, receipt){ 
        console.log(receipt) })
    })
    .catch((err) => {
      console.log(" Promise failed:", err)
    })
    
}


mintNFT("ipfs://QmNcrxTdth414XsaxGuzm2knbhHhCDzukW8ymEmKDTrK6y")