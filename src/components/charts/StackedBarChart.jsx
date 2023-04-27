import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto'
import { useEffect } from 'react';

function StackedBarChart(props) {
  // const [chartData, setChartData] = React.useState(props.chartData);
  const [chartTitle1, setChartTitle1] = React.useState(props.chartTitle1);
  const [chartTitle2, setChartTitle2] = React.useState(props.chartTitle2);
  const [chartValues1, setChartValues1] = React.useState(props.chartValues1);
  const [chartValues2, setChartValues2] = React.useState(props.chartValues2);
  const [chartLabels, setChartLabels] = React.useState(props.chartLabels);

  useEffect(() => {
    setChartTitle1(props.chartTitle1);
    setChartTitle2(props.chartTitle2);
    setChartValues1(props.chartValues1);
    setChartValues2(props.chartValues2);
    setChartLabels(props.chartLabels);
  }, [props.chartValues1, props.chartLabels, props.chartValues2, props.chartLabels]);
  
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
    datasets:[
    {
      label: chartTitle1,
      data: chartValues1
    },
    {
        label: chartTitle2,
        data: chartValues2
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

export default StackedBarChart;
