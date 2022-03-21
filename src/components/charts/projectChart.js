import React from 'react';
import { Bar } from 'react-chartjs-3';

const data = {
  labels: ['Project 1', 'Project 2', 'Project 3', 'Project 4', 'Project 5',],
  datasets: [
    {
      label: 'Organization',
      backgroundColor: 'rgb(196,251,188)',
      borderColor: 'rgb(196,251,188)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [0, 1, 2, 3, 4, 5, 6, 7]
    },
    {
      label: 'User',
      backgroundColor: 'rgb(251,188,188)',
      borderColor: 'rgb(251,188,188)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [0, 1, 2, 3, 4, 5, 6, 7]
    },
  ]
};

const Barchat = () => {

  return (

    <div>
      <h2 className='chart-head'>Projects</h2>
      <Bar
        data={data}
        width={100}
        height={100}
        options={{
          responsive: true,
          maintainAspectRatio: false,
        }}
      />
    </div>
  )
}
export default Barchat;
