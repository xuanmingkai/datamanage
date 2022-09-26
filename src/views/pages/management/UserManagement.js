import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

import { userActions } from "../../../services/user/UserActions";

const TableCellWrapper = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.secondary.color,
    color: theme.palette.primary.color,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const TableRowWrapper = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const UserManagement = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState([]);
  const items = useSelector((state) => state.users.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(userActions.getAll);
  }, []);

  useEffect(() => {
    if (!items) return;
    setRows(items);
  }, [items]);

  //Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleCheckUserInfo = (id) => {
    navigate("/user/account-profile/profile1/", { state: { userid: id } });
  };

  const handleEditUser = (id) => {
    console.log("Edit User " + id);
  };

  const handleDeleteUser = (id) => {
    dispatch(userActions.delete(id));
    console.log("Delete " + id);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Stack justifyContent="center" alignItems="flex-end">
        <Button variant="contained" disableElevation href="/pages/register">
          Add User
        </Button>
      </Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <TableCellWrapper align="center">Id</TableCellWrapper>
              <TableCellWrapper align="left">UserName</TableCellWrapper>
              <TableCellWrapper align="left">firstName</TableCellWrapper>
              <TableCellWrapper align="left">lastName</TableCellWrapper>
              <TableCellWrapper align="left">Email</TableCellWrapper>
              <TableCellWrapper align="center">Status</TableCellWrapper>
              <TableCellWrapper align="center">Operation</TableCellWrapper>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows &&
              (rowsPerPage > 0
                ? rows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : rows
              ).map((row) => (
                <TableRowWrapper key={row.id}>
                  <TableCellWrapper style={{ width: 60 }} align="left">
                    {row.id}
                  </TableCellWrapper>
                  <TableCellWrapper style={{ width: 160 }} align="left">
                    {row.username}
                  </TableCellWrapper>
                  <TableCellWrapper style={{ width: 160 }} align="left">
                    {row.firstName}
                  </TableCellWrapper>
                  <TableCellWrapper style={{ width: 160 }} align="left">
                    {row.lastName}
                  </TableCellWrapper>
                  <TableCellWrapper style={{ width: 160 }} align="left">
                    {row.email}
                  </TableCellWrapper>
                  <TableCellWrapper
                    style={{ width: 160 }}
                    align="left"
                  ></TableCellWrapper>
                  <TableCellWrapper
                    style={{ width: 160 }}
                    align="left"
                    component="th"
                    scope="row"
                  >
                    <Stack direction="row" spacing={1}>
                      <Button
                        variant="contained"
                        disableElevation
                        onClick={() => {
                          handleCheckUserInfo(row.id);
                        }}
                      >
                        Info
                      </Button>
                      <Button
                        variant="contained"
                        disableElevation
                        onClick={() => {
                          handleEditUser(row.id);
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        disableElevation
                        onClick={() => {
                          handleDeleteUser(row.id);
                        }}
                      >
                        Delete
                      </Button>
                    </Stack>
                  </TableCellWrapper>
                </TableRowWrapper>
              ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={7}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default UserManagement;
