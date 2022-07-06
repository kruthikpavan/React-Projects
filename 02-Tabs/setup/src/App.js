import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import Navbuttons from './Navbuttons'
import Jobs from './Jobs'
import Data from './Data'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [jobs,setJobs]= useState(Data)
  const [order,setOrder]= useState(0)
  const value= jobs[order]
  function handleOrder(ord){
    setOrder(ord)

  }





 
  return(
    <>
    <div className='section'>
     
      <h2 className='title'>Experience</h2>
      <div className='underline'></div>
      <div className='jobs-center'>
        <Navbuttons jobs={jobs} order={order} handleOrder={handleOrder}> </Navbuttons>
        <Jobs values={value}></Jobs>

         
      </div>

    </div>
    </>
  )
}

export default App
