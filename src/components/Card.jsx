import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CardActionArea } from "@mui/material";

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
          backgroundColor: "#ffffff", // Set your desired background color
          border: "1px solid #e0e0e0", // Add a subtle border for depth
          overflow: "hidden", // Hide any overflowing content
          position: "relative", // Allow absolute positioning of elements inside
          fontFamily: 'Karla',
        }}
      >
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              backgroundColor: "#EEF6FC", // Set your desired background color
              fontFamily: 'Inconsolata',
            }}
          >
            {name}
          </Typography>

          <Button
            variant="outlined"
            sx={{
              marginBottom: 2,
              borderColor: "#2196F3",
              borderRadius: "20px",
              color: "#2196F3",
              padding: "4px 12px", // Adjust the padding to make the button smaller
              fontSize: "0.8rem", // Reduce the font size for a smaller button
              fontFamily: 'Inconsolata',
            }}
          >
            {tag}
          </Button>
          <Typography
            variant="body2"
            color="text.secondary"
            sx  = {{ fontFamily: 'Inconsolata' }} 
          >
            {blurb}
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
            fontFamily: 'Inconsolata'
          }}
        >
          {/* Additional information or actions can go here */}
        </div>
      </Card>
    </CardActionArea>
  );
};

export default ToolCard;
