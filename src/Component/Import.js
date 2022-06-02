import * as React from "react";
import { connect } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const ImportContent = () => {
  const [files, setFiles] = React.useState([]);

  const uploadHandler = (event) => {
    const select_files = event.target.files;
    console.log(select_files);
    setFiles(select_files);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Typography align="center">Upload Files</Typography>
      <Paper
        sx={{
          mx: "auto",
          p: 2,
          display: "flex",
          flexDirection: "column",
          minWidth: 240,
          minHeight: 240,
          width: 550,
          alignItems: "center",
          backgroundColor: "#edf2f7",
          border: 1,
          justifyContent: "center",
        }}
      >
        <label htmlFor="contained-button-file">
          <input
            onChange={uploadHandler}
            style={{ display: "none" }}
            id="contained-button-file"
            multiple
            type="file"
          />
          <Button variant="contained" component="span">
            Upload
          </Button>
        </label>
        <Typography>Support Files.</Typography>
        <Typography>ZIP, CSV, XML.</Typography>
      </Paper>
    </React.Fragment>
  );
};

function mapStatetoProps(state) {
  return {};
}

const actionCreators = {};

const connectedImport = connect(mapStatetoProps, actionCreators)(ImportContent);
export { connectedImport as Import };
