//  import React from 'react'
// import Modal from './Modal'
// import Button from './Button'
// // default props and props with values
// const Home = ({data=0,name="defaultName"}) => {
//   let a=40+ data;

//   return (
//     <div>
//         <p>This is the home page = {data} and name = {name} with a value = {a}</p>
//         <Modal data={"codinghunger"} btncomps={<Button text={"Submit"} />} />
//     </div>
     
//    )
//  }
 
//  export default Home
//  import React from 'react'
 
//  const Home = ({searchtext}) => {
//    return (
//      <div>{searchtext}</div>
//    )
//  }
 
//  export default Home
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [searchtext, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can use navigate here if needed
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={searchtext} onChange={(e) => setSearchText(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
};

export default Home; 