import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";

import { gridSpacing, NodeTypes } from "../../../store/constant";
import NodeTypeCard from "./NodeTypeCard";
import MainCard from "../../../ui-component/cards/MainCard";
import SubCard from "../../../ui-component/cards/SubCard";
import TotalCard from "./TotalCard";
import CountryCard from "./CountryCard";
import AboardDonut from "./AboardDonut";

import { TotalTypes } from "../../../store/constant";

const TaskDashboard = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  });

  return (
    <MainCard title="TaskDashboard">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <SubCard>
            <Grid
              container
              spacing={gridSpacing}
              justifyContent="space-between"
            >
              <Grid item md={4} sm={4} xs={12}>
                <TotalCard isLoading={isLoading} TotalType={TotalTypes.Total} />
              </Grid>
              <Grid item md={4} sm={4} xs={12}>
                <TotalCard
                  isLoading={isLoading}
                  TotalType={TotalTypes.Online}
                />
              </Grid>
              <Grid item md={4} sm={4} xs={12}>
                <TotalCard
                  isLoading={isLoading}
                  TotalType={TotalTypes.Offline}
                />
              </Grid>
            </Grid>
          </SubCard>
        </Grid>
        <Grid item xs={12}>
          <SubCard>
            <Grid container spacing={gridSpacing}>
              <Grid item lg={3} md={6} sm={6} xs={12}>
                <NodeTypeCard isLoading={isLoading} NodeType={NodeTypes.PC} />
              </Grid>
              <Grid item lg={3} md={6} sm={6} xs={12}>
                <NodeTypeCard
                  isLoading={isLoading}
                  NodeType={NodeTypes.Camera}
                />
              </Grid>
              <Grid item lg={3} md={6} sm={6} xs={12}>
                <NodeTypeCard
                  isLoading={isLoading}
                  NodeType={NodeTypes.Router}
                />
              </Grid>
              <Grid item lg={3} md={6} sm={6} xs={12}>
                <NodeTypeCard
                  isLoading={isLoading}
                  NodeType={NodeTypes.Server}
                />
              </Grid>
            </Grid>
          </SubCard>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={gridSpacing}>
            <Grid item md={6} xs={12}>
              <SubCard>
                <AboardDonut />
              </SubCard>
            </Grid>
            <Grid item md={6} xs={12}>
              <SubCard>
                <CountryCard />
              </SubCard>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default TaskDashboard;
