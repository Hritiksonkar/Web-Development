import React from 'react'
 import { Link } from 'react-router-dom'

const profile = () => {
  return (
    <div style={{ padding: "10px", gap: "10px", display: "flex" }}>
      <Link to={`/profile/${'username'}`}>profile</Link>
      <Link to={`/profile/${'username'}`}>profile2</Link>
      <Link to={`/profile/${'username'}`}>profile3</Link>
      <Link to={`/profile/${'username'}`}>profile4</Link>
    </div>
  )
}

export default profile