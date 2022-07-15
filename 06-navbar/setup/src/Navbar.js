import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {

  const [show,setShow]= useState()
 

  
  return(
    <>
    <nav  className='nav-center'>
      <div className="nav-header">
        <h2>Pavan Kruthik</h2>
        <div className="nav-toggle"
        onClick={()=>{
          show==='show-container'?setShow(''):setShow("show-container")
   

        }}>
          <FaBars></FaBars>
          
        </div>
      </div>
<div className={`links-container ${show}`}>
      <ul className="links">
          {
            links.map(link=>{
              return <l>
                <a >{link.text}</a>
                </l>
            })
          }


      </ul>
     </div>
     <ul className='social-icons'>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      
     </nav>

     
    
    </>
  )
}

export default Navbar
