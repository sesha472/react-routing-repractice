import './App.css';
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import About from './asserts/About';
import Home from './asserts/Home';
import Contact from './asserts/Contact';
import Navbar from './asserts/Navbar';

function App() {
  return (
   
<div className='App'>
   
   <Navbar/>
   <Routes>
    <Route path='/' exact Component={Home}/>
    <Route path='/About' exact Component={About}/>
    <Route path='/Contact' exact Component={Contact}/>
   </Routes>
   
   
    
   </div>
   
  );
}

export default App;
