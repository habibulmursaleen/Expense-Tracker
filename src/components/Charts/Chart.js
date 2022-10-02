import React from "react";
import ChartBar from "./ChartBar";

import "../Expenses.css";

const Chart = (props) => {
    const dataPointValue = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMax = Math.max(...dataPointValue)
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
