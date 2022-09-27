import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Paper, Typography } from "@mui/material";

import { ImportFilesActions } from "../../../services/import/ImportFilesActions";
import MainCard from "../../../ui-component/cards/MainCard";

const ImportFile = () => {
  const im_processing = useSelector((state) => state.importfiles.processing);
  const im_result = useSelector((state) => state.importfiles.result);
  const im_duration = useSelector((state) => state.importfiles.duration);
  const im_content = useSelector((state) => state.importfiles.content);

  const dispatch = useDispatch();

  const [files, setFiles] = React.useState([]);

  const uploadHandler = (event) => {
    const select_files = event.target.files;
    var importfiles = [];

    for (const key in select_files) {
      // eslint-disable-next-line no-prototype-builtins
      if (select_files.hasOwnProperty(key)) {
        importfiles.push(select_files[key]);
      }
    }
    setFiles(importfiles);
  };

  React.useEffect(() => {
    if (files.length > 0) {
      dispatch(ImportFilesActions.parse(files));
    }
    return () => {};
  }, [dispatch, files]);

  React.useEffect(() => {
    if (im_processing === true) {
      // console.log("Parsed file is processing...");
    }
  }, [im_processing]);

  React.useEffect(() => {
    if (im_result === true) {
      console.log("duration: " + im_duration + "ms");
      im_content.forEach((item) => {
        item.content.then((result) => {
          console.log(item.filename);
          console.log(result);
        });
      });
    }
  }, [im_result, im_duration, im_content]);

  return (
    <React.Fragment>
      <MainCard title="Import File">
        <Paper
          sx={{
            mx: "auto",
            p: 2,
            display: "flex",
            flexDirection: "column",
            minWidth: 240,
            minHeight: 240,
            maxWidth: 550,
            alignItems: "center",
            backgroundColor: "#edf2f7",
            border: 1,
            justifyContent: "center",
          }}
        >
          <Box sx={{ p: 2.5 }}>
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
          </Box>
          <Typography>Support Files.</Typography>
          <Typography>ZIP, CSV, XML.</Typography>
        </Paper>
      </MainCard>
    </React.Fragment>
  );
};

export default ImportFile;
