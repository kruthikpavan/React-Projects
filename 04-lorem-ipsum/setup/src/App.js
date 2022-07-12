import React, { useState } from 'react';
import data from './data';
function App() {
  const [count,setCount]= useState(0)

  const [Data,setData]= useState([])
 
  function handleForm(){

  }
  return (

  <main>
 <div className='section-center'>
  <h3>Lorem Ipsum Generator</h3>
  <div className='lorem-form'>
    <label name="paragraph">Paragraphs:</label>
    <input 
   
    onChange={(e)=>{
     setCount(e.target.value)
      
    }}
    type='number'/>
    <button className='btn'
    onClick={()=>{
      let amount = parseInt(count);
      if(parseInt(count)<=0){
       amount=1
      }
      if(parseInt(count)>8){
       amount=8
      }
      const finalData= data.slice(0,amount)
     
      setData(finalData)

    }}
    >GENERATE</button>
  </div>

{
  Data.map(data=>{
    return(
      <>
      <div className='result'>
    <p>{data}


    </p>
  </div>
      </>
    )
    
  })
}

 </div>

  </main>
  


  
    )
}

export default App;
