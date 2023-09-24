import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { usePrivy } from "@privy-io/react-auth";
import "./style.css";
import mainLogo from "../assets/main_logo.png";

const settings = ["Profile"];

function ResponsiveAppBar({
  biconomySmartAccountAddress,
  biconomySmartAccount,
  handleLogout,
  isMetamaskAuth,
}) {
  const { logout } = usePrivy();

  const [anchorElNav, setAnchorElNav] =
    React.useState(null);
  const [anchorElUser, setAnchorElUser] =
    React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const executeFund = async () => {
    console.log(
      "+++ +++ +++ +++ biconomySmartAccount",
    );
    console.log(biconomySmartAccount);
  };

  const executeLogout = async () => {
    if (!isMetamaskAuth) {
      await logout();
    }
    handleLogout();
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#6B96E5" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div className="logo">
            <img
              src={mainLogo}
              alt="logo"
              width={50}
              height={50}
            />
          </div>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              ml: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "VT323",
              fontWeight: 800,
              fontSize: 40,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            APE-I
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {
                  xs: "block",
                  md: "none",
                },

                fontFamily: "Karla",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#6B96E5",
                textDecoration: "none",
              }}
            ></Menu>
          </Box>
          <AdbIcon
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1,
            }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#6B96E5",
              textDecoration: "none",
            }}
          >
            Ape-I
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          ></Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0 }}
              >
                🦍
                {/* <Avatar
                  alt="🦍"
                  src="/static/images/avatar/2.jpg"
                /> */}
              </IconButton>
              {biconomySmartAccountAddress}
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem
                onClick={() => executeFund()}
              >
                <Typography textAlign="center">
                  Fund Account
                </Typography>
              </MenuItem>

              <MenuItem
                onClick={() => executeLogout()}
              >
                <Typography textAlign="center">
                  Logout
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
