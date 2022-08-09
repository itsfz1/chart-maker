/**
 * Line Chart
 * @param {Array} data - Array of data points, y-axis
 * @param {Array} categories - Array of categories , x-axis
 * @param {string} title - Title of the chart, string
 * @param {string} theme - Theme of the chart, string
 */

import ReactApexChart from "react-apexcharts"

const Linechart = ({
  data = [10, 41, 35, 51, 49, 62, 69, 91, 148],
  categories = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  title = "Product Trends by Month",
  theme = "palette1",
}) => {
  const state = {
    series: [
      {
        name: "Desktops",
        data,
      },
    ],
    options: {
      chart: {
        height: 600,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: title,
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories,
      },
      theme: {
        palette: theme, // upto palette10
      },
    },
  }
  return <ReactApexChart options={state.options} series={state.series} type="line" height={600} />
}

export default Linechart
