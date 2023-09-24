import * as React from "react";
import { PrivyProvider } from "@privy-io/react-auth";

import bannerImage from "./assets/ape_banner_text-white.png";
import AuthPage from "./pages/Auth.page";
import MainScreen from "./pages/MainScreen";
import "./App.css";

const App = () => {
  // This method will be passed to the PrivyProvider as a callback
  // that runs after successful login.
  const handleLogin = (user) => {
    console.log(`User ${user.id} logged in!`);
  };

  return (
    <>
      <PrivyProvider
        appId={process.env.REACT_APP_PRIVY_APP_ID}
        onSuccess={handleLogin}
        config={{
          loginMethods: ["email"],
          appearance: {
            theme: "dark",
            accentColor: "#d32f2f",
            logo: bannerImage,
          },
        }}
      >
        <AuthPage />
      </PrivyProvider>
    </>
  );

  // return <MainScreen />;
};

export default App;
