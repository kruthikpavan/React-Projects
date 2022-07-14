import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({items,handleTrash,handleEdit}) => {


  return (
    items.map(item=>{
      
          return(
            <div className="grocery-item">
             <span>{item.name}</span>
             <div>
             <button className='edit-btn'
             onClick={()=>
            {
              handleEdit(item.id)
            }}
             ><FaEdit></FaEdit>  </button>
             <button className='delete-btn'
             onClick={()=>{
              handleTrash(item.id)
             }}
             ><FaTrash></FaTrash></button>
             </div>
             
            </div>
          )
    
    })
  )
 
}

export default List
