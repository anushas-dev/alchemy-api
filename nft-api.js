const Network = require("alchemy-sdk").Network;
const Alchemy = require("alchemy-sdk").Alchemy;

const settings = {
  apiKey: process.env.ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(settings);


// Print total NFT count returned in the response:
async function getNFTs() {
  const nftsForOwner = await alchemy.nft.getNftsForOwner("vitalik.eth");
console.log("number of NFTs found:", nftsForOwner.totalCount);
console.log("...");

// Print contract address and tokenId for each NFT:
for (const nft of nftsForOwner.ownedNfts) {
  console.log("===");
  console.log("contract address:", nft.contract.address);
  console.log("token ID:", nft.tokenId);
}
console.log("===");

// Fetch metadata for a particular NFT:
console.log("fetching metadata for a Crypto Coven NFT...");
const response = await alchemy.nft.getNftMetadata(
  "0x5180db8F5c931aaE63c74266b211F580155ecac8",
  "1590"
);
console.log("NFT Description:", response.description);

}

getNFTs();