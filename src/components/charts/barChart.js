import React from 'react';
import {Bar} from 'react-chartjs-3';

const data = {
  labels: ['Org1', 'Org2', 'Org3', 'Org4', 'Org5',],
  datasets: [
    {
      label: 'Projects',
      barPercentage: 0.5,
      barThickness: 12,
      backgroundColor: 'rgb(255,105,180)',
      borderColor: 'rgb(255,105,180)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [0, 1, 2, 3, 4, 5, 6, 7, 8]
    },
    {
      label: 'User',
      barPercentage: 0.5,
      barThickness: 12,
      backgroundColor: 'rgb(0,255,127)',
      borderColor: 'rgb(0,255,127)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [0, 1, 2, 3, 4, 5, 6, 7, 8]
    },
  ],
//   scales: {
//     xAxes: [{
//         barPercentage: 1,
//         categoryPercentage: 1
//     }],
//     yAxes: [{
//     barPercentage: 1,
//         categoryPercentage: 1,
//         ticks: {
//             beginAtZero: true
//         }
//     }]
// },
// tooltips: {

// }

};

const BarchatTwo = ()=>{

  return(

    <div>
    <h2 className='chart-head'>Organization</h2>
    <Bar
      data={data}
      width={100}
      height={200}
      options={{
        maintainAspectRatio: false
      }}
    />
  </div>
  )
}
export default BarchatTwo;
