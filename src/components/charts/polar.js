import React from 'react';
import {Polar} from 'react-chartjs-3';

const data = {
  datasets: [{
    data: [
      11,
      16,
      7,
      3,
      14
    ],
    backgroundColor: [
      '#FF6384',
      '#4BC0C0',
      '#FFCE56',
      '#E7E9ED',
      '#36A2EB'
    ],
    label: 'My dataset'
  }],
  labels: [
    'Examples',
    'TestSuites',
    'Scenarios',
    'Features',
    'TestSteps'
  ]
};

const Polarchat = ()=>{
 
    return (
      <div >
        <h2 className='chart-head'>Features</h2>
        <Polar data={data} />
      </div>
    );
  };
  export default Polarchat;