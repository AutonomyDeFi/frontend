import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import AddToolCard from "../components/AddToolCard";
import ToolCard from "../components/Card";
import SearchBar from "../components/SearchBar";

import "./borderstyles.scss";

const style = {
  position: "absolute",
  top: "150px",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const data = [
  {
    name: "Spot Ape",
    tag: "1Inch",
    blurb: "Gets price of assets",
    desc: "Using 1Inch you can get the latest USD price of an asset",
  },
  {
    name: "Gas Ape",
    tag: "Compound",
    blurb: "Gets gas price",
    desc: "Using 1Inch you can check on the current price of gas on Ethereum",
  },
  {
    name: "Balance Ape",
    tag: "1Inch",
    blurb: "View assets in an address",
    desc: "Using 1Inch you can view what assets an address is holding",
  },
  {
    name: "Yield Ape",
    tag: "Compound",
    blurb: "Lend using Compound V3",
    desc: "Use compound to lend assets with the best yield to generate c-tokens",
  },
  {
    name: "Loan Ape",
    tag: "AAVE",
    blurb: "Take out loans",
    desc: "Use Aave to take out loans denominated in GHO",
  },
  {
    name: "Swap Ape",
    tag: "Uniswap",
    blurb: "Exchange",
    desc: "Use Uniswap to swap tokens for another",
  },
  {
    name: "Rocket Ape",
    tag: "DeFi Llama",
    blurb: "Get the current APY for RPL",
    desc: "Use DeFi Llama to get the current APY value of the RocketPool staking token",
  },
  {
    name: "Lido Ape",
    tag: "DeFi Llama",
    blurb: "Get the current APY for STETH",
    desc: "Use DeFi Llama to get the current APY value of the Lido staking token STETH",
  },
];

export default function Grid_Market({
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

  const openModal = ({
    name,
    tag,
    blurb,
    desc,
  }) => {
    setToolName(name);
    setToolTag(tag);
    setToolBlurb(blurb);
    setToolDesc(desc);
    handleOpen();
  };

  return (
    <>
      <div
        style={{
          textAlign: "center",
          justifyContent: "center",
          paddingTop: "50px",
        }}
      >
        <div className="box">
          <div className="box-inner">
            <img
              src="./APE-I-logo.png"
              alt="logo"
              width={200}
              height={200}
              paddingTop={"20px"}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                margin: "auto",
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                fontSize: "2rem",
                color: "inherit",
                textDecoration: "none",
                display: "block", // Center horizontally
              }}
            >
              APE-I
            </Typography>
          </div>
        </div>
      </div>
      <SearchBar> </SearchBar>
      <h2> Marketplace</h2>
      <Grid container spacing={{ xs: 2, md: 3 }}>
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
              <ToolCard key={index} {...tool} />
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
            >
              {toolName}
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
            >
              {toolTag}
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
            >
              {toolDesc}
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  );
}
