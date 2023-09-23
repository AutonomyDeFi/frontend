import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import {
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import Box from "@mui/material/Box";

const commonStyles = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  m: 1,
  border: 1,
  maxWidth: 300,
  minHeight: 120, // Adjusted the minHeight
  display: "flex",
  alignItems: "center", // Center content vertically
  justifyContent: "center", // Center content horizontally
  borderRadius: "16px",
};

const theme = createTheme({
  typography: {
    addTool: {
      fontSize: "2rem",
      color: "white",
    },
  },
});
// const ToolCard = ({ name, tags, description }) => {
//   return (
//     <CardActionArea>
//       <Card
//         sx={{
//           maxWidth: 345,
//           minHeight: 170,
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'centern',
//           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//           transition: 'transform 0.2s',
//           '&:hover': {
//             transform: 'scale(1.02)',
//           },
//         //   background: rgb(10,5,97),
//         //   background: linear-gradient('209deg', 'rgba(10,5,97,1) 0%', 'rgba(9,9,121,1) 35%', 'rgba(56,129,173,1) 100%),

//           background: 'linear-gradient(to right bottom, #0a0561, #3881ad)',
//           border: '3px solid #white', // Add a border for a card-like feel
//         }}
//       >

//         <CardContent>
//         <Box sx={{
//             ...commonStyles,
//              borderRadius: '16px',
//              borderColor: 'white',
//              backgroundColor: '00',
//             // opacity: [0.9, 0.8, 0.9],
//             '&:hover': {
//             backgroundColor: 'primary.main',
//             opacity: [0.9, 0.8, 0.7],
//         },}}>
//         <ThemeProvider theme={theme}>
//           <Typography gutterBottom variant="addTool" component="div">
//             Add Tool
//           </Typography>
//           </ThemeProvider>
//           </Box>
//         </CardContent>
//       </Card>
//     </CardActionArea>
//   );
// };

// export default ToolCard;

const ToolCard = ({ name, tag, blurb }) => {
  return (
    <CardActionArea>
      <Card
        sx={{
          maxWidth: 345,
          minHeight: 170,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow:
            "0 4px 8px rgba(0, 0, 0, 0.2)",
          transition: "transform 0.2s",
          borderRadius: "8px", // Add rounded corners for a modern look
          border: "1px solid #e0e0e0", // Add a subtle border for depth
          overflow: "hidden", // Hide any overflowing content
          position: "relative", // Allow absolute positioning of elements inside
          backgroundColor: "",
        }}
      >
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
          >
            Add New Tool
          </Typography>
        </CardContent>
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            backgroundColor: "#2196F3", // Add a background color to the bottom section
            padding: "3px", // Add some padding to the bottom section
            color: "#ffffff", // Set text color for the bottom section
            borderTopLeftRadius: "8px", // Match the card's border radius
            borderTopRightRadius: "8px", // Match the card's border radius
          }}
        >
          {/* Additional information or actions can go here */}
        </div>
      </Card>
    </CardActionArea>
  );
};

export default ToolCard;
