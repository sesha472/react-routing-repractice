import React from 'react';
import { useNavigate } from 'react-router-dom';


const About = () => {
  const navigate=useNavigate();
  return (
    <div>
        <h1>this is about component</h1>
        <button onClick={()=>navigate('/Contact')}>go to contact page</button>
      
    </div>
  )
}

export default About
