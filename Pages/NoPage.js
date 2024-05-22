import React from 'react'
import ErrorPage from '../assets/ErrorPage.gif'
import { NavLink } from 'react-router-dom'
const NoPage = () => {
  return (
    <div className='container p-5'>
        <NavLink to="/"> <img src={ErrorPage} alt="" className='w-50' /> </NavLink>
    </div>
  )
}

export default NoPage