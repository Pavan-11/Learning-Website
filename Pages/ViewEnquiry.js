import React, { useEffect, useState } from 'react'
import axios from 'axios';
const ViewEnquiry = () => {
  const [enquiries, setEnuiries] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4000/enquires`)
    .then((res) => setEnuiries(res.data))
    .catch((err) => console.log(err))
  })

  return (
    <div className='container-fluid p-5'>
      <table className='table table-bordered'>
        <thead className='table-dark'>
          <tr>
            <th>Username</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Course</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {enquiries.map((enquiry,index) => {
            return(
              <tr key={index}>
                <td>{enquiry.username}</td>
                <td>{enquiry.mobile}</td>
                <td>{enquiry.email}</td>
                <td>{enquiry.course}</td>
                <td>{enquiry.message}</td>
              </tr>
            )
          })}
        </tbody>
      </table>

    </div>
  )
}

export default ViewEnquiry