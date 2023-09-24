import * as React from "react";
import { BiconomyPaymaster } from "@biconomy/paymaster";
import { Bundler } from "@biconomy/bundler";
import {
  BiconomySmartAccountV2,
  DEFAULT_ENTRYPOINT_ADDRESS,
} from "@biconomy/account";
import {
  ECDSAOwnershipValidationModule,
  DEFAULT_ECDSA_OWNERSHIP_MODULE,
} from "@biconomy/modules";
import { ChainId } from "@biconomy/core-types";
import { useWallets } from "@privy-io/react-auth";
import {
  Wallet,
  providers,
  ethers,
} from "ethers";

import MainScreen from "./MainScreen";

const MainScreenWrapper = ({
  account,
  isMetamaskAuth,
  handleLogout,
}) => {
  const [
    biconomySmartAccount,
    setBiconomySmartAccount,
  ] = React.useState(null);
  const [loggedInProvider, setLoggedInProvider] =
    React.useState(null);

  const [
    isSessionKeyModuleEnabled,
    setIsSessionKeyModuleEnabled,
  ] = React.useState(false);
  const [isSessionActive, setIsSessionActive] =
    React.useState(false);

  const { wallets } = useWallets();

  const createSmartAccount = async () => {
    let provider = null;
    let signer = null;

    // Depending on how the user logged in the way we get the provider is different
    const { ethereum } = window;
    console.log("*** *** *** *** *** ethereum");
    console.log(ethereum);
    console.log(
      "*** *** *** *** *** isMetamaskAuth",
    );
    console.log(isMetamaskAuth);
    if (isMetamaskAuth) {
      provider =
        new ethers.providers.Web3Provider(
          ethereum,
        );
      await provider.send(
        "eth_requestAccounts",
        [],
      );
    } else {
      provider =
        await wallets[0]?.getEthersProvider();
    }
    console.log("*** *** *** *** *** wallets");
    console.log(wallets);
    console.log("*** *** *** *** *** provider");
    console.log(provider);

    signer = provider.getSigner();
    console.log("*** *** *** *** *** signer");
    console.log(signer);

    const ownerShipModule =
      await ECDSAOwnershipValidationModule.create(
        {
          signer: signer,
        },
      );
    setLoggedInProvider(provider);

    // Set up the bundler : IBundler
    const bundler = new Bundler({
      bundlerUrl:
        process.env
          .REACT_APP_BICONOMY_BUNDLER_API_URL,
      chainId: ChainId.GOERLI, // or any supported chain of your choice
      entryPointAddress:
        DEFAULT_ENTRYPOINT_ADDRESS,
    });

    // Set up the paymaster : IPaymaster
    const paymaster = new BiconomyPaymaster({
      paymasterUrl:
        process.env
          .REACT_APP_BICONOMY_PAYMASTER_API_URL,
    });

    // Construct Biconomy smart account
    let biconomySmartAccount =
      await BiconomySmartAccountV2.create({
        chainId: ChainId.GOERLI,
        bundler: bundler,
        paymaster: paymaster,
        entryPointAddress:
          DEFAULT_ENTRYPOINT_ADDRESS,
        defaultValidationModule: ownerShipModule,
        activeValidationModule: ownerShipModule,
      });

    setBiconomySmartAccount(biconomySmartAccount);

    console.log(
      "-- --- --- biconomySmartAccount",
    );
    console.log(biconomySmartAccount);

    console.log(
      "owner: ",
      biconomySmartAccount.owner,
    );
    if (
      biconomySmartAccount &&
      "getAccountAddress" in
        biconomySmartAccount &&
      biconomySmartAccount.getAccountAddress
    ) {
      console.log(
        "biconomySmartAccount.getAccountAddress",
      );
      console.log(
        await biconomySmartAccount.getAccountAddress(),
      );
    }
  };

  React.useEffect(() => {
    createSmartAccount();
  }, []);

  React.useEffect(() => {
    if (
      biconomySmartAccount &&
      "getAccountAddress" in
        biconomySmartAccount &&
      biconomySmartAccount.getAccountAddress
    ) {
      console.log(
        ">>> >>> >>><<< <<< <<< biconomySmartAccount.getAccountAddress()",
      );
      console.log(
        biconomySmartAccount.getAccountAddress(),
      );
    }
  }, [biconomySmartAccount]);

  // React.useEffect(() => {
  //   let checkSessionModuleEnabled = async () => {
  //     if (
  //       !biconomySmartAccount ||
  //       !loggedInProvider
  //     ) {
  //       setIsSessionKeyModuleEnabled(false);
  //       return;
  //     }
  //     try {
  //       const isEnabled =
  //         await biconomySmartAccount.isModuleEnabled(
  //           DEFAULT_SESSION_KEY_MANAGER_MODULE,
  //         );
  //       console.log(
  //         "isSessionKeyModuleEnabled",
  //         isEnabled,
  //       );
  //       setIsSessionKeyModuleEnabled(isEnabled);
  //       return;
  //     } catch (err) {
  //       console.error(err);
  //       setIsSessionKeyModuleEnabled(false);
  //       return;
  //     }
  //   };
  //   checkSessionModuleEnabled();
  // }, [
  //   isSessionKeyModuleEnabled,
  //   biconomySmartAccount,
  //   loggedInProvider,
  // ]);

  // const createSession = async (enableSessionKeyModule) => {
  //   if (!biconomySmartAccount || !loggedInProvider) {
  //     alert("Please connect wallet first")
  //   }
  //   try {
  //     const erc20ModuleAddr = "0x000000D50C68705bd6897B2d17c7de32FB519fDA"
  //     // -----> setMerkle tree tx flow
  //     // create dapp side session key
  //     const sessionSigner = ethers.Wallet.createRandom();
  //     const sessionKeyEOA = await sessionSigner.getAddress();
  //     console.log("sessionKeyEOA", sessionKeyEOA);
  //     // BREWARE JUST FOR DEMO: update local storage with session key
  //     window.localStorage.setItem("sessionPKey", sessionSigner.privateKey);

  //     // generate sessionModule
  //     const sessionModule = await SessionKeyManagerModule.create({
  //       moduleAddress: DEFAULT_SESSION_KEY_MANAGER_MODULE,
  //       smartAccountAddress: address,
  //     });

  //     // cretae session key data
  //     const sessionKeyData = defaultAbiCoder.encode(
  //       ["address", "address", "address", "uint256"],
  //       [
  //         sessionKeyEOA,
  //         "0xdA5289fCAAF71d52a80A254da614a192b693e977", // erc20 token address
  //         "0x322Af0da66D00be980C7aa006377FCaaEee3BDFD", // receiver address
  //         ethers.utils.parseUnits("50".toString(), 6).toHexString(), // 50 usdc amount
  //       ]
  //     );

  //     const sessionTxData = await sessionModule.createSessionData([
  //       {
  //         validUntil: 0,
  //         validAfter: 0,
  //         sessionValidationModule: erc20ModuleAddr,
  //         sessionPublicKey: sessionKeyEOA,
  //         sessionKeyData: sessionKeyData,
  //       },
  //     ]);
  //     console.log("sessionTxData", sessionTxData);

  //     // tx to set session key
  //     const setSessiontrx = {
  //       to: DEFAULT_SESSION_KEY_MANAGER_MODULE, // session manager module address
  //       data: sessionTxData.data,
  //     };

  //     const transactionArray = [];

  //     if (enableSessionKeyModule) {
  //       // -----> enableModule session manager module
  //       const enableModuleTrx = await biconomySmartAccount.getEnableModuleData(
  //         DEFAULT_SESSION_KEY_MANAGER_MODULE
  //       );
  //       transactionArray.push(enableModuleTrx);
  //     }

  //     transactionArray.push(setSessiontrx)

  //     let partialUserOp = await biconomySmartAccount.buildUserOp(transactionArray);

  //     const userOpResponse = await biconomySmartAccount.sendUserOp(
  //       partialUserOp
  //     );
  //     console.log(`userOp Hash: ${userOpResponse.userOpHash}`);
  //     const transactionDetails = await userOpResponse.wait();
  //     console.log("txHash", transactionDetails.receipt.transactionHash);
  //     setIsSessionActive(true)
  //   } catch(err) {
  //     console.error(err)
  //   }
  // }

  return (
    <MainScreen
      account={account}
      biconomySmartAccount={biconomySmartAccount}
      isMetamaskAuth={isMetamaskAuth}
      handleLogout={handleLogout}
    />
  );
};

export default MainScreenWrapper;
