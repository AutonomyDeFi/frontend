import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Typography } from "@mui/material";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import {
  Box,
  Container,
  Paper,
} from "@mui/material";

const toolList = [
  { label: 'Uniswap'},
  { label: 'AAVE'},
  { label: 'Compound'},
  { label: 'DefiLlama'},
  { label: '1Inch'},
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

const CustomToolScreen = ({ onClickHandler }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 
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

  const createTool = () => {
    // Package the input values into an object
    const toolData = {
      name: inputValues.name,
      subdomainName: inputValues.subdomainName,
      description: inputValues.description,
      apiUrl: inputValues.apiUrl,
      tag: inputValues.tag,
      amount: inputValues.amount,
    };

    // Send the toolData object to the backend or perform any other action
    console.log(toolData);

    // Close the modal
    handleClose();
  };


  return (
    <div className="customToolScreen">
      <Container>
        <Paper elevation={3} sx={style.container}>
          <Typography
            variant="h4"
            sx={style.header}
          >
            Create Your Own Model
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

            <Autocomplete
              disablePortal
              id="combo-box-demo"
              name="tag"
              options={toolList}
              sx={{ width: 300 }}
              value={inputValues.tag}
              onChange={handleInputChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Tag"
                />
              )}
            />
            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
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
                onClick={handleOpen}
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
                ENS response here
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
                Transaction hash response here
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
                  // navigate.goBack()
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


