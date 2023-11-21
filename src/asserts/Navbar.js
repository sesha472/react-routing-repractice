import React from 'react'
// import Home from './Home'
// import About from './About'
// import Contact from './Contact'
import {Link} from "react-router-dom";


const Navbar = () => {
  return (
    <div className='Nav'>
        <ul>
       <Link to="/"><li>Home</li></Link>
       <Link to="/About"><li>About</li></Link>
       <Link to="/Contact"><li>Contact</li></Link>
       </ul>
      
    
    </div>
  )
}

export default Navbar
