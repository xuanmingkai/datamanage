import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid } from "@mui/material";

import { gridSpacing, NodeTypes } from "../../../store/constant";
import NodeTypeCard from "./NodeTypeCard";
import MainCard from "../../../ui-component/cards/MainCard";
import SubCard from "../../../ui-component/cards/SubCard";
import TotalCard from "./TotalCard";
import CountryCard from "./CountryCard";
import AbroadDonut from "./AbroadDonut";

import { TotalTypes } from "../../../store/constant";
import { nodeActions } from "../../../services/nodes/NodeActions";

const TaskDashboard = () => {
  const [isLoading, SetLoading] = useState(true);
  const dispatch = useDispatch();

  const nodetype = useSelector((state) => state.nodes.nodetype);
  const totalbyabroad = useSelector((state) => state.nodes.totalbyabroad);

  const [TotalResult, SetTotalResult] = useState({});

  useEffect(() => {
    SetLoading(true);

    const timer = setInterval(() => {
      dispatch(nodeActions.getNodeTotalbyAbroad);
    }, 1000 * 30);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!nodetype) return;
    console.log(nodetype);
  }, [nodetype]);

  useEffect(() => {
    if (!totalbyabroad) return;
    let total = totalbyabroad.total_data;
    let online = totalbyabroad.online_data;
    let offline = total - online;

    TotalResult.total = total;
    TotalResult.online = online;
    TotalResult.offline = offline;

    SetTotalResult(TotalResult);
    SetLoading(false);
  }, [totalbyabroad]);

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
                <TotalCard
                  isLoading={isLoading}
                  TotalType={TotalTypes.Total}
                  TotalResult={TotalResult}
                />
              </Grid>
              <Grid item md={4} sm={4} xs={12}>
                <TotalCard
                  isLoading={isLoading}
                  TotalType={TotalTypes.Online}
                  TotalResult={TotalResult}
                />
              </Grid>
              <Grid item md={4} sm={4} xs={12}>
                <TotalCard
                  isLoading={isLoading}
                  TotalType={TotalTypes.Offline}
                  TotalResult={TotalResult}
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
                <AbroadDonut isLoading={isLoading} />
              </SubCard>
            </Grid>
            <Grid item md={6} xs={12}>
              <SubCard>
                <CountryCard isLoading={isLoading} />
              </SubCard>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default TaskDashboard;
