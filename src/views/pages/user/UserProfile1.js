import React, { useState, useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

import {
  Box,
  Breadcrumbs,
  Grid,
  Link,
  Paper,
  Stack,
  Typography,
  TextField,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import MainCard from "../../../ui-component/cards/MainCard";
import SubCard from "../../../ui-component/cards/SubCard";
import { gridSpacing } from "../../../store/constant";

const breadcrumbs = [
  <Link underline="hover" key="1" color="inherit" href="/">
    Home
  </Link>,
  <Typography key="2">Profile</Typography>,
];

const Profile1 = (user) => (
  <>
    <Box sx={{ py: 3 }}>
      <Paper variant="outlined">
        <Box sx={{ p: 2 }}>
          <Stack direction="row" justifyContent="space-between">
            <Typography>Profile</Typography>
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
              {breadcrumbs}
            </Breadcrumbs>
          </Stack>
        </Box>
      </Paper>
    </Box>
    <MainCard title="Account">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <SubCard title="Account Details">
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-read-only-input-firstName"
                  label="First Name"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={user.user.firstName || ""}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-read-only-input-lastName"
                  label="Last Name"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={user.user.lastName || ""}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-read-only-input-username"
                  label="UserName"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={user.user.username || ""}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-read-only-input-email"
                  label="Email"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={user.user.email || ""}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-read-only-input-company"
                  label="Company"
                  InputProps={{
                    readOnly: true,
                  }}
                  defaultValue=""
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-read-only-input-cellphone"
                  label="CellPhone"
                  InputProps={{
                    readOnly: true,
                  }}
                  defaultValue=""
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-read-only-input-country"
                  label="Country"
                  InputProps={{
                    readOnly: true,
                  }}
                  defaultValue=""
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-read-only-input-birthday"
                  label="Birthday"
                  InputProps={{
                    readOnly: true,
                  }}
                  defaultValue=""
                  fullWidth
                />
              </Grid>
            </Grid>
          </SubCard>
        </Grid>
      </Grid>
    </MainCard>
  </>
);

const UserProfile1 = () => {
  const localuser = JSON.parse(localStorage.getItem("user"));
  const localusers = JSON.parse(localStorage.getItem("users"));
  const [user, setUser] = useState({});
  const location = useLocation();
  const [id, setId] = useState();

  useLayoutEffect(() => {
    localusers.map((user) => {
      if (localuser.id === user.id) {
        setId(user.id);
      }
    });
  }, []);

  useEffect(() => {
    var id = location.state?.userid;
    if (!id) return;
    setId(id);
  }, [location]);

  useEffect(() => {
    if (!id) return;
    localusers.map((user) => {
      if (id === user.id) {
        var userInfo = {
          firstName: user.firstName,
          lastName: user.lastName,
          username: user.username,
          email: user.email,
        };
        setUser(userInfo);
      }
    });
  }, [id]);

  return user && <Profile1 user={user} />;
};

export default UserProfile1;
