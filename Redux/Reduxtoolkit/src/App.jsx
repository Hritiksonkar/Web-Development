import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../CounterSlice.jsx'

function App() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.counter)
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