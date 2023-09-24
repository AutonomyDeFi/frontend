import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Axios from 'axios';


export default function CustomizedInputBase({ onClickHandler, sdasd }) {
  const handleEnterPress = async (event) => {
    if (event.key === "Enter") {
      // Prevent the default form submission behavior
      event.preventDefault();
      

      // // Get the user's input from the InputBase element
      // const userInput = event.target.value;
      // console.log(userInput);

      // const dataString = JSON.stringify({ args: [userInput] });
      // console.log(dataString);
      // try {
      //   // Make an Axios POST request with the user's input
      //   const response = await Axios.post(
      //     "http://198.166.138.214:5381/talk/", // Add the protocol (http:// or https://) here
      //     { data: dataString }
      //   );

      //   // Handle the response as needed
      //   console.log("POST request response:", response.data);

      //   // Trigger the onClickHandler(2) event (if needed)
      //   onClickHandler(2);
      // } catch (error) {
      //   // Handle any errors from the POST request
      //   console.error("Error making POST request:", error);
      // }
        
        
        
        
      await sdasd({onClickHandler})
        



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
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1, fontFamily: "Inconsolata", fontWeight: 800 }}
        placeholder="What do you want your AI agent to do?"
        inputProps={{ "aria-label": "search" }}
        onKeyDown={handleEnterPress}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
