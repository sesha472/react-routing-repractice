import React, { useState } from "react";

//task is updating the obj by using click function
const Home = () => {
  let obj1={
    firstname:"sesha",
    lastname:"sai",
    address:{
      firstline:"test1",
      secondline:"test2"
    }

  }
  const [data, setdata] = useState(obj1);

  const updateSecondLine = () => {
    setdata({
      ...data,address: {
        ...data.address,
        secondline: "test3"
      }
    });
  };

  const  updateSecondLine2=()=>{
    setdata(obj1);
  }
  

  
  return (
    <div>

      <h1>This is Home componnet</h1>
      <h2>{data.firstname}</h2>
      <h2>{data.address.secondline}</h2>
      <button onClick={updateSecondLine}>clikto change</button>
      <button onClick={updateSecondLine2}>clikto change</button>

      

    </div>
  )
}

export default Home


// import React, { useState } from 'react';

// const Home = () => {
//   // Step 1: Define state variable
//   const [obj, setObj] = useState({
//     firstname: "sesha",
//     lastname: "sai",
//     address: {
//       firstline: "test1",
//       secondline: "test2"
//     }
//   });

//   // Step 2: Create a function to update the secondline property value
//   const updateSecondLine = () => {
//     setObj({
//       ...obj,
//       address: {
//         ...obj.address,
//         secondline: "test3"
//       }
//     });
//   };

//   return (
//     <div>
//       <p>First Name: {obj.firstname}</p>
//       <p>Last Name: {obj.lastname}</p>
//       <p>First Line: {obj.address.firstline}</p>
//       <p>Second Line: {obj.address.secondline}</p>

//       {/* Step 3: Attach the function to the onClick event of the button */}
//       <button onClick={updateSecondLine}>Update Second Line</button>
//     </div>
//   );
// };

// export default Home;
