import React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
export default function Jobs({values}) {

   
  
  return (
    <div className='job-info'>
        <h3>{values.title}</h3>
        <h4>{values.company}</h4>
        <p className='job-date'>{values.dates}</p>
        {values.duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            )
          })}

        </div>
  )
}
