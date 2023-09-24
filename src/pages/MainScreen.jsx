import * as React from "react";

import CustomToolScreen from "./CustomToolScreen";
import GridMarket from "./GridMarket";
import Header from "./Header";
import RunModelScreen from "./RunModelScreen";
import Footer from "./Footer";
import ConfirmTransactionScreen from "./ConfirmTransactionScreen";
import Axios from 'axios';

const MainScreen = ({
  account,
  biconomySmartAccount,
  biconomySmartAccountAddress,
  loggedInProvider,
  handleLogout,
  isMetamaskAuth,
}) => {
  const [currentPageIndex, setCurrentPageIndex] =
    React.useState(0);
  const [returnPayload, setReturnPayload] =
    React.useState(null);
  const onClick = (newState) => {
    setCurrentPageIndex(newState);

  };
  const [searchCount, setSearchCount] = React.useState(0);



  const sdasd = async ({onClickHandler}) => {

    const toolsDataString = JSON.stringify({ args: [] });
    console.log(toolsDataString);
    try {
      const response = await Axios.post(
        "http://198.166.138.214:5381/create_plan/", // Add the protocol (http:// or https://) here
        { data: toolsDataString }
      );

      // console.log(response.data);
      console.log(response.data);
      const pulledData = {
        "data": [
          {
            "name": "tool.get_best_apy",
            "description": "\"Get the best apy between 2 dictionaries",
            "tags": ["defi", "tool"],
            "schema": {
              "input": { "data1": "<class 'dict'>", "data2": "<class 'dict'>" },
              "output": null,
              "default": { "data1": null, "data2": null }
            },
            "price": 99
          },
          {
            "name": "tool.defillama.rocketpool",
            "description": "\n        Connects to the Defillama API and allows the user to select which chain, project, symbol or pool they want. \n        :param params: A dictionary with optional filters (chain (first letter uppercase), project, symbol, pool).\n        :return: Filtered list of pool data.\n\n        Example input: \n        # Fetch data for a specific chain and project\n        params = {\n            \"chain\": \"Ethereum\",\n            \"project\": \"lido\",\n        }\n\n        here is an input:\n        rocket_pool_instance = RocketPool()\n        result=rocket_pool_instance.call(project=\"rocket-pool\", symbol=\"RETH\")\n        here is an example of the output that corresponds with the above input:\n        [{'apy': 3.21066, 'market': 'rocket-pool', 'asset': 'RETH', 'chain': 'Ethereum', 'timestamp': 1695494506.412746}]\n    ",
            "tags": ["defi", "tool"],
            "schema": {
              "input": {
                "chain": "<class 'str'>",
                "project": "<class 'str'>",
                "symbol": "<class 'str'>"
              },
              "output": null,
              "default": { "chain": null, "project": "rocket-pool", "symbol": null }
            },
            "price": 45
          },
          {
            "name": "tool.inch.gasprice",
            "description": "\n    Gets the token prices from the 1inch API.\n    ",
            "tags": ["defi", "tool"],
            "schema": { "input": {}, "output": null, "default": {} },
            "price": 27
          }
        ]
      }
      
      const parsedData = searchCount === 0 ?pulledData.data : JSON.parse(response.data).data
      
      //load JSON string
      // const parsedData = JSON.parse(dataShown).data;
      
      console.log(parsedData );
    // Set the parsed data in the state
        // setJsonData(parsedData);
        

      
      
      // console.log(extractedData);
      setSearchCount(1)
      setReturnPayload(parsedData)
      onClickHandler(2);

    } catch (error) {
      // Handle any errors from the POST request
      console.error("Error making POST request:", error);
    }


  }

  return (
    <div>
      <Header
        biconomySmartAccount={
          biconomySmartAccount
        }
        biconomySmartAccountAddress={
          biconomySmartAccountAddress
        }
        handleLogout={handleLogout}
        isMetamaskAuth={isMetamaskAuth}
      />
      {currentPageIndex == 0 ? (
        <GridMarket onClickHandler={onClick} sdasd={sdasd} />
      ) : currentPageIndex == 1 ? (
        <CustomToolScreen
          onClickHandler={onClick}
          account={account}
          biconomySmartAccount={
            biconomySmartAccount
          }
          loggedInProvider={loggedInProvider}
        />
      ) : (
<<<<<<< HEAD
        <ConfirmTransactionScreen returnPayload={returnPayload} onClickHandler={onClick} />
=======
        <ConfirmTransactionScreen
          onClickHandler={onClick}
        />
>>>>>>> f12cfdf (updates for completeness)
      )}
      <Footer />
    </div>
  );
};
export default MainScreen;
