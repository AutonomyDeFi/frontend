import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './styleicon.css'
const ToolCard = ({ name, tag, blurb }) => {
  return (
    <CardActionArea>
      <Card
        sx={{
          maxWidth: 345,
          height: 200,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center", // Center content vertically
          alignItems: "center", // Center content horizontally
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          transition: "transform 0.2s",
          borderRadius: "8px", // Add rounded corners for a modern look
          border: "1px solid #e0e0e0", // Add a subtle border for depth
          overflow: "hidden", // Hide any overflowing content
          position: "relative", // Allow absolute positioning of elements inside
          backgroundImage: "linear-gradient(to bottom, #2196F3, #0D47A1)", // Blue gradient background
          color: "#ffffff", // Text color
        }}
      >
        <CardContent >
          <div> 
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontFamily: 'Karla', fontWeight: 800, margin:'auto', fontSize: 30 }}
          >
            Add Tool
            
            <AddCircleIcon className="add-circle-icon" />

          </Typography>
          </div>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontFamily: 'Inconsolata', fontWeight: 500, fontSize: 13 }}
          >
            Interested in earning ETH? Build your own AI Agent and allow others to pay for usage.
          </Typography>
          
        </CardContent>
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            backgroundColor: "rgba(0, 0, 0, 0.3)", // Add a semi-transparent background color to the bottom section
            padding: "3px", // Add some padding to the bottom section
            color: "#ffffff", // Text color for the bottom section
            borderTopLeftRadius: "8px", // Match the card's border radius
            borderTopRightRadius: "8px", // Match the card's border radius
            fontFamily: 'Karla'
          }}
        >
          {/* Additional information or actions can go here */}
        </div>
      </Card>
    </CardActionArea>
  );
};

export default ToolCard;
