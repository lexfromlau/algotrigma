import React from "react";
import Chart from "chart.js/auto";
import * as Styled from "./MixedChart.style";

export interface Dataset {
  label: string;
  data: number[];
}

export interface ChartData {
  labels: string[];
  datasets: Dataset[];
}

interface MixedChartProps {
  chartData: ChartData;
}

const BAR_CHART_COLOR = "rgb(201, 203, 207)";

export const MixedChart: React.FC<MixedChartProps> = ({ chartData }) => {
  const chartRef = React.useRef<Chart | null>(null); // Ref to store the chart instance

  const { labels, datasets: barChartData } = chartData;

  const retrieveBarColor = () =>
    barChartData.flatMap(({ data }) => data).flatMap((_) => BAR_CHART_COLOR);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Time Series",
        data: barChartData.flatMap(({ data }) => data),
        backgroundColor: retrieveBarColor(),
        borderColor: retrieveBarColor(),
        borderWidth: 1,
      },
    ],
  };

  React.useEffect(() => {
    const canvas = document.getElementById("mixed-chart") as HTMLCanvasElement; // Type assertion
    const ctx = canvas?.getContext("2d");

    if (ctx) {
      // If a chart instance already exists, destroy it first
      if (chartRef.current) {
        chartRef.current.destroy();
      }

      // Create a new chart
      chartRef.current = new Chart(ctx, {
        type: "bar",
        data,
      });
    } else {
      console.error("Canvas context is not available.");
    }

    // Cleanup the chart when the component unmounts
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []); // Empty array ensures it runs once when the component mounts

  return (
    <Styled.Canvas id="mixed-chart" width="400" height="200"></Styled.Canvas>
  );
};
