import React from "react";
import PropTypes from "prop-types";

import { Avatar, Box, Grid, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

import SkeletonTotalCard from "../../../ui-component/cards/Skeleton/EarningCard";
import MainCard from "../../../ui-component/cards/MainCard";
import { TotalTypes } from "../../../store/constant";

import OnlineIcon from "@mui/icons-material/FlightTakeoff";
import OfflineIcon from "@mui/icons-material/FlightLand";
import TotalIcon from "@mui/icons-material/RadioButtonUnchecked";

const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  overflow: "hidden",
  position: "relative",
}));

const TotalCard = ({ isLoading, TotalType, TotalResult }) => {
  const theme = useTheme();

  return (
    <>
      {isLoading ? (
        <SkeletonTotalCard />
      ) : (
        <CardWrapper theme={theme} border={false} content={false}>
          <Box sx={{ p: 2.25 }}>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <Avatar
                  sx={{
                    ...theme.typography.smallAvavtar,
                    ...theme.typography.largeAvatar,
                    backgroundColor: theme.palette.primary[800],
                    color: "#fff",
                    mt: 1,
                  }}
                >
                  {TotalType === TotalTypes.Online && (
                    <OnlineIcon fontSize="inherit" />
                  )}
                  {TotalType === TotalTypes.Offline && (
                    <OfflineIcon fontSize="inherit" />
                  )}
                  {TotalType === TotalTypes.Total && (
                    <TotalIcon fontSize="inherit" />
                  )}
                </Avatar>
              </Grid>
              <Grid item>
                <Grid container>
                  <Grid item>
                    {TotalType === TotalTypes.Total && (
                      <Grid container direction="column">
                        <Grid item>
                          <Typography sx={{ fontSize: "1.5rem", mr: 1 }}>
                            Total
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography align="center">
                            {TotalResult.total}
                          </Typography>
                        </Grid>
                      </Grid>
                    )}
                  </Grid>
                  <Grid item>
                    {TotalType === TotalTypes.Online && (
                      <Grid container direction="column">
                        <Grid item>
                          <Typography sx={{ fontSize: "1.5rem", mr: 1 }}>
                            Online
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography align="center">
                            {TotalResult.online}
                          </Typography>
                        </Grid>
                      </Grid>
                    )}
                  </Grid>
                  <Grid item>
                    {TotalType === TotalTypes.Offline && (
                      <Grid container direction="column">
                        <Grid item>
                          <Typography sx={{ fontSize: "1.5rem", mr: 1 }}>
                            Offline
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography align="center">
                            {TotalResult.offline}
                          </Typography>
                        </Grid>
                      </Grid>
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </CardWrapper>
      )}
    </>
  );
};

TotalCard.propTypes = {
  isLoading: PropTypes.bool,
  TotalType: PropTypes.number,
  TotalResult: PropTypes.object,
};

export default TotalCard;
