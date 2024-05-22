import React, { useEffect, useState } from 'react';
import SendEnquiry from './SendEnquiry';
import axios from 'axios';
const Batches = () => {

    const [batchesData, setBatchesData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/batches`)
        .then((res) => setBatchesData(res.data))
        .catch((err) => console.log(err))
    })

  return (
    <div className='container p-5'>
        <table className='table table-bordered'>
            <thead className='table-dark'>
                <tr>
                    <th>Course</th>
                    <th>Date</th>
                    <th>Timming</th>
                    <th>Duration</th>
                    <th>Trainer</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {batchesData.map((batch,index) => {
                    return (
                        <tr key={index}>
                            <td>{batch.course}</td>
                            <td>{batch.date}</td>
                            <td>{batch.time}</td>
                            <td>{batch.duration}</td>
                            <td>{batch.trainer}</td>
                            <td><button className='btn btn-success' data-bs-target = "#enroll" data-bs-toggle="modal">Enroll Now</button></td>
                        </tr>
                    )
                })}
            </tbody>
            <div className='modal fade ' data-bs-backdrop ="static" data-bs-keyboard="false" id='enroll' >
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h3>Send Enquiry</h3>
                            <button className='btn-close' data-bs-dismiss="modal"></button>
                        </div>
                        <div className='modal-body'>
                            <SendEnquiry />
                        </div>
                    </div>
                </div>
            </div>
        </table>
    </div>
  )
}

export default Batches