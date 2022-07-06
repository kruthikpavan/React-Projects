import React from 'react'

export default function Navbuttons({jobs,handleOrder,order}) {
   
  return (
    <div className="btn-container">
    {jobs.map((item,index) => {
      return (
        <button
          key={item.id}
          className={`job-btn ${index===order && 'active-btn'}`}
          onClick={()=>{
            handleOrder(index)
          }}
        >
          {item.company}
        </button>
      )
    })}
  </div>
   
  )
}
