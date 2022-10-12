import React from "react";
import PropTypes from "prop-types";

import { Avatar, Box, Grid, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import ComputerIcon from "@mui/icons-material/Computer";
import StorageIcon from "@mui/icons-material/Storage";
import CameraOutdoorIcon from "@mui/icons-material/CameraOutdoor";
import RouterIcon from "@mui/icons-material/Router";

import SkeletonTotalCard from "../../../ui-component/cards/Skeleton/EarningCard";
import MainCard from "../../../ui-component/cards/MainCard";

import { NodeTypes } from "../../../store/constant";

const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: "#fff",
  overflow: "hidden",
  position: "relative",
  "&>div": {
    position: "relative",
    zIndex: 5,
  },
  "&:before": {
    content: '""',
    position: "absolute",
    zIndex: 1,
    width: 210,
    height: 210,
    background: theme.palette.primary[800],
    borderRadius: "50%",
    top: -125,
    right: -15,
    opacity: 0.5,
    [theme.breakpoints.down("sm")]: {
      top: -155,
      right: -70,
    },
  },
  "&:after": {
    content: '""',
    position: "absolute",
    width: 210,
    height: 210,
    background: theme.palette.primary[800],
    borderRadius: "50%",
    zIndex: 1,
    top: -85,
    right: -95,
    [theme.breakpoints.down("sm")]: {
      top: -105,
      right: -140,
    },
  },
}));

const NodeTypeCard = ({ isLoading, NodeType }) => {
  const theme = useTheme();

  return (
    <>
      {isLoading ? (
        <SkeletonTotalCard />
      ) : (
        <CardWrapper border={false} content={false}>
          <Box sx={{ p: 2 }}>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <Avatar
                  sx={{
                    ...theme.typography.smallAvatar,
                    ...theme.typography.largeAvatar,
                    backgroundColor: theme.palette.primary[800],
                    color: "#fff",
                    mt: 1,
                  }}
                >
                  {NodeType === NodeTypes.PC && (
                    <ComputerIcon fontSize="inherit" />
                  )}
                  {NodeType === NodeTypes.Camera && (
                    <CameraOutdoorIcon fontSize="inherit" />
                  )}
                  {NodeType === NodeTypes.Router && (
                    <RouterIcon fontSize="inherit" />
                  )}
                  {NodeType === NodeTypes.Server && (
                    <StorageIcon fontSize="inherit" />
                  )}
                </Avatar>
              </Grid>
              <Grid item>
                <Grid container>
                  <Grid item>
                    {NodeType === NodeTypes.PC && (
                      <Grid container direction="column">
                        <Grid item>
                          <Typography sx={{ fontSize: "1.5rem", mr: 1 }}>
                            PC
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography align="center">108</Typography>
                        </Grid>
                      </Grid>
                    )}
                  </Grid>
                  <Grid item>
                    {NodeType === NodeTypes.Camera && (
                      <Grid container direction="column">
                        <Grid item>
                          <Typography sx={{ fontSize: "1.5rem", mr: 1 }}>
                            Camera
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography align="center">108</Typography>
                        </Grid>
                      </Grid>
                    )}
                  </Grid>
                  <Grid item>
                    {NodeType === NodeTypes.Router && (
                      <Grid container direction="column">
                        <Grid item>
                          <Typography sx={{ fontSize: "1.5rem", mr: 1 }}>
                            Router
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography align="center">21081</Typography>
                        </Grid>
                      </Grid>
                    )}
                  </Grid>
                  <Grid item>
                    {NodeType === NodeTypes.Server && (
                      <Grid container direction="column">
                        <Grid item>
                          <Typography sx={{ fontSize: "1.5rem", mr: 1 }}>
                            Server
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography align="center">1101</Typography>
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

NodeTypeCard.propTypes = {
  isLoading: PropTypes.bool,
  NodeType: PropTypes.number,
};

export default NodeTypeCard;
