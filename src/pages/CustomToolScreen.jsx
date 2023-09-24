import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Typography } from "@mui/material";
import {
  Box,
  Container,
  Paper,
} from "@mui/material";

const toolList = [
  { name: "Uniswap"},
  { name: "AAVE"},
  { name: "Compound" },
  { name: "DefiLlama"},
  { name: "1Inch"},
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
              label="Name"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Subdomain Name"
              variant="outlined"
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Description"
              multiline
              maxRows={4}
              variant="outlined"
            />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={toolList}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Tag"
                />
              )}
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
