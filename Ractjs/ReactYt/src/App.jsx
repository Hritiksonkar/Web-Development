// import React from 'react'

// import { useState } from "react"

// const App = () => {
//     const name = 'sarthiak'
//     const abc = () => {
//         console.log(name)
//     }


//     return (
//         <div><h1>uernameis {name} </h1>
//             <button onClick={abc}>changebutton</button>
//         </div>
//     )
// }

// export default App



// import React from 'react'

// const  App = () => {
//     let  user ="sarthiak"

//     const chageuser  = () => {
//         console.log(user)
//         user ="aryan "
//         console.log(user)
//     }

//   return (
//     <div>
//         <h1>username is {user}</h1>
//         <button onClick={chageuser}>change user </button>
//     </div>
//   )
// }

// export default App



// const App = () => {
//     const [a, setA] = useState(10)
//     const ChangeA = () => {
//       console.log("chal gya ");
//       setA(60)
//     }


//   return (
//     <div>
//         <h1>valu of a is {a} </h1>
//         <button onClick={ChangeA}>ChangeA</button>
//     </div>
//   )
// }

// export default App



// const App = () => {
//   const [num, setnum] = useState(0)
//   return (
//     <div>
//       <h3>number is {num}</h3>
//       <button onClick={()=>setnum(num+10)}>increment</button>
//       <button onClick={()=>setnum(num-10)}>decrement</button>
//     </div>
//   )
// }

// export default App


// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <h2 className=' bg-amber-600 text-2xl text-blue-100 '>hello guys</h2>
//       <h2>jai mata di</h2>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//     const [username,setUsername] = useState('')
//   const submitHoldler = (e) => {
//     e.preventDefault()
//     console.log(username)
//     setUsername('')
//   }
// return (
//   <div>
//     <form onSubmit={(e)=>{
//       submitHoldler(e)
      
//     }}>
//       <input value={username}
//       onChange={(e)=>{
//         setUsername(e.target.value)
//       }}
//        type="text"
//         className='px-4 py-3 m-5 bg-white rounded-2xl text-black'
//          placeholder='apan nam likh'
//           />
//       <button className='px-4 py-3  m-3font-semibold rounded-2xl'>Submit</button>
//     </form>
//   </div>
// )

// }
// export default App

//this is the main app component
// import React from 'react'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
// import Navbar2 from './components/Navbar2'

// const App = () => {
//   return (
//     <>
//     <Navbar />
//     <Footer />
    
     
//     </>
    
//   )
// }

// export default App

import React from 'react'
import Card from './components/Card'

const App = () => {
  const num=10
  return (
    <div>
      <Card a={num} />
    </div>
  )
}

export default App