import { ethers } from "ethers";
import factoryAbi from "../abi/ApeiFactory.abi";
import {
  IHybridPaymaster,
  SponsorUserOperationDto,
  PaymasterMode,
} from "@biconomy/paymaster";
import namehash from "@ensdomains/eth-ens-namehash";
import {
  keccak256,
  toUtf8Bytes,
} from "ethers/lib/utils";

const tags = [
  "1Inch",
  "AAVE",
  "Compound",
  "DefiLlama",
  "Uniswap",
];

export const createToolCall = async (
  provider,
  biconomySmartAccount,

  toolPayload,
) => {
  const {
    apeiCost,
    apeiSubdomain,
    apeiApi,
    apeiName,
    apeiDescription,
    apeiSaltString,
    apeiTag,
  } = toolPayload;

  const contract = new ethers.Contract(
    process.env.REACT_APP_APEI_FACTORY,
    JSON.stringify(factoryAbi),
    provider,
  );

  const asdsa = "alphatest";
  const transactionRawData = {
    apeiCost: apeiCost,
    apeiApi: apeiApi,
    apeiName: apeiName,
    apeiDescription: apeiDescription,
    apeiSubdomain: asdsa,
    apeiTag: apeiTag,
    apeiSubdomainNodeHash: namehash.hash(
      `${asdsa}.apei.eth`,
    ),
    _salt: keccak256(toUtf8Bytes(apeiSaltString)),
  };

  console.log("---- --- --- transactionRawData");
  console.log(transactionRawData);

  // use the ethers populateTransaction method to create a raw transaction
  const minTx =
    await contract.populateTransaction.createApei(
      // [uint256] "apeiCost",
      apeiCost,
      // [string] "apeiApi",
      apeiApi,
      // [string] "apeiName",
      apeiName,
      // [string] "apeiDescription",
      apeiDescription,
      // [string] "apeiSubdomain",
      asdsa,
      // [string] "apeiTag",
      apeiTag,
      // [bytes32] "apeiSubdomainNodeHash",
      namehash.hash(`${asdsa}.apei.eth`),
      // [bytes32] "_salt",
      keccak256(toUtf8Bytes(apeiSaltString)),
    );
  // .safeMint(
  //   address,
  // );
  console.log(
    "---- ---- --- ---- --- --- --- minTx.data",
  );
  console.log(minTx.data);
  const tx1 = {
    to: process.env.REACT_APP_APEI_FACTORY,
    data: minTx.data,
  };

  // Construct the user op
  let userOp =
    await biconomySmartAccount.buildUserOp([tx1]);

  // Get the Paymaster
  const biconomyPaymaster =
    biconomySmartAccount.paymaster;
  let paymasterServiceData = {
    mode: PaymasterMode.SPONSORED,
    smartAccountInfo: {
      name: "BICONOMY",
      version: "2.0.0",
    },
  };
  const paymasterAndDataResponse =
    await biconomyPaymaster.getPaymasterAndData(
      userOp,
      paymasterServiceData,
    );
  userOp.paymasterAndData =
    paymasterAndDataResponse.paymasterAndData;

  // const beepBbboopppp =
  //   await biconomySmartAccount.handleOpsCallData(
  //     userOp,
  //   );
  // console.log(
  //   "_+_+_ _+_+_ beepBbboopppp",
  //   beepBbboopppp,
  // );

  const userOpResponse =
    await biconomySmartAccount.sendUserOp(userOp);
  console.log(
    "_+_+_ _+_+_ userOpHash",
    userOpResponse,
  );
  const { receipt } =
    await userOpResponse.wait(1);
  console.log(
    "_+_+_ _+_+_ txHash",
    receipt.transactionHash,
  );
};
