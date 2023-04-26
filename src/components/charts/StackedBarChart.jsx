import React from 'react';
import { Bar } from 'react-chartjs-2';
// import { Chart, CategoryScale, LinearScale } from 'chart.js';

import Chart from 'chart.js/auto'
// import { CategoryScale, Chart, LinearScale } from "chart.js";

// Chart.register(CategoryScale);
// Chart.register(LinearScale);

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
    label: 'Recycled',
    data: [56.7, 49.2, 44.3]
  },
  {
    label: 'Landfill',
    data: [44.3, 50.8, 55.7]
  }],
  labels:['Antrim and Newtownabbey', 'Ards and North Down', 'Armagh, Banbridge and Craigavon']
}

const StackedBarChart = () => (
  <Bar data={data} options={options} />
);

export default StackedBarChart;
