const chartData = {
  height: 220,
  type: "donut",
  options: {
    chart: {
      id: "dof-donut",
    },
    labels: ["Domestic", "Foreign"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    plotOptions: {
      pie: {
        expandOnClick: false,
      },
    },
  },
  series: [44, 55],
};

export default chartData;
