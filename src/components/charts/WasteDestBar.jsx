import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto'
import { useEffect } from 'react';

function WasteDestBarChart(props) {
  const [LAReuseValues, setLAReuseValues] = React.useState(props.chart2LAReuseValues);
  const [LADryRecycleValues, setLADryRecycleValues] = React.useState(props.chart2LADryRecycleValues);
  const [LACompostValues, setLACompostValues] = React.useState(props.chart2LACompostValues);
  const [LALandfillValues, setLALandfillValues] = React.useState(props.chart2LALandfillValues);
  const [HHReuseValues, setHHReuseValues] = React.useState(props.chart2HHReuseValues);
  const [HHDryRecycleValues, setHHDryRecycleValues] = React.useState(props.chart2HHDryRecycleValues);
  const [HHCompostValues, setHHCompostValues] = React.useState(props.chart2HHCompostValues);
  const [HHLandfillValues, setHHLandfillValues] = React.useState(props.chart2HHLandfillValues);
  const [chartLabels, setChartLabels] = React.useState(props.chart2Labels);

  useEffect(() => {
    setLAReuseValues(props.chart2LAReuseValues);
    setLADryRecycleValues(props.chart2LADryRecycleValues);
    setLACompostValues(props.chart2LACompostValues);
    setLALandfillValues(props.chart2LALandfillValues);
    setHHReuseValues(props.chart2HHReuseValues);
    setHHDryRecycleValues(props.chart2HHDryRecycleValues);
    setHHCompostValues(props.chart2HHCompostValues);
    setHHLandfillValues(props.chart2HHLandfillValues);
    setChartLabels(props.chart2Labels);
  }, [
    props.chart2LAReuseValues,
    props.chart2LADryRecycleValues,
    props.chart2LACompostValues,
    props.chart2LALandfillValues,
    props.chart2HHReuseValues,
    props.chart2HHDryRecycleValues,
    props.chart2HHCompostValues,
    props.chart2HHLandfillValues,
    props.chart2Labels
  ]);

  const options = {
    scales: {
      xAxes: [{
        stacked: true
      }],
      yAxes: [{
        stacked: true
      }]
    }
  }

  let data = {
    datasets: [
      {
        label: 'Reuse (LA)',
        data: LAReuseValues,
        stack: "Local Authority",
        backgroundColor: 'rgba(255, 99, 132)',
      }, 
      {
        label: 'Dry Recycle (LA)',
        data: LADryRecycleValues,
        stack: "Local Authority",
        backgroundColor: 'rgba(54, 162, 235)',
      }, 
      {
        label: 'Compost (LA)',
        data: LACompostValues,
        stack: "Local Authority",
        backgroundColor: 'rgba(255, 159, 64)',
      }, 
      {
        label: 'Landfill (LA)',
        data: LALandfillValues,
        stack: "Local Authority",
        backgroundColor: 'rgba(75, 192, 192)',
      }, 
      {
        label: 'Reuse (HH)',
        data: HHReuseValues,
        stack: "Household",
        backgroundColor: 'rgba(153, 102, 255)',
      }, 
      {
        label: 'Dry Recycle (HH)',
        data: HHDryRecycleValues,
        stack: "Household",
        backgroundColor: 'rgba(201, 203, 207)',
      }, 
      {
        label: 'Compost (HH)',
        data: HHCompostValues,
        stack: "Household",
        backgroundColor: 'rgba(255, 205, 86)',
      }, 
      {
        label: 'Landfill (HH)',
        data: HHLandfillValues,
        stack: "Household",
        backgroundColor: 'rgba(54, 235, 162)',
      }, 
      // {
      //   label: 'TEST AVERAGE',
      //   data: [30000, 30000, 30000, 30000, 30000, 30000, 30000, 30000],
      //   type: 'line',
      // }
    ],
    // labels: chartLabels
    labels: chartLabels
  }
  
  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  )
}

export default WasteDestBarChart;
