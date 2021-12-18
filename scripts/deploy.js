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