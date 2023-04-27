import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';

function PieChart(props) {
  const [chartData, setChartData] = useState(props.chartData);
  const [chartLabels, setChartLabels] = useState(props.chartLabels);

  useEffect(() => {
    setChartData(props.chartData);
    setChartLabels(props.chartLabels);
  }, [props.chartData, props.chartLabels]);

  const data = {
    labels: chartLabels,
    datasets: [
      {
        label: '% of Landfill Waste',
        data: chartData,
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ height: '309px' }}>
      <Pie data={data} />
    </div>
  );
}

export default PieChart;
