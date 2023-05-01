import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto'
import { useEffect } from 'react';

function CompareBarChart(props) {
  // const [chartData, setChartData] = React.useState(props.chartData);
  const [chartLabel1, setChartLabel1] = React.useState(props.chartLabel);
  const [chartLabel2, setChartLabel2] = React.useState(props.chartLabel2);
  const [chartValues1, setChartValues1] = React.useState(props.chartValues1);
  const [chartValues2, setChartValues2] = React.useState(props.chartValues2);
  const [chartLabels, setChartLabels] = React.useState(props.chartLabels);

  useEffect(() => {
    setChartLabel1(props.chartLabel1);
    setChartLabel2(props.chartLabel2);
    setChartValues1(props.chartValues1);
    setChartValues2(props.chartValues2);
    setChartLabels(props.chartLabels);
  }, [props.chartValues1, props.chartLabels, props.chartValues2, props.chartLabels]);
  
  // console.log(props.chartData);

  const options = {
    scales: {
      x: {
        stacked: false
      },
      y: {
        stacked: false
      }
    }
  }
  
  const data = {
    datasets:[
    {
      label: chartLabel1,
      data: chartValues1
    },
    {
        label: chartLabel2,
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

export default CompareBarChart;
