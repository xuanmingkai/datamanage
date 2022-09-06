import React, { useEffect, useState } from "react";

import { Grid } from "@mui/material";

import { gridSpacing, NodeTypes } from "../../../store/constant";
import NodeTypeChartCard from "./NodeTypeChartCard";
import TotalGrowthBarChart from "./TotalGrowthBarChart";
import PopularCard from "./PopularCard";

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <NodeTypeChartCard isLoading={isLoading} NodeType={NodeTypes.PC} />
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <NodeTypeChartCard
              isLoading={isLoading}
              NodeType={NodeTypes.Camera}
            />
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <NodeTypeChartCard
              isLoading={isLoading}
              NodeType={NodeTypes.Router}
            />
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <NodeTypeChartCard
              isLoading={isLoading}
              NodeType={NodeTypes.Server}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item md={8} xs={12}>
                <TotalGrowthBarChart isLoading={isLoading} />
              </Grid>
              <Grid item md={4} xs={12}>
                <PopularCard isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
