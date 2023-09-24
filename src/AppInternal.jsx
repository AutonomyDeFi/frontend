import * as React from "react";

import { useSDK } from "@metamask/sdk-react";
import { usePrivy } from "@privy-io/react-auth";

import AuthPage from "./pages/Auth.page";
import MainScreenWrapper from "./pages/MainScreenWrapper";
import "./App.css";

const AppInternal = ({
  account,
  handleLogin,
  isAuthComplete,
  isMetamaskAuth,
  setAccount,
  setIsAuthComplete,
  setIsMetamaskAuth,
}) => {
  const { sdk } = useSDK();
  const { logout } = usePrivy();

  const handleLogout = async () => {
    await sdk?.disconnect();
    await logout();

    setAccount(null);
    setIsMetamaskAuth(false);
    setIsAuthComplete(false);
  };
  console.log(
    `----- isAuthComplete: ${isAuthComplete}`,
  );

  if (isAuthComplete) {
    return (
      <MainScreenWrapper
        account={account}
        isMetamaskAuth={isMetamaskAuth}
        handleLogout={handleLogout}
      />
    );
  } else {
    return (
      <AuthPage
        setAccount={setAccount}
        handleLogin={handleLogin}
        setIsMetamaskAuth={setIsMetamaskAuth}
      />
    );
  }
};

export default AppInternal;
