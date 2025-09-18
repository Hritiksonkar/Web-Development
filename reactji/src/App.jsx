import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './component/Home'
// import ComponentA, { ComponentB, ComponentC } from './componentA.js/componentA'
// import Button from './componentA.js/Button'

function App() {
  //   const elementA = () => {
  //     return (
  //       <h1>Hello, world!</h1>
  //     )
  //   }
  //     const elementB = () => {
  //     return (
  //       <h1>Hi my name is Hritik </h1>
  //     )
  //   }

  // let number = 1
  //   return (
  //    <div>

  //      {number % 2 === 0 ? elementA() : elementB()}

  //    </div>
  //   )
  //   return (
  //     <>
  //       <div>
  //         <h1>welcome to codinghunger</h1>
  //         <ComponentB />
  //         <ComponentA />
  //         <ComponentC />

  //       </div>
  //     </>


  //   )
  // }



//   let username = "Hritik"
//   const handleOnClick = () => {
//     alert(`youtube channel,${username}`)
//   }
//   return (
//     <>
//       <div>
//         <Button handleOnClick={handleOnClick} text={"alert"} />
//       </div>
//     </>
//   )
// }

// export default App

// prop as a component

return (
  <>
    <div>
      <Home />
    </div>
  </>
)
}
 export default App