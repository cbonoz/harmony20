const { Harmony } = require("@harmony-js/core");
const { ContractFactory } = require("@harmony-js/contract");
const { Wallet } = require("@harmony-js/account");
const { Messenger, HttpProvider } = require("@harmony-js/network");
const { ChainID, ChainType, hexToNumber } = require("@harmony-js/utils");

const contractJson = require("./MyContract.json");

// https://developer.aliyun.com/mirror/npm/package/@harmony-js/contract/v/0.1.35

const ENV = "prod";

const chainId = ENV === "prod" ? ChainID.HmyMainnet : ChainID.HmyTestnet;
const url =
  ENV === "prod" ? "https://api.s0.t.hmny.io" : "https://api.s0.b.hmny.io";

const hmy = new Harmony(url, {
  chainType: ChainType.Harmony,
  chainId,
});

export const mainWallet = new Wallet(
  new Messenger(new HttpProvider(url), ChainType.Harmony, chainId)
);

const options1 = { gasPrice: "0x3B9ACA00" }; // gas price in hex corresponds to 1 Gwei or 1000000000
const options2 = { gasPrice: 1000000000, gasLimit: 21000 }; // setting the default gas limit, but changing later based on estimate gas
const options3 = { data: contractJson.bytecode }; // contractConstructor needs contract bytecode to deploy

const contractAddr = "0x697B8d020A77E050ADd2fFc17DB21363Eba589b5"

const factory = new ContractFactory(mainWallet);
export const harmonyContract = factory.createContract(
  contractJson.abi,
  contractAddr
);

export const addWallet = (privateKey) => {
  console.log("addWallet", privateKey);
  mainWallet.addByPrivateKey(privateKey);
};



console.log("methods", harmonyContract.methods);
