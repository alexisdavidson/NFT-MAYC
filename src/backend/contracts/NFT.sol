// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/interfaces/IERC2981.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFT is ERC721URIStorage, Ownable, IERC2981 {
    string public uriPrefix = '';
    string public uriSuffix = '.json';

    uint public tokenCount;
    uint256 public max_supply;

    uint public amountMintPerAccount = 5;
    
    address private _recipient;

    bool public presale = true; 

    bool public whitelistMintEnabled = true; // whitelist for price reduction
    bool public whitelistFreeMintEnabled = true; // whitelist for free mint

    address[] public whitelistedAddresses;
    address[] public whitelistedAddressesFreeMint;

    bool private revealed = false;
    string private revealUrl = "ipfs://QmTfq5RWpX3k6dqbu2nGNc533YV1NhrB93imRh1WDnUhWB";

    constructor(address recipient) ERC721("Skoodle Skulls", "SKS")
    {
        max_supply = 4000;
        
        if(recipient != address(recipient)) {
            _recipient = owner();
        }
        else {
            _recipient = recipient;
        }
    }

    function mint() external payable returns(uint) {
        require(msg.value >= getPrice(), "Not enough ETH sent; check price!");
        require(balanceOf(msg.sender) < amountMintPerAccount, 'Each address may only mint x NFTs!');

        tokenCount += 1;
        _safeMint(msg.sender, tokenCount);
        _setTokenURI(tokenCount, tokenURI(tokenCount));
        return(tokenCount);
    }

    function getPrice() view public returns(uint) {
        if (msg.sender != owner()) {
            if (whitelistFreeMintEnabled == true && isWhitelistedFreeMint(msg.sender)) { // free mint for whitelisted adresses for free mint
                return 0 ether;
            }
            else if (whitelistMintEnabled == true && isWhitelisted(msg.sender)) { // 0.01 eth minting price for whitelisted adresses
                return 0.01 ether;
            }
            else {
                if (presale) { // 0.03 eth minting price for presale
                    return 0.03 ether;
                }
                else {
                    return 0.03 ether; // 0.03 eth minting price for public sale
                }
            }
        }

        return 0 ether; // No minting price for owner
    }

    function tokenURI(uint256 _tokenId) public view virtual override returns (string memory) {
        require(_exists(_tokenId), 'ERC721Metadata: URI query for nonexistent token');
        require(_tokenId >= 1 && _tokenId <= max_supply, "Metadata: URI query for nonexistent token");

        if (revealed == false) {
            return revealUrl;
        }

        string memory currentBaseURI = _baseURI();
        return bytes(currentBaseURI).length > 0
            ? string(abi.encodePacked(currentBaseURI, Strings.toString(_tokenId), uriSuffix))
            : '';
    }

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmNmBHVHMHt8kvT2VtPDjZ6sjGjyjJ5LBsr1DhnLvzTZss/";
    }
    
    function baseTokenURI() public pure returns (string memory) {
        return _baseURI();
    }

    function revealCollection() public {
        revealed = true;
    }

    // Maintain flexibility to modify royalties recipient (could also add basis points).
    function _setRoyalties(address newRecipient) internal {
        require(newRecipient != address(0), "Royalties: new recipient is the zero address");
        _recipient = newRecipient;
    }

    function setRoyalties(address newRecipient) external onlyOwner {
        _setRoyalties(newRecipient);
    }

    // EIP2981 standard royalties return.
    function royaltyInfo(uint256 _tokenId, uint256 _salePrice) external view override
        returns (address receiver, uint256 royaltyAmount)
    {
        return (_recipient, (_salePrice * 500) / 10000); // 5% Royalties
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721, IERC165) returns (bool) {
        return (interfaceId == type(ERC721URIStorage).interfaceId || interfaceId == type(IERC2981).interfaceId || super.supportsInterface(interfaceId));
    }    

    function contractURI() public pure returns (string memory) {
        return "ipfs://QmTA41cxgi62ik86g3e1m8sbgvPus7SLZwoNjFrCDUGvxq/";
    }

    function totalSupply() public view returns (uint256) {
        return tokenCount;
    }

    function setPresaleEnabled(bool _state) public onlyOwner {
        presale = _state;
    }

    function setAmountMintPerAccount(uint _amountMintPerAccount) public onlyOwner {
        amountMintPerAccount = _amountMintPerAccount;
    }


    // Whitelist for price reduction and white list for free mint

    function setWhitelistMintEnabled(bool _state) public onlyOwner {
        whitelistMintEnabled = _state;
    }

    function setWhitelistFreeMintEnabled(bool _state) public onlyOwner {
        whitelistFreeMintEnabled = _state;
    }

    function whitelistUsers(address[] calldata _users) public onlyOwner {
        delete whitelistedAddresses;
        whitelistedAddresses = _users;
    }

    function isWhitelisted(address _user) public view returns (bool) {
        for (uint i = 0; i < whitelistedAddresses.length; i++) {
            if (whitelistedAddresses[i] == _user) {
                return true;
            }
        }
        return false;
    }

    function whitelistUsersFreeMint(address[] calldata _users) public onlyOwner {
        delete whitelistedAddressesFreeMint;
        whitelistedAddressesFreeMint = _users;
    }

    function isWhitelistedFreeMint(address _user) public view returns (bool) {
        for (uint i = 0; i < whitelistedAddressesFreeMint.length; i++) {
            if (whitelistedAddressesFreeMint[i] == _user) {
                return true;
            }
        }
        return false;
    }
}