import React from 'react'
import { Link } from 'react-router-dom'
import './Error.css'

const Error = () => {
  return (
    <div className='error-container'>
        <span className='error-heading'>500 Internal Server Error</span>
        <span className='error-description'>Some Error In Finding The Information Try After Some Time</span>
        <Link className='error-link' to="/">Go To Home Page</Link>
    </div>
  )
}

export default Error