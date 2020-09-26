const { Harmony } = require("@harmony-js/core");
const { ContractFactory } = require("@harmony-js/contract");
const { Wallet } = require("@harmony-js/account");
const { Messenger, HttpProvider } = require("@harmony-js/network");
const { ChainID, ChainType, hexToNumber } = require("@harmony-js/utils");

// Update these
const contractJson = require("./MyContract.json");
const CONTRACT_ADDR = "0x697B8d020A77E050ADd2fFc17DB21363Eba589b5"
const ENV = "prod";

// https://developer.aliyun.com/mirror/npm/package/@harmony-js/contract/v/0.1.35


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

const factory = new ContractFactory(mainWallet);
export const harmonyContract = factory.createContract(
  contractJson.abi,
  CONTRACT_ADDR
);

export const addWallet = (privateKey) => {
  console.log("addWallet", privateKey);
  mainWallet.addByPrivateKey(privateKey);
};



console.log("methods", harmonyContract.methods);
