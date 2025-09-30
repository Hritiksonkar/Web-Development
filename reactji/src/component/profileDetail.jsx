import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
 


const profileDetail = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <div>  {username} detail page</div>
      <div><button onClick={() => navigate(-1)}>Go Back To Home page</button></div>
    </>
  )
}

export default profileDetail