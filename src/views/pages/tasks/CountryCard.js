import React from "react";
import PropTypes from "prop-types";

import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import SkeletonTotalCard from "../../../ui-component/cards/Skeleton/EarningCard";
import MainCard from "../../../ui-component/cards/MainCard";

const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.primary[200],
  color: "#fff",
  overflow: "hidden",
  position: "relative",
}));

const CountryCard = ({ isLoading }) => {
  return (
    <>
      {isLoading ? (
        <SkeletonTotalCard />
      ) : (
        <CardWrapper border={false} content={false}>
          <Box sx={{ p: 1 }}>
            <List dense>
              {[0, 1, 2, 3, 4, 6].map((value) => {
                const labelId1 = `list-label-${value}-1`;
                const labelId2 = `list-label-${value}-2`;

                return (
                  <ListItem disableGutters key={value}>
                    <ListItemText
                      id={labelId1}
                      primary={
                        <Typography color="primary.dark" align="left">
                          Single-line Item1: {value + 1}
                        </Typography>
                      }
                    />
                    <ListItemText
                      id={labelId2}
                      primary={
                        <Typography color="primary.dark" align="right">
                          Single-line Item2: {value + 1}
                        </Typography>
                      }
                    />
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </CardWrapper>
      )}
    </>
  );
};

CountryCard.propTypes = {
  isLoading: PropTypes.bool,
};

export default CountryCard;
