import React from 'react';
import {Radar} from 'react-chartjs-3';

const data = {
  labels: ['Passed', 'Failed', 'Skipped', 'Onprogress', 'Success', 'Completed', 'Running'],
  datasets: [
    {
      label: 'Test Scenarios',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 90, 81, 56, 55, 40]
      // data: [20, 30, 40, 50, 60, 70, 80, 90, 100]
    },
    {
      label: 'Test Steps',
      borderColor: 'rgb(30,144,255)',
      pointBackgroundColor: 'rgb(173, 216, 230)',
      pointBorderColor: 'rgb(173, 216, 230)',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: [28, 48, 40, 19, 96, 27, 100]
    }
  ]
};

const Radarchart = ()=>{

    return (
        <div >
        <h2 className='chart-head'>Test Suites</h2>
        <Radar data={data} />
      </div>
    )
}
export default Radarchart;
