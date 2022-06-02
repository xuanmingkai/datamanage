import * as React from "react";
import { connect } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const ImportContent = () => {
  return (
    <React.Fragment>
      <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexwrap: "wrap",
              "& > :not(style)": {
                ml: 23,
                width: 600,
                height: 300,
                color: "blue",
                border: '1px dashed grey',
                bgcolor: '#EDF2F7',
                // justifyContent: 'center',
                // alignItems: 'center',
                padding: '1em',
                flexDirection: 'column',
              },
            }}
          >
            <Paper elevation={3}>
              <Typography  >UpLoad Files</Typography>
              <Typography  component="p">Support Files</Typography>
              <Typography component="p">CSV, XML, JSON</Typography>
            </Paper>
          </Box>
    </React.Fragment>
  );
};

function mapStatetoProps(state) {
  return {};
}

const actionCreators = {};

const connectedImport = connect(mapStatetoProps, actionCreators)(ImportContent);
export { connectedImport as Import };
