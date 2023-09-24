import * as React from "react";
import CustomToolScreen from "./CustomToolScreen";
import GridMarket from "./GridMarket";
import Header from "./Header";
import RunModelScreen from "./RunModelScreen";
import Footer from "./Footer";

const MainScreen = () => {
  const [currentPageIndex, setCurrentPageIndex] =
    React.useState(0);
  const onClick = (newState) => {
    setCurrentPageIndex(newState);
  };

  return (
    <div>
      <Header> </Header>
          {currentPageIndex == 0 ? (
            <GridMarket
              onClickHandler={onClick}
            />
          ) : currentPageIndex == 1 ? (
            <CustomToolScreen
              onClickHandler={onClick}
            />
          ) : (
            <RunModelScreen />
          )}
      <Footer />
    </div>
  );
};
export default MainScreen;
