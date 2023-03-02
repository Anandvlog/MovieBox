import React, { useState } from 'react';
import ReactApexChart from "react-apexcharts";

 const Chart = () => {
  const [state, setState]  = useState({
    series: [{
      name: "Watch time",
      data: [10,20,30,50,70,80,40,60,30,20],
    }],
    options: {
      chart: {
        type: 'area',
        height: 300,
        zoom: {
          enabled: false
        }
      },
      colors: ['#4755A8'],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      
      title: {
        text: 'Average watch time',
        align: 'left',
        style:{
          fontWeight: 500,
          fontSize: '16px',
          lineHeight: '20px',
          color:"#000",
        }
      },
      subtitle: {
        text: 'This tracks the average watch by users every month',
        align: 'left',
        style:{
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '17px',
          color:"#6a6a6a",
        }
      },
      labels: ["January", "February", "March", "April", "May","June","July","August","October","November","December"],
      xaxis: {
        type: [],
      },
      yaxis: {
        opposite: false,
        labels: {
          formatter: function (value) {
            return value + "K";
          }
        },
      },
      legend: {
        horizontalAlign: 'left'
      },
      responsive: [
        {
          breakpoint: 1024,
          options: {
                chart: {
                    height: 285,
                },
  
          }
        }, 
      ]
    },

  }

  )

  return (
   
        <ReactApexChart options={state.options} series={state.series} type="area" height={300} id="area-chart" />
  
  );
}

export default Chart;