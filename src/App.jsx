import * as React from "react";

import {
  PrivyProvider,
  usePrivy,
} from "@privy-io/react-auth";

import bannerImage from "./assets/ape_banner_text-white.png";
import AuthPage from "./pages/Auth.page";
import MainScreen from "./pages/MainScreen";
import "./App.css";

const App = () => {
  const [isAuthComplete, setIsAuthComplete] =
    React.useState(false);
  const [isMetamaskAuth, setIsMetamaskAuth] =
    React.useState(false);
  const [account, setAccount] =
    React.useState(null);
  const [logoutFunction, setLogoutFunction] =
    React.useState(null);

  const { logout } = usePrivy();

  // This method will be passed to the PrivyProvider as a callback
  // that runs after successful login.
  const handleLoginWithPrivy = (user) => {
    setAccount(user.id);
    setLogoutFunction(logout);
    setIsMetamaskAuth(false);
    setIsAuthComplete(true);
  };

  const handleLogout = () => {
    setAccount(null);
    logoutFunction();
    setIsMetamaskAuth(false);
    setIsAuthComplete(false);
  };

  if (isAuthComplete) {
    return (
      <MainScreen
        isMetamaskAuth={isMetamaskAuth}
        account={account}
        handleLogout={handleLogout}
      />
    );
  }

  return (
    <>
      <PrivyProvider
        appId={process.env.REACT_APP_PRIVY_APP_ID}
        onSuccess={handleLoginWithPrivy}
        config={{
          loginMethods: ["email"],
          appearance: {
            theme: "dark",
            accentColor: "#d32f2f",
            logo: bannerImage,
          },
        }}
      >
        <AuthPage
          setAccount={setAccount}
          setIsAuthComplete={setIsAuthComplete}
          setIsMetamaskAuth={setIsMetamaskAuth}
        />
      </PrivyProvider>
    </>
  );
};

export default App;
