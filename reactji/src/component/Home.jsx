 import React from 'react'
import Modal from './Modal'
import Button from './Button'
// default props and props with values
const Home = ({data=0,name="defaultName"}) => {
  let a=40+ data;

  return (
    <div>
        <p>This is the home page = {data} and name = {name} with a value = {a}</p>
        <Modal data={"codinghunger"} btncomps={<Button text={"Submit"} />} />
    </div>
     
   )
 }
 
 export default Home