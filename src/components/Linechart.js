import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

const Linechart = ({data}) => {
 

  var options =  {
    plugins:{
     legend: {
      display: false
     }
    },
    
   }


  return (
    <div className='w-[90%]'  style={{ position: "relative", margin: "auto"}} >
      <Line height="70px" data={data} options={options} />
    </div>
  )
}

export default Linechart
