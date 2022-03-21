import React from 'react';
import {HorizontalBar} from 'react-chartjs-3'


const dataHorBar = {
    labels: ['TestingOne', 'TestingTwo', 'TestingThree','TestingFour', 'TestingFive',],
    datasets: [
      {
        label: 'Test Suites',
        backgroundColor: ['rgb(196,251,188)','rgb(128, 255, 0)','rgb(0, 255, 255)','rgb(255, 255, 0)','rgb(251,188,188)'],
        borderColor: ['rgb(196,251,188)','rgb(128, 255, 0)','rgb(0, 255, 255)','rgb(255, 255, 0)','rgb(251,188,188)'],
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
      },
    ]
  };
 
const HorBarchat = ()=>{

  return(

    <div>
    <h2 className='chart-head'>Organization Test Suites</h2>
    <HorizontalBar data={dataHorBar} />
  </div>
  )
}
export default HorBarchat;
