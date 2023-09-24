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

function createRow(name, desc, price) {
  return { name, desc, price };
}

function subtotal(items) {
  return items
    .map(({ price }) => price)
    .reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow(
    "AAVE GHO",
    "The Aave Pool facilitator will all other Aave reserves. ",
    13.2,
  ),
  createRow(
    "1Inch",
    "The 1inch Developer Portal API uses API keys to authenticate requests. ",
    8.7,
  ),
  createRow(
    "Compound V3",
    "Compound III is an EVM compatible protocol that enables supplying of crypto assets as collateral in order to borrow the base asset. ",
    17.99,
  ),
];

const total = subtotal(rows);

const ConfirmTransactionScreen = ({ onClickHandler }) => {
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
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell sx={{ fontFamily: "Inconsolata", fontWeight: 600, fontSize: 16}}>{row.name}</TableCell>
                <TableCell align="right" sx={{ fontFamily: "Inconsolata", fontWeight: 600, fontSize: 16}}>
                  {row.desc}
                </TableCell>
                <TableCell align="right" sx={{ fontFamily: "Inconsolata", fontWeight: 600, fontSize: 16}}>
                  {ccyFormat(row.price)}
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell rowSpan={2} />
              <TableCell align="right" sx={{ fontFamily: "Inconsolata", fontWeight: 700, fontSize: 20}}>
                Total
              </TableCell>
              <TableCell align="right" sx={{ fontFamily: "Inconsolata", fontWeight: 600, fontSize: 16}}>
                {ccyFormat(total)}
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
