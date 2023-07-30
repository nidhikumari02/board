import React from 'react'
import { Pie } from 'react-chartjs-2'  

const Piechart = ({data}) => {

    var options =  {
        plugins:{
         legend: {
          display: false
         }
        },
        animation: {
            duration: 0, // general animation time
        },

       }

  return (

    
    <div className='w-[40%] p-6' >
      <Pie width="50px" height="60px" data={data} options={options}/>
    </div>
  )
}

export default Piechart
