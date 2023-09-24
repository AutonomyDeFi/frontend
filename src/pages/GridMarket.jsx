import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import AddToolCard from "../components/AddToolCard";
import ToolCard from "../components/Card";
import SearchBar from "../components/SearchBar";
import apeLogo from "../assets/apebanner.png";
import Link from "@mui/material/Link";

import inchLogo from "../assets/logos/1inch.png";
import aaveLogo from "../assets/logos/aave.png";
import compoundLogo from "../assets/logos/compound.png";
import llamaLogo from "../assets/logos/defillama.png";
import uniswapLogo from "../assets/logos/uniswap.png";

import "./borderstyles.scss";

const logoComponents = {
  "1Inch": (
    <img
      src={inchLogo}
      alt="1inch"
      height="20"
      width="20"
    />
  ),
  AAVE: (
    <img
      src={aaveLogo}
      alt="Aave"
      height="20"
      width="20"
    />
  ),
  Compound: (
    <img
      src={compoundLogo}
      alt="Compound"
      height="20"
      width="20"
    />
  ),
  DefiLlama: (
    <img
      src={llamaLogo}
      alt="DefiLlama"
      height="20"
      width="20"
    />
  ),
  Uniswap: (
    <img
      src={uniswapLogo}
      alt="Uniswap"
      height="20"
      width="20"
    />
  ),
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const commonStyles = {
  bgcolor: "#D4E0F8 ",
  m: 1,
  border: 1,
  paddingRight: 2,
  paddingLeft: 2,
  paddingBottom: 2,
};

export const data = [
  {
    name: "Spot Ape",
    tag: "1Inch",
    blurb: "Gets price of assets",
    desc: "Using 1Inch you can get the latest USD price of an asset",
    url: "https://api.apei.dev/spot-ape/v1",
    price: "5.50",
  },
  {
    name: "Gas Ape",
    tag: "Compound",
    blurb: "Gets gas price",
    desc: "Using 1Inch you can check on the current price of gas on Ethereum",
    url: "https://api.apei.dev/gas-ape/v1",
    price: "5.50",
  },
  {
    name: "Balance Ape",
    tag: "1Inch",
    blurb: "View assets in an address",
    desc: "Using 1Inch you can view what assets an address is holding",
    url: "https://api.apei.dev/balance-ape/v1",
    price: "5.50",
  },
  {
    name: "Yield Ape",
    tag: "Compound",
    blurb: "Lend using Compound V3",
    desc: "Use compound to lend assets with the best yield to generate c-tokens",
    url: "https://api.apei.dev/yield-ape/v1",
    price: "5.50",
  },
  {
    name: "Loan Ape",
    tag: "AAVE",
    blurb: "Take out loans",
    desc: "Use Aave to take out loans denominated in GHO",
    url: "https://api.apei.dev/loan-ape/v1",
    price: "5.50",
  },
  {
    name: "Swap Ape",
    tag: "Uniswap",
    blurb: "Exchange",
    desc: "Use Uniswap to swap tokens for another",
    url: "https://api.apei.dev/swap-ape/v1",
    price: "5.50",
  },
  {
    name: "Rocket Ape",
    tag: "DefiLlama",
    blurb: "Get the current APY for RPL",
    desc: "Use DeFi Llama to get the current APY value of the RocketPool staking token",
    url: "https://api.apei.dev/rocket-ape/v1",
    price: "5.50",
  },
  {
    name: "Lido Ape",
    tag: "DefiLlama",
    blurb: "Get the current APY for STETH",
    desc: "Use DeFi Llama to get the current APY value of the Lido staking token STETH",
    url: "https://api.apei.dev/lido-ape/v1",
    price: "5.50",
  },
];

export default function GridMarket({
  onClickHandler,
}) {
  function openTool() {
    onClickHandler(1);
  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [toolName, setToolName] =
    React.useState();
  const [toolTag, setToolTag] = React.useState();
  const [toolBlurb, setToolBlurb] =
    React.useState();
  const [toolDesc, setToolDesc] =
    React.useState();
  const [toolPrice, setToolPrice] =
    React.useState();
  const [toolUrl, setToolUrl] = React.useState();

  const openModal = ({
    name,
    tag,
    blurb,
    desc,
    price,
    url,
  }) => {
    setToolName(name);
    setToolTag(tag);
    setToolBlurb(blurb);
    setToolDesc(desc);
    setToolPrice(price);
    setToolUrl(url);
    handleOpen();
  };

  const LogoComponent = toolTag
    ? logoComponents[toolTag]
    : null;

  return (
    <div>
      <div>
        <img
          src={apeLogo}
          alt="ape banner"
          width="100%"
          height="400px"
        />
      </div>

      <div
        className="marketplace"
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          maxWidth: "80%",
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
          <div
            style={{
              textAlign: "center",
              justifyContent: "center",
              paddingTop: "50px",
            }}
          ></div>
          <SearchBar onClickHandler = {onClickHandler}> </SearchBar>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              fontFamily: "Karla",
              fontWeight: 800,
              fontSize: 30,
              marginTop: 2,
              marginBottom: 1,
            }}
          >
            Market Place
          </Typography>

          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
          >
            <Grid
              item
              xs={3}
              onClick={() => openTool()}
            >
              <AddToolCard> </AddToolCard>
            </Grid>

            {data.map((tool, index) => {
              return (
                <Grid
                  item
                  xs={3}
                  onClick={() => openModal(tool)}
                >
                  <ToolCard
                    key={index}
                    {...tool}
                  />
                </Grid>
              );
            })}
          </Grid>

          <div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  sx={{
                    fontFamily: "Karla",
                    fontWeight: 800,
                    fontSize: 40,
                    marginTop: -2,
                  }}
                >
                  {toolName}
                </Typography>
                <Button
                  variant="outlined"
                  startIcon={LogoComponent}
                  sx={{
                    marginBottom: 1,
                    borderColor: "#2196F3",
                    borderRadius: "20px",
                    color: "#2196F3",
                    padding: "4px 11px", // Adjust the padding to make the button smaller
                    fontSize: "1rem", // Reduce the font size for a smaller button
                    fontFamily: "Inconsolata",
                  }}
                >
                  {toolTag}
                </Button>
                <Box
                  sx={{
                    ...commonStyles,
                    borderColor: "grey.500",
                    borderRadius: "16px",
                  }}
                >
                  <Typography
                    id="modal-modal-description"
                    sx={{
                      mt: 2,
                      fontFamily: "Inconsolata",
                      fontSize: 20,
                      fontWeight: 500,
                    }}
                  >
                    {toolDesc}
                  </Typography>
                </Box>

                <Typography
                  id="modal-modal-description"
                  sx={{
                    mt: 2,
                    fontFamily: "Inconsolata",
                    fontSize: 20,
                    fontWeight: 500,
                  }}
                >
                  <b> API URL: </b>
                  <Link
                    href="#"
                    underline="hover"
                  >
                    {toolUrl}
                  </Link>
                </Typography>
                <Typography
                  id="modal-modal-description"
                  sx={{
                    mt: 2,
                    fontFamily: "Inconsolata",
                    fontSize: 20,
                    fontWeight: 500,
                  }}
                >
                  <b>🦍</b>
                  {toolPrice}
                </Typography>
              </Box>
            </Modal>
          </div>
        </Box>
      </div>
    </div>
  );
}
