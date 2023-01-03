import React from 'react'
import "./Homepage.css"
import { Link } from "react-router-dom"



const Homepage = () => {
  return (
    <div className='homepage'>
     <h1>homepage</h1>
     <button className='button'>  <Link to="/login"> Logout</Link>          </button> 
    </div>
  )
}

export default Homepage
