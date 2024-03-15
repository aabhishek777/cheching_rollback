import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const ChartNew = () => {
  const data = {
    labels: ['', 'Jun 22', 'Sep 22', 'Dec 22', 'Mar 23', 'Jun 23'],
    datasets: [
      {
        label: 'Sales of the week',
        data: [90, 95, 92, 85, 98, 83],
        borderColor: '#6D47EF',
        tension: 0.25,
        borderWidth: 4,
        pointRadius: 5, // Adjust the point radius
        pointHoverRadius: 5,
        pointLabel: {
          display: true,
          backgroundColor: 'rgba(255, 99, 132, 0.8)', // Background color of the label
          padding: 5, // Padding around the label
          fontStyle: 'bold', // Font style of the label
          fontSize: 12, // Font size of the label
          fontColor: 'white', // Font color of the label
          position: 'top', // Position of the label (top, bottom, center, auto)
          enabled: true, // Set to true to enable point labels
        },
      },
      {
        data: [75, 80, 78, 85, 80, 88],
        borderColor: '#53DCA2',
        tension: 0.25,
        borderWidth: 4,
        pointRadius: 5, // Adjust the point radius
        pointHoverRadius: 5,
        pointLabel: {
          display: true,
          backgroundColor: 'rgba(75, 192, 192, 0.8)', // Background color of the label
          padding: 5, // Padding around the label
          fontStyle: 'bold', // Font style of the label
          fontSize: 12, // Font size of the label
          fontColor: 'white', // Font color of the label
          position: 'top', // Position of the label (top, bottom, center, auto)
          enabled: true, // Set to true to enable point labels
        },
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,
     
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 20,
        max: 100,
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default ChartNew;
