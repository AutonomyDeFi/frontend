import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Typography } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
// import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import {
  Box,
  Container,
  Paper,
} from "@mui/material";

import { createToolCall } from "../contractcalls/createTool.call";

const toolList = [
  { label: "Uniswap" },
  { label: "AAVE" },
  { label: "Compound" },
  { label: "DefiLlama" },
  { label: "1Inch" },
];

const style = {
  modal: {
    position: "absolute",
    width: 400,
    backgroundColor: "white",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
    marginTop: 7,
  },
  header: {
    textAlign: "center",
    marginBottom: "2rem",
    fontFamily: "Karla",
    fontWeight: "700",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    minWidth: "80%",
    fontFamily: "Inconsolata",
  },
  createToolButton: {
    marginTop: "1rem",
    alignSelf: "center",
    fontFamily: "Inconsolata",
    fontWeight: 500,
    fontSize: 20,
    borderRadius: 10,
    marginRight: 2,
  },
};

const CustomToolScreen = ({
  onClickHandler,
  account,
  biconomySmartAccount,
  loggedInProvider,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openResponse, setOpenResponse] =
    useState(false);
  const handleOpenResponse = () =>
    setOpenResponse(true);

  const [inputValues, setInputValues] = useState({
    name: "",
    subdomainName: "",
    description: "",
    apiUrl: "",
    tag: "",
    amount: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const createTool = async () => {
    // Package the input values into an object

    // Example:
    // const apeiCost = "10";
    // const apeiSubdomain = "offchaintest";
    // const apeiApi = "https://hello.com"
    // const apeiName = "Off Chain Test"
    // const apeiDescription = "This is an off chain test"
    // const apeiSaltString = "1"
    // const apeiTag = tags[2]} = toolPayload;

    const apeiSaltString = uuidv4();

    const toolData = {
      apeiCost: inputValues.amount,
      apeiSubdomain: inputValues.subdomainName,
      apeiApi: inputValues.apiUrl,
      apeiName: inputValues.name,
      apeiDescription: inputValues.description,
      apeiTag: inputValues.tag,
      apeiSaltString,
    };

    // Send the toolData object to the backend or perform any other action
    console.log(toolData);

    await createToolCall(
      loggedInProvider,
      biconomySmartAccount,
      toolData,
    );

    // Close the modal
    // handleOpen();
  };

  return (
    <div className="customToolScreen">
      <Container>
        <Paper elevation={3} sx={style.container}>
          <Typography
            variant="h4"
            sx={style.header}
          >
            Create Your Own Tool
          </Typography>
          <div
            className="input_addtool"
            style={style.inputContainer}
          >
            <TextField
              id="outlined-basic"
              name="name"
              label="Name"
              variant="outlined"
              value={inputValues.name}
              onChange={handleInputChange}
              prefix="🦍"
            />
            <TextField
              id="outlined-basic"
              name="subdomainName"
              label="Subdomain Name"
              variant="outlined"
              value={inputValues.subdomainName}
              onChange={handleInputChange}
            />
            <TextField
              id="outlined-multiline-flexible"
              name="description"
              label="Description"
              multiline
              maxRows={4}
              variant="outlined"
              value={inputValues.description}
              onChange={handleInputChange}
            />
            <TextField
              id="outlined-basic"
              name="apiUrl"
              label="API URL"
              variant="outlined"
              value={inputValues.apiUrl}
              onChange={handleInputChange}
            />

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Tag
              </InputLabel>
              <Select
                name="tag"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={inputValues.tag}
                label="Tag"
                onChange={handleInputChange}
              >
                {toolList.map((tool) => (
                  <MenuItem value={tool.label}>
                    {tool.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {/* <Autocomplete
              autoSelect
              disablePortal
              id="combo-box-demo"
              options={toolList}
              sx={{ width: 300 }}
              inputValue={inputValues.tag}
              value={inputValues.tag}
              limitTags={1}
              onChange={handleInputChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Tag"
                />
              )}
            /> */}
            <InputLabel htmlFor="outlined-adornment-amount">
              Amount
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              name="amount"
              onChange={handleInputChange}
              inp
              startAdornment={
                <InputAdornment position="start">
                  🦍
                </InputAdornment>
              }
              label="Amount"
            />
            <div>
              <Button
                variant="contained"
                onClick={() => onClickHandler(0)}
                sx={style.createToolButton}
              >
                Go Back
              </Button>
              <Button
                variant="contained"
                onClick={createTool}
                sx={style.createToolButton}
              >
                Create Tool
              </Button>
            </div>
          </div>

          <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style.modal}>
              <Typography
                variant="h6"
                component="h2"
                sx={{
                  fontFamily: "Karla",
                  fontWeight: 800,
                  fontSize: 30,
                }}
              >
                RESPONSE
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mt: 2,
                  fontFamily: "Karla",
                  fontWeight: 600,
                  fontSize: 25,
                }}
              >
                ENS:
              </Typography>
              <Typography
                sx={{
                  mt: 2,
                  fontFamily: "Inconsolata",
                  fontWeight: 500,
                  fontSize: 20,
                }}
              >
                apei.eth
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mt: 2,
                  fontFamily: "Karla",
                  fontWeight: 600,
                  fontSize: 25,
                }}
              >
                Transaction Hash:
              </Typography>
              <Typography
                sx={{
                  mt: 2,
                  fontFamily: "Inconsolata",
                  fontWeight: 500,
                  fontSize: 20,
                  paddingBottom: 5,
                }}
              >
                0x1111111254EEB25477B68fb85Ed929f73A960582
              </Typography>
              <div>
                <Button
                  onClick={handleClose}
                  sx={{
                    mt: 1,
                    fontFamily: "Inconsolata",
                    fontWeight: 800,
                  }}
                  variant="outlined"
                >
                  Create Another Tool
                </Button>
                <Button
                  onClick={() =>
                    onClickHandler(0)
                  }
                  sx={{
                    mt: 1,
                    fontFamily: "Inconsolata",
                    fontWeight: 800,
                    marginLeft: 2,
                  }}
                  variant="outlined"
                >
                  Home
                </Button>
              </div>
            </Box>
          </Modal>
        </Paper>
      </Container>
    </div>
  );
};

export default CustomToolScreen;
