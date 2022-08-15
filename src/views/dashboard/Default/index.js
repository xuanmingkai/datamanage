import React, { useEffect, useState } from "react";

import { Grid } from "@mui/material";

import { gridSpacing, NodeTypes } from "../../../store/constant";
import NodeTypeChartCard from './NodeTypeChartCard'

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
            <NodeTypeChartCard isLoading={isLoading} NodeType={NodeTypes.PC}/>
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <NodeTypeChartCard isLoading={isLoading} NodeType={NodeTypes.Camera}/>
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <NodeTypeChartCard isLoading={isLoading} NodeType={NodeTypes.Router}/>
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <NodeTypeChartCard isLoading={isLoading} NodeType={NodeTypes.Server}/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
