import React from 'react'
import dashImg from '../assets/3515462.jpg';

const DashboardHome = () => {
  return (
    <div>
        <h1 className='text-primary'>Welcome to Dashboard</h1>
        <img src={dashImg} alt="" className='w-25' />
    </div>
  )
}

export default DashboardHome