import React from "react";
import { useSelector } from "react-redux";

import { Button, Box, Divider, Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import AnimateButton from "../../../../ui-component/extended/AnimateButton";
import Google from "../../../../assets/images/icons/social-google.svg";
const RegisterGoogle = () => {
  const theme = useTheme();
  const customization = useSelector((state) => state.customization);
  const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));

  const googleHandler = async () => {
    console.error("Register");
  };

  return (
    <>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item xs={12}>
          <AnimateButton>
            <Button
              variant="outlined"
              fullWidth
              onClick={googleHandler}
              size="large"
              sx={{
                color: "grey.700",
                backgroundColor: theme.palette.grey[50],
                borderColor: theme.palette.grey[100],
              }}
            >
              <Box sx={{ mr: { xs: 1, sm: 2, width: 20 } }}>
                <img
                  src={Google}
                  alt="google"
                  width={16}
                  height={16}
                  style={{ marginRight: matchDownSM ? 8 : 16 }}
                ></img>
              </Box>
              Sign up with Google
            </Button>
          </AnimateButton>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ alignItems: "center", display: "flex" }}>
            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
            <Button
              variant="outlined"
              sx={{
                cursor: "unset",
                m: 2,
                px: 7,
                py: 0.5,
                borderColor: `${theme.palette.grey[100]} !important`,
                color: `${theme.palette.grey[900]} !important`,
                fontWeight: 500,
                borderRaidus: `${customization.borderRadius}px`,
              }}
              disableRipple
              disabled
            >
              OR
            </Button>
            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default RegisterGoogle;
