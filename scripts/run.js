const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ["warhammer titan", "levi", "mikasa","colossal titan","armoured titan"],       // Names
    ["https://imgur.com/gallery/UsO62AY.gif", // Images
    "https://imgur.com/pg2TaOX.gif", 
    "https://imgur.com/a/ywDQCP7.gif",
    "https://imgur.com/eLEyl7L.gif",
    "https://imgur.com/a/3cb3qde.gif"],
    [2000, 200, 300,4000,1500],                    // HP values
    [4000,10000,8000,5000,4500],                       // Attack damage values
    "eren yeager",
    "https://imgur.com/thBaura.gif",
    30000,
    50
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

let txn;
// We only have three characters.
// an NFT w/ the character at index 2 of our array.
txn = await gameContract.mintCharacterNFT(0);
await txn.wait();
txn = await gameContract.mintCharacterNFT(1);
await txn.wait();
txn = await gameContract.mintCharacterNFT(2);
await txn.wait();
txn = await gameContract.mintCharacterNFT(3);
await txn.wait();

txn = await gameContract.attackBoss();
await txn.wait();
txn = await gameContract.attackBoss();
await txn.wait();
txn = await gameContract.attackBoss();
await txn.wait();

// Get the value of the NFT's URI.
let returnedTokenUri = await gameContract.tokenURI(1);
console.log("Token URI:", returnedTokenUri);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();