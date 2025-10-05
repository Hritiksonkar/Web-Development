// import React from 'react'

// const navbar = ({searchtext, setsarchtext}) => {
//   return (
//     <div style={{padding: "10px", backgroundColor:'green'}}> 
//       <input placeholder='Search...' type="text" value={searchtext} onChange={(e) => setsarchtext(e.target.value)} />

//     </div>
//   )
// }

// export default navbar
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { SearchContext, ThemeContext } from '../App'

const navbar = () => {
  const { searchtext, setsarchtext } = useContext(SearchContext);
  const { dark, toggleDark } = useContext(ThemeContext);

  return (
    <div className={`navbar${dark ? ' dark' : ''}`}>
      <input
        placeholder='Search...'
        type="text"
        value={searchtext}
        onChange={(e) => setsarchtext(e.target.value)}
      />
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <button onClick={toggleDark}>
        {dark ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  )
}

export default navbar