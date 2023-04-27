import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto'
import { useEffect } from 'react';

function BarChart(props) {
  // const [chartData, setChartData] = React.useState(props.chartData);
  const [chartTitle, setChartTitle] = React.useState(props.chartTitle);
  const [chartValues, setChartValues] = React.useState(props.chartValues);
  const [chartLabels, setChartLabels] = React.useState(props.chartLabels);

  useEffect(() => {
    setChartTitle(props.chartTitle);
    setChartValues(props.chartValues);
    setChartLabels(props.chartLabels);
  }, [props.chartValues, props.chartLabels]);
  
  // console.log(props.chartData);

  const options = {
    scales: {
      x: {
        stacked: true
      },
      y: {
        stacked: true
      }
    }
  }
  
  const data = {
    datasets:[{
      label: chartTitle,
      data: chartValues
    },
  ],
    labels:chartLabels
  }
  
  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  )
}

export default BarChart;
