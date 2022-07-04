import React from 'react'

export default function Category({categories,filterItems}) {
  return (
    <>
    {
        categories.map(category=>{
            return <button className='filter-btn'
            onClick={()=>
            {
                filterItems(category)
            }}
   
            >{category}</button>
        })
    }


   
    
    </>
  )
}
