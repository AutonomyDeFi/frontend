import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import {
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";
import { useSDK } from "@metamask/sdk-react";
import { usePrivy } from "@privy-io/react-auth";

import mainLogo from "../assets/main_logo.png";
import backgroundImage1 from "../assets/apeBackground_1.png";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="#919191"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        Ape-I
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function AuthPage({
  setAccount,
  handleLogin,
  setIsMetamaskAuth,
}) {
  const { login, logout, authenticated } =
    usePrivy();

  const {
    sdk,
    connected,
    connecting,
    provider,
    chainId,
    ready,
  } = useSDK();

  const handleLoginWithPrivy = async () => {
    if (authenticated) {
      await logout();
    }
    await login();
  };

  const connectWithMetaMask = async () => {
    try {
      const accounts = await sdk?.connect();

      setAccount(accounts?.[0]);
      setIsMetamaskAuth(true);
      handleLogin();
    } catch (err) {
      console.warn(`failed to connect..`, err);
    }
  };

  console.log(`ready: ${ready}`);
  console.log(`connected: ${connected}`);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        component="main"
        sx={{ height: "100vh" }}
      >
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={12}
          sx={{
            backgroundImage: `url(${backgroundImage1})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
            alignItems: "center",
            flexDirection: "row",
            height: "100%",
            width: "100%",
          }}
        >
          <Box
            component={Paper}
            elevation={6}
            sx={{
              backgroundColor: "hsl(60,2%,12%)",
              borderRadius: 4,
              color: "#fff",
              boxShadow: 4,
              py: 3,
              px: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifySelf: "center",
            }}
          >
            <img
              src={mainLogo}
              alt="logo"
              width={200}
              height={200}
            />

            <Typography
              component="h1"
              variant="h3"
              style={{ marginTop: 50 }}
              sx = {{fontFamily: 'Inconsolata', fontSize: 50, fontWeight: 800}}
            >
              Ape In
            </Typography>
            <Typography
              component="h6"
              variant="p"
              style={{
                marginTop: 10,
                marginBottom: 30,
              }}
              sx = {{fontFamily: 'Inconsolata', fontSize: 25, fontWeight: 500}}
            >
              ...at your own risk
            </Typography>

            <Box sx={{ mt: 1 }}>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  width: "200px",
                  height: "50px",
                }}
                color="error"
                onClick={handleLoginWithPrivy}
              >
                Login With Email
              </Button>
            </Box>
            <Box>
              <Button
                fullWidth
                variant="link"
                sx={{
                  mt: 3,
                  mb: 2,
                  width: "200px",
                  height: "50px",
                }}
                color="error"
                onClick={connectWithMetaMask}
              >
                Use MetaMask
              </Button>
            </Box>
            {/* <Box>
              <Button
                fullWidth
                variant="outline"
                sx={{
                  mt: 3,
                  mb: 2,
                  width: "200px",
                  height: "50px",
                }}
                color="error"
                onClick={logout}
              >
                LOGOUT
              </Button>
            </Box> */}
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </ThemeProvider>
  );
}
