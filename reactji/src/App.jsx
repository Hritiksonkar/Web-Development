// import React, { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Home from './component/Home'
// import ComponentA, { ComponentB, ComponentC } from './componentA.js/componentA'
// import Button from './componentA.js/Button'

// function App() {
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

// let a =  20;
// return (
//   <
//   // React Fragment is used to avoid adding extra nodes to the DOM
//     React.Fragment>
//     <div>
//       <Home data={a} name="hritik" />
//       <Home/>

//     </div>
//   </React.Fragment>
// )
// }
//  export default App

// useState
// function App() {
//   const [data, setData] = useState(0);
//   const [name, setName] = useState(0);
//   const handleOnClick = () => {
//     setData( prev=> prev + 1);
//     setName("yeh increment");
//   };

//   const handleDecrement = () => {
//     setData(prev => prev - 1);
//     setName("yeh decrement");
//   };

//   return (
//     <>
//       <div >
//     <h1>{data}</h1>
//     <h2>{name}</h2>
//     <div style={{display:'flex',gap:'10px'}}>
//       <button onClick={handleOnClick}>+</button>
//       <button onClick={handleDecrement}>-</button>
//     </div>
//     </div>
//     </>
//    )
//  }

//  export default App

// event handling in react
// import React from 'react'
// const App = () => {
//   const handleOnChange = (e) => {
//     console.log(e.target.value);
//   }
//   return (
//     <div>
//        <input type="text" placeholder='Enter text' onChange={handleOnChange} />
//     </div>
//   )
// }

// export default App

// import React from 'react'

// const App = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//   }

//   return (
//     <div>
//      <form onSubmit={handleSubmit}>
//       <input type="text" placeholder='Enter text' />
//       <button type="submit">Submit</button>
//      </form>
//     </div>
//   )
// }

// export default App

// else if in react

// import React from 'react'

// const App = () => {
//   var islogin = true;
//   if(islogin){
//     return(
//       <div>
//         <h1>Welcome to codinghunger</h1>
//       </div>
//     )
//   }else{
//     return(
//       <div>
//         <h1>Please login to continue</h1>
//       </div>
//     )
//   }
// }

// export default App

// import React from 'react'

// const App = () => {
//   var islogin = false;
//   const checklogin = () => {
//     if (islogin) {
//       return <h1>Welcome to codinghunger</h1>
//     } else {
//       return <h1>Please login to continue</h1>
//     }
//   }
//   return (
//     <>
//       {checklogin()}
//     </>
//   )
// }

// export default App

// ternary operator
// import React from 'react'

// const App = () => {
//   var islogin = true;
//   return (
//     <div>
//       {islogin ? <h1>Welcome to codinghunger</h1> : <h1>Please login to continue</h1>}
//     </div>
//   )
// }

// export default App

// list and keys in react
// import React from 'react'

// const App = () => {
//   var listdata=[
//     {name : " apple", quantity : 20},
//     {name : " banana", quantity : 10},
//     {name : " mango", quantity : 5}
//   ]

//   return (
//     <div>
//       {listdata.map((item, index) => (
//         <h1 key={index}>{item.name} - {item.quantity}</h1>
//       ))}
//     </div>
//   )
// }

// export default App
//  import React from 'react'

//  const App = () => {
//   const [name, setName] = React.useState("");
//   const [email, setEmail] = React.useState("");
//   const handleOnChange = (e) => {
//     setName(e.target.value);
//   };
//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };
//    return (
//      <>
//        {name}
//        <br />
//         {email}
//        <form >
//         <label htmlFor='name'>Name :</label>
//        <input value={name} onChange={handleOnChange}  placeholder='enter your name' id='name'/>

//        <br />
//        <label htmlFor='email'>Email :</label>
//        <input value={email} onChange={handleEmailChange}  placeholder='enter your email' id='email'/>

//        </form>
//      </>
//    )
//  }

import React from 'react'

const App = () => {
  const [data, setData] = React.useState({
    name: "",
    email: "",
  });

  const handleOnChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {data.name}
      <br />
      {data.email}
      <form>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          onChange={handleOnChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleOnChange}
        />
      </form>
    </>
  );
}

export default App;

