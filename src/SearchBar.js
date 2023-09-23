import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

export default function CustomizedInputBase({
  navigation,
}) {
  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      // Call your function to pop up another screen or perform an action here
      // For example: openAnotherScreen();

      console.log("Enter key pressed");
    }
  };
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 700,
      }}
      style={{
        maxWidth: "75%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <IconButton
        sx={{ p: "10px" }}
        aria-label="menu"
      >
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="What do you want your AI agent to do?"
        inputProps={{ "aria-label": "search" }}
        onKeyDown={handleEnterPress} // Attach the event handler here
      />
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
