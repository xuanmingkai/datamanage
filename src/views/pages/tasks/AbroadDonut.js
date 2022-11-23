import React from "react";
import PropTypes from "prop-types";
import Chart from "react-apexcharts";

import chartData from "./chart-data/domestic-foreign-donut";
import SkeletonAbroadCard from "../../../ui-component/cards/Skeleton/EarningCard";

const AboardDonut = (isLoading) => {
  return <>{isLoading ? <SkeletonAbroadCard /> : <Chart {...chartData} />}</>;
};

AboardDonut.propTypes = {
  isLoading: PropTypes.bool,
};

export default AboardDonut;
