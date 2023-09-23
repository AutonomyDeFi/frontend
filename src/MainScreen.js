import Card from "./Card";
import SearchBar from "./SearchBar";
//import Marketplace from './Marketplace';
//import MarketGrid from './MarketGrid';
import Grid_Market from "./Grid";
import * as React from "react";
import AddToolScreen from "./AddToolScreen";
import Box from "@mui/material/Box";
import CustomToolScreen from "./CustomToolScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "./Header";
import RunModelScreen from "./RunModelScreen";

const MainScreen = ({ navigation }) => {
  const [currentPageIndex, setCurrentPageIndex] =
    React.useState(0);
  const onClick = (newState) => {
    setCurrentPageIndex(newState);
  };

  return (
    <div>
      <Header> </Header>

      <div
        class="marketplace"
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
    </div>
  );
};
export default MainScreen;
