 import React from 'react'
import Modal from './Modal'
import Button from './Button'
 
 const Home = () => {
   return (
    <div>
        <p>This is the home page</p>
        <Modal data={"codinghunger"} btncomps={<Button text={"Submit"} />} />
    </div>
     
   )
 }
 
 export default Home