import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";


function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}



const calculateTotalPrice = (returnPayload) => {
  let total = 0;
  console.log('RETURN PAYLOAD');
  console.log(returnPayload);


  returnPayload.forEach(item => {
    console.log('INSIDE FOR EACH');
    
    if (item.hasOwnProperty('price')) {
      console.log('--- --- item.price');
      console.log(item.price);
      total += item.price;
    }
  });

  return total;
}


const ConfirmTransactionScreen = ({ onClickHandler, returnPayload }) => {
  console.log('--- --- returnPayload');
  console.log(returnPayload);
  console.log('--- --- returnPayload.price');
  console.log(returnPayload.price);
  const total = calculateTotalPrice(returnPayload);

  return (
    <div style = {{marginTop: 80, marginRight: 40, marginLeft:40}}>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 700 }}
          aria-label="spanning table"
        >
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                colSpan={3}
                sx={{ fontFamily: "Karla", fontWeight: 800, fontSize: 40}}
              >
                Model Tools
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell 
                sx={{ fontFamily: "Karla", fontWeight: 700, fontSize: 20}}
              >
                Name
                </TableCell>
              <TableCell 
               align="right" 
               sx={{ fontFamily: "Karla", fontWeight: 700, fontSize: 20}}
              
              >
                Description.
              </TableCell>
              <TableCell align="right" sx={{ fontFamily: "Karla", fontWeight: 700, fontSize: 20}}>
                Price
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {returnPayload.map((entry) => (
              <TableRow key={entry.name}>
                <TableCell sx={{ fontFamily: "Inconsolata", fontWeight: 600, fontSize: 16 }}>
                  {entry.name}
                </TableCell>
                <TableCell align="right" sx={{ fontFamily: "Inconsolata", fontWeight: 600, fontSize: 16 }}>
                  {entry.description}
                </TableCell>
                <TableCell align="right" sx={{ fontFamily: "Inconsolata", fontWeight: 600, fontSize: 16 }}>
                  {ccyFormat(entry.price)}
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell rowSpan={2} />
              <TableCell align="right" sx={{ fontFamily: "Inconsolata", fontWeight: 700, fontSize: 20 }}>
                Total
              </TableCell>
              {/* You should replace the 'total' with your actual total value */}
              <TableCell align="right" sx={{ fontFamily: "Inconsolata", fontWeight: 600, fontSize: 16 }}>
                {ccyFormat(total)} {/* Replace 'total' with your actual total */}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      
      <Button sx={{ mt: 1, fontFamily: "Inconsolata", fontWeight: 800, fontSize: 20}}
      variant="outlined" onClick={() => onClickHandler(0)} >
        Confirm Transaction
        {/* When this button is pressed, run transaction */}
      </Button>
      <Button sx={{ mt: 1, fontFamily: "Inconsolata", fontWeight: 800, fontSize: 20}}
      variant="outlined" onClick={() => onClickHandler(0)} >
        Go Back
        {/* When this button is pressed, run transaction */}
      </Button>
    </div>
  );
};
export default ConfirmTransactionScreen;
