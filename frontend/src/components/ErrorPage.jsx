import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>There is some error plese click here <Link to={'/'}>Home</Link></div>
  )
}

export default ErrorPage