import React from "react";
import chartData from "./chart-data/domestic-foreign-donut";

import Chart from "react-apexcharts";

const AboardDonut = () => {
  return <Chart {...chartData} />;
};

export default AboardDonut;
