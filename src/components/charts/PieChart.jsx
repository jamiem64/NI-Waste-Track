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
        backgroundColor: [
          'rgb(255, 0, 55)',
          'rgb(46, 159, 234)',
          'rgb(255, 190, 26)',
          'rgb(85, 195, 195)',
          'rgb(85, 0, 255)',
          'rgb(255, 128, 0)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
      },
    ],
    options: {
      legend: {
        position: 'right',
      },
    },
  };

  const options = {
    legend: {
      position: 'right',
    },
  };

  return (
    <div style={{ height: '309px' }}>
      <Pie data={data} options={options} />
    </div>
  );
}

export default PieChart;
