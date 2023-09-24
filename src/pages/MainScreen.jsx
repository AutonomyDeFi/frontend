import * as React from "react";
import Box from "@mui/material/Box";

import Card from "../components/Card";
import SearchBar from "../components/SearchBar";

import AddToolScreen from "./AddToolScreen";
import CustomToolScreen from "./CustomToolScreen";
//import Marketplace from './Marketplace';
//import MarketGrid from './MarketGrid';
import Grid_Market from "./Grid";
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

      <div
        className="marketplace"
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          maxWidth: "75%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Box
          sx={{ flexGrow: 1 }}
          container
          spacing={1}
          style={{
            maxWidth: "75%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {currentPageIndex == 0 ? (
            <Grid_Market
              onClickHandler={onClick}
            />
          ) : currentPageIndex == 1 ? (
            <CustomToolScreen
              onClickHandler={onClick}
            />
          ) : (
            <RunModelScreen />
          )}
        </Box>
      </div>
      <Footer />
    </div>
  );
};
export default MainScreen;
