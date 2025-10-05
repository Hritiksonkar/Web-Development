import './App.css'
import { useCounterStore } from './counterStore'

function App() {
  const { count, increment, decrement, incrementByX } = useCounterStore()

  const handleMusicbtn = () => {
    decrement()
  }
  const handlePlusBtn = () => {
    increment()
  }
  const handleIncrementByX = () => {
    incrementByX(5)
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', gap: '20px' }}>
      <div style={{ padding: '20px', border: '1px solid', cursor: 'pointer' }} onClick={handleMusicbtn}>
        <h1>-</h1>
      </div>
      <h1 style={{ margin: 0 }}>{count}</h1>
      <div style={{ padding: '20px', border: '1px solid', cursor: 'pointer' }} onClick={handlePlusBtn}>
        <h1>+</h1>
      </div>
      <button onClick={handleIncrementByX}>Increase by 5</button>
    </div>
  )
}

export default App
