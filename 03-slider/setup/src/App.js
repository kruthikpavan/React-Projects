import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
import people from './data';
function App() {
  const [index,setIndex]= useState(0)
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);
  useEffect(()=>{
    const interval= setInterval(()=>{
setIndex(index+1)
    },5000)
    return () => {
      clearInterval(interval);
    };

  },[index])
  return (
    <>
    <div className='section'>
      <div className='title'>

        <h2>  <span>/</span> Reviews</h2>
      </div>
    
        <div className='section-center'>
          { 
            data.map((person,personIndex)=>{
              let position= 'nextSlide'
              if(personIndex===index){
               position = 'activeSlide'
              }
              if(personIndex===index-1 || (index === 0 && personIndex === people.length - 1)){
                position= 'lastSlide'
              }
              


              return (<>
              <article className={position}>
          <img className='person-img'  src={person.image}></img>
            <div className='title'>
              
            <h4>  <span>{person.name}</span></h4></div>
            <p className="title">{person.title}</p>
              <p className="text">{person.quote}</p>
              <FaQuoteRight className="icon" />
          </article>
              
              </>)
            })
          }
          
          <button
          onClick={()=>{
          
              setIndex(index-1)
      
          }}
          className='prev'
          
          
          >{<FiChevronLeft></FiChevronLeft>}</button>

          <button className='next' 
             onClick={()=>{
        
                setIndex(index+1)
              
              
          
  
            }}
          >{<FiChevronRight></FiChevronRight>}</button>

           
        </div>




    
    </div>

    
    </>
  )
}

export default App;
