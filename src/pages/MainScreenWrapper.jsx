import * as React from "react";
import {
  IPaymaster,
  BiconomyPaymaster,
} from "@biconomy/paymaster";
import {
  IBundler,
  Bundler,
} from "@biconomy/bundler";
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
    console.log(
      ">>> >>> >>><<< <<< <<< biconomySmartAccount.getAccountAddress()",
    );
    console.log(
      biconomySmartAccount.getAccountAddress(),
    );
  }, [biconomySmartAccount]);

  return (
    <MainScreen
      account={account}
      isMetamaskAuth={isMetamaskAuth}
      handleLogout={handleLogout}
    />
  );
};

export default MainScreenWrapper;
