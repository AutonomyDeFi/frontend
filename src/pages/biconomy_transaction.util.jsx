import { ethers } from "ethers";
import factoryAbi from "../abi/ApeiFactory.abi";
import {
  IHybridPaymaster,
  SponsorUserOperationDto,
  PaymasterMode,
} from "@biconomy/paymaster";
import namehash from "@ensdomains/eth-ens-namehash";

const tags = [
  "1Inch",
  "AAVE",
  "Compound",
  "DefiLlama",
  "Uniswap",
];

const gasFreeTransaction = async (provider) => {
  const contract = new ethers.Contract(
    process.env.REACT_APP_APEI_FACTORY,
    factoryAbi,
    provider,
  );

  const subdomain = "offchaintest";
  // use the ethers populateTransaction method to create a raw transaction
  const minTx =
    await contract.populateTransaction.createApei(
      // [uint256] "apeiCost",
      "10",
      // [string] "apeiApi",
      "https://hello.com",
      // [string] "apeiName",
      "Off Chain Test",
      // [string] "apeiDescription",
      "This is an off chain test",
      // [string] "apeiSubdomain",
      subdomain,
      // [string] "apeiTag",
      tags[2],
      // [bytes32] "apeiSubdomainNodeHash",
      namehash.hash(`${subdomain}.apei.eth`),
      // [bytes32] "_salt",
      "1",
    );
  // .safeMint(
  //   address,
  // );
  console.log(
    "---- ---- --- ---- --- --- --- minTx.data",
  );
  console.log(minTx.data);
  // const tx1 = {
  //   to: nftAddress,
  //   data: minTx.data,
  // };
  // let userOp = await smartAccount.buildUserOp([
  //   tx1,
  // ]);
};

export default gasFreeTransaction;
