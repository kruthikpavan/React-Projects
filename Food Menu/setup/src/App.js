import React, { useState } from 'react';
import Menu from './Menu';

import items from './data';
import Category from './Category';

function App() {
  console.log("app rendered");
  const [Items,setItems]= useState(items)
  const categories= ['all',...new Set(items.map(item=>item.category))]
  function filterItems(category){
    console.log(category);
    if(category=='all'){
      setItems(items)
    }
    else{
      console.log(items.filter(item=>item.category==category));
      setItems(items.filter(item=>item.category==category))
    }



  }
  
  return (
    <>
    <div className='menu'>
    <div className='title'>
      <h2>Our Menu</h2>
      <div className='underline'></div>
    </div>

    <div className='btn-container'>
<Category categories={categories} filterItems={filterItems} > </Category>
    </div>

    

    <div className='section-center'>
      {Items.map(item=>{
   
          return(
            <Menu key={item.id} {...item}></Menu>
  
          )
        
      
      })
}
    </div>
    </div>
   

   
    </>
  )
}

export default App;
