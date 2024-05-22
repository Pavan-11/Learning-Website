import React from 'react'
import SendEnquiry from './SendEnquiry'

const Contact = () => {
  return (
    <div className='container p-5'>
        <h1>Contact</h1>
        <div className='row'>
          <div className='col-12 col-lg-6'>
            <SendEnquiry />
          </div>
        </div>
    </div>
  )
}

export default Contact