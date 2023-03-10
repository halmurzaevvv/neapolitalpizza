import React, { useEffect } from "react";
import { useContext } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { cartContext } from "../../Context/CartContextProvider";
import { Button } from "@mui/material";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Cart() {
  const { getCart, cart, changeProductCount, deleteCartProduct } =
    useContext(cartContext);

  useEffect(() => {
    getCart();
  }, []);

  const navigate = useNavigate();

  console.log(cart);

  return (
    <TableContainer component={Paper} className="cart-block">
      <Table
        sx={{ maxWidth: 1000 }}
        aria-label="customized table"
        className="cart-bg"
      >
        <TableBody>
          {cart?.products.map((row) => (
            <TableRow key={row.item.id}>
              <StyledTableCell align="right">
                <img src={row.item.img} alt="" width={70} height={70} />
              </StyledTableCell>
              <StyledTableCell align="right">{row.item.title}</StyledTableCell>
              <StyledTableCell align="right">{row.item.type}</StyledTableCell>
              <StyledTableCell align="right">{row.item.price}</StyledTableCell>
              <StyledTableCell align="right">
                <input
                  type="number"
                  min={1}
                  max={100}
                  value={row.count}
                  onChange={(e) =>
                    changeProductCount(e.target.value, row.item.id)
                  }
                />
              </StyledTableCell>
              <StyledTableCell align="right">{row.subPrice}</StyledTableCell>
              <StyledTableCell align="right">
                <Button onClick={() => deleteCartProduct(row.item.id)}>
                  DELETE
                </Button>
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
        <Button
          sx={{
            margin: "10px",
          }}
          variant="outlined"
          onClick={() => navigate("/order")}
        >
          BUY {cart?.totalPrice} som
        </Button>
      </Table>
    </TableContainer>
  );
}
