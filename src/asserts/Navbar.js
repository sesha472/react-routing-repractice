import React from 'react'


import {Link} from "react-router-dom";


const Navbar = () => {
  return (
    <div className='Nav'>
        <ul>
       <Link to="/"><li>Home</li></Link>
       <Link to="/About"><li>About</li></Link>
       <Link to="/Contact"><li>Contact</li></Link>
       <Link to="/Pictures"><li>Pictures</li></Link>
       </ul>
      
    
    </div>
  )
}

export default Navbar
