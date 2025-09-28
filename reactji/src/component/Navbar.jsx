// import React from 'react'

// const navbar = ({searchtext, setsarchtext}) => {
//   return (
//     <div style={{padding: "10px", backgroundColor:'green'}}> 
//       <input placeholder='Search...' type="text" value={searchtext} onChange={(e) => setsarchtext(e.target.value)} />

//     </div>
//   )
// }

// export default navbar
import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <div style={{ padding: "10px", backgroundColor: 'green', display: 'flex', gap: '10px' }}>
      <>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      </>
    </div>
  )
}

export default navbar