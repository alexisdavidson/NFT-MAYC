const { expect } = require("chai")

const toWei = (num) => ethers.utils.parseEther(num.toString())
const fromWei = (num) => ethers.utils.formatEther(num)

describe("NFT", async function() {
    let deployer, addr1, addr2, nft
    let URI = "ipfs://QmNmBHVHMHt8kvT2VtPDjZ6sjGjyjJ5LBsr1DhnLvzTZss/"
    let uriSuffix = '.json';

    beforeEach(async function() {
        // Get contract factories
        const NFT = await ethers.getContractFactory("NFT");
        // Get signers
        [deployer, addr1, addr2] = await ethers.getSigners();
        // Deploy contracts
        nft = await NFT.deploy('0x1e85F8DAd89e993A2c290B846F48B62B151da8af');
    });

    describe("Deployment", function() {
        it("Should track name and symbol of the nft collection", async function() {
            expect(await nft.name()).to.equal("Skoodle Skulls")
            expect(await nft.symbol()).to.equal("SKS")
        })
    })

    describe("Minting NFTs", function() {
        it("Should track each minted NFT", async function() {
            // addr1 mints an nft
            let priceInWei = await nft.connect(addr1).getPrice();
            await nft.connect(addr1).mint({ value: priceInWei });
            expect(await nft.tokenCount()).to.equal(1);
            expect(await nft.balanceOf(addr1.address)).to.equal(1);
            expect(await nft.tokenURI(1)).to.equal(URI + 1 + uriSuffix);
            // addr2 mints an nft
            priceInWei = await nft.connect(addr2).getPrice();
            await nft.connect(addr2).mint({ value: priceInWei });
            expect(await nft.tokenCount()).to.equal(2);
            expect(await nft.balanceOf(addr2.address)).to.equal(1);
            expect(await nft.tokenURI(2)).to.equal(URI + 2 + uriSuffix);
        })
    })

    describe("Get Price", function() {
        it("Should track of price depending on owner, presale, whitelist and public sale", async function() {
            // owner price 
            let priceInWei = await nft.connect(deployer).getPrice();
            expect(priceInWei).to.equal(toWei(0));
            // pre sale
            priceInWei = await nft.connect(addr2).getPrice();
            expect(priceInWei).to.equal(toWei(0.056));
            // public sale
            await nft.connect(deployer).setPresaleEnabled(false);
            priceInWei = await nft.connect(addr2).getPrice();
            expect(priceInWei).to.equal(toWei(0.065));
            // whitelist
            await nft.connect(deployer).whitelistUsers([addr1.getAddress()]);
            priceInWei = await nft.connect(addr1).getPrice();
            expect(priceInWei).to.equal(toWei(0.04));
        })
    })
})