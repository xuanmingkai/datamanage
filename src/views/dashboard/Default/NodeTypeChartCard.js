import React, { useState } from "react";
import PropTypes from 'prop-types'

import { styled, useTheme } from "@mui/material/styles";
import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ComputerIcon from "@mui/icons-material/Computer";
import StorageIcon from "@mui/icons-material/Storage";
import CameraOutdoorIcon from "@mui/icons-material/CameraOutdoor"
import RouterIcon from '@mui/icons-material/Router'

import Chart from 'react-apexcharts'

import MainCard from "../../../ui-component/cards/MainCard";
import SkeletonTotalOrderCard from "../../../ui-component/cards/Skeleton/EarningCard";
import ChartDataMonth from './chart-data/total-order-month-line-chart'
import ChartDataYear from './chart-data/total-order-year-line-chart'
import { NodeTypes } from '../../../store/constant'

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

const TotalOrderLineChartCard = ({ isLoading, NodeType }) => {
  const theme = useTheme();

  const [timeValue, setTimeValue] = useState(false);
  const handleChangeTime = (event, newValue) => {
    setTimeValue(newValue);
  };

  return (
    <>
      {isLoading ? (
        <SkeletonTotalOrderCard />
      ) : (
        <CardWrapper border={false} content={false}>
          <Box sx={{ p: 2.25 }}>
            <Grid container direction="column">
              <Grid item>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Avatar
                      variant="rounded"
                      sx={{
                        ...theme.typography.commonAvatar,
                        ...theme.typography.largeAvatar,
                        backgroundColor: theme.palette.primary[800],
                        color: "#fff",
                        mt: 1,
                      }}
                    >
                      {NodeType === NodeTypes.PC && (<ComputerIcon fontSize="inherit" />)}
                      {NodeType === NodeTypes.Camera && (<CameraOutdoorIcon fontSize="inherit" />)}
                      {NodeType === NodeTypes.Router && (<RouterIcon fontSize="inherit" />)}
                      {NodeType === NodeTypes.Server && (<StorageIcon fontSize="inherit" />)}
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Button
                      disableElevation
                      variant={timeValue ? "contained" : "text"}
                      size="small"
                      sx={{ color: "inherit" }}
                      onClick={(e) => handleChangeTime(e, true)}
                    >
                      Month
                    </Button>
                    <Button
                      disableElevation
                      variant={!timeValue ? "contained" : "text"}
                      size="small"
                      sx={{ color: "inherit" }}
                      onClick={(e) => handleChangeTime(e, false)}
                    >
                      Year
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ mb: 0.75 }}>
                <Grid container alignItems="center">
                  <Grid item xs={6}>
                    <Grid container alignItems="center">
                      <Grid item>
                        {timeValue ? (
                          <Typography
                            sx={{
                              fontSize: "1.5rem",
                              fontWeight: 500,
                              mr: 1,
                              mt: 1.75,
                              mb: 0.75,
                            }}
                          >
                            108
                          </Typography>
                        ) : (
                          <Typography
                            sx={{
                              fontSize: "1.5rem",
                              fontWeight: 500,
                              mr: 1,
                              mt: 1.75,
                              mb: 0.75,
                            }}
                          >
                            196143
                          </Typography>
                        )}
                      </Grid>
                      <Grid item>
                        <Avatar
                          sx={{
                            ...theme.typography.smallAvatar,
                            cursor: 'pointer',
                            backgroundColor: theme.palette.primary[200],
                            color: theme.palette.primary.dark
                          }}
                        >
                          <ArrowDownwardIcon fontSize="inherit" sx={{transform: 'rotate3d(1, 1, 1, 45deg)' }} />
                        </Avatar>
                      </Grid>
                      <Grid item xs={12}>
                        {NodeType === NodeTypes.PC && (<Typography
                          sx={{
                            fontSize: '0.85rem',
                            fontWeight: 500,
                            color: theme.palette.primary[200]
                          }}
                        >PC Total</Typography>)}
                        {NodeType === NodeTypes.Camera && (<Typography
                          sx={{
                            fontSize: '0.85rem',
                            fontWeight: 500,
                            color: theme.palette.primary[200]
                          }}
                        >Camera Total</Typography>)}
                        {NodeType === NodeTypes.Router && (<Typography
                          sx={{
                            fontSize: '0.85rem',
                            fontWeight: 500,
                            color: theme.palette.primary[200]
                          }}
                        >Router Total</Typography>)}
                        {NodeType === NodeTypes.Server && (<Typography
                          sx={{
                            fontSize: '0.85rem',
                            fontWeight: 500,
                            color: theme.palette.primary[200]
                          }}
                        >Server Total</Typography>)}
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    {timeValue ? <Chart {...ChartDataMonth} />: <Chart {...ChartDataYear} />}
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

TotalOrderLineChartCard.propTypes = {
  isLoading: PropTypes.bool,
  NodeType: PropTypes.number
}

export default TotalOrderLineChartCard;
