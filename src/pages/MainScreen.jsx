import * as React from "react";
import CustomToolScreen from "./CustomToolScreen";
import GridMarket from "./GridMarket";
import Header from "./Header";
import RunModelScreen from "./RunModelScreen";
import Footer from "./Footer";
import ConfirmTransactionScreen from "./ConfirmTransactionScreen";

const MainScreen = ({
  account,
  biconomySmartAccount,
  isMetamaskAuth,
  handleLogout,
}) => {
  const [currentPageIndex, setCurrentPageIndex] =
    React.useState(0);
  const onClick = (newState) => {
    setCurrentPageIndex(newState);
  };

  return (
    <div>
      <Header
        biconomySmartAccount={
          biconomySmartAccount
        }
        handleLogout={handleLogout}
        isMetamaskAuth={isMetamaskAuth}
      />
      {currentPageIndex == 0 ? (
        <GridMarket onClickHandler={onClick} />
      ) : currentPageIndex == 1 ? (
        <CustomToolScreen
          onClickHandler={onClick}
        />
      ) : (
        <ConfirmTransactionScreen onClickHandler={onClick} />
      )}
      <Footer />
    </div>
  );
};
export default MainScreen;
