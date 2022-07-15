import React, { useEffect } from 'react'

const Alert = ({alertMessage,handleShow}) => {
useEffect(()=>{
  const timeOut= setTimeout(()=>{
handleShow(false)
  },3000)

  return ()=> {
    clearTimeout(timeOut)


  }
},[])
  return(
   
    <div className="alert">
        { alertMessage==="Item Added" && 
        
        <h5 className='alert-success'>Item Added</h5>}   

        { alertMessage==="Item Deleted" && 
        
        <h5 className='alert-danger'>Item Deleted</h5>}

{ alertMessage==="Items Cleared" && 
        
        <h5 className='alert-danger'>Items Cleared</h5>}

{ alertMessage==="Item Edited" && 
        
        <h5 className='alert-success'>Item Edited</h5>}
        { alertMessage==="Enter Item" && 
        
        <h5 className='alert-danger'>Enter Item</h5>}
      
    </div>
  )
  


  
    
  
  
}

export default Alert
