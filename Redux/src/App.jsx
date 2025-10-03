import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Homepage from './Component/Homepage'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from './redux/CounterAction'

function App() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.count)
  const handleMusic = () => {
    dispatch(decrement())
  }

  const handleVideo = () => {
    dispatch(increment())
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', gap: '50px' }}>
      <div style={{ padding: '20px', border: '1px solid' }} onClick={handleMusic}>-</div>
      {data}
      <div style={{ padding: '20px', border: '1px solid' }} onClick={handleVideo}>+</div>
    </div>
  )
}

export default App
