import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const width_proportion = "80%";
const height_proportion = "40%";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  box: {
    width: width_proportion,
    height: height_proportion,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B8D2EC",
  },
  text: {
    fontSize: 18,
  },
});

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

const RunModelScreen = ({ onClickHandler }) => {
  return (
    <div>
      <View style={styles.screen}>
        <View style={styles.box}>
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
                  >
                    Model Tools
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">
                    Description.
                  </TableCell>
                  <TableCell align="right">
                    Price
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell>
                      {row.name}
                    </TableCell>
                    <TableCell align="right">
                      {row.desc}
                    </TableCell>
                    <TableCell align="right">
                      {ccyFormat(row.price)}
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell rowSpan={2} />
                  <TableCell align="right">
                    Total
                  </TableCell>
                  <TableCell>
                    {ccyFormat(total)}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Button
            onClick={() => onClickHandler(0)}
          >
            {" "}
            Confirm Transaction
          </Button>
        </View>
      </View>
    </div>
  );
};
export default RunModelScreen;
