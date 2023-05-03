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
  const [chartAvg1, setChartAvg1] = React.useState(props.chartAvg1);
  const [chartAvg2, setChartAvg2] = React.useState(props.chartAvg2);
  const [chartLabels, setChartLabels] = React.useState(props.chartLabels);

  useEffect(() => {
    setChartLabel1(props.chartLabel1);
    setChartLabel2(props.chartLabel2);
    setChartValues1(props.chartValues1);
    setChartValues2(props.chartValues2);
    setChartAvg1(props.chartAvg1);
    setChartAvg2(props.chartAvg2);
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
      data: chartValues1,
      backgroundColor: 'rgba(255, 99, 132)',
      order: 2
    },
    {
        label: chartLabel2,
        data: chartValues2,
        backgroundColor: 'rgba(54, 162, 235)',
        order: 2
    },
    {
        label: "Average " + chartLabel1,
        data: chartAvg1,
        type: 'line',
        // borderColor: 'rgba(255, 99, 132, 0.8)',
        borderColor: 'rgba(255, 105, 135, 0.8)',
        pointRadius: 0,
        order: 1,
    },
    {
        label: "Average " + chartLabel2,
        data: chartAvg2,
        type: 'line',
        borderColor: 'rgba(50, 160, 230, 0.8)',
        pointRadius: 0,
        order: 1
    }
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
